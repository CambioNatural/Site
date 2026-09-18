import {z} from 'zod';
export type RichNode={type:string;text?:string;attrs?:{level?:number;start?:number;href?:string};marks?:RichNode[];content?:RichNode[]};
export function safeBlogUrl(value:string){try{const u=new URL(value);return ['https:','http:','mailto:'].includes(u.protocol)&&!u.username&&!u.password&&!/[\u0000-\u0020]/.test(value);}catch{return false;}}
const inline=['text','hardBreak'];
const blocks=['paragraph','heading','blockquote','bulletList','orderedList','horizontalRule'];
function validDocument(input:unknown):input is RichNode{
 const stack:{node:unknown;depth:number;parent:string}[]=[{node:input,depth:0,parent:''}];let count=0;
 while(stack.length){const {node,depth,parent}=stack.pop()!;if(++count>5000||depth>12||!node||typeof node!=='object'||Array.isArray(node))return false;
  const n=node as RichNode;
  if(Object.keys(n).some(k=>!['type','text','attrs','marks','content'].includes(k)))return false;
  const allowed=parent===''?['doc']:['paragraph','heading'].includes(parent)?inline:['bulletList','orderedList'].includes(parent)?['listItem']:blocks;
  if(!allowed.includes(n.type))return false;
  if(n.type==='text'){if(typeof n.text!=='string'||!n.text.length||n.content||n.attrs)return false;}else if(n.text!==undefined||n.marks!==undefined)return false;
  if(n.attrs){if(typeof n.attrs!=='object'||Array.isArray(n.attrs))return false;const keys=Object.keys(n.attrs);if(n.type==='heading'){if(keys.some(k=>k!=='level')||![2,3,4].includes(n.attrs.level!))return false;}else if(n.type==='orderedList'){if(keys.some(k=>k!=='start')||!Number.isInteger(n.attrs.start)||n.attrs.start!<1||n.attrs.start!>10000)return false;}else return false;}
  if(n.type==='heading'&&!n.attrs)return false;
  if(n.marks){if(!Array.isArray(n.marks)||n.marks.length>5)return false;for(const mark of n.marks){if(!mark||typeof mark!=='object'||Object.keys(mark).some(k=>!['type','attrs'].includes(k)))return false;if(mark.type==='link'){if(!mark.attrs||Object.keys(mark.attrs).some(k=>k!=='href')||typeof mark.attrs.href!=='string'||mark.attrs.href.length>2048||!safeBlogUrl(mark.attrs.href))return false;}else if(!['bold','italic','underline','strike'].includes(mark.type)||mark.attrs)return false;}}
  if(n.content!==undefined){if(!Array.isArray(n.content)||inline.includes(n.type)||n.type==='horizontalRule')return false;for(const child of n.content)stack.push({node:child,depth:depth+1,parent:n.type});}
  if(['doc','blockquote','bulletList','orderedList','listItem'].includes(n.type)&&!n.content?.length)return false;
  if(n.type==='listItem'&&n.content?.[0]?.type!=='paragraph')return false;
 }
 return true;
}
export const richTextSchema=z.custom<RichNode>(validDocument,'El formato del contenido no es válido.');
// Retain only the supported formatting; editor-generated HTML is never stored or executed.
export function normalizeRichText(node:RichNode):RichNode{
 const result:RichNode={type:node.type};if(node.text!==undefined)result.text=node.text;
 if(node.type==='heading')result.attrs={level:node.attrs?.level};
 if(node.type==='orderedList')result.attrs={start:node.attrs?.start??1};
 if(node.type==='link')result.attrs={href:node.attrs?.href};
 if(node.marks)result.marks=node.marks.map(normalizeRichText);
 if(node.content)result.content=node.content.map(normalizeRichText);
 return result;
}
export function plainToRichText(body:string):RichNode{return {type:'doc',content:body.split(/\r?\n/).map(line=>({type:'paragraph',...(line?{content:[{type:'text',text:line}]}:{})}))};}
export function richTextToPlain(node:RichNode):string{
 function text(n:RichNode):string{if(n.type==='text')return n.text??'';if(n.type==='hardBreak')return '\n';return(n.content??[]).map(text).join(['paragraph','heading'].includes(n.type)?'':'\n');}
 return text(node).trim();
}

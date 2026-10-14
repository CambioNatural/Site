import type {EntryContent,BlogContent} from './schema';
import type {RichNode} from './rich-text';
export function inlineImages(content:EntryContent){const images:RichNode[]=[];function visit(node:RichNode){if(node.type==='image')images.push(node);node.content?.forEach(visit);}const rich=(content as BlogContent).richText;if(rich)visit(rich);return images;}
export async function prepareEntryMedia(content:EntryContent,publish:(source:string)=>Promise<string>){const next=structuredClone(content);const resolved=new Map<string,string>();
 async function resolve(source:string){if(!source.startsWith('draft:'))return source;let url=resolved.get(source);if(!url){url=await publish(source);resolved.set(source,url);}return url;}
 next.image=await resolve(next.image);
 for(const node of inlineImages(next))node.attrs!.src=await resolve(node.attrs!.src!);
 return next;}

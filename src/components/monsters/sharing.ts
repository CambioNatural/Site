export const CAMPAIGN_URL = 'https://www.cambionatur.al/we-are-all-monsters';
export function shareCaption(intention:string,archetype:string){
 return `Meet my monster: ${archetype}.\nI want to start by ${intention.trim()}\n\n#WeAreAllMonsters`;
}
export async function cardPng(svg:string):Promise<Blob>{
 const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'}));
 try{
  const image=new Image();image.src=url;await image.decode();
  const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1350;
  const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas unavailable');
  ctx.drawImage(image,0,0);
  return await new Promise<Blob>((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Export unavailable')),'image/png'));
 }finally{URL.revokeObjectURL(url);}
}

'use client';
import {useEffect,useId,useRef,useState} from 'react';
import {CAMPAIGN_URL,cardPng,shareCaption} from './sharing';
import s from './monsters.module.css';
export default function ShareMonster({svg,intention,archetype,onDownload}:{svg:string;intention:string;archetype:string;onDownload:()=>void}){
 const id=useId();const captionRef=useRef<HTMLTextAreaElement>(null);
 const [prepared,setPrepared]=useState<{svg:string;file:File|null}|null>(null);
 const [fallback,setFallback]=useState(false);const [sharing,setSharing]=useState(false);const [notice,setNotice]=useState('');
 const text=shareCaption(intention,archetype);const caption=`${text}\n${CAMPAIGN_URL}`;
 // Prepare before the click so navigator.share retains transient user activation.
 // Discard stale results when the monster or intention changes.
 useEffect(()=>{let active=true;const timer=setTimeout(()=>{
  cardPng(svg).then(blob=>{if(active)setPrepared({svg,file:new File([blob],'we-are-all-monsters.png',{type:'image/png'})});}).catch(()=>{if(active)setPrepared({svg,file:null});});
 },180);return()=>{active=false;clearTimeout(timer);};},[svg]);
 async function share(){
  setNotice('');
  const file=prepared?.svg===svg?prepared.file:null;
  const data:ShareData={title:'We Are All Monsters',text,url:CAMPAIGN_URL,...(file?{files:[file]}:{})};
  try{
   if(!file||!navigator.share||!navigator.canShare?.(data)){setFallback(true);return;}
   setSharing(true);
   await navigator.share(data);
   setNotice('Your card and caption were handed to your device’s sharing options.');
  }catch(error){
   if(error instanceof Error&&error.name==='AbortError'){setNotice('Sharing cancelled. Your monster is still here.');}
   else{setFallback(true);setNotice('Use the options below to save your card and copy its caption.');}
  }finally{setSharing(false);}
 }
 async function copy(){
  try{await navigator.clipboard.writeText(caption);setNotice('Caption, hashtag and campaign link copied.');}
  catch{captionRef.current?.focus();captionRef.current?.select();setNotice('Select and copy the caption below, then paste it with your card.');}
 }
 return <section className={s.shareSection} aria-label="Share your monster">
  <button type="button" className={s.darkButton} disabled={sharing||prepared?.svg!==svg} onClick={share}>{sharing?'Opening sharing options…':'Share my monster ↗'}</button>
  <p className={s.micro}>Share your card, your words and #WeAreAllMonsters with a link to the campaign.</p>
  {fallback&&<div className={s.shareFallback}>
   <h4>Take your monster with you</h4><p>Save your card, then copy and paste the caption into your post or message.</p>
   <label className={s.selectLabel} htmlFor={`${id}-caption`}>Caption & campaign link</label>
   <textarea id={`${id}-caption`} ref={captionRef} readOnly value={caption} rows={6}/>
   <div className={s.downloads}><button type="button" className={s.outlineButton} onClick={copy}>Copy caption & link</button><button type="button" className={s.outlineButton} onClick={onDownload}>Save image</button></div>
  </div>}
  <p role="status" className={s.status}>{notice}</p>
 </section>;
}

'use client';
import {useId,useState} from 'react';
import {archetypes} from './campaign';
import {palette,presets,crowns,ears,eyeLayouts,pupils,patterns,monsterSvg,cardSvg,type Monster} from './catalog';
import s from './monsters.module.css';
import ShareMonster from './ShareMonster';
import {cardPng} from './sharing';
const label=(v:string)=>v.replaceAll('-',' ');
function save(blob:Blob,name:string){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);}
export default function MonsterBuilder(){
 const id=useId();const [monster,setMonster]=useState<Monster>(presets[0]);const [selected,setSelected]=useState<number|null>(0);const [archetype,setArchetype]=useState(0);const [intention,setIntention]=useState('');const [status,setStatus]=useState('');const [busy,setBusy]=useState(false);
 const effectiveIntention=intention.trim()||archetypes[archetype].prompt;
 const svg=cardSvg(monster,effectiveIntention,archetypes[archetype].name);
 function update<K extends keyof Monster>(key:K,value:Monster[K]){setMonster(m=>({...m,[key]:value,...(key==='accent'?{earColor:undefined}:{})}));setSelected(null);setStatus('');}
 function choose(index:number){setMonster({...presets[index]});setSelected(index);setStatus('');}
 async function download(format:'svg'|'png'){
  setBusy(true);setStatus('');
  try{const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});
   if(format==='svg')save(blob,'we-are-all-monsters.svg');
   else save(await cardPng(svg),'we-are-all-monsters.png');
   setStatus(`${format.toUpperCase()} ready. Your download has started.`);
  }catch{setStatus('The download could not be created. Please try SVG or try again.');}finally{setBusy(false);}
 }
 const control=(key:'crown'|'ears'|'eyes'|'pupils'|'pattern',title:string,options:readonly string[])=><fieldset className={s.field}><legend>{title}</legend><div className={s.options}>{options.map(option=><button type="button" key={option} aria-pressed={monster[key]===option} onClick={()=>update(key,option as Monster[typeof key])}>{label(option)}</button>)}</div></fieldset>;
 const colorControl=(key:'color'|'accent'|'feature',title:string)=><fieldset className={s.field}><legend>{title}</legend><div className={s.swatches}>{palette.map(color=><button key={color.name} type="button" title={color.name} aria-label={`${title}: ${color.name}`} aria-pressed={monster[key]===color.value} style={{background:color.value}} onClick={()=>update(key,color.value)}>{monster[key]===color.value?<span aria-hidden="true">✓</span>:null}</button>)}</div></fieldset>;
 return <div className={s.builder}>
  <div className={s.previewColumn}><div className={s.preview}>
   <div className={s.previewTop}><span>ONE OF US.</span><span>✳</span></div>
   <div className={s.liveMonster} data-testid="monster-preview" dangerouslySetInnerHTML={{__html:monsterSvg(monster,`${id}-live`)}}/>
   <p className={s.previewName}>{archetypes[archetype].name}</p><p className={s.previewIntention}>I want to start by…<br/>{effectiveIntention}</p><span className={s.tag}>#WeAreAllMonsters</span>
  </div><div className={s.previewActions}><button type="button" onClick={()=>{choose(Math.floor(Math.random()*presets.length));}}>Surprise me ↗</button><button type="button" onClick={()=>{choose(0);setArchetype(0);setIntention('');}}>Reset</button></div><p className={s.micro}>Make it yours. Appearance is a creative choice; it says nothing about someone’s character.</p></div>
  <div className={s.controls}>
   <fieldset className={s.field}><legend><span className={s.step}>01</span> Pick a starting point</legend><div className={s.presets}>{presets.map((m,i)=><button key={i} type="button" aria-label={`Start with monster ${i+1}`} aria-pressed={selected===i} onClick={()=>choose(i)}><span dangerouslySetInnerHTML={{__html:monsterSvg(m,`${id}-thumb-${i}`)}}/><small>{String(i+1).padStart(2,'0')}</small></button>)}</div></fieldset>
   <div className={s.controlHeading}><span className={s.step}>02</span><h3>Mix your features</h3></div>
   {colorControl('color','Body colour')}{colorControl('accent','Pattern & fins colour')}{colorControl('feature','Crown & ears colour')}
   {control('crown','Crown',crowns)}{control('ears','Ears',ears)}{control('eyes','Eyes',eyeLayouts)}{control('pupils','Expression',pupils)}{control('pattern','Pattern',patterns)}
   <div className={s.controlHeading}><span className={s.step}>03</span><h3>Choose a reflection</h3></div>
   <label className={s.selectLabel} htmlFor={`${id}-archetype`}>A theme to explore</label><select id={`${id}-archetype`} value={archetype} onChange={e=>setArchetype(Number(e.target.value))}>{archetypes.map((a,i)=><option key={a.name} value={i}>{a.name}</option>)}</select>
   <div className={s.reflection}><p><strong>Everyday practice</strong>{archetypes[archetype].practice}</p><p><strong>The wider system</strong>{archetypes[archetype].system}</p><p><strong>Collective possibility</strong>{archetypes[archetype].action}</p></div>
   <label className={s.selectLabel} htmlFor={`${id}-intention`}>I want to start by…</label><textarea id={`${id}-intention`} rows={3} maxLength={120} value={intention} placeholder={archetypes[archetype].prompt} onChange={e=>setIntention(e.target.value)}/><p className={s.micro}>{intention.length}/120 · Your words stay in this tab until you download or share.</p>
   <ShareMonster svg={svg} intention={effectiveIntention} archetype={archetypes[archetype].name} onDownload={()=>download('png')}/>
   <div className={s.downloads}><button type="button" className={s.darkButton} disabled={busy} onClick={()=>download('png')}>{busy?'Preparing…':'Download my card ↗'}</button><button type="button" className={s.outlineButton} disabled={busy} onClick={()=>download('svg')}>Editable SVG ↓</button></div><p role="status" className={s.status}>{status}</p>
  </div>
 </div>;
}

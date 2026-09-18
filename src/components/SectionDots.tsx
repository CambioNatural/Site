'use client';
import {useEffect,useState} from 'react';
import styles from './section-dots.module.css';
type Section={element:HTMLElement;label:string};
export default function SectionDots(){
 const [sections,setSections]=useState<Section[]>([]),[active,setActive]=useState(0);
 useEffect(()=>{
  let frame=0;let targets:Section[]=[];
  const refresh=()=>{targets=Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-section]')).filter(el=>el.getClientRects().length>0).map(element=>({element,label:element.dataset.scrollSection!}));setSections(targets);update();};
  const update=()=>{const threshold=Math.min(window.innerHeight*.28,220);let index=0;for(let i=0;i<targets.length;i++)if(targets[i].element.getBoundingClientRect().top<=threshold)index=i;if(window.scrollY>0&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-4)index=targets.length-1;setActive(Math.max(0,index));};
  const schedule=()=>{if(frame)return;frame=requestAnimationFrame(()=>{frame=0;update();});};
  refresh();window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',refresh);
  const observer=new ResizeObserver(schedule);observer.observe(document.body);
  void document.fonts.ready.then(()=>{if(targets.length)schedule();});
  return()=>{targets=[];window.removeEventListener('scroll',schedule);window.removeEventListener('resize',refresh);observer.disconnect();cancelAnimationFrame(frame);};
 },[]);
 if(sections.length<2)return null;
 return <nav className={styles.nav} aria-label="Page sections"><ol>{sections.map(({element,label},index)=><li key={`${label}-${index}`}><button type="button" aria-label={`Go to ${label}`} aria-current={active===index?'location':undefined} onClick={()=>{const top=Math.max(0,window.scrollY+element.getBoundingClientRect().top-24);window.scrollTo({top,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}}><span className={styles.label}>{label}</span><span className={styles.dot} aria-hidden="true"/></button></li>)}</ol></nav>;
}

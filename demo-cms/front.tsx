import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import HomeLanding from '../src/components/home/HomeLanding';
import Tools from '../src/app/tools/page';
import Gatherings from '../src/app/gatherings/page';
import MediaClub from '../src/app/media-club/page';
import WeAre from '../src/app/we-are/page';
import PopupDisplay from '../src/components/popups/PopupDisplay';
import {initialDocument} from '../src/lib/cms/schema';
import './front.css';
const preview=new URLSearchParams(location.search).has('preview');
const home=(()=>{try{return JSON.parse(localStorage.getItem(preview?'cn-demo-home':'cn-demo-home-live')??'null')?.document??initialDocument;}catch{return initialDocument;}})();
const nativeFetch=window.fetch.bind(window);
window.fetch=async(input,init)=>{
 if(typeof input==='string'&&input.startsWith('/api/content/popups')){
  const path=new URL(input,location.origin).searchParams.get('path');let entries=[];try{entries=JSON.parse(localStorage.getItem('cn-demo-popups')??'[]');}catch{}
  const items=preview?[]:entries.filter((e: {publishedVersion:number|null;publishedContent?:{paths:string[];startsAt:string;endsAt:string}})=>{const c=e.publishedContent;return !!e.publishedVersion&&!!c&&c.paths.includes(path??'/')&&(!c.startsAt||Date.parse(c.startsAt)<=Date.now())&&(!c.endsAt||Date.parse(c.endsAt)>Date.now());}).map((e: {id:string;publishedVersion:number;publishedContent:unknown})=>({id:e.id,version:e.publishedVersion,content:e.publishedContent}));
  return Response.json({items});
 }
 return nativeFetch(input,init);
};
function App(){const [path,setPath]=useState(location.hash.slice(1)||'/');useEffect(()=>{const change=()=>{setPath(location.hash.slice(1)||'/');window.scrollTo(0,0);};window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);
 const page=path==='/tools'?<Tools/>:path==='/gatherings'?<Gatherings/>:path==='/media-club'?<MediaClub/>:path==='/we-are'?<WeAre/>:<HomeLanding content={home.home} navigation={home.navigation} preview/>;
 return <>{page}<PopupDisplay/><footer className="demo-switch"><a href={preview?'./index.html#home':'./index.html#blog'}>{preview?'Volver al editor':'Abrir CMS'}</a></footer></>;}
createRoot(document.getElementById('root')!).render(<App/>);

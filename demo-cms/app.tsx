/* Demo adapters accept the distinct editor payloads without changing production types. */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import EntryManager from '../src/components/admin/EntryManager';
import Editor from '../src/components/admin/Editor';
import {initialDocument} from '../src/lib/cms/schema';
import '../src/app/admin/admin.css';
import './demo.css';
const home=JSON.parse(JSON.stringify(initialDocument).replaceAll('/images/','./images/'));
const base={id:'sample',version:1,publishedVersion:null,updated_at:new Date().toISOString()};
const samples:any={blog:[{...base,kind:'blog',slug:'entrada-de-ejemplo',content:{slug:'entrada-de-ejemplo',title:'Una idea para empezar una conversación',summary:'Entrada ficticia para mostrar la edición del blog.',author:'Equipo de ejemplo',body:'Este es un contenido de demostración.\n\nPuedes cambiar el título, escribir nuevos párrafos y probar la vista previa. Los cambios se guardan en este navegador.',image:'./images/hero-photo-subtract.png',alt:'Puente reflejado en el agua'}}],popups:[{...base,kind:'popups',slug:'aviso-de-ejemplo',content:{slug:'aviso-de-ejemplo',title:'Sigamos la conversación',body:'Este aviso de ejemplo muestra cómo presentar una campaña en Cambio Natural.',image:'./images/newsletter-metacrisis.png',alt:'Ilustración de Cambio Natural',buttonLabel:'Conocer más',url:'https://cambionatur.al',startsAt:'',endsAt:'',delay:5,frequency:'session',paths:['/']}}]};
function get(key:string,otherwise:any){try{return JSON.parse(localStorage.getItem(key)??'null')??otherwise;}catch{return otherwise;}}
function App(){const [route,setRoute]=useState(location.hash.slice(1)||'blog');useEffect(()=>{const update=()=>setRoute(location.hash.slice(1)||'blog');window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);
useEffect(()=>{for(const kind of ['blog','popups'])if(!localStorage.getItem(`cn-demo-${kind}`))localStorage.setItem(`cn-demo-${kind}`,JSON.stringify(samples[kind]));},[]);
const saved=get('cn-demo-home',{document:home,version:1});return <>{route==='home'?<Editor key={route} document={saved.document} version={saved.version} published={{version:Number(localStorage.getItem('cn-demo-home-published')??1),published_at:new Date().toISOString()}} revisions={[]} email="Modo demostración"/>:route==='preview'?<main className="cms-shell"><h1 style={{paddingTop:32}}>Contenido del borrador de ejemplo</h1><p>Vista de contenido. El sitio conectado ofrece la previsualización completa de la portada.</p><a href="#home">Volver al editor</a><article className="cms-edit-panel" style={{marginTop:24}}><h2>{saved.document.home.hero.intro.text} {saved.document.home.hero.heading}</h2><p>{saved.document.home.about.emphasis} {saved.document.home.about.body}</p><h2>{saved.document.home.article.title}</h2><p>{saved.document.home.article.excerpt.text}</p></article></main>:<EntryManager key={route} kind={route==='popups'?'popups':'blog'} initialEntries={get(`cn-demo-${route==='popups'?'popups':'blog'}`,samples[route==='popups'?'popups':'blog'])}/>}<footer className="demo-switch"><a href="./front.html#/">Ver sitio público</a></footer></>;}
createRoot(document.getElementById('root')!).render(<App/>);

'use client';
import {useSyncExternalStore} from 'react';
import {translateAdmin,type AdminLanguage} from '@/lib/cms/admin-translations';
const key='cn-admin-language';
const subscribe=(notify:()=>void)=>{window.addEventListener('storage',notify);window.addEventListener('cn-admin-language',notify);return()=>{window.removeEventListener('storage',notify);window.removeEventListener('cn-admin-language',notify);};};
const snapshot=():AdminLanguage=>{try{return localStorage.getItem(key)==='en'?'en':'es';}catch{return 'es';}};
export function useAdminLanguage(){const language=useSyncExternalStore(subscribe,snapshot,()=> 'es' as const);return {language,locale:language==='en'?'en-US':'es-MX',t:(text:string)=>translateAdmin(text,language)};}
export function LanguageToggle(){const {language}=useAdminLanguage();return <div className="cms-language" role="group" aria-label="Idioma / Language">{(['es','en'] as const).map(lang=><button key={lang} type="button" lang={lang} aria-pressed={language===lang} onClick={()=>{try{localStorage.setItem(key,lang);}catch{return;}window.dispatchEvent(new Event('cn-admin-language'));}}>{lang==='es'?'Español':'English'}</button>)}</div>;}
export function AdminText({text}:{text:string}){const {t}=useAdminLanguage();return <>{t(text)}</>;}
export default function AdminLanguage({children}:{children:React.ReactNode}){const {language}=useAdminLanguage();return <div lang={language}>{children}</div>;}

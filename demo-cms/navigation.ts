import {useEffect,useState} from 'react';
export function usePathname(){const [path,setPath]=useState(location.hash.slice(1)||'/');useEffect(()=>{const onChange=()=>setPath(location.hash.slice(1)||'/');window.addEventListener('hashchange',onChange);return()=>window.removeEventListener('hashchange',onChange);},[]);return path;}
export function useRouter(){return {push:(href:string)=>{if(href.includes('preview'))location.href='./front.html?preview=1#/';else location.hash='home';}};}

import {build} from 'esbuild';
import {mkdir,writeFile,readFile,cp} from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';
const root=process.cwd(),out=path.join(root,'demo-cms/dist');
await mkdir(out,{recursive:true});
await build({entryPoints:['demo-cms/app.tsx','demo-cms/front.tsx'],bundle:true,minify:true,outdir:out,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"','process.env.NEXT_PUBLIC_SUPABASE_URL':'""'},plugins:[{name:'demo-adapters',setup(b){
 const adapters={'next/link':'link.tsx','next/navigation':'navigation.ts','next/image':'image.tsx','@/components/Navbar':'navbar.tsx','@/components/SubstackEmbed':'subscribe.tsx'};
 b.onResolve({filter:/^(next\/|@\/components\/(Navbar|SubstackEmbed)$)/},args=>adapters[args.path]?{path:path.join(root,'demo-cms',adapters[args.path])}:undefined);
 b.onResolve({filter:/^@\/app\/admin\/(actions|manage\/\[kind\]\/actions)$/},()=>({path:path.join(root,'demo-cms/actions.ts')}));
 b.onLoad({filter:/\/src\/.*\.tsx?$/},async args=>{let contents=(await readFile(args.path,'utf8')).replaceAll('"/images/','"./images/').replaceAll("'/images/","'./images/");
 if(args.path.endsWith('/lib/cms/schema.ts'))contents=contents.replace("export const imageSourceSchema = z.string().max(2048).refine(value => {","export const imageSourceSchema = z.string().max(8000000).refine(value => { if (/^data:image\\/(png|jpeg|webp);base64,/.test(value) || value.startsWith('./images/')) return true;");
 return {contents,loader:args.path.endsWith('tsx')?'tsx':'ts'};
 });
}}]});
const css=await postcss([tailwind({base:root})]).process(await readFile('src/app/globals.css','utf8'),{from:path.join(root,'src/app/globals.css')});
await writeFile(path.join(out,'front-theme.css'),css.css);
await cp('public/images',path.join(out,'images'),{recursive:true});
await writeFile(path.join(out,'.nojekyll'),'');
function html(front=false){return `<!doctype html><html lang="${front?'en':'es'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Cambio Natural · ${front?'Demo del sitio':'Demo del CMS'}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">${front?'<link rel="stylesheet" href="./front-theme.css">':''}<link rel="stylesheet" href="./${front?'front':'app'}.css"></head><body><div id="root"></div><script src="./${front?'front':'app'}.js"></script></body></html>`;}
await writeFile(path.join(out,'index.html'),html());await writeFile(path.join(out,'front.html'),html(true));
console.log(out);

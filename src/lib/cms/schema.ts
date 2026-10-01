import { z } from 'zod';
import {coreElements,blogCopy} from '@/content/site-defaults';
import { homeContent } from '@/content/home';
import {pageDefaults,pageKeys} from './page-content';
import { navigationContent } from '@/content/navigation';

const text = z.string().trim().min(1, 'Este campo es obligatorio.').max(6000, 'Usa hasta 6000 caracteres.');
const title = z.string().trim().min(1).max(250);
const route = /^\/(?:tools|gatherings|media-club|we-are|blog(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)?)?$/;
export const linkSchema = z.string().max(2048).refine(value => {
  if (route.test(value)) return true;
  try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password; } catch { return false; }
}, 'Usa una dirección https válida o una página existente del sitio.');
export const imageSourceSchema = z.string().max(2048).refine(value => {
  if (/^\/images\/[a-zA-Z0-9._-]+\.(png|jpg|jpeg|webp|svg)$/.test(value)) return true;
  if (/^draft:[a-f0-9-]+\.(png|jpg|webp)$/.test(value)) return true;
  try {
    const u = new URL(value);
    return u.origin === process.env.NEXT_PUBLIC_SUPABASE_URL && /^\/storage\/v1\/object\/public\/cms-public\/[a-f0-9-]+\.(png|jpg|webp)$/.test(u.pathname) && !u.search && !u.hash;
  } catch { return false; }
}, 'Elige una imagen del sitio o sube un archivo.');
const image = z.object({ src: imageSourceSchema, alt: z.string().max(300) }).strict();
const copy = z.object({ text, mobileText: z.string().max(6000).optional() }).strict();
const initiative = (id: string) => z.object({ id: z.literal(id), title, description: copy, image }).strict();
const navLink = z.object({ label: title, href: linkSchema }).strict();
const pageShape = Object.fromEntries(pageKeys.map(key=>{
 const defaults=pageDefaults[key];
 const texts=z.object(Object.fromEntries(Object.keys(defaults.texts).map(k=>[k,z.string().max(6000)]))).strict();
 const images=z.object(Object.fromEntries(Object.keys(defaults.images).map(k=>[k,image]))).strict();
 const links=z.object(Object.fromEntries(Object.keys(defaults.links).map(k=>[k,linkSchema]))).strict();
 return [key,z.object({seo:z.object({title,description:text}).strict(),texts,images,links}).strict().default(defaults)];
})) as unknown as Record<typeof pageKeys[number],z.ZodType<import('./page-content').CmsPageContent>>;
export const documentSchema = z.object({
  blog:z.object(Object.fromEntries(Object.entries(blogCopy).map(([key,value])=>[key,(key==='mediaHref'?linkSchema:z.string().min(1).max(1000)).default(value)])) as Record<keyof typeof blogCopy,z.ZodDefault<z.ZodString>>).strict().prefault({}),
  pages:z.object(pageShape).strict().prefault(pageDefaults as Record<typeof pageKeys[number],import('./page-content').CmsPageContent>),
  settings:z.object({newsletterUrl:z.url().refine(value=>{const u=new URL(value);return u.protocol==='https:'&&u.hostname.endsWith('.substack.com')&&u.pathname==='/embed'&&!u.username&&!u.password&&!u.search&&!u.hash;},'Usa la URL /embed de tu publicación de Substack.').default('https://cambionatural.substack.com/embed')}).strict().prefault({}),
  home: z.object({
    seo:z.object({title,description:text}).strict().default({title:'Cambio Natural — Bridge Builders for Planetary Health',description:'Cambio Natural is a collective supporting bridge builders and caregivers with technology, gatherings and community, guided by reciprocity, mutual care and regeneration.'}),
    coreHeading:title.default('Our core elements'),
    coreElements:z.array(z.object({before:z.string().max(1000),emphasis:title,after:z.string().max(1000),image}).strict()).length(4).default(coreElements),
    hero: z.object({ intro: copy, heading: title, wordmark: image,leaf:image.default({src:'/images/nature-svg-white.svg',alt:''}),yellow:image.default({src:'/images/yellow-curve.png',alt:''}),accent:image.default({src:'/images/cn-0104-2.png',alt:''}) }).strict(),
    about: z.object({ emphasis: text, body: text, image }).strict(),
    initiativesHeading: title,
    initiatives: z.tuple([initiative('cross-sector'), initiative('doughnut'), initiative('media-club')]),
    article: z.object({ category: title, title, excerpt: copy, image, link: z.object({ label: title, href: linkSchema }).strict() }).strict(),
    newsletter: z.object({ intro: copy, title, description: text, image }).strict(),
    footer: title,
  }).strict(),
  navigation: z.object({
    brand:z.tuple([title,title]).default(['cambio','natural']),
    blogLabel:title.default('Blog'),
    links: z.tuple([navLink, navLink, navLink, navLink]),
    booking: z.object({ label: title, href: linkSchema }).strict(),
  }).strict(),
}).strict();
export type CmsDocument = z.infer<typeof documentSchema>;
export const initialDocument: CmsDocument = documentSchema.parse({home:homeContent,navigation:navigationContent});
export function parseDocument(value: unknown): CmsDocument {
  if ((JSON.stringify(value)?.length ?? 0) > 150000) throw new Error('El contenido excede el tamaño permitido.');
  const result = documentSchema.safeParse(value);
  if (!result.success) throw new Error(`Revisa ${result.error.issues[0].path.join(' → ')}: ${result.error.issues[0].message}`);
  return result.data;
}

import { z } from 'zod';
import { homeContent } from '@/content/home';
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
export const documentSchema = z.object({
  home: z.object({
    hero: z.object({ intro: copy, heading: title, wordmark: image }).strict(),
    about: z.object({ emphasis: text, body: text, image }).strict(),
    initiativesHeading: title,
    initiatives: z.tuple([initiative('cross-sector'), initiative('doughnut'), initiative('media-club')]),
    article: z.object({ category: title, title, excerpt: copy, image, link: z.object({ label: title, href: linkSchema }).strict() }).strict(),
    newsletter: z.object({ intro: copy, title, description: text, image }).strict(),
    footer: title,
  }).strict(),
  navigation: z.object({
    links: z.tuple([navLink, navLink, navLink, navLink]),
    booking: z.object({ label: title, href: linkSchema }).strict(),
  }).strict(),
}).strict();
export type CmsDocument = z.infer<typeof documentSchema>;
export const initialDocument: CmsDocument = { home: homeContent, navigation: { ...navigationContent, links: navigationContent.links as CmsDocument['navigation']['links'] } };
export function parseDocument(value: unknown): CmsDocument {
  if ((JSON.stringify(value)?.length ?? 0) > 150000) throw new Error('El contenido excede el tamaño permitido.');
  const result = documentSchema.safeParse(value);
  if (!result.success) throw new Error(`Revisa ${result.error.issues[0].path.join(' → ')}: ${result.error.issues[0].message}`);
  return result.data;
}

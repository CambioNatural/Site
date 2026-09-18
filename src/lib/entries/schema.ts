import { z } from 'zod';
import {richTextSchema,richTextToPlain} from './rich-text';
import { imageSourceSchema, linkSchema } from '@/lib/cms/schema';
export const kindSchema = z.enum(['blog', 'popups']);
export type EntryKind = z.infer<typeof kindSchema>;
export const publicPaths = ['/', '/tools', '/gatherings', '/media-club', '/we-are'] as const;
const base = { slug: z.string().trim().min(1).max(120).regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Usa minúsculas, números y guiones.'), title: z.string().trim().min(1).max(200), image: z.union([z.literal(''), imageSourceSchema]), alt: z.string().max(300) };
export const blogSchema = z.object({ ...base, summary: z.string().trim().max(600), body: z.string().trim().min(1).max(60000), author: z.string().trim().max(150), richText:richTextSchema.optional() }).strict().superRefine((value,ctx)=>{if(value.richText&&richTextToPlain(value.richText)!==value.body)ctx.addIssue({code:'custom',path:['body'],message:'El texto y su formato deben coincidir.'});if(new TextEncoder().encode(JSON.stringify(value,null,1)).length>140000)ctx.addIssue({code:'custom',path:['body'],message:'El contenido es demasiado grande. Reduce el texto o su formato.'});});
const date = z.union([z.literal(''), z.iso.datetime()]);
export const popupSchema = z.object({ ...base, body: z.string().trim().min(1).max(1500), buttonLabel: z.string().trim().max(80), url: z.union([z.literal(''), linkSchema]), startsAt: date, endsAt: date, delay: z.number().int().min(0).max(120), frequency: z.enum(['session', 'day', 'week']), paths: z.array(z.enum(publicPaths)).min(1).max(5) }).strict().superRefine((v, ctx) => {
    if (Boolean(v.buttonLabel) !== Boolean(v.url))
        ctx.addIssue({ code: 'custom', path: ['url'], message: 'Completa el texto y la dirección del botón, o deja ambos vacíos.' });
    if (v.startsAt && v.endsAt && Date.parse(v.endsAt) <= Date.parse(v.startsAt))
        ctx.addIssue({ code: 'custom', path: ['endsAt'], message: 'El final debe ser posterior al inicio.' });
});
export type BlogContent = z.infer<typeof blogSchema>;
export type PopupContent = z.infer<typeof popupSchema>;
export type EntryContent = BlogContent | PopupContent;
export type Entry = {
    id: string;
    kind: EntryKind;
    slug: string;
    content: EntryContent;
    version: number;
    updated_at: string;
    publishedVersion: number | null;
};
export function parseEntry(kind: EntryKind, value: unknown): EntryContent { const r = (kind === 'blog' ? blogSchema : popupSchema).safeParse(value); if (!r.success)
    throw new Error(`${r.error.issues[0].path.join(' → ')}: ${r.error.issues[0].message}`); return r.data; }
export function emptyEntry(kind: EntryKind): EntryContent { const base = { slug: '', title: '', body: '', image: '', alt: '' }; return kind === 'blog' ? { ...base, summary: '', author: '' } : { ...base, buttonLabel: '', url: '', startsAt: '', endsAt: '', delay: 5, frequency: 'session', paths: ['/'] }; }

'use server';
import { requireCmsAccess } from '@/lib/cms/data';
import { kindSchema, parseEntry } from '@/lib/entries/schema';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
export async function writeEntry(action: 'save' | 'publish' | 'unpublish', kindValue: unknown, idValue: unknown, versionValue: unknown, value: unknown) {
    try {
        const kind = kindSchema.parse(kindValue), id = z.uuid().nullable().parse(idValue), version = z.number().int().min(0).parse(versionValue);
        const { supabase } = await requireCmsAccess(kind);
        let content = action === 'save' ? parseEntry(kind, value) : null;
        if (action === 'publish') {
            const { data, error } = await supabase.from('cms_entries').select('content,version').eq('id', id).eq('kind', kind).single();
            if (error || data.version !== version)
                throw new Error('El borrador cambió. Recarga antes de publicar.');
            content = parseEntry(kind, data.content);
            if (content.image.startsWith('draft:')) {
                const { data: file, error: readError } = await supabase.storage.from('cms-drafts').download(content.image.slice(6));
                if (readError || !file)
                    throw new Error('No se pudo preparar la imagen. Vuelve a subirla.');
                const path = `${crypto.randomUUID()}.webp`;
                const { error: uploadError } = await supabase.storage.from('cms-public').upload(path, file, { contentType: 'image/webp', upsert: false });
                if (uploadError)
                    throw new Error('No se pudo publicar la imagen.');
                content.image = supabase.storage.from('cms-public').getPublicUrl(path).data.publicUrl;
            }
        }
        const { data, error } = await supabase.rpc('cms_write_entry', { p_action: action, p_id: id, p_kind: kind, p_content: content, p_version: version });
        if (error)
            throw new Error(error.code === '23505' ? 'Ese identificador ya está en uso. Elige otro.' : error.message.includes('CONFLICT') ? 'Otra sesión cambió este contenido. Copia tus cambios y recarga.' : 'No se pudo guardar. Vuelve a intentarlo.');
        revalidatePath(`/admin/manage/${kind}`);
        if(kind==='blog'){revalidatePath('/blog');revalidatePath('/blog/[slug]','page');revalidatePath('/sitemap.xml');}
        return { ok: true as const, id: String(data), version: action === 'save' ? version + 1 : version };
    }
    catch (error) {
        return { ok: false as const, error: error instanceof Error ? error.message : 'No se pudo completar la operación.' };
    }
}

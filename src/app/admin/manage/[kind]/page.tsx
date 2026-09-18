import { redirect, notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getCmsAccess } from '@/lib/cms/data';
import { kindSchema, parseEntry, type Entry } from '@/lib/entries/schema';
import EntryManager from '@/components/admin/EntryManager';
export default async function Page({ params }: {
    params: Promise<{
        kind: string;
    }>;
}) {
    const kind = kindSchema.safeParse((await params).kind);
    if (!kind.success)
        notFound();
    const client = await createClient();
    const { data: { user } } = await client.auth.getUser();
    if (!user)
        redirect('/admin/login');
    const { supabase, access } = await getCmsAccess();
    if(!access.modules.includes(kind.data))redirect('/admin');
    const [drafts, published] = await Promise.all([supabase.from('cms_entries').select('*').eq('kind', kind.data).order('updated_at', { ascending: false }), supabase.from('cms_entry_publications').select('id,version').eq('kind', kind.data)]);
    if (drafts.error || published.error)
        throw new Error('No se pudo cargar el módulo. Vuelve a intentarlo.');
    const entries: Entry[] = (drafts.data ?? []).map(row => ({ ...row, content: parseEntry(kind.data, row.content), publishedVersion: published.data?.find(p => p.id === row.id)?.version ?? null }));
    return <EntryManager kind={kind.data} initialEntries={entries} access={access}/>;
}

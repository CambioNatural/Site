import { createClient } from '@supabase/supabase-js';
import { kindSchema, parseEntry, type PopupContent } from '@/lib/entries/schema';
export async function GET(request: Request, { params }: {
    params: Promise<{
        kind: string;
    }>;
}) {
    const kind = kindSchema.safeParse((await params).kind);
    if (!kind.success)
        return Response.json({ error: 'Módulo desconocido.' }, { status: 404 });
    const url = new URL(request.url), slug = url.searchParams.get('slug');
    const page = Number(url.searchParams.get('page') ?? '1');
    if (!Number.isSafeInteger(page) || page < 1 || page > 10000)
        return Response.json({ error: 'Página inválida.' }, { status: 400 });
    try {
        const client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, { auth: { persistSession: false } });
        let query = client.from('cms_entry_publications').select('id,slug,content,version,published_at', { count: 'exact' }).eq('kind', kind.data).order('published_at', { ascending: false }).order('id');
        if (slug)
            query = query.eq('slug', slug);
        if (kind.data === 'popups' && url.searchParams.get('path'))
            query = query.contains('content', { paths: [url.searchParams.get('path')] });
        const size = kind.data === 'blog' ? 20 : 100;
        const { data, error, count } = await query.range((page - 1) * size, page * size - 1);
        if (error)
            throw error;
        const items = (data ?? []).map(row => ({ ...row, content: parseEntry(kind.data, row.content) }));
        const filtered = kind.data === 'popups' ? items.filter(item => { const c = item.content as PopupContent; const now = Date.now(); return (!c.startsAt || Date.parse(c.startsAt) <= now) && (!c.endsAt || Date.parse(c.endsAt) > now) && (!url.searchParams.get('path') || c.paths.includes(url.searchParams.get('path') as typeof c.paths[number])); }) : items;
        return Response.json({ items: filtered, page, total: count ?? 0 }, { headers: { 'Cache-Control': 'no-store' } });
    }
    catch {
        return Response.json({ error: 'Contenido temporalmente no disponible.' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
    }
}

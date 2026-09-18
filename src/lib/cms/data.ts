import 'server-only';
import {cmsModules,type CmsModule,type CmsAccess} from './permissions';
import { createClient as createPublicClient } from '@supabase/supabase-js';
import { unstable_cache } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { initialDocument, parseDocument } from './schema';

export async function getCmsAccess() {
 const supabase=await createClient();
 const {data:{user},error}=await supabase.auth.getUser();
 if(error||!user)throw new Error('Inicia sesión para continuar.');
 const [admin,permissions]=await Promise.all([supabase.from('cms_admins').select('user_id').eq('user_id',user.id).maybeSingle(),supabase.from('cms_module_permissions').select('module').eq('user_id',user.id)]);
 // General administrators retain full access independently of per-module grants.
 if(admin.error||(permissions.error&&!admin.data))throw new Error('No se pudieron comprobar los permisos. Vuelve a intentarlo.');
 const access:CmsAccess={admin:!!admin.data,modules:admin.data?[...cmsModules]:(permissions.data??[]).map(p=>p.module as CmsModule)};
 return {supabase,user,access};
}
export async function requireCmsAccess(module?:CmsModule) {
 const context=await getCmsAccess();
 if(!context.access.admin&&(!context.access.modules.length||module&&!context.access.modules.includes(module)))throw new Error('No tienes permiso para gestionar este módulo.');
 return context;
}
export async function requireAdmin() {
 const context=await getCmsAccess();
 if(!context.access.admin)throw new Error('Se requiere un administrador general.');
 return context;
}

export const getPublishedDocument = unstable_cache(async () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return initialDocument;
  const client = createPublicClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, { auth: { persistSession: false } });
  const { data, error } = await client.from('cms_published').select('content').eq('id', 'home').maybeSingle();
  if (error) throw new Error('No se pudo leer el contenido publicado.');
  if (!data) return initialDocument; // Before the first publication, keep the existing site.
  const content = parseDocument(data.content);
  if (JSON.stringify(content).includes('draft:')) throw new Error('La publicación contiene medios privados.');
  return content;
}, ['cms-home-publication'], { revalidate: 300, tags: ['cms-home'] });

export async function getEditorData() {
  const { supabase, user, access } = await requireCmsAccess('home');
  const [draft, published, revisions] = await Promise.all([
    supabase.from('cms_drafts').select('content, version, updated_at').eq('id','home').maybeSingle(),
    supabase.from('cms_published').select('version,published_at').eq('id','home').maybeSingle(),
    supabase.from('cms_revisions').select('version,published_at').order('version',{ascending:false}).limit(20),
  ]);
  if (draft.error || published.error || revisions.error) throw new Error('No se pudo cargar el editor. Vuelve a intentarlo.');
  return { document: draft.data ? parseDocument(draft.data.content) : initialDocument, version: draft.data?.version ?? 0, published: published.data, revisions: revisions.data ?? [], email: user.email ?? '', access };
}

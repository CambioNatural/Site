'use server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { requireCmsAccess } from '@/lib/cms/data';
import { parseDocument, type CmsDocument } from '@/lib/cms/schema';
import sharp from 'sharp';

export type Result = { ok: boolean; error?: string; version?: number; src?: string; document?: CmsDocument };
const message = (error: unknown) => error instanceof Error ? error.message : 'No se pudo completar la operación.';
const dbMessage = (error: {message: string}) => error.message.includes('VERSION_CONFLICT') ? 'Otra sesión guardó cambios. Recarga el editor antes de continuar; copia tus cambios para conservarlos.' : 'No se pudo guardar el contenido. Vuelve a intentarlo.';

export async function login(_previous: Result, form: FormData): Promise<Result> {
  const email = String(form.get('email') ?? '').trim();
  const password = String(form.get('password') ?? '');
  if (!email || !password) return { ok:false,error:'Escribe tu correo y contraseña.' };
  const client = await createClient();
  const { error } = await client.auth.signInWithPassword({email,password});
  if (error) return {ok:false,error:'No pudimos iniciar sesión. Revisa los datos o recupera tu acceso.'};
  try { await requireCmsAccess(); } catch { await client.auth.signOut(); return {ok:false,error:'Esta cuenta no tiene acceso al panel.'}; }
  redirect('/admin');
}
export async function logout() { const client = await createClient(); await client.auth.signOut(); redirect('/admin/login'); }
export async function saveDraft(value: unknown, expectedVersion: number): Promise<Result> {
  try {
    const { supabase } = await requireCmsAccess('home');
    const content = parseDocument(value);
    if (!Number.isSafeInteger(expectedVersion) || expectedVersion < 0) throw new Error('Versión inválida. Recarga el editor.');
    const {data,error} = await supabase.rpc('cms_save_draft',{p_content:content,p_expected_version:expectedVersion});
    if (error) return {ok:false,error:dbMessage(error)};
    revalidatePath('/admin/preview');
    return {ok:true,version:Number(data)};
  } catch(error) { return {ok:false,error:message(error)}; }
}
export async function uploadImage(form: FormData): Promise<Result> {
  try {
    const {supabase} = await requireCmsAccess();
    const file = form.get('image');
    if (!(file instanceof File) || !file.size || file.size > 5*1024*1024) throw new Error('Sube una imagen PNG, JPEG o WebP de hasta 5 MB.');
    if (!['image/png','image/jpeg','image/webp'].includes(file.type)) throw new Error('Usa PNG, JPEG o WebP.');
    const buffer = Buffer.from(await file.arrayBuffer());
    const source = sharp(buffer,{limitInputPixels:40000000,animated:false});
    const meta = await source.metadata();
    if (!['png','jpeg','webp'].includes(meta.format ?? '') || !meta.width || !meta.height) throw new Error('El archivo no es una imagen compatible.');
    const safe = await source.rotate().resize({width:2400,height:2400,fit:'inside',withoutEnlargement:true}).webp({quality:85}).toBuffer();
    const path = `${crypto.randomUUID()}.webp`;
    const {error} = await supabase.storage.from('cms-drafts').upload(path,safe,{contentType:'image/webp',upsert:false});
    if (error) throw new Error('No se pudo subir la imagen. Vuelve a intentarlo.');
    return {ok:true,src:`draft:${path}`};
  } catch(error) { return {ok:false,error:message(error)}; }
}
export async function publishDraft(expectedVersion: number): Promise<Result> {
  try {
    const {supabase} = await requireCmsAccess('home');
    const {data:row,error:readError} = await supabase.from('cms_drafts').select('content,version').eq('id','home').single();
    if (readError || row.version !== expectedVersion) throw new Error('El borrador cambió. Recarga antes de publicar.');
    const content = parseDocument(row.content);
    const images = [content.home.hero.wordmark,content.home.about.image,...content.home.initiatives.map(i=>i.image),content.home.article.image,content.home.newsletter.image];
    for (const image of images) {
      if (!image.src.startsWith('draft:')) continue;
      const sourcePath = image.src.slice(6);
      const {data:file,error:downloadError} = await supabase.storage.from('cms-drafts').download(sourcePath);
      if(downloadError || !file) throw new Error('Falta una imagen del borrador. Vuelve a subirla.');
      const dest = `${crypto.randomUUID()}.webp`;
      const {error} = await supabase.storage.from('cms-public').upload(dest,file,{contentType:'image/webp',upsert:false});
      if(error) throw new Error('No se pudo preparar la imagen para publicación.');
      image.src = supabase.storage.from('cms-public').getPublicUrl(dest).data.publicUrl;
    }
    const {data,error} = await supabase.rpc('cms_publish',{p_expected_version:expectedVersion,p_content:parseDocument(content)});
    if(error) return {ok:false,error:error.code==='23505'?'Esta versión ya está publicada. Guarda un nuevo borrador para publicar cambios.':dbMessage(error)};
    revalidateTag('cms-home',{expire:0});
    revalidatePath('/','layout');
    return {ok:true,version:Number(data)};
  } catch(error) { return {ok:false,error:message(error)}; }
}
export async function restoreRevision(version: number, expectedVersion: number): Promise<Result> {
  try {
    const {supabase} = await requireCmsAccess('home');
    const {data,error} = await supabase.from('cms_revisions').select('content').eq('version',version).single();
    if(error) throw new Error('No se encontró esa versión.');
    const document = parseDocument(data.content);
    const result = await saveDraft(document,expectedVersion);
    return {...result,...(result.ok?{document}:{})};
  } catch(error) { return {ok:false,error:message(error)}; }
}
export async function requestRecovery(_previous: Result, form: FormData): Promise<Result> {
  const client = await createClient();
  const {error} = await client.auth.resetPasswordForEmail(String(form.get('email')??'').trim(),{redirectTo:`${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`});
  if(error) return {ok:false,error:'No se pudo enviar la recuperación. Espera un momento y vuelve a intentar.'};
  return {ok:true};
}
export async function updatePassword(_previous: Result, form: FormData): Promise<Result> {
  const password = String(form.get('password')??'');
  if(password.length<12 || password!==form.get('confirm')) return {ok:false,error:'Usa al menos 12 caracteres y confirma la misma contraseña.'};
  const client = await createClient();
  const {data:{user}} = await client.auth.getUser();
  if(!user) return {ok:false,error:'El enlace caducó. Solicita uno nuevo.'};
  const {error} = await client.auth.updateUser({password});
  if(error) return {ok:false,error:'No se pudo cambiar la contraseña. Solicita un nuevo enlace.'};
  await client.auth.signOut();
  redirect('/admin/login');
}

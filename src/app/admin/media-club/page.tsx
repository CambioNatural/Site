import Link from 'next/link';
import {getCmsAccess} from '@/lib/cms/data';
import {createClient} from '@/lib/supabase/server';
import {redirect} from 'next/navigation';
export default async function Page(){
  const client=await createClient();
  const {data:{user}}=await client.auth.getUser();
  if(!user)redirect('/admin/login');
  const {supabase,access}=await getCmsAccess();
  if(!access.admin&&!access.modules.includes('crm'))redirect('/admin');
  const {data,error}=await supabase.from('media_club_registrations').select('id,name,email,language,created_at').eq('event_id','the-ai-doc-2026-11-19').order('created_at',{ascending:false});
  if(error)throw new Error('No fue posible consultar las inscripciones.');
  return <main className="cms-shell"><Link href="/admin/crm">← Admin Tool</Link><h1>Media Club · The AI Doc</h1><p>19 de noviembre de 2026 · 19:00 CDMX · {data.length} inscripciones</p><p>El registro confirma en pantalla. El equipo coordina el enlace de Zoom por correo; esta página no envía mensajes automáticamente.</p><div style={{overflowX:'auto'}}><table style={{width:'100%',textAlign:'left',borderCollapse:'collapse'}}><thead><tr>{['Nombre','Correo','Idioma del formulario','Registro'].map(x=><th style={{padding:12,borderBottom:'1px solid'}} key={x}>{x}</th>)}</tr></thead><tbody>{data.map(row=><tr key={row.id}><td style={{padding:12}}>{row.name}</td><td>{row.email}</td><td>{row.language}</td><td>{new Intl.DateTimeFormat('es-MX',{dateStyle:'medium',timeZone:'America/Mexico_City'}).format(new Date(row.created_at))}</td></tr>)}</tbody></table></div>{!data.length&&<p>Aún no hay inscripciones.</p>}</main>;
}

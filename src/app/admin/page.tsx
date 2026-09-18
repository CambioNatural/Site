import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { getEditorData, getCmsAccess } from '@/lib/cms/data';
import Editor from '@/components/admin/Editor';
import { logout } from './actions';
export default async function Page(){
 const client=await createClient();const {data:{user}}=await client.auth.getUser();
 if(!user) redirect('/admin/login');
 const {access}=await getCmsAccess();
 if(!access.modules.includes('home')){
  if(access.modules.includes('blog'))redirect('/admin/manage/blog');
  if(access.modules.includes('popups'))redirect('/admin/manage/popups');
  if(access.modules.includes('crm'))redirect('/admin/crm');
  return <main className="cms-auth"><h1>Acceso pendiente</h1><p>Solicita a un administrador permisos para un módulo del CMS.</p><form action={logout}><button>Cerrar sesión</button></form></main>;
 }
 return <Editor {...await getEditorData()} />;
}

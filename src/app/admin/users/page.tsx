import {redirect} from 'next/navigation';
import {createClient} from '@/lib/supabase/server';
import {getCmsAccess} from '@/lib/cms/data';
import UsersManager from '@/components/admin/UsersManager';
import {AdminNotice} from '@/components/admin/AdminNotice';
import type {CmsUser} from '@/lib/cms/permissions';
export default async function Page(){
 const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');
 const {access,supabase}=await getCmsAccess();if(!access.admin)redirect('/admin');
 const {data,error}=await supabase.rpc('cms_list_users');if(error?.code==='PGRST202')return <AdminNotice title="Usuarios y permisos" message="La pantalla está preparada. Falta aplicar la configuración de permisos en Supabase."/>;
 if(error)throw new Error('No se pudo cargar la lista de usuarios. Vuelve a intentarlo.');
 return <UsersManager initialUsers={data as CmsUser[]} access={access}/>;
}

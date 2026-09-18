import {redirect} from 'next/navigation';
import {createClient} from '@/lib/supabase/server';
import {getCmsAccess} from '@/lib/cms/data';
import UsersManager from '@/components/admin/UsersManager';
import AdminIdentity from '@/components/admin/AdminIdentity';
import type {CmsUser} from '@/lib/cms/permissions';
export default async function Page(){
 const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');
 const {access,supabase}=await getCmsAccess();if(!access.admin)redirect('/admin');
 const {data,error}=await supabase.rpc('cms_list_users');if(error?.code==='PGRST202')return <main className="cms-shell"><AdminIdentity active="users" access={access}/><header><div><h1>Usuarios y permisos</h1><p>La pantalla está preparada. Falta aplicar la configuración de permisos en Supabase.</p></div></header><p className="cms-help">Los administradores generales conservan su acceso actual. La asignación de módulos estará disponible cuando se active la configuración.</p></main>;
 if(error)throw new Error('No se pudo cargar la lista de usuarios. Vuelve a intentarlo.');
 return <UsersManager initialUsers={data as CmsUser[]} access={access}/>;
}

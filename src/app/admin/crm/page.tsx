import {redirect} from 'next/navigation';
import {createClient} from '@/lib/supabase/server';
import {getCmsAccess} from '@/lib/cms/data';
import {crmKinds,CrmKind,CrmRecord} from '@/lib/cms/crm';
import {AdminNotice} from '@/components/admin/AdminNotice';
import CrmManager from '@/components/admin/CrmManager';
export default async function Page(){
 const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');
 const {supabase,access}=await getCmsAccess();if(!access.modules.includes('crm'))redirect('/admin');
 const results=await Promise.all(crmKinds.map(kind=>supabase.from(`crm_${kind}`).select('*').order('updated_at',{ascending:false}).limit(1000)));
 if(results.some(result=>result.error))return <AdminNotice title="CRM pendiente de conexión" message="No fue posible cargar los registros. Verifica la migración CRM y tu conexión."/>;
 const records=Object.fromEntries(crmKinds.map((kind,i)=>[kind,results[i].data])) as Record<CrmKind,CrmRecord[]>;
 return <CrmManager records={records} access={access}/>;
}

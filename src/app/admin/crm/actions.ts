'use server';
import {z} from 'zod';
import {requireCmsAccess} from '@/lib/cms/data';
import {crmKinds,crmSchemas} from '@/lib/cms/crm';
import {revalidatePath} from 'next/cache';
export async function saveCrm(kindInput:unknown,idInput:unknown,versionInput:unknown,input:unknown){
 try{
  const kind=z.enum(crmKinds).parse(kindInput);
  const id=z.union([z.uuid(),z.literal('')]).parse(idInput);
  const version=z.number().int().min(0).parse(versionInput);
  const content:Record<string,string|number|boolean|null>=crmSchemas[kind].parse(input);
  const {supabase}=await requireCmsAccess('crm');
  const table=supabase.from(`crm_${kind}`);
  const result=id?await table.update({...content,version:version+1,updated_at:new Date().toISOString()}).eq('id',id).eq('version',version).select('id').maybeSingle():await table.insert(content).select('id').single();
  if(result.error)return {ok:false as const,error:'No se pudo guardar. Verifica tu acceso y los registros relacionados.'};
  if(!result.data)return {ok:false as const,error:'El registro cambió en otra sesión. Recarga antes de editar.'};
  revalidatePath('/admin/crm');return {ok:true as const,id:result.data.id as string};
 }catch(error){return {ok:false as const,error:error instanceof z.ZodError?'Revisa los campos del formulario antes de guardar.':'No fue posible guardar. Verifica tu sesión y el permiso CRM.'};}
}

export async function moveCrmDeal(idInput:unknown,versionInput:unknown,stageInput:unknown){
 try{
  const id=z.uuid().parse(idInput);
  const version=z.number().int().positive().parse(versionInput);
  const stage=crmSchemas.deals.shape.stage.parse(stageInput);
  const {supabase}=await requireCmsAccess('crm');
  const {data,error}=await supabase.from('crm_deals').update({stage,version:version+1,updated_at:new Date().toISOString()}).eq('id',id).eq('version',version).eq('archived',false).select('id,stage,version').maybeSingle();
  if(error)return {ok:false as const,error:'No se pudo mover la oportunidad. La etapa original se conserva.'};
  if(!data)return {ok:false as const,error:'El registro cambió en otra sesión. Recarga antes de editar.'};
  revalidatePath('/admin/crm');return {ok:true as const,record:data as {id:string;stage:string;version:number}};
 }catch{return {ok:false as const,error:'No fue posible guardar. Verifica tu sesión y el permiso CRM.'};}
}

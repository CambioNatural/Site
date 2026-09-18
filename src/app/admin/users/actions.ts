'use server';
import {z} from 'zod';
import {requireAdmin} from '@/lib/cms/data';
import {cmsModules} from '@/lib/cms/permissions';
import {revalidatePath} from 'next/cache';
export async function setUserPermissions(id:unknown,modules:unknown,expected:unknown){
 try{const input=z.object({id:z.uuid(),modules:z.array(z.enum(cmsModules)).max(3),expected:z.array(z.enum(cmsModules)).max(3)}).parse({id,modules,expected});
 const {supabase}=await requireAdmin();const {error}=await supabase.rpc('cms_set_permissions',{p_user:input.id,p_modules:input.modules,p_expected:input.expected});
 if(error)throw new Error(error.message.includes('VERSION_CONFLICT')?'Los permisos cambiaron en otra sesión. Recarga antes de continuar.':error.message.includes('ADMIN_PROTECTED')?'Esta cuenta es un administrador general y está protegida.':'No se pudieron actualizar los permisos.');
 revalidatePath('/admin','layout');return {ok:true as const};
 }catch(error){return {ok:false as const,error:error instanceof Error?error.message:'No se pudo guardar.'};}
}

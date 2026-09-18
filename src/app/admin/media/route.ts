import { NextRequest } from 'next/server';
import { requireCmsAccess } from '@/lib/cms/data';
export async function GET(request:NextRequest){
 try {
 const {supabase}=await requireCmsAccess(); const path=request.nextUrl.searchParams.get('path')??'';
 if(!/^[a-f0-9-]+\.(png|jpg|webp)$/.test(path))return new Response('Archivo inválido',{status:400});
 const {data,error}=await supabase.storage.from('cms-drafts').download(path);
 if(error||!data)return new Response('Imagen no disponible',{status:404});
 return new Response(data,{headers:{'Content-Type':data.type,'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}});
 }catch{return new Response('Acceso requerido',{status:401});}
}

import {redirect,notFound} from 'next/navigation';
import Link from 'next/link';
import {z} from 'zod';
import {createClient} from '@/lib/supabase/server';
import {getCmsAccess} from '@/lib/cms/data';
import {blogSchema} from '@/lib/entries/schema';
import {BlogArticle} from '@/components/blog/BlogViews';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/blog/blog.css';
export const metadata={title:'Blog draft preview',robots:{index:false,follow:false}};
export default async function Preview({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!z.uuid().safeParse(id).success)notFound();const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');const {supabase,access}=await getCmsAccess();if(!access.modules.includes('blog'))redirect('/admin');const {data,error}=await supabase.from('cms_entries').select('id,slug,content,updated_at').eq('kind','blog').eq('id',id).maybeSingle();if(error)throw new Error('No se pudo leer el borrador.');if(!data)notFound();const content=blogSchema.parse(data.content);if(content.image.startsWith('draft:'))content.image=`/admin/media?path=${encodeURIComponent(content.image.slice(6))}`;return <><div className="blog-preview-banner"><span>Vista previa del borrador guardado · sin publicar</span><Link href="/admin/manage/blog">Volver al editor</Link></div><div className="blog-page"><Navbar bg="bg-[#f7f7f2]"/><BlogArticle post={{id:data.id,slug:data.slug,content,published_at:data.updated_at}} preview/><Footer bg="bg-[#f7f7f2]"/></div></>;}

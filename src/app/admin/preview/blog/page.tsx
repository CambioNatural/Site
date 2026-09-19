import {redirect} from 'next/navigation';
import Link from 'next/link';
import {createClient} from '@/lib/supabase/server';
import {getCmsAccess} from '@/lib/cms/data';
import {examplePosts} from '@/lib/blog/example';
import {BlogIndex,BlogArticle} from '@/components/blog/BlogViews';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/blog/blog.css';
export const metadata={title:'Blog design preview',robots:{index:false,follow:false}};
export default async function Preview({searchParams}:{searchParams:Promise<{article?:string}>}){const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');const {access}=await getCmsAccess();if(!access.modules.includes('blog'))redirect('/admin');const {article}=await searchParams;const post=examplePosts.find(p=>p.slug===article);return <><div className="blog-preview-banner"><span>Vista de diseño · contenido de ejemplo · sin publicar</span><Link href="/admin/preview/blog">Portada</Link><Link href="/admin/manage/blog">Volver al editor</Link></div><div className="blog-page"><Navbar bg="bg-[#f7f7f2]"/>{post?<BlogArticle post={post} preview/>:<BlogIndex posts={examplePosts} total={examplePosts.length} postHref={slug=>`/admin/preview/blog?article=${slug}`}/>}<Footer bg="bg-[#f7f7f2]"/></div></>;}

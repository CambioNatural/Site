import {AdminPreviewBar} from '@/components/admin/AdminNotice';
import {redirect,notFound} from 'next/navigation';
import {createClient} from '@/lib/supabase/server';
import HomeLanding from '@/components/home/HomeLanding';
import {getEditorData,getCmsAccess} from '@/lib/cms/data';
import {previewImages} from '@/lib/cms/images';
import ToolsPage from '@/components/pages/ToolsPage';
import GatheringsPage from '@/components/pages/GatheringsPage';
import MediaClubPage from '@/components/pages/MediaClubPage';
import WeArePage from '@/components/pages/WeArePage';
import {BlogIndex} from '@/components/blog/BlogViews';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {listPosts} from '@/lib/blog/posts';
import '@/app/blog/blog.css';
const components={tools:ToolsPage,gatherings:GatheringsPage,'media-club':MediaClubPage,'we-are':WeArePage};
export default async function Page({searchParams}:{searchParams:Promise<{page?:string}>}){
 const client=await createClient();const {data:{user}}=await client.auth.getUser();if(!user)redirect('/admin/login');
 const {access}=await getCmsAccess();if(!access.modules.includes('home'))redirect('/admin');
 const {page='home'}=await searchParams;
 if(!['home','blog',...Object.keys(components)].includes(page))notFound();
 const data=await getEditorData();const document=previewImages(data.document);
 const Component=components[page as keyof typeof components];
 return <><AdminPreviewBar version={data.version}/>{page==='home'?<HomeLanding content={document.home} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl} preview/>:page==='blog'?<div className="blog-page"><Navbar navigation={document.navigation}/><BlogIndex {...await listPosts()} copy={document.blog}/><Footer text={document.home.footer}/></div>:<Component content={document.pages[page as keyof typeof components]} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl}/>}</>;
}

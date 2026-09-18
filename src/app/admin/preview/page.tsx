import {AdminPreviewBar} from '@/components/admin/AdminNotice';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import HomeLanding from '@/components/home/HomeLanding';
import { getEditorData, getCmsAccess } from '@/lib/cms/data';
export default async function Page(){
 const client=await createClient(); const {data:{user}}=await client.auth.getUser();
 if(!user)redirect('/admin/login');
 const {access}=await getCmsAccess();if(!access.modules.includes('home'))redirect('/admin');
 const {document,version}=await getEditorData();
 const images=[document.home.hero.wordmark,document.home.about.image,...document.home.initiatives.map(i=>i.image),document.home.article.image,document.home.newsletter.image];
 for(const image of images)if(image.src.startsWith('draft:'))image.src=`/admin/media?path=${encodeURIComponent(image.src.slice(6))}`;
 return <><AdminPreviewBar version={version}/><HomeLanding content={document.home} navigation={document.navigation} preview /></>;
}

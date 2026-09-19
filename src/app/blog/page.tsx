import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {listPosts} from '@/lib/blog/posts';
import {BlogIndex} from '@/components/blog/BlogViews';
export const dynamic='force-dynamic';
type Props={searchParams:Promise<{page?:string|string[]}>};
function pageNumber(value:string|string[]|undefined){return typeof value==='string'&&/^[1-9]\d{0,3}$/.test(value)?Number(value):value===undefined?1:0;}
export async function generateMetadata({searchParams}:Props):Promise<Metadata>{const page=pageNumber((await searchParams).page);return {title:page>1?`Blog · Page ${page}`:'Blog',description:'Ideas, stories and conversations for a healthier planet. Explore the Cambio Natural blog.',alternates:{canonical:page>1?`/blog?page=${page}`:'/blog'},openGraph:{title:'Blog — Cambio Natural',url:'/blog',description:'Ideas, stories and conversations for a healthier planet.'}};}
export default async function Page({searchParams}:Props){const page=pageNumber((await searchParams).page);if(!page)notFound();const {posts,total}=await listPosts(page);if(page>1&&!posts.length)notFound();return <BlogIndex posts={posts} total={total} page={page}/>;}

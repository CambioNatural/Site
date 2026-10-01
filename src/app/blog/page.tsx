import {getPublishedDocument} from '@/lib/cms/data';
import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {listPosts} from '@/lib/blog/posts';
import {BlogIndex} from '@/components/blog/BlogViews';
export const dynamic='force-dynamic';
type Props={searchParams:Promise<{page?:string|string[]}>};
function pageNumber(value:string|string[]|undefined){return typeof value==='string'&&/^[1-9]\d{0,3}$/.test(value)?Number(value):value===undefined?1:0;}
export async function generateMetadata({searchParams}:Props):Promise<Metadata>{const copy=(await getPublishedDocument()).blog;const page=pageNumber((await searchParams).page);return {title:page>1?`${copy.seoTitle} · ${copy.page} ${page}`:copy.seoTitle,description:copy.seoDescription,alternates:{canonical:page>1?`/blog?page=${page}`:'/blog'},openGraph:{title:copy.seoTitle,url:'/blog',description:copy.seoDescription}};}
export default async function Page({searchParams}:Props){const page=pageNumber((await searchParams).page);if(!page)notFound();const {posts,total}=await listPosts(page);if(page>1&&!posts.length)notFound();return <BlogIndex copy={(await getPublishedDocument()).blog} posts={posts} total={total} page={page}/>;}

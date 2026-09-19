import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getPost,listPosts} from '@/lib/blog/posts';
import {BlogArticle,blogPath} from '@/components/blog/BlogViews';
export const dynamic='force-dynamic';
type Props={params:Promise<{slug:string}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const post=await getPost((await params).slug);if(!post)notFound();const c=post.content;return {title:c.title,description:c.summary||c.body.slice(0,160),alternates:{canonical:blogPath(post.slug)},openGraph:{type:'article',title:c.title,description:c.summary||c.body.slice(0,160),url:blogPath(post.slug),publishedTime:post.published_at,authors:c.author?[c.author]:undefined,images:c.image?[{url:c.image,alt:c.alt}]:[]},twitter:{card:c.image?'summary_large_image':'summary',title:c.title,description:c.summary||c.body.slice(0,160),images:c.image?[c.image]:[]}};}
export default async function Page({params}:Props){const post=await getPost((await params).slug);if(!post)notFound();const {posts}=await listPosts(1,3,post.id);return <BlogArticle post={post} related={posts}/>;}

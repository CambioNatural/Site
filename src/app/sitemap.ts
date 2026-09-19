import type {MetadataRoute} from 'next';
import {blogSitemap} from '@/lib/blog/posts';
export const dynamic='force-dynamic';
export default async function sitemap():Promise<MetadataRoute.Sitemap>{const base='https://cambionatur.al';const routes=['','/tools','/gatherings','/media-club','/we-are','/blog'];const posts=await blogSitemap();return [...routes.map(route=>({url:`${base}${route}`,changeFrequency:'monthly' as const,priority:route===''?1:0.8})),...posts.map(post=>({url:`${base}/blog/${encodeURIComponent(post.slug)}`,lastModified:post.published_at,changeFrequency:'monthly' as const,priority:0.7}))];}

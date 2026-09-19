import 'server-only';
import {cache} from 'react';
import {createClient} from '@supabase/supabase-js';
import {blogSchema,type BlogContent} from '@/lib/entries/schema';
export type BlogPost={id:string;slug:string;content:BlogContent;published_at:string};
const fields='id,slug,content,published_at';
function client(){return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,{auth:{persistSession:false},global:{fetch:(url,options)=>fetch(url,{...options,cache:'no-store'})}});}
function parse(row:BlogPost):BlogPost{const content=blogSchema.parse(row.content);if(content.image.startsWith('draft:'))throw new Error('Private image in public blog');return {...row,content};}
export async function listPosts(page=1,size=9,exclude?:string){
 let query=client().from('cms_entry_publications').select(fields,{count:'exact'}).eq('kind','blog').order('published_at',{ascending:false}).order('id');
 if(exclude)query=query.neq('id',exclude);
 const {data,error,count}=await query.range((page-1)*size,page*size-1);if(error)throw new Error('Blog temporarily unavailable');
 return {posts:(data??[]).map(row=>parse(row as BlogPost)),total:count??0};
}
export const getPost=cache(async(slug:string)=>{if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)||slug.length>120)return null;const {data,error}=await client().from('cms_entry_publications').select(fields).eq('kind','blog').eq('slug',slug).maybeSingle();if(error)throw new Error('Blog temporarily unavailable');return data?parse(data as BlogPost):null;});
export async function blogSitemap(){const rows:{slug:string;published_at:string}[]=[];for(let offset=0;;offset+=1000){const {data,error}=await client().from('cms_entry_publications').select('slug,published_at').eq('kind','blog').order('id').range(offset,offset+999);if(error)throw new Error('Blog sitemap unavailable');rows.push(...(data??[]));if(!data||data.length<1000)break;}return rows;}

import type {Metadata} from 'next';
import {getPublishedDocument} from './data';
import type {PageKey} from './page-content';
export async function pageMetadata(key:PageKey):Promise<Metadata>{const {seo}= (await getPublishedDocument()).pages[key];return {title:seo.title,description:seo.description,alternates:{canonical:`/${key}`},openGraph:{title:seo.title,description:seo.description,url:`/${key}`},twitter:{title:seo.title,description:seo.description}};}

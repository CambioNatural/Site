import WeArePage from '@/components/pages/WeArePage';
import {getPublishedDocument} from '@/lib/cms/data';
import {pageMetadata} from '@/lib/cms/page-metadata';
export async function generateMetadata(){return pageMetadata('we-are');}
export default async function Page(){const document=await getPublishedDocument();return <WeArePage content={document.pages['we-are']} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl}/>;}

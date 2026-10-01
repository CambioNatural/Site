import GatheringsPage from '@/components/pages/GatheringsPage';
import {getPublishedDocument} from '@/lib/cms/data';
import {pageMetadata} from '@/lib/cms/page-metadata';
export async function generateMetadata(){return pageMetadata('gatherings');}
export default async function Page(){const document=await getPublishedDocument();return <GatheringsPage content={document.pages['gatherings']} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl}/>;}

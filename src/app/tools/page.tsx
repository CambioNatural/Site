import ToolsPage from '@/components/pages/ToolsPage';
import {getPublishedDocument} from '@/lib/cms/data';
import {pageMetadata} from '@/lib/cms/page-metadata';
export async function generateMetadata(){return pageMetadata('tools');}
export default async function Page(){const document=await getPublishedDocument();return <ToolsPage content={document.pages['tools']} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl}/>;}

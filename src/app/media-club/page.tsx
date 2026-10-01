import MediaClubPage from '@/components/pages/MediaClubPage';
import {getPublishedDocument} from '@/lib/cms/data';
import {pageMetadata} from '@/lib/cms/page-metadata';
export async function generateMetadata(){return pageMetadata('media-club');}
export default async function Page(){const document=await getPublishedDocument();return <MediaClubPage content={document.pages['media-club']} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl}/>;}

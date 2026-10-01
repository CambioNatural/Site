import defaults from '@/content/pages.json';
export type CmsPageContent={seo:{title:string;description:string};texts:Record<string,string>;images:Record<string,{src:string;alt:string}>;links:Record<string,string>};
export const pageDefaults:Record<string,CmsPageContent>=defaults;
export const pageKeys=['tools','gatherings','media-club','we-are'] as const;
export type PageKey=typeof pageKeys[number];
export const pageLabels:Record<PageKey,string>={tools:'Tools',gatherings:'Gatherings','media-club':'Media Club','we-are':'We Are'};

import type { Metadata } from "next";
import HomeLanding from "@/components/home/HomeLanding";
import { getPublishedDocument } from "@/lib/cms/data";

export async function generateMetadata():Promise<Metadata>{const {seo}=(await getPublishedDocument()).home;return {title:{absolute:seo.title},description:seo.description,alternates:{canonical:'/'},openGraph:{title:seo.title,description:seo.description,url:'/'},twitter:{title:seo.title,description:seo.description}};}

export default async function HomePage() {
  const document = await getPublishedDocument();
  return <HomeLanding content={document.home} navigation={document.navigation} newsletterUrl={document.settings.newsletterUrl} />;
}

import type { Metadata } from "next";
import HomeLanding from "@/components/home/HomeLanding";
import { getPublishedDocument } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Cambio Natural — Bridge Builders for Planetary Health",
  description:
    "How do we meet and collaborate to lead towards a desirable future for all and the planet? Cambio Natural is a collective supporting bridge builders and caregivers with technology, gatherings and community, guided by reciprocity, mutual care and regeneration.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Cambio Natural — Bridge Builders for Planetary Health",
    description:
      "How do we meet and collaborate to lead towards a desirable future for all and the planet? A collective supporting bridge builders and caregivers with technology, gatherings and community.",
  },
  twitter: {
    title: "Cambio Natural — Bridge Builders for Planetary Health",
    description:
      "How do we meet and collaborate to lead towards a desirable future for all and the planet? A collective supporting bridge builders and caregivers with technology, gatherings and community.",
  },
};

export default async function HomePage() {
  const document = await getPublishedDocument();
  return <HomeLanding content={document.home} navigation={document.navigation} />;
}

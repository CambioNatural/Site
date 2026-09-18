/** Editorially reviewed fallback content; published CMS content takes precedence. */
export type ResponsiveCopy = { text: string; mobileText?: string };
export type ContentImage = { src: string; alt: string };
export type Initiative = {
  id: string;
  title: string;
  description: ResponsiveCopy;
  image: ContentImage;
};
export interface HomeContent {
  hero: { intro: ResponsiveCopy; heading: string; wordmark: ContentImage };
  about: { emphasis: string; body: string; image: ContentImage };
  initiativesHeading: string;
  initiatives: [Initiative, Initiative, Initiative];
  article: { category: string; title: string; excerpt: ResponsiveCopy; image: ContentImage; link: { label: string; href: string } };
  newsletter: { intro: ResponsiveCopy; title: string; description: string; image: ContentImage };
  footer: string;
}

export const homeContent: HomeContent = {
  hero: {
    intro: { text: "How do we meet and collaborate to lead towards a", mobileText: "How do we meet and collaborate to lead towards a" },
    heading: "desirable future for all and the planet?",
    wordmark: { src: "/images/hero-wordmark-together.svg", alt: "HERE IS THE DEAL, WE CAN ONLY ACHIEVE IT, TOGETHER" },
  },
  about: {
    emphasis: "We are a collective supporting bridge builders",
    body: "and caregivers with technology, gatherings and community. We bring wisdom and practice from the margins to the focus of transformative actions guided by reciprocity, mutual care and regeneration.",
    image: { src: "/images/hero-photo-subtract.png", alt: "An arched bridge reflected in the water" },
  },
  initiativesHeading: "This is how we do it together",
  initiatives: [
    {
      id: "cross-sector",
      title: "Cross-sector Collaboration Framework",
      description: {
        text: "From the experience of TeamUp, a new cross-sectoral approach to development cooperation in Uganda, we co-designed a Cross-sector Collaboration Management Framework and Toolkit. It is aimed at supporting that young people collaborate with local government, civil society, NGOs and private companies to come together and engage in a purposeful way guided by the principles of Planetary Health and Doughnut Economics.",
        mobileText: "From the experience of TeamUp, a new cross-sectoral approach to development cooperation in Uganda, we co-designed a Cross-sector Collaboration Management Framework and Toolkit.",
      },
      image: { src: "/images/cn-0104-2.png", alt: "" },
    },
    {
      id: "doughnut",
      title: "Global Doughnut méxico",
      description: {
        text: "We co-organized the three day gathering focused on approaching alternative economic frameworks and practices - using the Doughnut Economics framework as guide, together with Coalición Tricolor, a member of the Doughnut Economics Action Lab community.",
        mobileText: "We co-organized the three day gathering focused on approaching alternative economic frameworks and practices using the Doughnut Economics framework as guide.",
      },
      image: { src: "/images/cn-0105-1.png", alt: "" },
    },
    {
      id: "media-club",
      title: "Media Club",
      description: {
        text: "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.",
        mobileText: "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems.",
      },
      image: { src: "/images/cn-0106-1.png", alt: "" },
    },
  ],
  article: {
    category: "Article - Substack",
    title: "Failure as a tool for liberation",
    excerpt: {
      text: "Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises in each context...",
      mobileText: "Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises...",
    },
    image: { src: "/images/article-bdfm.png", alt: "" },
    link: { label: "Read me", href: "https://substack.com/" },
  },
  newsletter: {
    intro: { text: "Join to Newsletter", mobileText: "Join to our waiting list for our Newsletter" },
    title: "Let’s co-create together",
    description: "Short bi-monthly nuggets on Planetary Health, projects and research that are changing the world, delivered to your inbox - No spam, real action.",
    image: { src: "/images/newsletter-metacrisis.png", alt: "" },
  },
  footer: "Cambio natural CC BY-NC-ND 4.0",
};

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SubstackEmbed from "@/components/SubstackEmbed";

export const metadata: Metadata = {
  title: "We Are",
  description:
    "Cambio Natural is a collective of practitioners committed to overcoming strategic polarization and embodying alternative futures for Planetary Health — meet the founding members, Cesar Jerónimo, Blaga and Marcelo, and our collaboration ecosystem.",
  alternates: { canonical: "/we-are" },
  openGraph: {
    url: "/we-are",
    title: "We Are — Cambio Natural",
    description:
      "A collective of practitioners committed to overcoming strategic polarization and embodying alternative futures for Planetary Health.",
  },
  twitter: {
    title: "We Are — Cambio Natural",
    description:
      "A collective of practitioners committed to overcoming strategic polarization and embodying alternative futures for Planetary Health.",
  },
};

const partnerLogos = [
  { src: "/images/partner-113.png", alt: "Partner organization", w: 173, h: 82, l: 177, t: 4167 },
  { src: "/images/partner-114.png", alt: "Partner organization", w: 173, h: 68, l: 407, t: 4174 },
  { src: "/images/partner-115.png", alt: "Partner organization", w: 173, h: 43, l: 633, t: 4187 },
  { src: "/images/partner-116.png", alt: "Partner organization", w: 173, h: 77, l: 862, t: 4170 },
  { src: "/images/partner-117.png", alt: "Partner organization", w: 173, h: 59, l: 1090, t: 4175 },
  { src: "/images/partner-118.png", alt: "Partner organization", w: 80, h: 80, l: 224, t: 4332 },
  { src: "/images/partner-119.png", alt: "Partner organization", w: 210, h: 57, l: 388, t: 4344 },
  { src: "/images/partner-120-pancho-maiz.png", alt: "Pancho maiz", w: 94, h: 94, l: 673, t: 4316 },
  { src: "/images/partner-122.png", alt: "Partner organization", w: 85, h: 80, l: 906, t: 4332 },
  { src: "/images/partner-123.png", alt: "Partner organization", w: 80, h: 80, l: 1137, t: 4332 },
  { src: "/images/partner-124.png", alt: "Partner organization", w: 133, h: 80, l: 197, t: 4495 },
  { src: "/images/partner-125.png", alt: "Partner organization", w: 205, h: 70, l: 391, t: 4503 },
  { src: "/images/partner-126.png", alt: "Partner organization", w: 188, h: 68, l: 626, t: 4504 },
  { src: "/images/partner-127.png", alt: "Partner organization", w: 184, h: 76, l: 856, t: 4497 },
  { src: "/images/partner-128.png", alt: "Partner organization", w: 78, h: 78, l: 1138, t: 4510 },
  { src: "/images/partner-129.png", alt: "Partner organization", w: 142, h: 80, l: 197, t: 4672 },
  { src: "/images/partner-130.png", alt: "Partner organization", w: 130, h: 80, l: 428, t: 4672 },
  { src: "/images/partner-131.png", alt: "Partner organization", w: 173, h: 55, l: 633, t: 4685 },
  { src: "/images/partner-134.png", alt: "Partner organization", w: 155, h: 82, l: 1099, t: 4671 },
  { src: "/images/partner-135.png", alt: "Partner organization", w: 71, h: 80, l: 233, t: 4849 },
  { src: "/images/partner-136.png", alt: "Partner organization", w: 80, h: 80, l: 453, t: 4849 },
  { src: "/images/partner-137.png", alt: "Partner organization", w: 130, h: 80, l: 656, t: 4849 },
  { src: "/images/partner-138.png", alt: "Partner organization", w: 147, h: 83, l: 886, t: 4847 },
  { src: "/images/partner-139.png", alt: "Partner organization", w: 150, h: 150, l: 1102, t: 4814 },
];

const mobilePartnerLogos = [
  { src: "/images/partner-113.png", alt: "Partner organization" },
  { src: "/images/partner-114.png", alt: "Partner organization" },
  { src: "/images/partner-115.png", alt: "Partner organization" },
  { src: "/images/partner-116.png", alt: "Partner organization" },
  { src: "/images/partner-117.png", alt: "Partner organization" },
  { src: "/images/partner-118.png", alt: "Partner organization" },
  { src: "/images/partner-119.png", alt: "Partner organization" },
  { src: "/images/partner-120-pancho-maiz.png", alt: "Pancho maiz" },
  { src: "/images/partner-122.png", alt: "Partner organization" },
  { src: "/images/partner-123.png", alt: "Partner organization" },
  { src: "/images/partner-124.png", alt: "Partner organization" },
  { src: "/images/partner-125.png", alt: "Partner organization" },
  { src: "/images/partner-126.png", alt: "Partner organization" },
  { src: "/images/partner-127.png", alt: "Partner organization" },
  { src: "/images/partner-128.png", alt: "Partner organization" },
  { src: "/images/partner-129.png", alt: "Partner organization" },
  { src: "/images/partner-130.png", alt: "Partner organization" },
  { src: "/images/partner-131.png", alt: "Partner organization" },
  { src: "/images/partner-134.png", alt: "Partner organization" },
  { src: "/images/partner-135.png", alt: "Partner organization" },
  { src: "/images/partner-136.png", alt: "Partner organization" },
  { src: "/images/partner-137.png", alt: "Partner organization" },
  { src: "/images/partner-138.png", alt: "Partner organization" },
  { src: "/images/partner-139.png", alt: "Partner organization" },
];

export default function WeArePage() {
  return (
    <div className="bg-[#fd1371] flex flex-col overflow-x-hidden">
      <Navbar bg="bg-[#fd1371]" textColor="text-white" ctaBg="bg-white" ctaText="text-[#f90068]" />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main className="hidden md:block">
        <DesktopScale height={7575}>
        <div className="relative" style={{ width: 1440, height: 7575 }}>

          <div className="absolute bg-white" style={{ left: -4, top: 3426, width: 1449, height: 1606 }} />
          <div className="absolute bg-white" style={{ left: -4, top: 5365, width: 1449, height: 2919 }} />

          {/* Pink dots decoration — top left bleed */}
          <div className="absolute overflow-hidden rounded-full pointer-events-none" style={{ left: -180, top: 180, width: 560, height: 560 }}>
            <img src="/images/cn-0104-2.png" alt="" aria-hidden
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0) invert(1)" }} />
          </div>

          <p className="absolute font-[family-name:var(--font-body)] text-[38px] text-white leading-[100.5%]" style={{ left: 388, top: 234, width: 892 }}>
            A collective of practitioners committed to overcome the increasing strategic polarization and how it hinders kinship and{" "}
            <span className="underline">Planetary Health.</span>{" "}
            All of us trying to make sense of the world and how to{" "}
            <span className="font-[family-name:var(--font-heading)] leading-[1.216]">embody alternative futures</span>.
          </p>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[1.216]" style={{ left: 388, top: 806, width: 892 }}>
            We offer tools and spaces for dialogue and collaboration, supporting bridge builders and caregivers with methods, meetings and communities. We come from different cultures and geographies, both nomads and place based individuals, who have met through shared spaces of study.
          </p>

          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1045, width: 1120 }}>
            <p>Our meta-methodology for social innovation for Planetary Health offers a guideline to align the attention and intention of diverse actors and bridge local knowledge and systems with global scientific and practical frameworks.</p>
            <p className="mt-4">We participate in different virtual and physical spaces and engage with communities rooted in diverse ecosystems and bioregions to learn from their practice, wisdom and experience and together convene the elements that nourish local sanctuaries for alternative futures. We bring wisdom and practice from the margins to the focus of transformative actions guided by reciprocity, mutual care and regeneration.</p>
          </div>

          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[40px] text-white text-center leading-[1.216]" style={{ left: 320, top: 1493, width: 801 }}>
            Founding members
          </p>

          {/* Cesar */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 887, top: 1675, width: 350, height: 350 }}>
            <img src="/images/team-cesar.png" alt="Cesar Jerónimo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1750, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">Cesar Jerónimo</p>
            <p className="mt-2">Nomad born in Mexico who loves cultural and ecological diversity, supporting learning and community resilience across his path. Convening and facilitating collaboration for Planetary Health at Cambio Natural, with a focus on marginal practices and the most affected people and areas.</p>
          </div>

          {/* Blaga */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 191, top: 2233, width: 372, height: 372 }}>
            <img src="/images/team-blaga.png" alt="Blaga" className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 616, top: 2260, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">Blaga</p>
            <p className="mt-2">A systems thinker, facilitator and bridge builder driven by curiosity and purpose. I believe that learning and unlearning from each other is key for building the future we desire. At Cambio Natural, I hope to spark collaborative action and work with people and organizations to lead the way to transforming food systems as a path towards Planetary Health.</p>
          </div>

          {/* Marcelo */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 887, top: 2893, width: 350, height: 350 }}>
            <img src="/images/team-marcelo.png" alt="Marcelo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 2931, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">Marcelo</p>
            <p className="mt-2">Political scientist, communication specialist, and ethical-technology polemist, committed to building and nurturing new narratives that help people decolonize both their imagination and behavior. In my work with Cambio Natural, I aim to promote an integrative vision where complex thinking becomes a tool, not a barrier, for creating a world where many worlds can coexist.</p>
          </div>

          {/* Collaboration ecosystem */}
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black" style={{ left: 159, top: 3536, width: 399 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">Our collaboration ecosystem</p>
            <p className="leading-[1.216]">with whom we have taken and shared nourishment:</p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%] tracking-[-0.29px]" style={{ left: 616, top: 3534, width: 664 }}>
            Iran Sosa, Xalli Zuñiga, Ricardo Vazoli, Elena Aguilera, Giorgia Dalla Libera Marchori, Carolina Batista, Jonathan Jennings, Ramon Renzo Guinto, Giulia Sonetti, Carlos Faerron, Mona El Sherbini, Giulio Rubinelli, Samia Dumbuya, Andrea Sahagun, Nicolas Hoyo, Miguel Soto, Javier Zamora, Daniel Apiquian, Enrique Cervantes, Javier Lázaro García, Genoveva de la Peña, Diana Lopez, Javier Lázaro García, Eduardo Ortiz Dante Licona, Laura Pereira, Laura Orestano, Dina Hestad, Nicole De Paula, Vanessa Armendariz, Stephanie Gnissios, Ken Wilson, Chris H. Cullen, Jose DiBella, Mitzi László, Kateryna Kot, Margarita Bárcena, Ana Luisa Islas and many others joining.
          </p>

          {/* Partner logos */}
          {partnerLogos.map((logo, i) => (
            <div key={i} className="absolute overflow-hidden" style={{ left: logo.l, top: logo.t, width: logo.w, height: logo.h }}>
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
            </div>
          ))}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[16px] text-black text-center leading-[1.216]" style={{ left: 615, top: 4396, width: 209 }}>Pancho maiz</p>

          {/* Metalabel CTA */}
          <div className="absolute bg-[#c4e3ff]" style={{ left: 0, top: 5032, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 155 }}>Work in progress</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 188, width: 436 }}>Visit our metalabel</h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 275, width: 364 }}>
              Discover what our community has created around the world, projects that are changing the local environments
            </p>
            <div className="absolute rounded-tr-[267px] overflow-hidden" style={{ left: 635, top: 72, width: 398, height: 270 }}>
              <img src="/images/metacrisis-article-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white border border-black rounded-[5px]" style={{ left: 616, top: 321, width: 436, height: 42 }} />
            <div className="absolute bg-black rounded-[5px]" style={{ left: 1072, top: 321, width: 208, height: 42 }}>
              <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-body)] text-[18px] text-white tracking-[0.36px]">Subscribe</span>
            </div>
          </div>

          {/* Core elements */}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 5624, width: 475 }}>
            Our&nbsp; core elements
          </p>

          {/* Element 1: Nature/ecosystem — blue blob */}
          <div className="absolute overflow-hidden rounded-[100px_130px_100px_200px]" style={{ left: 160, top: 5724, width: 423, height: 446 }}>
            <img src="/images/figuras-azules.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "45% 30%" }} />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 616, top: 5836, width: 694 }}>
            <p><span className="font-[family-name:var(--font-heading)] leading-[1.216]">how do we redefine our relation </span></p>
            <p>with the ecosystem around and inside us?</p>
          </div>

          {/* Element 2: Economy/value — yellow grid ring */}
          <div className="absolute overflow-hidden rounded-bl-[115px]" style={{ left: 868, top: 6141, width: 412, height: 408 }}>
            <img src="/images/cn-0105-1.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 6256, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216] tracking-[-0.16px]">how do we share different types of value</p>
            <p>with reciprocity and care?</p>
          </div>

          {/* Element 3: Technology — pink dots circle */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 1063, top: 6812, width: 652, height: 648 }}>
            <img src="/images/puntos-rosas.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 616, top: 6611, width: 694 }}>
            <p>which technologies are relevant for</p>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">the birth of the futures we desire?</p>
          </div>

          {/* Element 4: Community/kinship — green wavy ring */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 105, top: 6490, width: 457, height: 452 }}>
            <img src="/images/cn-0106-1.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 7031, width: 664 }}>
            <p>how do we organize and collaborate</p>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">centering ecosystemic kinship?</p>
          </div>

          {/* Footer */}
          <div className="absolute bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 7470, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>
              Cambio natural CC BY-NC-ND 4.0
            </p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main className="md:hidden flex flex-col bg-[#fd1371]">
        {/* Hero */}
        <div className="relative px-4 pt-6 pb-6 overflow-hidden">
          <div className="absolute overflow-hidden pointer-events-none" style={{ left: -60, top: 40, width: 160, height: 160 }}>
            <img src="/images/puntos-rosas.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
          <div style={{ paddingLeft: 95 }}>
            <p className="font-[family-name:var(--font-body)] text-[18px] text-white leading-[1.3]">
              A collective of practitioners committed to overcome the increasing strategic polarization and how it hinders kinship and{" "}
              <span className="underline">Planetary Health.</span>{" "}
              All of us trying to make sense of the world and how to{" "}
              <span className="font-[family-name:var(--font-heading)] leading-[1.216]">embody alternative futures</span>.
            </p>
          </div>
        </div>

        {/* About */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-white leading-[1.4] mb-4">
            We offer tools and spaces for dialogue and collaboration, supporting bridge builders and caregivers with methods, meetings and communities. We come from different cultures and geographies, both nomads and place based individuals, who have met through shared spaces of study. Our meta-methodology for social innovation for Planetary Health offers a guideline to align the attention and intention of diverse actors and bridge local knowledge and systems with global scientific and practical frameworks. We participate in different virtual and physical spaces and engage with communities rooted in diverse ecosystems and bioregions to learn from their practice, wisdom and experience and together convene the elements that nourish local sanctuaries for alternative futures. We bring wisdom and practice from the margins to the focus of transformative actions guided by reciprocity, mutual care and regeneration.
          </p>
        </div>

        {/* Founding members */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[28px] text-white leading-[1.2] mb-6">
            Founding members
          </p>

          {/* Cesar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">Cesar Jerónimo</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">
                Nomad born in Mexico who loves cultural and ecological diversity, supporting learning and community resilience across his path. Convening and facilitating collaboration for Planetary Health at Cambio Natural, with a focus on marginal practices and the most affected people and areas.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 132, height: 137 }}>
              <img src="/images/team-cesar.png" alt="Cesar Jerónimo" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Blaga */}
          <div className="flex gap-4 mb-6">
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 135, height: 126 }}>
              <img src="/images/team-blaga.png" alt="Blaga" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">Blaga</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">
                A systems thinker, facilitator and bridge builder driven by curiosity and purpose. I believe that learning and unlearning from each other is key for building the future we desire. At Cambio Natural, I hope to spark collaborative action and work with people and organizations to lead the way to transforming food systems as a path towards Planetary Health.
              </p>
            </div>
          </div>

          {/* Marcelo */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">Marcelo</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">
                Political scientist, communication specialist, and ethical-technology polemist, committed to building and nurturing new narratives that help people decolonize both their imagination and behavior. In my work with Cambio Natural, I aim to promote an integrative vision where complex thinking becomes a tool, not a barrier, for creating a world where many worlds can coexist.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 134, height: 144 }}>
              <img src="/images/team-marcelo.png" alt="Marcelo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Collaboration ecosystem — white section */}
        <div className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-black leading-[1.2] mb-1">Our collaboration ecosystem</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-4">with whom we have taken and shared nourishment:</p>
          <p className="font-[family-name:var(--font-body)] text-[13px] text-black leading-[1.5] mb-6">
            Iran Sosa, Xalli Zuñiga, Ricardo Vazoli, Elena Aguilera, Giorgia Dalla Libera Marchori, Carolina Batista, Jonathan Jennings, Ramon Renzo Guinto, Giulia Sonetti, Carlos Faerron, Mona El Sherbini, Giulio Rubinelli, Samia Dumbuya, Andrea Sahagun, Nicolas Hoyo, Miguel Soto, Javier Zamora, Daniel Apiquian, Enrique Cervantes, Javier Lázaro García, Genoveva de la Peña, Diana Lopez, Javier Lázaro García, Eduardo Ortiz Dante Licona, Laura Pereira, Laura Orestano, Dina Hestad, Nicole De Paula, Vanessa Armendariz, Stephanie Gnissios, Ken Wilson, Chris H. Cullen, Jose DiBella, Mitzi László, Kateryna Kot, Margarita Bárcena, Ana Luisa Islas and many others joining.
          </p>

          {/* Partner logos grid */}
          <div className="flex flex-wrap gap-4 items-center justify-start mb-6">
            {mobilePartnerLogos.map((logo, i) => (
              <div key={i} className="overflow-hidden" style={{ height: 32 }}>
                <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Metalabel CTA */}
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">A community showcase portfolio</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">
            join to our metalabel
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            Do you want to discover what more our community has created?
          </p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 103 }}>
            <img src="/images/metacrisis-article-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
          <a href="https://cambionatural.metalabel.com/" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-6">
            Explore Our Projects
          </a>
        </div>

        {/* Core elements — white section continues */}
        <div className="bg-white px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-6">
            Our core elements
          </p>

          {/* Element 1: Nature/ecosystem — blue blob */}
          <div className="flex gap-4 items-center mb-6">
            <div className="overflow-hidden shrink-0" style={{ width: 125, height: 132, borderRadius: "100px 130px 100px 200px" }}>
              <img src="/images/figuras-azules.png" alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: "45% 30%" }} />
            </div>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              <span className="font-[family-name:var(--font-heading)]">how do we redefine our relation </span>
              with the ecosystem around and inside us?
            </p>
          </div>

          {/* Element 2: Economy/value — yellow grid ring */}
          <div className="flex gap-4 items-center mb-6">
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              <span className="font-[family-name:var(--font-heading)]">how do we share different types of value </span>
              with reciprocity and care?
            </p>
            <div className="overflow-hidden rounded-bl-[30px] shrink-0" style={{ width: 124, height: 123 }}>
              <img src="/images/cn-0105-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Element 3: Technology — pink dots circle */}
          <div className="flex gap-4 items-center mb-6">
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 164, height: 163 }}>
              <img src="/images/puntos-rosas.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              which technologies are relevant for{" "}
              <span className="font-[family-name:var(--font-heading)]">the birth of the futures we desire?</span>
            </p>
          </div>

          {/* Element 4: Community/kinship — green wavy ring */}
          <div className="flex gap-4 items-center mb-6">
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              how do we organize and collaborate{" "}
              <span className="font-[family-name:var(--font-heading)]">centering ecosystemic kinship?</span>
            </p>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 144, height: 135 }}>
              <img src="/images/cn-0106-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white px-4 py-8 border-t border-black/10">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">Join to our waiting list for our Newsletter</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">
            Lets Co-create<br />together
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            Short bi-monthly nuggets on Planetary Health, projects and researchs that are changing the world, delivered to your inbox - No spam, real action.
          </p>
          <div className="rounded-tr-[80px] overflow-hidden mb-4" style={{ height: 179 }}>
            <img src="/images/newsletter-metacrisis.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
          <SubstackEmbed />
        </div>

        {/* Footer */}
        <div className="bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">
            Cambio natural CC BY-NC-ND 4.0
          </p>
        </div>
      </main>
    </div>
  );
}

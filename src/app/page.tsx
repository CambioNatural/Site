import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SubstackEmbed from "@/components/SubstackEmbed";

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

export default function HomePage() {
  return (
    <div className="bg-white flex flex-col overflow-x-hidden">
      <Navbar bg="bg-white" textColor="text-black" ctaBg="bg-[#f90068]" ctaText="text-white" />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main className="hidden md:block">
        <DesktopScale height={3085}>
        <div className="relative" style={{ width: 1440, height: 3085 }}>

          {/* Nature leaf SVG — left bleed */}
          <img src="/images/nature-svg-white.svg" alt="" aria-hidden
            className="absolute pointer-events-none"
            style={{ left: -197, top: 236, width: 458, height: 489 }} />

          {/* Yellow grid blob — top right */}
          <img src="/images/yellow-curve.png" alt="" aria-hidden
            className="absolute pointer-events-none"
            style={{ left: 1136, top: 123, width: 424, height: 446 }} />

          {/* Hero question */}
          <div className="absolute" style={{ left: 261, top: 222, width: 918 }}>
            <p className="font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]">
              ¿How do we meet and collaborate to lead towards agree
            </p>
            <p className="font-[family-name:var(--font-heading)] uppercase text-[33px] text-black leading-[100.5%] mt-1">
              desirable future&nbsp; for all and the planet?
            </p>
          </div>

          {/* TOGETHER wordmark */}
          <div className="absolute" style={{ left: 160, top: 421, width: 663, height: 106 }}>
            <img src="/images/hero-wordmark-together.svg" alt="HERE IS THE DEAL, WE CAN ONLY ACHIEVE IT, TOGETHER" className="w-full h-full object-contain" />
          </div>

          {/* Pink dots circle — to the right of TOGETHER wordmark */}
          <div className="absolute overflow-hidden rounded-full pointer-events-none" style={{ left: 871, top: 369, width: 210, height: 210 }}>
            <img src="/images/cn-0104-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>

          {/* "We are a collective" text */}
          <div className="absolute" style={{ left: 160, top: 852, width: 664 }}>
            <p className="font-[family-name:var(--font-body)] text-[29px] text-black leading-[1.216]">
              <span className="font-[family-name:var(--font-heading)]">We are a collective supporting bridge builders</span>
              {" "}and caregivers with technology, gatherings and community. We bring wisdom and practice from the margins to the focus of transformative actions guided by reciprocity, mutual care and regeneration.
            </p>
          </div>

          {/* Bridge photo — right of "We are" text */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 848, top: 852, width: 431, height: 271 }}>
            <img src="/images/hero-photo-subtract.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black text-center leading-[100.5%]" style={{ left: 249, top: 1257, width: 943 }}>
            This is how we do it together
          </p>

          {/* Cross-sector Collaboration / Global Doughnut México / Media Club — combined box */}
          <div className="absolute rounded-[11px] bg-[#f5f5f3]" style={{ left: 160, top: 1377, width: 1120 }}>
            <div className="grid grid-cols-3 gap-10 p-14">
              <div>
                <div className="overflow-hidden rounded-full" style={{ width: 200, height: 200 }}>
                  <img src="/images/cn-0104-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.216] mt-6 mb-3">
                  Cross-sector Collaboration Framework
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] text-black leading-[1.3]">
                  From the experience of TeamUp, a new cross-sectoral approach to development cooperation in Uganda, we co-designed a Cross-sector Collaboration Management Framework and Toolkit. It is aimed at supporting that young people collaborate with local government, civil society, NGOs and private companies to come together and engage in a purposeful way guided by the principles of Planetary Health and Doughnut Economics.
                </p>
              </div>
              <div>
                <div className="overflow-hidden rounded-full" style={{ width: 200, height: 200 }}>
                  <img src="/images/cn-0105-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.216] mt-6 mb-3">
                  Global Doughnut méxico
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] text-black leading-[1.3]">
                  We co-organized the three day gathering focused on approaching alternative economic frameworks and practices - using the Doughnut Economics framework as guide, together with Coalición Tricolor, a member of the Doughnut Economics Action Lab community.
                </p>
              </div>
              <div>
                <div className="overflow-hidden rounded-full" style={{ width: 200, height: 200 }}>
                  <img src="/images/cn-0106-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
                </div>
                <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.216] mt-6 mb-3">
                  Media Club
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] text-black leading-[1.3]">
                  A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.
                </p>
              </div>
            </div>
          </div>

          {/* Article card */}
          <div className="absolute rounded-[11px] bg-[#f2d607]" style={{ left: 364, top: 2163, width: 712, height: 214 }}>
            <div className="absolute overflow-hidden rounded" style={{ left: 272, top: 59, width: 208, height: 155 }}>
              <img src="/images/article-bdfm.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white rounded" style={{ left: 468, top: 9, width: 230, height: 194 }}>
              <p className="absolute font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.216] tracking-[0.28px]" style={{ left: 12, top: 11, width: 208 }}>
                Have you ever thought about how the each crisis are conected? theres critila point that detonate and internonect cisis in each context...
              </p>
            </div>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 24, top: 29 }}>Article - Substrack</p>
            <p className="absolute font-[family-name:var(--font-heading)] text-[29px] text-black leading-[1.14]" style={{ left: 24, top: 51, width: 231 }}>Failure as a tool for liberation</p>
            <a href="https://substack.com/" target="_blank" rel="noopener noreferrer"
              className="absolute font-[family-name:var(--font-body)] text-[18px] text-black underline leading-[1.216] tracking-[0.36px]"
              style={{ left: 24, top: 146 }}>Read me</a>
          </div>

          {/* Newsletter */}
          <div className="absolute bg-white" style={{ left: -1, top: 2483, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 159, top: 155 }}>Join to Newsletter</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 159, top: 188, width: 436 }}>
              Lets Co-create<br />together
            </h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 159, top: 275, width: 364 }}>
              Short bi-monthly nuggets on Planetary Health, projects and researchs that are changing the world, delivered to your inbox - No spam, real action.
            </p>
            <div className="absolute rounded-tr-[267px] overflow-hidden" style={{ left: 634, top: 72, width: 398, height: 270 }}>
              <img src="/images/newsletter-metacrisis.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <div className="absolute" style={{ left: 615, top: 360, width: 436, height: 130 }}>
              <SubstackEmbed />
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 2980, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>
              Cambio natural CC BY-NC-ND 4.0
            </p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main className="md:hidden flex flex-col bg-white overflow-x-hidden">

        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: 174 }}>
          <img src="/images/nature-svg-white.svg" alt="" aria-hidden
            className="absolute pointer-events-none"
            style={{ left: -55, top: 43, width: 132, height: 131 }} />
          <img src="/images/yellow-curve.png" alt="" aria-hidden
            className="absolute pointer-events-none"
            style={{ right: -20, top: 0, width: 93, height: 98 }} />

          <div className="relative px-4 pb-6 z-10" style={{ paddingTop: 20 }}>
            <p className="font-[family-name:var(--font-body)] text-[20px] text-black leading-[1.2]">
              ¿How do we meet and collaborate to lead towards a
            </p>
            <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.1] mt-1">
              desirable future for all and the planet?
            </p>
          </div>
        </div>

        {/* TOGETHER wordmark + pink dots circle */}
        <div className="px-4 pb-5 flex items-center gap-3">
          <img src="/images/hero-wordmark-together.svg" alt="HERE IS THE DEAL, WE CAN ONLY ACHIEVE IT, TOGETHER" className="flex-1 min-w-0 object-contain" />
          <div className="overflow-hidden rounded-full shrink-0 pointer-events-none" style={{ width: 80, height: 80 }}>
            <img src="/images/cn-0104-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
        </div>

        {/* We are + bridge photo */}
        <div className="flex gap-3 px-4 pb-6 items-start">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.35]" style={{ width: 212 }}>
            <span className="font-[family-name:var(--font-heading)]">We are a collective supporting bridge builders</span>
            {" "}and caregivers with technology, gatherings and community. We bring wisdom and practice from the margins to the focus of transformative actions guided by reciprocity, mutual care and regeneration.
          </p>
          <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 136, height: 111 }}>
            <img src="/images/hero-photo-subtract.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="px-4 pb-6 text-center">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[20px] text-black leading-[1.2]">
            This is how we do it together
          </p>
        </div>

        {/* Cross-sector Collaboration / Global Doughnut México / Media Club — combined box */}
        <div className="mx-4 mb-6 rounded-[11px] bg-[#f5f5f3] px-5 py-6">
          <div className="mb-8">
            <div className="overflow-hidden rounded-full" style={{ width: 100, height: 100 }}>
              <img src="/images/cn-0104-2.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] uppercase text-[18px] text-black leading-[1.2] mt-4 mb-2">
              Cross-sector Collaboration Framework
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-black leading-[1.4]">
              From the experience of TeamUp, a new cross-sectoral approach to development cooperation in Uganda, we co-designed a Cross-sector Collaboration Management Framework and Toolkit.
            </p>
          </div>

          <div className="mb-8">
            <div className="overflow-hidden rounded-full" style={{ width: 100, height: 100 }}>
              <img src="/images/cn-0105-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] uppercase text-[18px] text-black leading-[1.2] mt-4 mb-2">
              Global Doughnut méxico
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-black leading-[1.4]">
              We co-organized the three day gathering focused on approaching alternative economic frameworks and practices using the Doughnut Economics framework as guide.
            </p>
          </div>

          <div>
            <div className="overflow-hidden rounded-full" style={{ width: 100, height: 100 }}>
              <img src="/images/cn-0106-1.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <h2 className="font-[family-name:var(--font-heading)] uppercase text-[18px] text-black leading-[1.2] mt-4 mb-2">
              Media Club
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-black leading-[1.4]">
              A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems.
            </p>
          </div>
        </div>

        {/* Article card */}
        <div className="mx-4 mb-6 rounded-[11px] bg-[#f2d607] overflow-hidden" style={{ height: 108 }}>
          <div className="relative h-full">
            <div className="absolute overflow-hidden rounded" style={{ left: 159, top: 15, width: 105, height: 78 }}>
              <img src="/images/article-bdfm.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white rounded" style={{ left: 257, top: 5, width: 102, height: 97 }}>
              <p className="absolute font-[family-name:var(--font-body)] text-[9px] text-black leading-[1.3]" style={{ left: 6, top: 6, right: 4 }}>
                Have you ever thought about how each crisis is connected? there's a critical point that detonates and interconnects crises...
              </p>
            </div>
            <p className="absolute font-[family-name:var(--font-body)] text-[11px] text-black leading-[1.3]" style={{ left: 12, top: 14 }}>Article - Substrack</p>
            <p className="absolute font-[family-name:var(--font-heading)] text-[14px] text-black leading-[1.2]" style={{ left: 12, top: 25, width: 116 }}>Failure as a tool for liberation</p>
            <a href="https://substack.com/" target="_blank" rel="noopener noreferrer"
              className="absolute font-[family-name:var(--font-body)] text-[11px] text-black underline"
              style={{ left: 12, top: 73 }}>Read me</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white px-4 py-8">
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

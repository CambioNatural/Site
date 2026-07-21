import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SubstackEmbed from "@/components/SubstackEmbed";

export const metadata: Metadata = {
  title: "Media Club",
  description:
    "The Media Club is a shared learning and conversation circle for honest, thoughtful conversations about the media that shapes our lives. We meet every two months for a 90-minute virtual session to question our assumptions and imagine paths toward collective action.",
  alternates: { canonical: "/media-club" },
  openGraph: {
    url: "/media-club",
    title: "Media Club — Cambio Natural",
    description:
      "A reading, listening and conversation circle exploring how personal choices connect with power, governance and the systems we depend on.",
  },
  twitter: {
    title: "Media Club — Cambio Natural",
    description:
      "A reading, listening and conversation circle exploring how personal choices connect with power, governance and the systems we depend on.",
  },
};

export default function MediaClubPage() {
  return (
    <div className="bg-[#17ba4f] flex flex-col overflow-x-hidden">
      <Navbar bg="bg-[#17ba4f]" textColor="text-black" ctaBg="bg-black" ctaText="text-white" />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main className="hidden md:block">
        <DesktopScale height={2398}>
        <div className="relative" style={{ width: 1440, height: 2398 }}>

          <div className="absolute overflow-hidden" style={{ left: -227, top: 102, width: 591, height: 586 }}>
            <img src="/images/rallitas-negro.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-bottom" />
          </div>

          <p className="absolute font-[family-name:var(--font-body)] text-[38px] text-black leading-[1.216]" style={{ left: 388, top: 234, width: 892 }}>
            The Media Club is a space for honest, thoughtful conversations about{" "}
            <span className="font-[family-name:var(--font-heading)]">the media that shape our lives.</span>
            {" "}We explore how personal choices connect with larger structures like power, governance and earths natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.
          </p>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 388, top: 806, width: 892 }}>
            This reading/listening/observing and conversation circle isn't a traditional book club. It's a place for people who want to understand our moment more deeply and imagine, together, new paths toward collective action. Each session invites us to slow down, pay attention carefully, and engage with ideas in a way that feels grounded. We connect what we read with our own experiences and look for the small openings where change becomes possible.
          </p>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 1250, width: 1120 }}>
            We meet once every two months for a 90-minute virtual session. The flow is simple but intentional: we begin with a short welcome and an icebreaker that helps us enter the piece of media; then we walk through the key ideas of the piece; after that, we open a guided conversation where everyone can share insights, questions, and reflections; and we close by exploring how these ideas can shape real decisions and real challenges in our daily lives and communities.
          </p>

          <div className="absolute bg-black rounded-[5px]" style={{ left: 697, top: 1132, width: 274, height: 58 }}>
            <a href="https://cambionatural.dfos.com/" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center tracking-[0.36px] leading-[1.216]">
              Access the club
            </a>
          </div>

          {/* Article card */}
          <div className="absolute rounded-[11px] bg-[#f2d607]" style={{ left: 364, top: 1565, width: 712, height: 214 }}>
            <div className="absolute overflow-hidden rounded" style={{ left: 272, top: 59, width: 208, height: 155 }}>
              <img src="/images/article-bdfm.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white rounded" style={{ left: 468, top: 9, width: 230, height: 194 }}>
              <p className="absolute font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.216]" style={{ left: 12, top: 11, width: 208 }}>
                Have you ever thought about how the each crisis are conected? theres critila point that detonate and internonect cisis in each context...
              </p>
            </div>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 24, top: 29 }}>Article - Substrac</p>
            <p className="absolute font-[family-name:var(--font-heading)] text-[29px] text-black leading-[1.14]" style={{ left: 24, top: 51, width: 231 }}>Failure as a tool for liberation</p>
            <span className="absolute font-[family-name:var(--font-body)] text-[18px] text-black underline leading-[1.216] cursor-pointer" style={{ left: 24, top: 146 }}>Read me</span>
          </div>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 1884, width: 1108 }}>
            The Media Club is a shared learning space, a place to understand more clearly, question what we assume, and cultivate the ability to act with awareness, care, and imagination within the systems we all depend on.
          </p>

          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black text-center leading-[1.216]" style={{ left: 309, top: 2087, width: 820 }}>
            Connection statement for building community and share knowledge
          </p>

          {/* Footer */}
          <div className="absolute bg-[#17ba4f] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 2293, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>
              Cambio natural CC BY-NC-ND 4.0
            </p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main className="md:hidden flex flex-col bg-[#17ba4f]">
        {/* Hero */}
        <div className="flex gap-3 px-4 pt-6 pb-6 items-start overflow-hidden">
          {/* Decorative stripes — clipped left-bleed column */}
          <div className="overflow-hidden shrink-0 rounded-lg" style={{ width: 80, height: 140 }}>
            <img src="/images/rallitas-negro.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[16px] text-black leading-[1.3] flex-1">
            The Media Club is a space for honest, thoughtful conversations about{" "}
            <span className="font-[family-name:var(--font-heading)]">the media that shape our lives.</span>
            {" "}We explore how personal choices connect with larger structures like power, governance and earths natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.
          </p>
        </div>

        {/* Body text */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] mb-4">
            This reading/listening/observing and conversation circle isn't a traditional book club. It's a place for people who want to understand our moment more deeply and imagine, together, new paths toward collective action. Each session invites us to slow down, pay attention carefully, and engage with ideas in a way that feels grounded. We connect what we read with our own experiences and look for the small openings where change becomes possible. We meet once every two months for a 90-minute virtual session. The flow is simple but intentional: we begin with a short welcome and an icebreaker that helps us enter the piece of media; then we walk through the key ideas of the piece; after that, we open a guided conversation where everyone can share insights, questions, and reflections; and we close by exploring how these ideas can shape real decisions and real challenges in our daily lives and communities.
          </p>

          {/* Access the club CTA */}
          <a href="https://cambionatural.dfos.com/" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-6">
            Access the club
          </a>
        </div>

        {/* Article card */}
        <div className="mx-4 mb-6 rounded-[11px] bg-[#f2d607] p-4">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">Article - Substrac</p>
          <div className="flex gap-3">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[20px] text-black leading-[1.2] mb-2">Failure as a tool for liberation</p>
              <span className="font-[family-name:var(--font-body)] text-[14px] text-black underline cursor-pointer">Read me</span>
            </div>
            <div className="shrink-0 overflow-hidden rounded" style={{ width: 107, height: 80 }}>
              <img src="/images/article-bdfm.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-white rounded p-2 mt-3">
            <p className="font-[family-name:var(--font-body)] text-[12px] text-black leading-[1.3]">
              Have you ever thought about how the each crisis are conected? theres critila point that detonate and internonect cisis in each context...
            </p>
          </div>
        </div>

        {/* Shared learning */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] mb-4">
            The Media Club is a shared learning space, a place to understand more clearly, question what we assume, and cultivate the ability to act with awareness, care, and imagination within the systems we all depend on.
          </p>
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
        <div className="bg-[#17ba4f] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">
            Cambio natural CC BY-NC-ND 4.0
          </p>
        </div>
      </main>
    </div>
  );
}

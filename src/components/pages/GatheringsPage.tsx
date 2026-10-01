import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SectionDots from "@/components/SectionDots";
import SubstackEmbed from "@/components/SubstackEmbed";
import type {CmsPageContent} from '@/lib/cms/page-content';
import type {CmsDocument} from '@/lib/cms/schema';
export default function GatheringsPage({content,navigation,newsletterUrl}:{content:CmsPageContent;navigation:CmsDocument['navigation'];newsletterUrl:string}){

  return (
    <div className="scroll-navigation-page bg-[#0070f9] flex flex-col overflow-x-clip">
      <Navbar navigation={navigation} bg="bg-[#0070f9]" textColor="text-white" ctaBg="bg-white" ctaText="text-[#0070f9]" />
      <SectionDots />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="hidden md:block">
        <DesktopScale height={3838}>
        <div className="relative" style={{ width: 1440, height: 3838 }}>

          {/* Gathering hero globe — top left bleed, white mosaic shape on blue bg */}
          <div className="absolute overflow-hidden rounded-full pointer-events-none" style={{ left: -220, top: 160, width: 560, height: 560 }}>
            <img src={content.images.i1.src} alt={content.images.i1.alt}
              className="absolute inset-0 w-full h-full object-contain"
              style={{ filter: "brightness(0) invert(1)" }} />
          </div>

          <div className="absolute overflow-hidden" style={{ left: 388, top: 234, width: 892 }}>
            <p className="font-[family-name:var(--font-body)] text-[38px] text-white leading-[100.5%]">{content.texts.t1}<span className="underline">{content.texts.t2}</span>{content.texts.t3}{" "}
              <span className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t4}</span>
            </p>
          </div>


          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%] tracking-[-0.29px]" style={{ left: 616, top: 806, width: 664 }}>{content.texts.t5}</p>

          {/* Online dialogue */}
          <div data-scroll-section="Online dialogues" className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1086, width: 436 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t6}</p>
            <p>{content.texts.t7}</p>
            <p className="italic">{content.texts.t8}</p>
            <a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 block mt-2">{content.texts.t9}</a>
            <p className="mt-4">{content.texts.t10}</p>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 616, top: 1086, width: 574, height: 300 }}>
            <img src={content.images.i2.src} alt={content.images.i2.alt} className="w-full h-full object-cover" />
          </div>

          {/* Community care */}
          <div data-scroll-section="Community care" className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1850, width: 436 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t11}</p>
            <p className="mt-4">{content.texts.t12}</p>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 616, top: 1850, width: 244, height: 300 }}>
            <img src={content.images.i3.src} alt={content.images.i3.alt} className="w-full h-full object-cover object-bottom" />
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 894, top: 1850, width: 378, height: 300 }}>
            <img src={content.images.i4.src} alt={content.images.i4.alt} className="w-full h-full object-cover object-bottom" />
          </div>

          {/* Transformative learning */}
          <div data-scroll-section="Transformative learning" className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 2496, width: 436 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t13}</p>
            <p className="mt-4">{content.texts.t14}</p>
          </div>
          <div className="absolute overflow-x-auto overflow-y-clip" style={{ left: 616, top: 2496, width: 656, height: 350 }}>
            <div className="absolute" style={{ left: 0, top: 1, width: 278, height: 347 }}>
              <img src={content.images.i5.src} alt={content.images.i5.alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute" style={{ left: 304, top: 1, width: 360, height: 347 }}>
              <img src={content.images.i6.src} alt={content.images.i6.alt} className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="absolute" style={{ left: 690, top: 1, width: 354, height: 346 }}>
              <img src={content.images.i7.src} alt={content.images.i7.alt} className="w-full h-full object-cover object-bottom" />
            </div>
          </div>

          {/* Newsletter */}
          <div data-scroll-section="Newsletter" className="absolute bg-white" style={{ left: 0, top: 3236, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 155 }}>{content.texts.t15}</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 188, width: 436 }}>{content.texts.t16}<br />{content.texts.t17}</h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 275, width: 364 }}>{content.texts.t18}</p>
            <div className="absolute rounded-tr-[267px] overflow-hidden" style={{ left: 635, top: 72, width: 398, height: 270 }}>
              <img src={content.images.i8.src} alt={content.images.i8.alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute" style={{ left: 616, top: 360, width: 436, height: 130 }}>
              <SubstackEmbed url={newsletterUrl} />
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bg-[#0070f9] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 3733, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>{content.texts.t19}</p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="md:hidden flex flex-col bg-[#0070f9]">
        {/* Hero */}
        <div className="flex gap-3 px-4 pt-6 pb-6 items-start">
          {/* Rotated hero image */}
          <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 95, height: 142 }}>
            <img src={content.images.i1.src} alt={content.images.i1.alt}
              className="w-full h-full object-cover"
              style={{ transform: "rotate(34.73deg) scale(1.8)", transformOrigin: "center" }} />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3] flex-1">{content.texts.t1}<span className="underline">{content.texts.t2}</span>{content.texts.t3}{" "}
            <span className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t4}</span>
          </p>
        </div>

        {/* Intro */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-white leading-[1.4]">{content.texts.t5}</p>
        </div>

        {/* Online dialogue */}
        <div data-scroll-section="Online dialogues" className="px-4 pb-6">
          <div className="mb-3">
            <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2]">{content.texts.t6}</p>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3]">{content.texts.t7}</p>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3] italic">{content.texts.t8}</p>
            <a href={content.links.l1} target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-body)] text-[16px] text-white underline block mt-1">{content.texts.t9}</a>
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">{content.texts.t10}</p>
          <div className="overflow-hidden rounded-lg" style={{ height: 193 }}>
            <img src={content.images.i2.src} alt={content.images.i2.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Community care */}
        <div data-scroll-section="Community care" className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2] mb-2">{content.texts.t11}</p>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">{content.texts.t12}</p>
          <div className="flex gap-3" style={{ height: 193 }}>
            <div className="overflow-hidden rounded-lg" style={{ width: "41%" }}>
              <img src={content.images.i3.src} alt={content.images.i3.alt} className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="overflow-hidden rounded-lg flex-1">
              <img src={content.images.i4.src} alt={content.images.i4.alt} className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>

        {/* Transformative learning */}
        <div data-scroll-section="Transformative learning" className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2] mb-2">{content.texts.t13}</p>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">{content.texts.t14}</p>
          {/* Photo row — scrollable */}
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ height: 193 }}>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 154 }}>
              <img src={content.images.i5.src} alt={content.images.i5.alt} className="w-full h-full object-cover" />
            </div>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 200 }}>
              <img src={content.images.i6.src} alt={content.images.i6.alt} className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 198 }}>
              <img src={content.images.i7.src} alt={content.images.i7.alt} className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div data-scroll-section="Newsletter" className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t20}</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">{content.texts.t16}<br />{content.texts.t17}</h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t18}</p>
          <div className="rounded-tr-[80px] overflow-hidden mb-4" style={{ height: 179 }}>
            <img src={content.images.i8.src} alt={content.images.i8.alt} className="w-full h-full object-cover" />
          </div>
          <SubstackEmbed url={newsletterUrl} />
        </div>

        {/* Footer */}
        <div className="bg-[#0070f9] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">{content.texts.t19}</p>
        </div>
      </main>
    </div>
  );

}

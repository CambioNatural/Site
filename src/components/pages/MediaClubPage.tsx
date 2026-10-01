import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SectionDots from "@/components/SectionDots";
import SubstackEmbed from "@/components/SubstackEmbed";
import type {CmsPageContent} from '@/lib/cms/page-content';
import type {CmsDocument} from '@/lib/cms/schema';
export default function MediaClubPage({content,navigation,newsletterUrl}:{content:CmsPageContent;navigation:CmsDocument['navigation'];newsletterUrl:string}){

  return (
    <div className="scroll-navigation-page bg-[#17ba4f] flex flex-col overflow-x-clip">
      <Navbar navigation={navigation} bg="bg-[#17ba4f]" textColor="text-black" ctaBg="bg-black" ctaText="text-white" />
      <SectionDots />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="hidden md:block">
        <DesktopScale height={2398}>
        <div className="relative" style={{ width: 1440, height: 2398 }}>

          <div className="absolute overflow-hidden" style={{ left: -227, top: 102, width: 591, height: 586 }}>
            <img src={content.images.i1.src} alt={content.images.i1.alt} className="absolute inset-0 w-full h-full object-cover object-bottom" />
          </div>

          <p className="absolute font-[family-name:var(--font-body)] text-[38px] text-black leading-[1.216]" style={{ left: 388, top: 234, width: 892 }}>{content.texts.t1}{" "}
            <span className="font-[family-name:var(--font-heading)]">{content.texts.t2}</span>
            {" "}{content.texts.t3}</p>

          <p data-scroll-section="About the club" className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 388, top: 806, width: 892 }}>{content.texts.t4}</p>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 1250, width: 1120 }}>{content.texts.t5}</p>

          <div className="absolute bg-black rounded-[5px]" style={{ left: 697, top: 1132, width: 274, height: 58 }}>
            <a href={content.links.l1} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center tracking-[0.36px] leading-[1.216]">{content.texts.t6}</a>
          </div>

          {/* Article card */}
          <div data-scroll-section="Featured article" className="absolute rounded-[11px] bg-[#f2d607]" style={{ left: 364, top: 1565, width: 712, height: 214 }}>
            <div className="absolute overflow-hidden rounded" style={{ left: 272, top: 59, width: 208, height: 155 }}>
              <img src={content.images.i2.src} alt={content.images.i2.alt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white rounded" style={{ left: 468, top: 9, width: 230, height: 194 }}>
              <p className="absolute font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.216]" style={{ left: 12, top: 11, width: 208 }}>{content.texts.t7}</p>
            </div>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 24, top: 29 }}>{content.texts.t8}</p>
            <p className="absolute font-[family-name:var(--font-heading)] text-[29px] text-black leading-[1.14]" style={{ left: 24, top: 51, width: 231 }}>{content.texts.t9}</p>
            <span className="absolute font-[family-name:var(--font-body)] text-[18px] text-black underline leading-[1.216] cursor-pointer" style={{ left: 24, top: 146 }}>{content.texts.t10}</span>
          </div>

          <p data-scroll-section="Shared learning" className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 1884, width: 1108 }}>{content.texts.t11}</p>

          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black text-center leading-[1.216]" style={{ left: 309, top: 2087, width: 820 }}>{content.texts.t12}</p>

          {/* Footer */}
          <div className="absolute bg-[#17ba4f] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 2293, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>{content.texts.t13}</p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="md:hidden flex flex-col bg-[#17ba4f]">
        {/* Hero */}
        <div className="flex gap-3 px-4 pt-6 pb-6 items-start overflow-hidden">
          {/* Decorative stripes — clipped left-bleed column */}
          <div className="overflow-hidden shrink-0 rounded-lg" style={{ width: 80, height: 140 }}>
            <img src={content.images.i1.src} alt={content.images.i1.alt} className="w-full h-full object-cover" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[16px] text-black leading-[1.3] flex-1">{content.texts.t1}{" "}
            <span className="font-[family-name:var(--font-heading)]">{content.texts.t2}</span>
            {" "}{content.texts.t3}</p>
        </div>

        {/* Body text */}
        <div data-scroll-section="About the club" className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] mb-4">{content.texts.t14}</p>

          {/* Access the club CTA */}
          <a href={content.links.l1} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-6">{content.texts.t6}</a>
        </div>

        {/* Article card */}
        <div data-scroll-section="Featured article" className="mx-4 mb-6 rounded-[11px] bg-[#f2d607] p-4">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t8}</p>
          <div className="flex gap-3">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[20px] text-black leading-[1.2] mb-2">{content.texts.t9}</p>
              <span className="font-[family-name:var(--font-body)] text-[14px] text-black underline cursor-pointer">{content.texts.t10}</span>
            </div>
            <div className="shrink-0 overflow-hidden rounded" style={{ width: 107, height: 80 }}>
              <img src={content.images.i2.src} alt={content.images.i2.alt} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-white rounded p-2 mt-3">
            <p className="font-[family-name:var(--font-body)] text-[12px] text-black leading-[1.3]">{content.texts.t7}</p>
          </div>
        </div>

        {/* Shared learning */}
        <div data-scroll-section="Shared learning" className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] mb-4">{content.texts.t11}</p>
        </div>

        {/* Newsletter */}
        <div data-scroll-section="Newsletter" className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t15}</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">{content.texts.t16}<br />{content.texts.t17}</h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t18}</p>
          <div className="rounded-tr-[80px] overflow-hidden mb-4" style={{ height: 179 }}>
            <img src={content.images.i3.src} alt={content.images.i3.alt} className="w-full h-full object-cover" />
          </div>
          <SubstackEmbed url={newsletterUrl} />
        </div>

        {/* Footer */}
        <div className="bg-[#17ba4f] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">{content.texts.t13}</p>
        </div>
      </main>
    </div>
  );

}

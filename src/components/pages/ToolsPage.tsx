import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SectionDots from "@/components/SectionDots";
import type {CmsPageContent} from '@/lib/cms/page-content';
import type {CmsDocument} from '@/lib/cms/schema';
export default function ToolsPage({content,navigation,newsletterUrl}:{content:CmsPageContent;navigation:CmsDocument['navigation'];newsletterUrl:string}){

  return (
    <div className="scroll-navigation-page bg-[#f4e509] flex flex-col overflow-x-clip">
      <Navbar navigation={navigation} bg="bg-[#f4e509]" textColor="text-black" ctaBg="bg-black" ctaText="text-[#f4e509]" />
      <SectionDots />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="hidden md:block">
        <DesktopScale height={4018}>
        <div className="relative" style={{ width: 1440, height: 4018 }}>

          <div className="absolute overflow-hidden rounded-bl-[115px]" style={{ left: 1054, top: -102, width: 645, height: 638 }}>
            <img src={content.images.i1.src} alt={content.images.i1.alt} className="absolute inset-0 w-full h-full object-cover object-bottom" />
          </div>

          <div className="absolute" style={{ left: 160, top: 290, width: 860 }}>
            <p className="font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]">{content.texts.t1}</p>
            <p className="font-[family-name:var(--font-heading)] uppercase text-[33px] text-black leading-[100.5%] mt-1">{content.texts.t2}</p>
          </div>

          {/* FOR NATURE */}
          <p data-scroll-section="Nature" className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 806, width: 366 }}>{content.texts.t3}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 160, top: 853, width: 436 }}>{content.texts.t4}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%]" style={{ left: 160, top: 904, width: 664 }}>{content.texts.t5}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 304, top: 1512, width: 377 }}>{content.texts.t6}{" "}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">{content.texts.t7}</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 304, top: 1450, width: 377, height: 53 }}>
            <a href={content.links.l2} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">{content.texts.t8}</a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 890, top: 992, width: 350, height: 350 }}>
            <img src={content.images.i2.src} alt={content.images.i2.alt} className="w-full h-full object-cover" />
          </div>

          {/* FOR ECONOMY */}
          <p data-scroll-section="Economy" className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 616, top: 1626, width: 436 }}>{content.texts.t9}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 616, top: 1673, width: 436 }}>{content.texts.t10}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%]" style={{ left: 616, top: 1724, width: 664 }}>{content.texts.t11}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 759, top: 2227, width: 377 }}>{content.texts.t6}{" "}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">{content.texts.t7}</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 760, top: 2164, width: 377, height: 53 }}>
            <a href={content.links.l3} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">{content.texts.t8}</a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 238, top: 1743, width: 265, height: 350 }}>
            <img src={content.images.i3.src} alt={content.images.i3.alt} className="w-full h-full object-cover" />
          </div>

          {/* FOR TECHNOLOGY */}
          <p data-scroll-section="Technology" className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 2360, width: 436 }}>{content.texts.t12}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 160, top: 2407, width: 436 }}>{content.texts.t13}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%]" style={{ left: 160, top: 2458, width: 668 }}>{content.texts.t14}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 305, top: 2716, width: 377 }}>{content.texts.t6}{" "}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">{content.texts.t7}</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 306, top: 2653, width: 377, height: 53 }}>
            <a href={content.links.l4} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">{content.texts.t8}</a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 885, top: 2497, width: 380, height: 97 }}>
            <img src={content.images.i4.src} alt={content.images.i4.alt} className="w-full h-full object-cover" />
          </div>

          {/* FOR COMMUNITY */}
          <p data-scroll-section="Community" className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 616, top: 2839, width: 436 }}>{content.texts.t15}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 616, top: 2886, width: 436 }}>{content.texts.t16}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%] tracking-[-0.58px]" style={{ left: 616, top: 2937, width: 664 }}>{content.texts.t17}</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 752, top: 3300, width: 377 }}>{content.texts.t6}{" "}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">{content.texts.t7}</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 760, top: 3237, width: 377, height: 53 }}>
            <a href={content.links.l5} target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">{content.texts.t8}</a>
          </div>
          <div className="absolute overflow-hidden rounded-lg mix-blend-multiply" style={{ left: 216, top: 2905, width: 366, height: 352 }}>
            <img src={content.images.i5.src} alt={content.images.i5.alt} className="w-full h-full object-cover" />
          </div>

          {/* JOIN OUR METALABEL */}
          <div data-scroll-section="Metalabel" className="absolute bg-white" style={{ left: 0, top: 3416, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 156 }}>{content.texts.t18}</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 189, width: 436 }}>{content.texts.t19}<br />{content.texts.t20}</h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 276, width: 364 }}>{content.texts.t21}{" "}{content.texts.t22}</p>
            <div className="absolute overflow-hidden rounded-lg" style={{ left: 612, top: 111, width: 662, height: 276 }}>
              <img src={content.images.i6.src} alt={content.images.i6.alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-[#f90068] rounded-[5px]" style={{ left: 831, top: 254, width: 208, height: 58 }}>
              <a href={content.links.l6} target="_blank" rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">{content.texts.t23}</a>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bg-[#f4e509] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 3913, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>{content.texts.t24}</p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="md:hidden flex flex-col bg-[#f4e509]">
        {/* Hero */}
        <div className="px-4 pt-6 pb-6 text-center">
          <p className="font-[family-name:var(--font-body)] text-[20px] text-black leading-[1.3] mb-1">{content.texts.t1}</p>
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.1]">{content.texts.t2}</p>
        </div>

        {/* FOR NATURE */}
        <div data-scroll-section="Nature" className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">{content.texts.t3}</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">{content.texts.t4}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 128 }}>
            <img src={content.images.i2.src} alt={content.images.i2.alt} className="w-full h-full object-cover" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t5}</p>
          <a href={content.links.l2} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">{content.texts.t8}</a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">{content.texts.t25}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline">{content.texts.t7}</a>
          </p>
        </div>

        {/* FOR ECONOMY */}
        <div data-scroll-section="Economy" className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">{content.texts.t9}</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">{content.texts.t10}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 128 }}>
            <img src={content.images.i3.src} alt={content.images.i3.alt} className="w-full h-full object-cover" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t11}</p>
          <a href={content.links.l3} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">{content.texts.t8}</a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">{content.texts.t25}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline">{content.texts.t7}</a>
          </p>
        </div>

        {/* FOR TECHNOLOGY */}
        <div data-scroll-section="Technology" className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">{content.texts.t12}</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">{content.texts.t13}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 99 }}>
            <img src={content.images.i4.src} alt={content.images.i4.alt} className="w-full h-full object-cover" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t14}</p>
          <a href={content.links.l4} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">{content.texts.t8}</a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">{content.texts.t25}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline">{content.texts.t7}</a>
          </p>
        </div>

        {/* FOR COMMUNITY */}
        <div data-scroll-section="Community" className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">{content.texts.t15}</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">{content.texts.t16}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 152 }}>
            <img src={content.images.i5.src} alt={content.images.i5.alt} className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t17}</p>
          <a href={content.links.l5} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">{content.texts.t8}</a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">{content.texts.t25}<a href={content.links.l1} target="_blank" rel="noopener noreferrer" className="underline">{content.texts.t7}</a>
          </p>
        </div>

        {/* Metalabel CTA */}
        <div data-scroll-section="Metalabel" className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t18}</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">{content.texts.t19}<br />{content.texts.t20}</h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t26}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 168 }}>
            <img src={content.images.i6.src} alt={content.images.i6.alt} className="w-full h-full object-cover" />
          </div>
          <a href={content.links.l6} target="_blank" rel="noopener noreferrer"
            className="block bg-[#f90068] rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3">{content.texts.t23}</a>
        </div>

        {/* Footer */}
        <div className="bg-[#f4e509] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">{content.texts.t24}</p>
        </div>
      </main>
    </div>
  );

}

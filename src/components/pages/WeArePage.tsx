import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";
import SectionDots from "@/components/SectionDots";
import SubstackEmbed from "@/components/SubstackEmbed";
import type {CmsPageContent} from '@/lib/cms/page-content';
import type {CmsDocument} from '@/lib/cms/schema';
export default function WeArePage({content,navigation,newsletterUrl}:{content:CmsPageContent;navigation:CmsDocument['navigation'];newsletterUrl:string}){
const partnerLogos = [
  { src: content.images.i1.src, alt: content.images.i1.alt, w: 173, h: 82, l: 177, t: 4167 },
  { src: content.images.i2.src, alt: content.images.i2.alt, w: 173, h: 68, l: 407, t: 4174 },
  { src: content.images.i3.src, alt: content.images.i3.alt, w: 173, h: 43, l: 633, t: 4187 },
  { src: content.images.i4.src, alt: content.images.i4.alt, w: 173, h: 77, l: 862, t: 4170 },
  { src: content.images.i5.src, alt: content.images.i5.alt, w: 173, h: 59, l: 1090, t: 4175 },
  { src: content.images.i6.src, alt: content.images.i6.alt, w: 80, h: 80, l: 224, t: 4332 },
  { src: content.images.i7.src, alt: content.images.i7.alt, w: 210, h: 57, l: 388, t: 4344 },
  { src: content.images.i8.src, alt: content.images.i8.alt, w: 94, h: 94, l: 673, t: 4316 },
  { src: content.images.i9.src, alt: content.images.i9.alt, w: 85, h: 80, l: 906, t: 4332 },
  { src: content.images.i10.src, alt: content.images.i10.alt, w: 80, h: 80, l: 1137, t: 4332 },
  { src: content.images.i11.src, alt: content.images.i11.alt, w: 133, h: 80, l: 197, t: 4495 },
  { src: content.images.i12.src, alt: content.images.i12.alt, w: 205, h: 70, l: 391, t: 4503 },
  { src: content.images.i13.src, alt: content.images.i13.alt, w: 188, h: 68, l: 626, t: 4504 },
  { src: content.images.i14.src, alt: content.images.i14.alt, w: 184, h: 76, l: 856, t: 4497 },
  { src: content.images.i15.src, alt: content.images.i15.alt, w: 78, h: 78, l: 1138, t: 4510 },
  { src: content.images.i16.src, alt: content.images.i16.alt, w: 142, h: 80, l: 197, t: 4672 },
  { src: content.images.i17.src, alt: content.images.i17.alt, w: 130, h: 80, l: 428, t: 4672 },
  { src: content.images.i18.src, alt: content.images.i18.alt, w: 173, h: 55, l: 633, t: 4685 },
  { src: content.images.i19.src, alt: content.images.i19.alt, w: 155, h: 82, l: 1099, t: 4671 },
  { src: content.images.i20.src, alt: content.images.i20.alt, w: 71, h: 80, l: 233, t: 4849 },
  { src: content.images.i21.src, alt: content.images.i21.alt, w: 80, h: 80, l: 453, t: 4849 },
  { src: content.images.i22.src, alt: content.images.i22.alt, w: 130, h: 80, l: 656, t: 4849 },
  { src: content.images.i23.src, alt: content.images.i23.alt, w: 147, h: 83, l: 886, t: 4847 },
  { src: content.images.i24.src, alt: content.images.i24.alt, w: 150, h: 150, l: 1102, t: 4814 },
];
const mobilePartnerLogos = [
  { src: content.images.i1.src, alt: content.images.i1.alt },
  { src: content.images.i2.src, alt: content.images.i2.alt },
  { src: content.images.i3.src, alt: content.images.i3.alt },
  { src: content.images.i4.src, alt: content.images.i4.alt },
  { src: content.images.i5.src, alt: content.images.i5.alt },
  { src: content.images.i6.src, alt: content.images.i6.alt },
  { src: content.images.i7.src, alt: content.images.i7.alt },
  { src: content.images.i8.src, alt: content.images.i8.alt },
  { src: content.images.i9.src, alt: content.images.i9.alt },
  { src: content.images.i10.src, alt: content.images.i10.alt },
  { src: content.images.i11.src, alt: content.images.i11.alt },
  { src: content.images.i12.src, alt: content.images.i12.alt },
  { src: content.images.i13.src, alt: content.images.i13.alt },
  { src: content.images.i14.src, alt: content.images.i14.alt },
  { src: content.images.i15.src, alt: content.images.i15.alt },
  { src: content.images.i16.src, alt: content.images.i16.alt },
  { src: content.images.i17.src, alt: content.images.i17.alt },
  { src: content.images.i18.src, alt: content.images.i18.alt },
  { src: content.images.i19.src, alt: content.images.i19.alt },
  { src: content.images.i20.src, alt: content.images.i20.alt },
  { src: content.images.i21.src, alt: content.images.i21.alt },
  { src: content.images.i22.src, alt: content.images.i22.alt },
  { src: content.images.i23.src, alt: content.images.i23.alt },
  { src: content.images.i24.src, alt: content.images.i24.alt },
];
  return (
    <div className="scroll-navigation-page bg-[#fd1371] flex flex-col overflow-x-clip">
      <Navbar navigation={navigation} bg="bg-[#fd1371]" textColor="text-white" ctaBg="bg-white" ctaText="text-[#f90068]" />
      <SectionDots />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="hidden md:block">
        <DesktopScale height={7575}>
        <div className="relative" style={{ width: 1440, height: 7575 }}>

          <div className="absolute bg-white" style={{ left: -4, top: 3426, width: 1449, height: 1606 }} />
          <div className="absolute bg-white" style={{ left: -4, top: 5365, width: 1449, height: 2919 }} />

          {/* Pink dots decoration — top left bleed */}
          <div className="absolute overflow-hidden rounded-full pointer-events-none" style={{ left: -180, top: 180, width: 560, height: 560 }}>
            <img src={content.images.i25.src} alt={content.images.i25.alt}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0) invert(1)" }} />
          </div>

          <p className="absolute font-[family-name:var(--font-body)] text-[38px] text-white leading-[100.5%]" style={{ left: 388, top: 234, width: 892 }}>{content.texts.t1}{" "}
            <span className="underline">{content.texts.t2}</span>{" "}{content.texts.t3}{" "}
            <span className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t4}</span>{content.texts.t5}</p>

          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[1.216]" style={{ left: 388, top: 806, width: 892 }}>{content.texts.t6}</p>

          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1045, width: 1120 }}>
            <p>{content.texts.t7}</p>
            <p className="mt-4">{content.texts.t8}</p>
          </div>

          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[40px] text-white text-center leading-[1.216]" style={{ left: 320, top: 1493, width: 801 }}>{content.texts.t9}</p>

          {/* Cesar */}
          <div data-scroll-section="Cesar" className="absolute overflow-hidden rounded-lg" style={{ left: 887, top: 1675, width: 350, height: 350 }}>
            <img src={content.images.i26.src} alt={content.images.i26.alt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1750, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t10}</p>
            <p className="mt-2">{content.texts.t11}</p>
          </div>

          {/* Blaga */}
          <div data-scroll-section="Blaga" className="absolute overflow-hidden rounded-lg" style={{ left: 191, top: 2233, width: 372, height: 372 }}>
            <img src={content.images.i27.src} alt={content.images.i27.alt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 616, top: 2260, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t12}</p>
            <p className="mt-2">{content.texts.t13}</p>
          </div>

          {/* Marcelo */}
          <div data-scroll-section="Marcelo" className="absolute overflow-hidden rounded-lg" style={{ left: 887, top: 2893, width: 350, height: 350 }}>
            <img src={content.images.i28.src} alt={content.images.i28.alt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 2931, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t14}</p>
            <p className="mt-2">{content.texts.t15}</p>
          </div>

          {/* Collaboration ecosystem */}
          <div data-scroll-section="Collaboration ecosystem" className="absolute font-[family-name:var(--font-body)] text-[29px] text-black" style={{ left: 159, top: 3536, width: 399 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t16}</p>
            <p className="leading-[1.216]">{content.texts.t17}</p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[100.5%] tracking-[-0.29px]" style={{ left: 616, top: 3534, width: 664 }}>{content.texts.t18}</p>

          {/* Partner logos */}
          {partnerLogos.map((logo, i) => (
            <div key={i} className="absolute overflow-hidden" style={{ left: logo.l, top: logo.t, width: logo.w, height: logo.h }}>
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
            </div>
          ))}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[16px] text-black text-center leading-[1.216]" style={{ left: 615, top: 4396, width: 209 }}>{content.texts.t19}</p>

          {/* Metalabel CTA */}
          <div data-scroll-section="Metalabel" className="absolute bg-[#c4e3ff]" style={{ left: 0, top: 5032, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 155 }}>{content.texts.t20}</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 188, width: 436 }}>{content.texts.t21}</h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 275, width: 364 }}>{content.texts.t22}</p>
            <div className="absolute rounded-tr-[267px] overflow-hidden" style={{ left: 635, top: 72, width: 398, height: 270 }}>
              <img src={content.images.i29.src} alt={content.images.i29.alt} className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-white border border-black rounded-[5px]" style={{ left: 616, top: 321, width: 436, height: 42 }} />
            <div className="absolute bg-black rounded-[5px]" style={{ left: 1072, top: 321, width: 208, height: 42 }}>
              <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-body)] text-[18px] text-white tracking-[0.36px]">{content.texts.t23}</span>
            </div>
          </div>

          {/* Core elements */}
          <p data-scroll-section="Core elements" className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 5624, width: 475 }}>{content.texts.t24}</p>

          {/* Element 1: Nature/ecosystem — blue blob */}
          <div className="absolute overflow-hidden rounded-[100px_130px_100px_200px]" style={{ left: 160, top: 5724, width: 423, height: 446 }}>
            <img src={content.images.i30.src} alt={content.images.i30.alt} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: "45% 30%" }} />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 616, top: 5836, width: 694 }}>
            <p><span className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t25}</span></p>
            <p>{content.texts.t26}</p>
          </div>

          {/* Element 2: Economy/value — yellow grid ring */}
          <div className="absolute overflow-hidden rounded-bl-[115px]" style={{ left: 868, top: 6141, width: 412, height: 408 }}>
            <img src={content.images.i31.src} alt={content.images.i31.alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 6256, width: 664 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216] tracking-[-0.16px]">{content.texts.t27}</p>
            <p>{content.texts.t28}</p>
          </div>

          {/* Element 3: Technology — pink dots circle */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 1063, top: 6812, width: 652, height: 648 }}>
            <img src={content.images.i32.src} alt={content.images.i32.alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 616, top: 6611, width: 694 }}>
            <p>{content.texts.t29}</p>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t30}</p>
          </div>

          {/* Element 4: Community/kinship — green wavy ring */}
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 105, top: 6490, width: 457, height: 452 }}>
            <img src={content.images.i33.src} alt={content.images.i33.alt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]" style={{ left: 160, top: 7031, width: 664 }}>
            <p>{content.texts.t31}</p>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t32}</p>
          </div>

          {/* Footer */}
          <div className="absolute bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 7470, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>{content.texts.t33}</p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main data-scroll-section="Introduction" className="md:hidden flex flex-col bg-[#fd1371]">
        {/* Hero */}
        <div className="relative px-4 pt-6 pb-6 overflow-hidden">
          <div className="absolute overflow-hidden pointer-events-none" style={{ left: -60, top: 40, width: 160, height: 160 }}>
            <img src={content.images.i32.src} alt={content.images.i32.alt} className="w-full h-full object-cover" />
          </div>
          <div style={{ paddingLeft: 95 }}>
            <p className="font-[family-name:var(--font-body)] text-[18px] text-white leading-[1.3]">{content.texts.t1}{" "}
              <span className="underline">{content.texts.t2}</span>{" "}{content.texts.t3}{" "}
              <span className="font-[family-name:var(--font-heading)] leading-[1.216]">{content.texts.t4}</span>{content.texts.t5}</p>
          </div>
        </div>

        {/* About */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-white leading-[1.4] mb-4">{content.texts.t34}</p>
        </div>

        {/* Founding members */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[28px] text-white leading-[1.2] mb-6">{content.texts.t9}</p>

          {/* Cesar */}
          <div data-scroll-section="Cesar" className="flex gap-4 mb-6">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">{content.texts.t10}</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">{content.texts.t11}</p>
            </div>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 132, height: 137 }}>
              <img src={content.images.i26.src} alt={content.images.i26.alt} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Blaga */}
          <div data-scroll-section="Blaga" className="flex gap-4 mb-6">
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 135, height: 126 }}>
              <img src={content.images.i27.src} alt={content.images.i27.alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">{content.texts.t12}</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">{content.texts.t13}</p>
            </div>
          </div>

          {/* Marcelo */}
          <div data-scroll-section="Marcelo" className="flex gap-4 mb-6">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-[18px] text-white leading-[1.2] mb-1">{content.texts.t14}</p>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4]">{content.texts.t15}</p>
            </div>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 134, height: 144 }}>
              <img src={content.images.i28.src} alt={content.images.i28.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Collaboration ecosystem — white section */}
        <div data-scroll-section="Collaboration ecosystem" className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-black leading-[1.2] mb-1">{content.texts.t16}</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-4">{content.texts.t17}</p>
          <p className="font-[family-name:var(--font-body)] text-[13px] text-black leading-[1.5] mb-6">{content.texts.t18}</p>

          {/* Partner logos grid */}
          <div className="flex flex-wrap gap-4 items-center justify-start mb-6">
            {mobilePartnerLogos.map((logo, i) => (
              <div key={i} className="overflow-hidden" style={{ height: 32 }}>
                <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Metalabel CTA */}
          <p data-scroll-section="Metalabel" className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t35}</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">{content.texts.t36}</h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t37}</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 103 }}>
            <img src={content.images.i29.src} alt={content.images.i29.alt} className="w-full h-full object-cover" />
          </div>
          <a href={content.links.l1} target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-6">{content.texts.t38}</a>
        </div>

        {/* Core elements — white section continues */}
        <div data-scroll-section="Core elements" className="bg-white px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-6">{content.texts.t39}</p>

          {/* Element 1: Nature/ecosystem — blue blob */}
          <div className="flex gap-4 items-center mb-6">
            <div className="overflow-hidden shrink-0" style={{ width: 125, height: 132, borderRadius: "100px 130px 100px 200px" }}>
              <img src={content.images.i30.src} alt={content.images.i30.alt} className="w-full h-full object-cover" style={{ objectPosition: "45% 30%" }} />
            </div>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              <span className="font-[family-name:var(--font-heading)]">{content.texts.t25}</span>{content.texts.t26}</p>
          </div>

          {/* Element 2: Economy/value — yellow grid ring */}
          <div className="flex gap-4 items-center mb-6">
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">
              <span className="font-[family-name:var(--font-heading)]">{content.texts.t40}</span>{content.texts.t28}</p>
            <div className="overflow-hidden rounded-bl-[30px] shrink-0" style={{ width: 124, height: 123 }}>
              <img src={content.images.i31.src} alt={content.images.i31.alt} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Element 3: Technology — pink dots circle */}
          <div className="flex gap-4 items-center mb-6">
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 164, height: 163 }}>
              <img src={content.images.i32.src} alt={content.images.i32.alt} className="w-full h-full object-cover" />
            </div>
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">{content.texts.t29}{" "}
              <span className="font-[family-name:var(--font-heading)]">{content.texts.t30}</span>
            </p>
          </div>

          {/* Element 4: Community/kinship — green wavy ring */}
          <div className="flex gap-4 items-center mb-6">
            <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.4] flex-1">{content.texts.t31}{" "}
              <span className="font-[family-name:var(--font-heading)]">{content.texts.t32}</span>
            </p>
            <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 144, height: 135 }}>
              <img src={content.images.i33.src} alt={content.images.i33.alt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div data-scroll-section="Newsletter" className="bg-white px-4 py-8 border-t border-black/10">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">{content.texts.t41}</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">{content.texts.t42}<br />{content.texts.t43}</h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">{content.texts.t44}</p>
          <div className="rounded-tr-[80px] overflow-hidden mb-4" style={{ height: 179 }}>
            <img src={content.images.i34.src} alt={content.images.i34.alt} className="w-full h-full object-cover" />
          </div>
          <SubstackEmbed url={newsletterUrl} />
        </div>

        {/* Footer */}
        <div className="bg-white shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">{content.texts.t33}</p>
        </div>
      </main>
    </div>
  );

}

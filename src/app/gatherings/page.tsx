import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";

export default function GatheringsPage() {
  return (
    <div className="bg-[#0070f9] flex flex-col overflow-x-hidden">
      <Navbar bg="bg-[#0070f9]" textColor="text-white" ctaBg="bg-white" ctaText="text-[#0070f9]" />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main className="hidden md:block">
        <DesktopScale height={3980}>
        <div className="relative" style={{ width: 1440, height: 3980 }}>

          {/* Gathering hero globe — top left bleed, white mosaic shape on blue bg */}
          <div className="absolute overflow-hidden rounded-full pointer-events-none" style={{ left: -220, top: 160, width: 560, height: 560 }}>
            <img src="/images/gathering-hero.png" alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-contain"
              style={{ filter: "brightness(0) invert(1)" }} />
          </div>

          <div className="absolute overflow-hidden" style={{ left: 388, top: 234, width: 892 }}>
            <p className="font-[family-name:var(--font-body)] text-[38px] text-white leading-[100.5%]">
              In a world affected by <span className="underline">polycrises</span> we see strategic polarisation and disconnection not only as a missed opportunity but as a threat to our common future.{" "}
              <span className="font-[family-name:var(--font-heading)] leading-[1.216]">Our work is nourished by our nomadic experience, deep research and encounters across the globe.</span>
            </p>
          </div>


          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%] tracking-[-0.29px]" style={{ left: 616, top: 806, width: 664 }}>
            As Cambio Natural we convene spaces for dialogue where these different elements converge and facilitate them with tools, methods and connections to navigate tensions, build trust and nurture bold ideas worth failing for.
          </p>

          {/* Online dialogue */}
          <div className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 160, top: 1086, width: 436 }}>
            <p className="font-[family-name:var(--font-heading)] leading-[1.216]">Online dialogue spaces</p>
            <p>: Social Innovation for Planetary Health</p>
            <p className="italic">From science to praxis</p>
            <a href="https://youtu.be/_QApShC_RxA" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 block mt-2">Watch video</a>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 616, top: 1086, width: 664 }}>
            Hosted by the Sustainability Research Innovation Summit, this was a participatory dialogue between practitioners from different cultural and geographical latitudes, across disciplines and sectors, aimed at discussing the transformations needed towards more desirable futures for our planet and species.
          </p>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 616, top: 1371, width: 574, height: 300 }}>
            <img src="/images/gathering-online-cn0301.png" alt="Online dialogue gathering" className="w-full h-full object-cover" />
          </div>

          {/* Community care */}
          <p className="absolute font-[family-name:var(--font-heading)] text-[29px] text-white leading-[1.216]" style={{ left: 160, top: 1838, width: 436 }}>Community care gatherings</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 616, top: 1838, width: 664 }}>
            Hosted by Radici a Moncalieri we organized a three day gathering to eat, drink, laugh, cry, sing, sleep and take home (and share with others) lessons about resilience and strength from nature, other communities, and cultures that are successfully facing challenges today.
          </p>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 616, top: 2090, width: 244, height: 300 }}>
            <img src="/images/gathering-care-cn0302.png" alt="Community care gathering" className="w-full h-full object-cover object-bottom" />
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 894, top: 2090, width: 378, height: 300 }}>
            <img src="/images/gathering-care-cn0303.png" alt="Community care gathering" className="w-full h-full object-cover object-bottom" />
          </div>

          {/* Transformative learning */}
          <div className="absolute font-[family-name:var(--font-heading)] text-[29px] text-white leading-[1.216]" style={{ left: 160, top: 2557, width: 436 }}>
            <p>Transformative learning experiences</p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[29px] text-white leading-[100.5%]" style={{ left: 616, top: 2557, width: 664 }}>
            We co-organized the Global Doughnut Days Mexico 2025, a three day gathering focused on approaching alternative economic frameworks and practices - using the Doughnut Economics framework as guide, together with Coalición Tricolor, a member of the Doughnut Economics Action Lab community. The event included and serviced academics, government officials, business leaders and financiers.
          </p>
          <div className="absolute overflow-x-auto overflow-y-clip" style={{ left: 616, top: 2912, width: 656, height: 350 }}>
            <div className="absolute" style={{ left: 0, top: 1, width: 278, height: 347 }}>
              <img src="/images/gathering-doughnut-1.png" alt="Doughnut gathering" className="w-full h-full object-cover" />
            </div>
            <div className="absolute" style={{ left: 304, top: 1, width: 360, height: 347 }}>
              <img src="/images/gathering-doughnut-2.png" alt="Doughnut gathering" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="absolute" style={{ left: 690, top: 1, width: 354, height: 346 }}>
              <img src="/images/gathering-doughnut-3.png" alt="Doughnut gathering" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="absolute bg-white" style={{ left: 0, top: 3378, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 155 }}>Join to Newsletter</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 188, width: 436 }}>
              Lets Co-create<br />together
            </h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 275, width: 364 }}>
              Short bi-monthly nuggets on Planetary Health, projects and researchs that are changing the world, delivered to your inbox - No spam, real action.
            </p>
            <div className="absolute rounded-tr-[267px] overflow-hidden" style={{ left: 635, top: 72, width: 398, height: 270 }}>
              <img src="/images/newsletter-metacrisis.png" alt="" aria-hidden className="w-full h-full object-cover" />
            </div>
            <input type="email" placeholder="your@email.com" aria-label="Email address"
              className="absolute border border-black rounded-[5px] bg-white font-[family-name:var(--font-body)] text-[18px] text-black px-3 focus:outline-none"
              style={{ left: 616, top: 321, width: 436, height: 42 }} />
            <button className="absolute bg-black rounded-[5px] font-[family-name:var(--font-body)] text-[18px] text-white text-center tracking-[0.36px]"
              style={{ left: 1072, top: 321, width: 208, height: 42 }}>
              Subscribe
            </button>
          </div>

          {/* Footer */}
          <div className="absolute bg-[#0070f9] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 3875, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>
              Cambio natural CC BY-NC-ND 4.0
            </p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main className="md:hidden flex flex-col bg-[#0070f9]">
        {/* Hero */}
        <div className="flex gap-3 px-4 pt-6 pb-6 items-start">
          {/* Rotated hero image */}
          <div className="overflow-hidden rounded-lg shrink-0" style={{ width: 95, height: 142 }}>
            <img src="/images/gathering-hero.png" alt="" aria-hidden
              className="w-full h-full object-cover"
              style={{ transform: "rotate(34.73deg) scale(1.8)", transformOrigin: "center" }} />
          </div>
          <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3] flex-1">
            In a world affected by <span className="underline">polycrises</span> we see strategic polarisation and disconnection not only as a missed opportunity but as a threat to our common future.{" "}
            <span className="font-[family-name:var(--font-heading)] leading-[1.216]">Our work is nourished by our nomadic experience, deep research and encounters across the globe.</span>
          </p>
        </div>

        {/* Intro */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-body)] text-[15px] text-white leading-[1.4]">
            As Cambio Natural we convene spaces for dialogue where these different elements converge and facilitate them with tools, methods and connections to navigate tensions, build trust and nurture bold ideas worth failing for.
          </p>
        </div>

        {/* Online dialogue */}
        <div className="px-4 pb-6">
          <div className="mb-3">
            <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2]">Online dialogue spaces</p>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3]">: Social Innovation for Planetary Health</p>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white leading-[1.3] italic">From science to praxis</p>
            <a href="https://youtu.be/_QApShC_RxA" target="_blank" rel="noopener noreferrer"
              className="font-[family-name:var(--font-body)] text-[16px] text-white underline block mt-1">Watch video</a>
          </div>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">
            Hosted by the Sustainability Research Innovation Summit, this was a participatory dialogue between practitioners from different cultural and geographical latitudes, across disciplines and sectors, aimed at discussing the transformations needed towards more desirable futures for our planet and species.
          </p>
          <div className="overflow-hidden rounded-lg" style={{ height: 193 }}>
            <img src="/images/gathering-online-cn0301.png" alt="Online dialogue gathering" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Community care */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2] mb-2">Community care gatherings</p>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">
            Hosted by Radici a Moncalieri we organized a three day gathering to eat, drink, laugh, cry, sing, sleep and take home (and share with others) lessons about resilience and strength from nature, other communities, and cultures that are successfully facing challenges today.
          </p>
          <div className="flex gap-3" style={{ height: 193 }}>
            <div className="overflow-hidden rounded-lg" style={{ width: "41%" }}>
              <img src="/images/gathering-care-cn0302.png" alt="Community care gathering" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="overflow-hidden rounded-lg flex-1">
              <img src="/images/gathering-care-cn0303.png" alt="Community care gathering" className="w-full h-full object-cover object-bottom" />
            </div>
          </div>
        </div>

        {/* Transformative learning */}
        <div className="px-4 pb-6">
          <p className="font-[family-name:var(--font-heading)] text-[20px] text-white leading-[1.2] mb-2">Transformative learning experiences</p>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-white leading-[1.4] mb-4">
            We co-organized the Global Doughnut Days Mexico 2025, a three day gathering focused on approaching alternative economic frameworks and practices - using the Doughnut Economics framework as guide, together with Coalición Tricolor, a member of the Doughnut Economics Action Lab community. The event included and serviced academics, government officials, business leaders and financiers.
          </p>
          {/* Photo row — scrollable */}
          <div className="flex gap-3 overflow-x-auto pb-2" style={{ height: 193 }}>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 154 }}>
              <img src="/images/gathering-doughnut-1.png" alt="Doughnut gathering" className="w-full h-full object-cover" />
            </div>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 200 }}>
              <img src="/images/gathering-doughnut-2.png" alt="Doughnut gathering" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className="shrink-0 overflow-hidden rounded-lg" style={{ width: 198 }}>
              <img src="/images/gathering-doughnut-3.png" alt="Doughnut gathering" className="w-full h-full object-cover object-bottom" />
            </div>
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
          <input type="email" placeholder="Your email" aria-label="Email address"
            className="w-full border border-black rounded-[5px] bg-white font-[family-name:var(--font-body)] text-[16px] text-black px-3 h-[35px] focus:outline-none mb-3" />
          <button className="block mx-auto bg-black rounded-[5px] font-[family-name:var(--font-body)] text-[16px] text-white px-8 h-[35px]">
            Register
          </button>
        </div>

        {/* Footer */}
        <div className="bg-[#0070f9] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">
            Cambio natural CC BY-NC-ND 4.0
          </p>
        </div>
      </main>
    </div>
  );
}

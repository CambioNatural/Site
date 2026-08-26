import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DesktopScale from "@/components/DesktopScale";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Tools and spaces for dialogue and collaboration supporting bridge builders and caregivers — curated resources for nature, economy and technology, guiding how we redefine our relationship with the planet's natural systems.",
  alternates: { canonical: "/tools" },
  openGraph: {
    url: "/tools",
    title: "Tools — Cambio Natural",
    description:
      "Curated tools for nature, economy and technology that support bridge builders and caregivers in redefining our relationship with the planet.",
  },
  twitter: {
    title: "Tools — Cambio Natural",
    description:
      "Curated tools for nature, economy and technology that support bridge builders and caregivers in redefining our relationship with the planet.",
  },
};

export default function ToolsPage() {
  return (
    <div className="bg-[#f4e509] flex flex-col overflow-x-hidden">
      <Navbar bg="bg-[#f4e509]" textColor="text-black" ctaBg="bg-black" ctaText="text-[#f4e509]" />

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <main className="hidden md:block">
        <DesktopScale height={3857}>
        <div className="relative" style={{ width: 1440, height: 3857 }}>

          <div className="absolute overflow-hidden rounded-bl-[92px]" style={{ left: 1054, top: -102, width: 516, height: 510 }}>
            <img src="/images/tools-hero.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-bottom" />
          </div>

          <div className="absolute" style={{ left: 160, top: 290, width: 860 }}>
            <p className="font-[family-name:var(--font-body)] text-[29px] text-black leading-[100.5%]">
              We offer tools and spaces for dialogue and collaboration,
            </p>
            <p className="font-[family-name:var(--font-heading)] uppercase text-[33px] text-black leading-[100.5%] mt-1">
              supporting bridge builders and caregivers
            </p>
          </div>

          {/* FOR NATURE */}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 806, width: 366 }}>for nature</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 160, top: 853, width: 436 }}>Tools for nourishing our nature</p>
          <div className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.5]" style={{ left: 160, top: 904, width: 664 }}>
            <p>
              Every day there are more and more phenomena around the world urging us to redefine our relationship with the planet's natural systems. These phenomena remind us that our community, its technology, the economy and nature are closely related planes, complex systems that are interconnected.
            </p>
            <p className="indent-8 mt-3">
              We realise that sometimes (if not always) slow, intentional actions and loving gestures are more powerful than bold manifestos and urgent calls to action. Transformation cannot be rushed, because it requires connecting mind, heart, hands and soul at individual and systemic level. Here are some tools from our community that help guide how we redefine our relationship with nature.
            </p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 304, top: 1414, width: 377 }}>
            Powered by{" "}<a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Are.na</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 304, top: 1352, width: 377, height: 53 }}>
            <a href="https://www.are.na/share/EiiyelD" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">
              Discover more here
            </a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 890, top: 992, width: 300, height: 300 }}>
            <img src="/images/tools-nature-cn0202.png" alt="Tools for nature" className="w-full h-full object-cover" />
          </div>

          {/* FOR ECONOMY */}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 616, top: 1528, width: 436 }}>for Economy</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 616, top: 1575, width: 436 }}>Tools for sharing different types of value</p>
          <div className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.5]" style={{ left: 616, top: 1626, width: 664 }}>
            <p>
              We imagine a future where extractive practices are replaced by regenerative ones, where benefits and ownership are fairly distributed and where nothing is marginal because everything is interconnected. We have seen that shifting power dynamics and acknowledging the value and roles of different actors strengthens their agency to collaboratively drive transformation and become stewards of their lives and ecosystems.
            </p>
            <p className="indent-8 mt-3">
              Here are some tools from our community that can help share different types of value with reciprocity.
            </p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 759, top: 2066, width: 377 }}>
            Powered by{" "}<a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Are.na</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 760, top: 2003, width: 377, height: 53 }}>
            <a href="https://www.are.na/share/fpoVIZF" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">
              Discover more here
            </a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 238, top: 1645, width: 225, height: 298 }}>
            <img src="/images/tools-economy-cn0203.png" alt="Tools for economy" className="w-full h-full object-cover" />
          </div>

          {/* FOR TECHNOLOGY */}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 160, top: 2199, width: 436 }}>for technology</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 160, top: 2246, width: 436 }}>Tech for the birth of the world</p>
          <div className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.5]" style={{ left: 160, top: 2297, width: 668 }}>
            <p>
              We are at the brink between the end of this world and the birth of a new one. We don't need tech for the end of the world, we need tech for the birth of the new one.
            </p>
            <p className="indent-8 mt-3">
              Here are some technologies for delivering and caring for this moment.
            </p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 305, top: 2555, width: 377 }}>
            Powered by{" "}<a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Are.na</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 306, top: 2492, width: 377, height: 53 }}>
            <a href="https://www.are.na/share/FUhqTfR" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">
              Discover more here
            </a>
          </div>
          <div className="absolute overflow-hidden rounded-lg" style={{ left: 885, top: 2336, width: 380, height: 97 }}>
            <img src="/images/tools-tech-cn0204.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>

          {/* FOR COMMUNITY */}
          <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216]" style={{ left: 616, top: 2678, width: 436 }}>for community</p>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216]" style={{ left: 616, top: 2725, width: 436 }}>Tools for nurturing communities</p>
          <div className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.5] tracking-[-0.58px]" style={{ left: 616, top: 2776, width: 664 }}>
            <p>
              As Cambio Natural, we foster open dialogue, radical listening, and learning from the creative tensions that emerge through it. We invite everyone (starting with ourselves) to recognize their complicity in systemic problems while embracing their capacity for growth and change.
            </p>
            <p className="indent-8 mt-3">
              Here are some tools from our collective experience that can help nourish your community.
            </p>
          </div>
          <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black text-center leading-[1.216]" style={{ left: 752, top: 3139, width: 377 }}>
            Powered by{" "}<a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">Are.na</a>
          </p>
          <div className="absolute bg-black rounded-[10px]" style={{ left: 760, top: 3076, width: 377, height: 53 }}>
            <a href="https://www.are.na/share/WdoApNN" target="_blank" rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">
              Discover more here
            </a>
          </div>
          <div className="absolute overflow-hidden rounded-lg mix-blend-multiply" style={{ left: 216, top: 2744, width: 366, height: 352 }}>
            <img src="/images/tools-community-dithered.png" alt="Tools for community" className="w-full h-full object-cover" />
          </div>

          {/* JOIN OUR METALABEL */}
          <div className="absolute bg-white" style={{ left: 0, top: 3255, width: 1441, height: 497 }}>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 156 }}>The Collective Project Space</p>
            <h2 className="absolute font-[family-name:var(--font-heading)] uppercase text-[29px] text-black leading-[1.216] tracking-[0.58px]" style={{ left: 160, top: 189, width: 436 }}>
              Join Our<br />Metalabel
            </h2>
            <p className="absolute font-[family-name:var(--font-body)] text-[18px] text-black leading-[1.216] tracking-[0.36px]" style={{ left: 160, top: 276, width: 364 }}>
              Do you want to discover what more our community has created?{" "}From local roots to global impact.
            </p>
            <div className="absolute overflow-hidden rounded-lg" style={{ left: 612, top: 111, width: 662, height: 276 }}>
              <img src="/images/metalabel-image.png" alt="Metalabel community projects" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bg-[#f90068] rounded-[5px]" style={{ left: 831, top: 254, width: 208, height: 58 }}>
              <a href="https://cambionatural.metalabel.com/" target="_blank" rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-heading)] uppercase text-[18px] text-white text-center leading-[1.216]">
                Explore Our Projects
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bg-[#f4e509] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)]" style={{ left: 0, top: 3752, width: 1440, height: 105 }}>
            <p className="absolute font-[family-name:var(--font-heading)] uppercase text-[17px] text-black leading-[1.216]" style={{ left: 160, top: 34 }}>
              Cambio natural CC BY-NC-ND 4.0
            </p>
          </div>
        </div>
        </DesktopScale>
      </main>

      {/* ── MOBILE ────────────────────────────────────────────── */}
      <main className="md:hidden flex flex-col bg-[#f4e509]">
        {/* Hero */}
        <div className="px-4 pt-6 pb-6 text-center">
          <p className="font-[family-name:var(--font-body)] text-[20px] text-black leading-[1.3] mb-1">
            We offer tools and spaces for dialogue and collaboration,
          </p>
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.1]">
            supporting bridge builders and caregivers
          </p>
        </div>

        {/* FOR NATURE */}
        <div className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">for nature</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">Tools for nourishing our nature</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 128 }}>
            <img src="/images/tools-nature-cn0202.png" alt="Tools for nature" className="w-full h-full object-cover" />
          </div>
          <div className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            <p>
              Every day there are more and more phenomena around the world urging us to redefine our relationship with the planet's natural systems. These phenomena remind us that our community, its technology, the economy and nature are closely related planes, complex systems that are interconnected.
            </p>
            <p className="indent-6 mt-2">
              We realise that sometimes (if not always) slow, intentional actions and loving gestures are more powerful than bold manifestos and urgent calls to action. Transformation cannot be rushed, because it requires connecting mind, heart, hands and soul at individual and systemic level. Here are some tools from our community that help guide how we redefine our relationship with nature.
            </p>
          </div>
          <a href="https://www.are.na/share/EiiyelD" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">
            Discover more here
          </a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">
            Powered by <a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline">Are.na</a>
          </p>
        </div>

        {/* FOR ECONOMY */}
        <div className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">for Economy</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">Tools for sharing different types of value</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 128 }}>
            <img src="/images/tools-economy-cn0203.png" alt="Tools for economy" className="w-full h-full object-cover" />
          </div>
          <div className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            <p>
              We imagine a future where extractive practices are replaced by regenerative ones, where benefits and ownership are fairly distributed and where nothing is marginal because everything is interconnected. We have seen that shifting power dynamics and acknowledging the value and roles of different actors strengthens their agency to collaboratively drive transformation and become stewards of their lives and ecosystems.
            </p>
            <p className="indent-6 mt-2">
              Here are some tools from our community that can help share different types of value with reciprocity.
            </p>
          </div>
          <a href="https://www.are.na/share/fpoVIZF" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">
            Discover more here
          </a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">
            Powered by <a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline">Are.na</a>
          </p>
        </div>

        {/* FOR TECHNOLOGY */}
        <div className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">for technology</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">Tech for the birth of the world</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 99 }}>
            <img src="/images/tools-tech-cn0204.png" alt="" aria-hidden className="w-full h-full object-cover" />
          </div>
          <div className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            <p>
              We are at the brink between the end of this world and the birth of a new one. We don't need tech for the end of the world, we need tech for the birth of the new one.
            </p>
            <p className="indent-6 mt-2">
              Here are some technologies for delivering and caring for this moment.
            </p>
          </div>
          <a href="https://www.are.na/share/FUhqTfR" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">
            Discover more here
          </a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">
            Powered by <a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline">Are.na</a>
          </p>
        </div>

        {/* FOR COMMUNITY */}
        <div className="px-4 pb-8">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[22px] text-black leading-[1.2] mb-1">for community</p>
          <p className="font-[family-name:var(--font-body)] text-[15px] text-black leading-[1.3] mb-3">Tools for nurturing communities</p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 152 }}>
            <img src="/images/tools-community-dithered.png" alt="Tools for community" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <div className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            <p>
              As Cambio Natural, we foster open dialogue, radical listening, and learning from the creative tensions that emerge through it. We invite everyone (starting with ourselves) to recognize their complicity in systemic problems while embracing their capacity for growth and change.
            </p>
            <p className="indent-6 mt-2">
              Here are some tools from our collective experience that can help nourish your community.
            </p>
          </div>
          <a href="https://www.are.na/share/WdoApNN" target="_blank" rel="noopener noreferrer"
            className="block bg-black rounded-[10px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3 mb-1">
            Discover more here
          </a>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black text-center">
            Powered by <a href="https://www.are.na/" target="_blank" rel="noopener noreferrer" className="underline">Are.na</a>
          </p>
        </div>

        {/* Metalabel CTA */}
        <div className="bg-white px-4 py-8">
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.3] mb-1">The Collective Project Space</p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[24px] text-black leading-[1.2] mb-3">
            Join Our<br />Metalabel
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[14px] text-black leading-[1.4] mb-4">
            Do you want to discover what more our community has created? From local roots to global impact.
          </p>
          <div className="overflow-hidden rounded-lg mb-4" style={{ height: 168 }}>
            <img src="/images/metalabel-image.png" alt="Metalabel community projects" className="w-full h-full object-cover" />
          </div>
          <a href="https://cambionatural.metalabel.com/" target="_blank" rel="noopener noreferrer"
            className="block bg-[#f90068] rounded-[5px] font-[family-name:var(--font-heading)] uppercase text-[16px] text-white text-center py-3">
            Explore Our Projects
          </a>
        </div>

        {/* Footer */}
        <div className="bg-[#f4e509] shadow-[0px_-1px_4px_0px_rgba(0,0,0,0.25)] px-4 py-3">
          <p className="font-[family-name:var(--font-heading)] uppercase text-[13px] text-black leading-[1.216]">
            Cambio natural CC BY-NC-ND 4.0
          </p>
        </div>
      </main>
    </div>
  );
}

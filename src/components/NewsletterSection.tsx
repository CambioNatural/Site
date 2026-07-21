import SubstackEmbed from "./SubstackEmbed";

const imgMetacrisis = "/images/newsletter-metacrisis.png";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-white py-16 px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text + form */}
        <div className="flex flex-col gap-4">
          <p className="font-[family-name:var(--font-body)] text-[18px] text-black tracking-[0.36px] leading-[1.216]">
            Join to Newsletter
          </p>
          <h2 className="font-[family-name:var(--font-heading)] uppercase text-[29px] text-black tracking-[0.58px] leading-[1.216]">
            Lets Co-create
            <br />
            together
          </h2>
          <p className="font-[family-name:var(--font-body)] text-[18px] text-black tracking-[0.36px] leading-[1.216] max-w-[364px]">
            Short bi-monthly nuggets on Planetary Health, projects and research
            that are changing the world, delivered to your inbox — No spam, real
            action.
          </p>

          <SubstackEmbed className="mt-2 max-w-[436px]" />
        </div>

        {/* Right: decorative image */}
        <div className="hidden md:block">
          <img
            src={imgMetacrisis}
            alt=""
            className="w-full max-w-[398px] rounded-tr-[267px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

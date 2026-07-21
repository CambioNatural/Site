"use client";

import { useState } from "react";

const imgMetacrisis = "/images/newsletter-metacrisis.png";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder – wire up to your email provider
    setStatus("success");
  }

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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-2"
            aria-label="Newsletter signup"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 h-[42px] border border-black rounded-[5px] px-4 font-[family-name:var(--font-body)] text-[18px] text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="h-[42px] px-6 bg-black text-white rounded-[5px] font-[family-name:var(--font-body)] text-[18px] tracking-[0.36px] hover:opacity-80 transition-opacity"
            >
              Subscribe
            </button>
          </form>

          {status === "success" && (
            <p
              role="status"
              aria-live="polite"
              className="text-[16px] text-black font-[family-name:var(--font-body)]"
            >
              Thanks! You&apos;re on the list.
            </p>
          )}
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

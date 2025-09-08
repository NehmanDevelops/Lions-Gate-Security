import React from "react";

/**
 * TrustedClients (Video CTA Hero)
 * - Original copy (no overlap with anyone else)
 * - Background video: keep current remote sources or replace with your own longer MP4
 * - Strong CTA
 */

const TrustedClients = () => {
  // If you add a longer local clip later, import it and put it first in SOURCES:
  // import longClip from "../assets/lionsgate-hero.mp4";

  const SOURCES = [
    // { src: longClip, type: "video/mp4" }, // uncomment when you have your own file
    { src: "https://www.pexels.com/download/video/16657020/", type: "video/mp4" }, // night street vibe
    { src: "https://www.pexels.com/download/video/7714379/", type: "video/mp4" },  // close-up lights
  ];

  return (
    <section
      id="trusted"
      className="relative isolate mt-[100px] md:mt-[90px] xl:mt-[160px] min-h-[70vh] md:min-h-[76vh] xl:min-h-[84vh] w-full overflow-hidden bg-black"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {SOURCES.map((s, i) => (
          <source key={i} src={s.src} type={s.type} />
        ))}
        Your browser does not support the video tag.
      </video>

      {/* Contrast overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_40%,transparent,rgba(0,0,0,0.5))]" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 lg:py-28 flex h-full items-center">
        <div className="w-full text-center">
          {/* Eyebrow */}
          <p className="tracking-[.18em] text-[#DAAE00] text-xs md:text-sm font-semibold mb-6 uppercase">
            On Watch 24/7
          </p>

          {/* Headline */}
          <h2 className="text-white font-['otomanopee-one'] text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] max-w-5xl mx-auto">
            When it matters, we’re already <span className="text-[#DAAE00]">there</span>.
          </h2>

          {/* Subhead */}
          <p className="text-[#E7E7E7]/95 font-['Red_Hat_Display'] text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mt-6">
            Condos, construction, retail, and more—our licensed guards, mobile patrols, and remote video
            monitoring deliver coverage built around your risks, your budget, and your building rules.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-block rounded-lg border border-[#DAAE00] bg-black/50 px-7 py-3 text-white font-semibold tracking-wide hover:bg-[#DAAE00] hover:text-black transition-colors duration-200"
            >
              Get Started
            </a>
            <a
              href="tel:+16472203119"
              className="inline-block rounded-lg border border-white/30 px-7 py-3 text-white font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Call 24/7: 647-220-3119
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;

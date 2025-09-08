import React from "react";

/* ---------- Inline SVG icons (no extra deps) ---------- */
const Shield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3l7 4v4.5c0 4.7-3.4 7.8-7 8.9-3.6-1.1-7-4.2-7-8.9V7l7-4z" />
    <path d="M9 11.5l2 2 4-4" />
  </svg>
);
const FileShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    <path d="M14 3v4a2 2 0 0 0 2 2h4" />
    <path d="M20 14l-2 .8-2-.8V11l2-.8 2 .8v3z" />
  </svg>
);
const IdCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="11" r="2" />
    <path d="M6.5 15.5c.8-1.2 2-1.8 2.5-1.8s1.7.6 2.5 1.8" />
    <path d="M14 10h5M14 14h5" />
  </svg>
);
const BookCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M20 22H6.5A2.5 2.5 0 0 1 4 19.5V5a2 2 0 0 1 2-2h11l3 3v16z" />
    <path d="M9.5 10.5l1.5 1.5 3-3" />
  </svg>
);
const Headset = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M18 19h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2zM6 19h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H6z" />
    <path d="M12 19v2a2 2 0 0 0 2 2h3" />
  </svg>
);
const Clipboard = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="7" y="4" width="10" height="16" rx="2" />
    <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 10h6M9 14h6M9 18h4" />
  </svg>
);

/* ---------- Data ---------- */
const items = [
  {
    title: "Licensed Security Agency",
    desc: "Ontario PSISA compliant. Agency license available on request.",
    Icon: Shield,
  },
  {
    title: "Insured & WSIB Covered",
    desc: "General liability & workers’ comp. Certificates available on request.",
    Icon: FileShield,
  },
  {
    title: "Background-Checked Guards",
    desc: "Vulnerable sector checks with ongoing evaluations.",
    Icon: IdCheck,
  },
  {
    title: "Standardized Training",
    desc: "40h basic + site-specific post orders; First Aid/CPR.",
    Icon: BookCheck,
  },
  {
    title: "24/7 Dispatch & Supervision",
    desc: "Live oversight, random site checks, and incident command.",
    Icon: Headset,
  },
  {
    title: "Digital Reporting",
    desc: "Time-stamped patrols, photos, and incident logs.",
    Icon: Clipboard,
  },
];

/* ---------- Component ---------- */
const HomeCertificate = () => {
  return (
    <>
      <section className="w-full bg-[#131313] flex items-center mt-[84px]">
        <div className="mx-auto max-w-7xl w-full px-6 py-10 md:py-16">
          <h1 className="text-white text-[32px] font-['otomanopee-one'] md:text-[44px] lg:text-[48px] xl:text-[56px] text-center md:text-left">
            CREDENTIALS & COMPLIANCE
          </h1>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {items.map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#0b0b0b] border border-white/10 p-6 hover:bg-black/70 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-white/5 border border-white/10 p-3 text-[#F59E0B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-[18px] font-semibold font-['Red_Hat_Display']">
                      {title}
                    </h3>
                    <p className="text-[#B1B1B1] mt-2 text-[14px] lg:text-[15px] leading-6 font-['Red_Hat_Display']">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: add real license/insurance text */}
          {/* <p className="mt-6 text-xs text-white/50">PSISA Agency License: ####### • Insurance certificate available upon request.</p> */}
        </div>
      </section>
    </>
  );
};

export default HomeCertificate;

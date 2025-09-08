// Frontend/src/brand.js

// Core business info (edit these once; they update site-wide)
export const BRAND = {
  name: "Lions Gate Security",
  shortName: "LionsGate",                 // small logo text if needed
  tagline: "Prevention • Protection • Safety",

  phone: "647-220-3119",
  email: "info@lionsgate-concierge.com",
  address: "10 Milner Business Court, Scarborough, ON",
  hours: "24/7 Security Services",

  // Navigation labels & anchors (we'll wire these in Phase 2)
  nav: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Luxury Uniform", href: "#uniform" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Services", href: "#services" },
    { label: "Mission / Vision", href: "#mission" },
    { label: "Parking Registration", href: "#parking" },
    { label: "Contact Us", href: "#contact" },
  ],

  // Socials (fill in later if you have them)
  socials: {
    instagram: "",
    linkedin: "",
    facebook: "",
  },
};

// Small helpers so buttons/links are easy to drop in JSX
export const links = {
  phoneHref: () => "tel:" + BRAND.phone.replace(/\D/g, ""),
  emailHref: () => "mailto:" + BRAND.email,
};

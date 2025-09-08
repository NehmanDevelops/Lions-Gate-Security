import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Rotating background ring
import bg from "../assets/about_bg.png";

const AboutBanner = () => {
  const navigate = useNavigate();

  // Brand-forward copy (original & safe)
  const banners = [
    {
      title: "WHEN IT MATTERS,",
      subtitle: "WE’RE ALREADY THERE",
      description:
        "Licensed guards, concierge, mobile patrol, and remote video monitoring—coverage built around your risks, your budget, and your building rules.",
    },
    {
      title: "SMARTER COVERAGE",
      subtitle: "PEOPLE • PATROLS • CAMERAS",
      description:
        "From access control to incident response, our team integrates on-site presence with mobile checks and CCTV talk-downs to prevent problems before they escalate.",
    },
    {
      title: "TRUSTED ACROSS THE GTA",
      subtitle: "RESIDENTIAL • CONSTRUCTION • RETAIL",
      description:
        "Professional conduct, clear post orders, and time-stamped digital reports—so you always know what’s happening on your site, day or night.",
    },
  ];

  // 🔁 Media rotation — single best-fit concierge video (Pexels)
  // Free to use, no attribution required.
  // Source page: https://www.pexels.com/video/a-hotel-receptionist-talking-on-the-telephone-7820502/
  const mediaItems = [
    {
      type: "video",
      src: "https://www.pexels.com/download/video/7820502/", // direct mp4 stream from Pexels
      poster: "", // optional: add a poster image url if you want
    },
  ];

  const [rotation, setRotation] = useState(0);
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(false);

  // rotate ring + cycle media/copy
  useEffect(() => {
    const rotate = () => setRotation((r) => r - 120);

    const rotId = setInterval(rotate, 3000);
    const slideId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % mediaItems.length);
        setFade(false);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(rotId);
      clearInterval(slideId);
    };
  }, [mediaItems.length]);

  const copy = banners[idx % banners.length];

  const Media = ({ item }) => (
    <video
      className={`absolute z-10 object-cover
                  2xl:h-[400px] 2xl:w-[400px] 2xl:bottom-24 2xl:left-6
                  xl:h-[300px] xl:w-[300px] xl:bottom-24
                  lg:h-[240px] lg:w-[240px] lg:bottom-16 lg:left-0
                  md:h-[240px] md:w-[240px] md:-bottom-14 md:left-36
                  h-[180px] w-[180px] -bottom-[70px] left-20
                  transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
      autoPlay
      loop
      muted
      playsInline
      poster={item.poster || undefined}
    >
      <source src={item.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <div className="lg:flex lg:flex-row-reverse md:flex-col mb-44 md:mb-[280px] lg:-mb-[120px] 2xl:-mb-[320px]">
      {/* Right: rotating graphic + media */}
      <div className="2xl:h-[1000px] relative overflow-hidden ml-auto xl:h-[800px] lg:h-[700px] lg:w-full md:h-[600px] md:w-[750px] md:mx-auto h-[350px] w-[350px] mx-auto">
        <div className="absolute 2xl:bottom-[350px] 2xl:-right-72 xl:bottom-[180px] xl:-right-56 lg:bottom-[150px] lg:-right-44 md:bottom-[120px] md:right-0 right-0 bottom-[80px]">
          <div className="relative">
            {/* rotating ring/bg */}
            <img
              src={bg}
              className="2xl:h-[1000px] 2xl:w-[1150px] object-cover xl:h-[800px] xl:w-[800px] lg:h-[700px] lg:w-[700px] md:h-[600px] md:w-[750px] w-[350px] h-[350px]"
              alt="Lionsgate rotating motif"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)",
                filter: "saturate(0.9) hue-rotate(5deg)",
              }}
            />
            {/* subtle gold vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_50%,rgba(218,174,0,0.18),transparent_60%)] mix-blend-multiply" />
            {/* media */}
            <Media item={mediaItems[idx]} />
          </div>
        </div>
      </div>

      {/* Left: copy + CTAs */}
      <div className="2xl:px-20 flex flex-col w-full max-h-[750px] items-center lg:items-start justify-center gap-7 xl:px-0 xl:pl-10 lg:pl-7 px-5">
        {/* eyebrow */}
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block w-10 h-[2px] bg-[#131313]" />
          <span className="text-[#B88700] font-['Red_Hat_Display'] text-xs tracking-[0.18em] uppercase">
            Lionsgate Security
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h1
            className={`font-["otomanopee-one"] text-[#131313] 2xl:text-[50px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px] ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {copy.title}
          </h1>
          <h2
            className={`font-["otomanopee-one"] text-[#131313] 2xl:text-[50px] xl:text-[48px] lg:text-[38px] md:text-[34px] text-[28px] ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {copy.subtitle}
          </h2>
        </div>

        <p
          className={`font-["Philosopher"] text-[#3F3F3F] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] text-[14px] ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {copy.description}
        </p>

        <div className="flex flex-row gap-3 md:gap-6 lg:mx-0 md:mx-auto">
          {/* Primary: Lionsgate gold gradient */}
          <button
            onClick={() => navigate("/career#joinUs")}
            className={`rounded-lg font-["Montserrat"] font-bold text-xs px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9
              bg-gradient-to-r from-[#DAAE00] to-[#B88700] text-black
              ring-1 ring-[#DAAE00]/60 shadow-[0_10px_30px_rgba(218,174,0,0.35)]
              ${fade ? "opacity-0" : "opacity-100"}
              transition-transform duration-150 ease-in hover:scale-110 hover:from-[#F2C200] hover:to-[#DAAE00]`}
          >
            JOIN US NOW
          </button>

          {/* Secondary: gold outline → fills on hover */}
          <button
            onClick={() => navigate("/contact")}
            className={`font-["Montserrat"] text-xs font-bold px-5 py-4 sm:text-[13px] md:text-base md:px-7 md:py-5 lg:text-[13px] lg:px-5 lg:py-4 xl:text-base xl:px-9
              border-2 border-[#DAAE00] text-[#DAAE00]
              ${fade ? "opacity-0" : "opacity-100"}
              transition-all duration-150 ease-in hover:bg-[#131313] hover:text-white`}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;

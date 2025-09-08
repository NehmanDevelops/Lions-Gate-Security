import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";

// Icons (existing assets you already have)
import Surveillance from "../assets/24-hours.png";
import Reliable_Protection from "../assets/shield.png";
import Traine_Guards from "../assets/security-guard.png";
import Years_of_Experience from "../assets/expertise.png";
import Trusted_Clients from "../assets/trust.png";
import Various_Services from "../assets/customer-service.png";
import home_about from "../assets/home_about.png";

// tiny inline check icon (gold)
const Check = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#DAAE00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const HomeAbout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    aos.init({ once: true });
  }, []);

  // Capability tiles (uses your imported PNGs)
  const capabilities = [
    {
      icon: Surveillance,
      titleTop: "24/7",
      titleBottom: "SURVEILLANCE",
      desc: "Live monitoring with audio talk-downs and rapid dispatch."
    },
    {
      icon: Reliable_Protection,
      titleTop: "RELIABLE",
      titleBottom: "PROTECTION",
      desc: "Consistent coverage, clear post orders, documented reports."
    },
    {
      icon: Traine_Guards,
      titleTop: "TRAINED",
      titleBottom: "GUARDS",
      desc: "Licensed, vetted professionals backed by 24/7 supervision."
    },
    {
      icon: Years_of_Experience,
      titleTop: "7+ YEARS",
      titleBottom: "OF EXPERIENCE",
      desc: "Procedures refined on GTA sites across industries."
    },
    {
      icon: Trusted_Clients,
      titleTop: "25+",
      titleBottom: "TRUSTED CLIENTS",
      desc: "Chosen by property managers, builders & businesses."
    },
    {
      icon: Various_Services,
      titleTop: "VARIOUS",
      titleBottom: "SERVICES",
      desc: "On-site guards, mobile patrol, gatehouse & CCTV monitoring."
    },
  ];

  return (
    <>
      {/* --------- About: Brand story + values (light section) --------- */}
      <section id="homeAbout" className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div
          className="mx-auto grid items-center gap-10 px-5 pt-16 pb-10 md:gap-12 lg:grid-cols-2 lg:pt-24 lg:pb-14 max-w-[400px] md:max-w-[700px] lg:max-w-[1150px] xl:max-w-[1330px]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className='font-["otomanopee-one"] text-[28px] text-[#494949]'>WELCOME TO</h2>
            <h3 className='font-["otomanopee-one"] text-[32px] sm:text-[40px] md:text-[44px] text-[#131313]'>
              LIONSGATE SECURITY
            </h3>

            <p className='mt-4 text-[#1F2937] font-["Philosopher"] text-sm leading-6 md:text-base md:leading-7'>
              Lionsgate Concierge-Security Services is a private security company providing unarmed, professional
              protection for residential and commercial properties. Founded by experienced security personnel with
              law-enforcement education and field background, we prioritize our people and long-term client
              relationships. With Lionsgate, you deal with the same responsive team—people who know your site and
              keep building trust. For us, customer service and protection come before anything else.
            </p>

            {/* Values list */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                "We’re Experienced",
                "We’re Reliable",
                "We’re Proactive",
                "We’re Professionals",
                "We’re Passionate",
                "We’re Compassionate",
              ].map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <Check />
                  <span className='font-["Red_Hat_Display"] text-[#131313] text-sm md:text-base'>{v}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/contact")}
                className='font-["Montserrat"] font-bold rounded-md text-black bg-gradient-to-r from-[#DAAE00] to-[#B88700] px-6 py-3 ring-1 ring-[#DAAE00]/60 shadow-[0_8px_24px_rgba(218,174,0,0.35)] hover:from-[#F2C200] hover:to-[#DAAE00] transition'
              >
                GET A QUOTE
              </button>
              <button
                onClick={() => navigate("/about")}
                className='font-["Montserrat"] font-bold rounded-md border-2 border-[#DAAE00] text-[#DAAE00] px-6 py-3 hover:bg-[#131313] hover:text-white transition'
              >
                MORE ABOUT US
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2">
            <img
              src={home_about}
              alt="Lionsgate Security — team on site"
              className="w-full lg:w-[520px] xl:w-[650px] rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* --------- Capabilities grid (dark section) --------- */}
      <section className="w-full bg-gradient-to-b from-black via-[#0b0b0b] to-black py-14 md:py-16">
        <div
          className="mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 xl:gap-8 px-5 max-w-[400px] md:max-w-[700px] lg:max-w-[1150px] xl:max-w-[1270px] 2xl:max-w-[1365px]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-[#DAAE00]/30 bg-black text-white px-3 py-4 lg:px-4 lg:py-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:border-[#DAAE00]/60 transition"
            >
              {/* icon */}
              <div className="flex items-center justify-center">
                <img
                  src={cap.icon}
                  alt=""
                  className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 drop-shadow-[0_6px_16px_rgba(218,174,0,0.25)]"
                />
              </div>

              {/* title */}
              <div className='mt-3 lg:mt-4 font-["Montserrat"] font-bold text-center leading-tight'>
                <p className="text-sm lg:text-base xl:text-lg tracking-wide">{cap.titleTop}</p>
                <p className="text-[11px] lg:text-sm xl:text-base text-white/90">{cap.titleBottom}</p>
              </div>

              {/* description */}
              <p className='mt-2 text-center text-[11px] lg:text-[13px] xl:text-[14px] font-["Philosopher"] text-gray-300'>
                {cap.desc}
              </p>

              {/* subtle gold glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_0_2px_rgba(218,174,0,0.15),0_12px_40px_rgba(218,174,0,0.12)]" />
            </div>
          ))}
        </div>

        {/* Secondary CTAs under grid */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/career#joinUs")}
            className='font-["Montserrat"] font-bold bg-black text-white rounded-md px-5 py-3 border border-white/15 hover:bg-white/10 transition'
          >
            JOIN OUR TEAM
          </button>
          <button
            onClick={() => navigate("/services")}
            className='font-["Montserrat"] font-bold ml-3 rounded-md px-5 py-3 border-2 border-[#DAAE00] text-[#DAAE00] hover:bg-[#131313] hover:text-white transition'
          >
            EXPLORE SERVICES
          </button>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;

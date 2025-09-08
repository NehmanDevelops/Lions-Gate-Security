import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo-removebg-preview.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-icon.png";
import linkedin from "../assets/linkedin-icon.png";
import twitter from "../assets/twitter-icon.png";
import location from "../assets/location.png";
import phone_call from "../assets/phone_call.png";
import mail from "../assets/mail.png";

const Footer = () => {
  const navigate = useNavigate();

  const linkClass =
    'cursor-pointer transition-all duration-200 ease-in-out hover:translate-x-2 hover:text-[#DAAE00]';

  return (
    <>
      <footer className="mt-20 text-white">
        {/* subtle black-to-black gradient with gold accent border */}
        <div className="bg-gradient-to-r from-black via-[#0b0b0b] to-black border-t border-[#DAAE00]/30">
          <div className="mx-auto w-full max-w-[600px] xl:max-w-[1350px] px-4 py-8 md:py-10">
            {/* top row */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
              {/* Brand + social + mission */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 justify-center xl:justify-start">
                  <img
                    src={logo}
                    alt="Lionsgate Security logo"
                    className="w-[58px] h-[68px] sm:w-[68px] sm:h-[78px]"
                  />
                  <div className="space-y-1">
                    <p className='font-["otomanopee-one"] sm:text-lg tracking-wide'>
                      LIONSGATE SECURITY
                    </p>
                    <div className="h-px bg-white/30" />
                    <p className='font-["Red_Hat_Display"] text-xs sm:text-sm font-semibold text-white/80'>
                      Prevention • Protection • Safety
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className='font-["Philosopher"] text-lg text-[#DAAE00] text-center xl:text-left'>
                    FOLLOW US
                  </p>
                  <div className="flex gap-2 justify-center xl:justify-start">
                    <a href="#" aria-label="Facebook">
                      <img
                        src={facebook}
                        alt="Facebook"
                        className="w-[30px] h-[30px] hover:invert transition"
                      />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <img
                        src={instagram}
                        alt="Instagram"
                        className="w-[30px] h-[30px] hover:invert transition"
                      />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-[30px] h-[30px] hover:invert transition"
                      />
                    </a>
                    <a href="#" aria-label="Twitter/X">
                      <img
                        src={twitter}
                        alt="Twitter/X"
                        className="w-[30px] h-[30px] hover:invert transition"
                      />
                    </a>
                  </div>

                  <p className='text-[#D8D8D8] font-["Philosopher"] text-sm leading-5 text-center xl:text-left'>
                    Licensed, insured security for condos, construction, retail, and events across the GTA.
                    Uniformed guards, mobile patrol, gatehouse, and remote video monitoring—backed by 24/7
                    dispatch and digital reporting.
                  </p>
                </div>
              </div>

              {/* Quick links (desktop) */}
              <div className="hidden xl:block space-y-5">
                <h2 className='font-["Red_Hat_Display"] text-xl'>QUICK LINKS</h2>
                <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                  <p onClick={() => navigate("/")} className={linkClass}>Home</p>
                  <p onClick={() => navigate("/about")} className={linkClass}>About Us</p>
                  <p onClick={() => navigate("/services")} className={linkClass}>Services</p>
                  <p onClick={() => navigate("/career")} className={linkClass}>Careers</p>
                  <p onClick={() => navigate("/contact")} className={linkClass}>Contact</p>
                  {/* Optional assets */}
                  {/* <p onClick={() => navigate("/apply")} className={linkClass}>Apply Now</p> */}
                  {/* <p onClick={() => navigate("/brochure")} className={linkClass}>Brochure</p> */}
                </div>
              </div>

              {/* Services (desktop) */}
              <div className="hidden xl:block space-y-5">
                <h2 className='font-["Red_Hat_Display"] text-xl'>SERVICES</h2>
                <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                  <p onClick={() => navigate("/services#guards")} className={linkClass}>Security Guards</p>
                  <p onClick={() => navigate("/services#concierge")} className={linkClass}>Concierge Security</p>
                  <p onClick={() => navigate("/services#mobile")} className={linkClass}>Mobile Patrol</p>
                  <p onClick={() => navigate("/services#gatehouse")} className={linkClass}>Gatehouse / Access</p>
                  <p onClick={() => navigate("/services#cctv")} className={linkClass}>Remote Video Surveillance</p>
                  <p onClick={() => navigate("/services#events")} className={linkClass}>Events Security</p>
                </div>
              </div>

              {/* Quick links + Services (mobile/tablet) */}
              <div className="xl:hidden grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h2 className='font-["Red_Hat_Display"] text-lg mb-3'>QUICK LINKS</h2>
                  <div className='font-["Philosopher"] space-y-2 text-sm md:text-[15px]'>
                    <p onClick={() => navigate("/")} className={linkClass}>Home</p>
                    <p onClick={() => navigate("/about")} className={linkClass}>About Us</p>
                    <p onClick={() => navigate("/services")} className={linkClass}>Services</p>
                    <p onClick={() => navigate("/career")} className={linkClass}>Careers</p>
                    <p onClick={() => navigate("/contact")} className={linkClass}>Contact</p>
                  </div>
                </div>
                <div>
                  <h2 className='font-["Red_Hat_Display"] text-lg mb-3'>SERVICES</h2>
                  <div className='font-["Philosopher"] space-y-2 text-sm md:text-[15px]'>
                    <p onClick={() => navigate("/services#guards")} className={linkClass}>Security Guards</p>
                    <p onClick={() => navigate("/services#concierge")} className={linkClass}>Concierge Security</p>
                    <p onClick={() => navigate("/services#mobile")} className={linkClass}>Mobile Patrol</p>
                    <p onClick={() => navigate("/services#gatehouse")} className={linkClass}>Gatehouse / Access</p>
                    <p onClick={() => navigate("/services#cctv")} className={linkClass}>Remote Video Surveillance</p>
                    <p onClick={() => navigate("/services#events")} className={linkClass}>Events Security</p>
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="space-y-5">
                <h2 className='font-["Red_Hat_Display"] text-xl'>CONTACT</h2>
                <div className='font-["Philosopher"] space-y-4 text-[15px]'>
                  <div className="flex gap-3">
                    <img src={location} alt="" className="h-6 w-6 rounded-full" />
                    <p className="leading-5 text-white/90">
                      10 Milner Business Court, Suite 300<br />
                      Scarborough, ON M1B 3C6
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={phone_call} alt="" className="h-6 w-6 rounded-full" />
                    <p className="text-white/90">24/7 Dispatch: <a href="tel:+16472203119" className="text-[#DAAE00] hover:underline">647-220-3119</a></p>
                  </div>
                  <div className="flex gap-3">
                    <img src={mail} alt="" className="h-6 w-6" />
                    <p className="text-white/90">
                      <a href="mailto:info@lionsgate-concierge.com" className="hover:underline">
                        info@lionsgate-concierge.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom line */}
            <hr className="border-white/10 my-6" />
            <div className="text-center text-sm text-white/70">
              © {new Date().getFullYear()} Lionsgate Security. All rights reserved.
              {/* If you want to keep credits, append here:
              <span className="mx-2">•</span> Design & Dev: Your Name
              */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

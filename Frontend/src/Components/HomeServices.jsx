import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aos from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/s1.jpeg";
import image2 from "../assets/s2.jpeg";
import image3 from "../assets/s3.jpeg";
import image4 from "../assets/s4.jpeg";
import image5 from "../assets/s5.jpeg";
import image6 from "../assets/s6.jpeg";

const HomeServices = () => {
  const navigate = useNavigate();
  useEffect(() => {
    aos.init({ once: "true" });
  }, []);

  // shared classes so styling is consistent
  const card =
    'h-auto w-auto bg-black text-white flex flex-col items-center px-3 pb-6 rounded-xl shadow-lg ' +
    'max-w-[460px] xl:px-8 xl:pb-8 transition-transform duration-200 hover:-translate-y-1';
  const imgRing =
    'h-[150px] w-[150px] rounded-full object-cover relative -top-16 border-[6px] ' +
    'border-amber-500/80 shadow-[0_0_0_6px_rgba(0,0,0,0.5)] z-10';
  const title =
    'text-xl 2xl:text-2xl font-["Red_Hat_Display"] font-semibold text-center';
  const copy =
    'text-sm font-["Red_Hat_Display"] text-gray-300 text-center max-w-[360px]';
  const cta =
    "text-sm font-bold font-['Montserrat'] text-white bg-gradient-to-r from-black to-amber-600 " +
    "px-5 py-4 rounded-md relative overflow-hidden transition-transform duration-200 hover:scale-[1.03] " +
    "focus:outline-none focus:ring-2 focus:ring-amber-500/70";

  return (
    <>
      <div className='flex flex-col space-y-[156px] mt-[34px] items-center px-5 md:mt-[80px] xl:mt-[192px]'>
        <h1 className='text-[32px] text-[#131313] font-["otomanopee-one"] text-center md:text-[44px] xl:text-[56px]'>
          SERVICES WE PROVIDE
        </h1>

        <div className='flex flex-col gap-[100px] items-center md:grid md:grid-rows-3 md:grid-cols-2 md:gap-7 md:gap-y-[80px] xl:grid-cols-3 xl:grid-rows-2 xl:gapx-[80px]'>

          {/* Card 1 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image1} alt="Security Guards" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>SECURITY GUARDS</p>
              <p className={copy}>
                Licensed, uniformed guards who control access, patrol, and respond fast to incidents—professional, courteous, and backed by 24/7 dispatch with digital reports.
              </p>
              <button onClick={() => navigate("/services#securityGuards")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image2} alt="Bouncers & Bodyguards" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>Concierge Services</p>
              <p className={copy}>
                Friendly front-desk security for condos & offices—visitor screening, fob/package management, and CCTV monitoring. Hospitality-first, firm on building rules.

              </p>
              <button onClick={() => navigate("/services#bouncers")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image3} alt="Lady Security Guards" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>Mobile Patrol</p>
              <p className={copy}>
                Marked patrol vehicles with randomized checks, lock-ups, and alarm response. Cost-effective coverage when a full-time guard isn’t needed—photos & time-stamped reports included.
              </p>
              <button onClick={() => navigate("/services#ladySecurity")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image4} alt="Gunmen / Revolver Men / PSO" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>Events Security</p>
              <p className={copy}>
                Trained teams for events of any size—entry screening, bag checks, crowd flow, VIP escort, and emergency response. Discreet presence that keeps guests safe.
              </p>
              <button onClick={() => navigate("/services#gunmen")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image5} alt="Security Supervisor" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>Gatehouse Security</p>
              <p className={copy}>
                24/7 access control for facilities and sites—vehicle screening, contractor/vendor verification, visitor passes, and truck logs to keep operations secure and moving.              </p>
              <button onClick={() => navigate("/services#securitySupervisors")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

          {/* Card 6 */}
          <div className={card} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <img src={image6} alt="Security Officers" className={imgRing} />
            <div className='flex flex-col items-center gap-4 -mt-10'>
              <p className={title}>Remote Video Surveillance (CCTV)</p>
              <p className={copy}>
                Live camera monitoring with instant audio warnings and dispatch—strong deterrence at a lower cost than 24/7 on-site guards.              </p>
              <button onClick={() => navigate("/services#securityOfficers")} className={cta}>
                KNOW MORE
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HomeServices;

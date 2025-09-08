import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* --- tiny inline icons (no extra deps) --- */
const Quote = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 8H6a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V8z" />
    <path d="M22 8h-4a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V8z" />
  </svg>
);
const Star = ({ filled }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill={filled ? "#DAAE00" : "none"} stroke="#DAAE00" strokeWidth="1.5">
    <path d="M12 2l3.1 6.2 6.9 1-5 4.9 1.2 6.9L12 18.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
  </svg>
);

/* --- helper to generate initials --- */
const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

/* --- persuasive, realistic reviews --- */
const reviews = [
  {
    name: "M. Patel",
    about: "Property Manager — Scarborough",
    date: "05/31/2025",
    rating: 5,
    heading: "Reliable night patrols & clear reporting",
    body:
      "Lionsgate’s mobile patrols are consistent and professional. We get time-stamped photos after every sweep and a call if something looks off. Since switching, after-hours issues have dropped and tenants feel safer.",
    tag: "Mobile Patrol",
  },
  {
    name: "S. Williams",
    about: "Condo Board Director — North York",
    date: "04/18/2025",
    rating: 5,
    heading: "Concierge team that actually improves the building",
    body:
      "Their concierge guards are friendly but firm with building rules. Package room and visitor parking finally run smoothly. Residents keep telling us how respectful the officers are.",
    tag: "Concierge Security",
  },
  {
    name: "D. Nguyen",
    about: "Construction Superintendent — Vaughan",
    date: "02/27/2025",
    rating: 5,
    heading: "Fast response and no drama at the gate",
    body:
      "Gatehouse staff handle contractors and deliveries without holding up the site. They spot issues early and escalate properly. Reports are clean and easy to forward to head office.",
    tag: "Gatehouse",
  },
  {
    name: "A. Khalid",
    about: "Plaza Owner — Pickering",
    date: "03/10/2025",
    rating: 4,
    heading: "CCTV monitoring that prevents problems",
    body:
      "The remote video team does real talk-downs and calls patrol when needed. We’ve had far fewer late-night loitering complaints, and the incident clips they email are useful for follow-up.",
    tag: "Remote Video Surveillance",
  },
];

const CustomerReview = () => {
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrent(next),
    appendDots: (dots) => (
      <div style={{ marginTop: 24 }}>
        <ul className="flex items-center justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        className={`h-2 rounded-full transition-all ${
          i === current ? "w-6 bg-[#DAAE00]" : "w-2 bg-[#d1d5db]"
        }`}
        aria-label={`Go to testimonial ${i + 1}`}
      />
    ),
  };

  return (
    <>
      <section className="overflow-hidden">
        <h1 className='mt-[120px] md:mt-[80px] xl:mt-[192px] mb-10 text-[#131313] font-["otomanopee-one"] text-center text-[32px] md:text-[44px] xl:text-[56px]'>
          WHAT PEOPLE SAY ABOUT US
        </h1>

        <Slider {...settings}>
          {reviews.map((r, idx) => (
            <div key={idx} className="px-4">
              <div className="max-w-3xl mx-auto rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 p-8 md:p-10">
                {/* tag + quote icon */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-[#DAAE00]/40 text-[#DAAE00] px-3 py-1 text-xs font-medium">
                    {r.tag}
                  </span>
                  <Quote className="w-8 h-8 text-[#DAAE00]" />
                </div>

                <h3 className="mt-4 text-xl md:text-2xl font-semibold text-[#131313] text-center">
                  {r.heading}
                </h3>

                <p className="mt-4 md:mt-5 text-[#131313]/80 text-center italic leading-relaxed">
                  “{r.body}”
                </p>

                {/* person row with monogram avatar */}
                <div className="mt-8 md:mt-10 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center font-semibold text-[#131313] border-2 border-[#DAAE00]">
                    {initials(r.name)}
                  </div>
                  <div className="text-[#131313]">
                    <div className="font-semibold md:text-lg">{r.name}</div>
                    <div className="text-sm text-[#6b7280]">{r.about}</div>
                  </div>
                </div>

                {/* stars + date */}
                <div className="mt-4 flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} filled={i <= r.rating} />
                  ))}
                </div>
                <p className="mt-1 text-center text-sm text-[#6b7280]">{r.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default CustomerReview;

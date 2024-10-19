import React from 'react'
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import career1 from "../assets/career1.png";
import career2 from "../assets/career2.png";
import career3 from "../assets/career3.png";
import career4 from "../assets/career4.png";
import career5 from "../assets/career5.png";
import career_about from "../assets/career_about.png";


const CareerAll = () => {
    return (
        <>
            <h1 className='font-["otomanopee-one"] text-[26px] md:text-[38px] xl:text-[50px] text-center py-5 md:pt-2 md:pb-0'>WHERE PROTECTION MEETS PRECISION</h1>
            <div className='md:flex justify-between space-y-16 md:space-y-0 max-w-fit md:max-w-none xl:max-w-[1400px] mx-auto py-2 px-5 pb-20'>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={about1} alt="" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-xl'>SECURING YOUR WORLD<br />ONE STEP AHEAD</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>With cutting-edge technology and highly trained professionals, we provide proactive security solutions tailored to your needs, ensuring you stay protected around the clock.</p>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4 md:pt-16'>
                    <img src={about2} alt="" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-xl'>GUARDING THE FUTURE<br />PROTECTING THE PRESENT</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>From today’s challenges to tomorrow’s risks, our team delivers reliable security services designed to safeguard what matters most, giving you peace of mind for the long term.</p>
                    </div>
                </div>
                <div className='max-w-[450px] md:max-w-[220px] lg:max-w-[300px] xl:max-w-[360px] space-y-4'>
                    <img src={about3} alt="" />
                    <div className='text-center space-y-3'>
                        <p className='font-["otomanopee-one"] text-xl'>TRUSTED BY MANY<br />YOUR ULTIMATE SECURITY PARTNER</p>
                        <p className='font-["Red_Hat_Display"] text-sm md:text-xs lg:text-[13px] leading-4'>Backed by years of experience and a roster of satisfied clients, we offer affordable, top-tier security services you can trust, keeping threats at bay and your assets safe.</p>
                    </div>
                </div>
            </div>


            <div className='w-full h-full bg-[#131313] pt-12 pb-16 px-3 md:px-5'>
                <h1 className='font-["otomanopee-one"] text-center md:text-start max-w-[1100px] mx-auto text-[26px] md:text-[38px] xl:text-[50px] text-white pb-14'>WHY JOIN US</h1>
                <div className='grid grid-cols-2 gap-x-4 gap-y-10 place-items-center text-xs md:text-sm lg:text-base md:flex justify-between max-w-[1350px] mx-auto text-[#B1B1B1] text-center font-["otomanopee-one"]'>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career1} alt="" />
                        <p>COMPETITIVE SALARY<br />PACKAGE</p>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career2} alt="" />
                        <p>COMPREHENSIVE<br />TRAINING PROGRAMS</p>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career3} alt="" />
                        <p>CAREER GROWTH<br />OPPORTUNITIES</p>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career4} alt="" />
                        <p>HEALTH & SAFETY<br />BENEFITS</p>
                    </div>
                    <div className='max-w-[240px] space-y-2'>
                        <img src={career5} alt="" />
                        <p>WORK WITH PRESTIGIOUS<br />CLIENTS</p>
                    </div>
                </div>
            </div>


            <div className='w-full h-full'>
                <div className='lg:flex items-center space-y-6 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1365px] pt-16 lg:pt-2 pb-8 lg:pb-0 px-4 xl:px-1'>
                    <img src={career_about} alt="" className='lg:w-[520px] xl:w-[650px]' />
                    <div className=' space-y-5 lg:space-y-14'>
                        <div className=''>
                            <h1 className='font-["otomanopee-one"] text-3xl lg:text-4xl xl:text-5xl text-[#131313]'>JOIN OUR TEAM</h1>
                        </div>
                        <p className='font-["Philosopher"] text-[#212121] leading-[15px] xl:leading-5 text-sm xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        <div className='flex flex-row gap-3 md:gap-5 pt-5 lg:pt-0'>
                            <button className='font-["Montserrat"] text-white font-bold bg-gradient-to-l from-[#6E72FC] to-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>JOIN US NOW</button>
                            <button className='font-["Montserrat"] font-bold border-2 border-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CareerAll

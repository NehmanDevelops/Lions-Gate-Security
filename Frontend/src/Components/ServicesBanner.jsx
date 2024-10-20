import React from 'react'
import services_banner from "../assets/services_banner.png";


const ServicesBanner = () => {
    return (
        <>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1365px] pb-8 lg:pb-0 px-4 h-[680px] relative'>
                <div className='space-y-5 lg:space-y-14 z-20 w-full'>
                    <div>
                        <h1 className='font-["otomanopee-one"] text-[26px] md:text-4xl xl:text-5xl text-[#131313]'>SERVICES WE PROVIDE</h1>
                    </div>
                    <p className='font-["Philosopher"] text-[#212121] leading-[15px] xl:leading-5 text-sm xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    <div className='flex flex-row gap-3 md:gap-5 pt-5 lg:pt-0'>
                        <button className='font-["Montserrat"] text-white font-bold bg-gradient-to-l from-[#6E72FC] to-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>JOIN US NOW</button>
                        <button className='font-["Montserrat"] font-bold border-2 border-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>CONTACT US</button>
                    </div>
                </div>
                <div className='w-full'>
                    <img src={services_banner} alt="" className='w-full md:w-[520px] lg:w-[820px] xl:w-[1100px] absolute -top-20 md:-top-40 lg:-top-36 xl:-top-72' />
                </div>
            </div>
        </>
    )
}

export default ServicesBanner

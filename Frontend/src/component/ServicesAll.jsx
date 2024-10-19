import React from 'react'
import services_banner from "../assets/services_banner.png";
import services1_5 from "../assets/services1_5.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.png";
import services6 from "../assets/services6.png";


const ServicesAll = () => {
    return (
        <>
            <div className='lg:flex items-center space-y-6 lg:gap-14 2xl:gap-28 mx-auto max-w-[400px] md:max-w-[600px] lg:max-w-[1150px] xl:max-w-[1330px] 2xl:max-w-[1365px] pt-16 lg:pt-2 pb-8 lg:pb-0 px-4 xl:px-1'>
                <div className='lg:hidden'>
                    <h1 className='font-["otomanopee-one"] text-[28px] text-[#131313]'>SERVICES WE PROVIDE</h1>
                </div>
                <div className='lg:space-y-14'>
                    <div className='hidden lg:block'>
                        <h1 className='font-["otomanopee-one"] lg:text-4xl xl:text-5xl text-[#131313]'>SERVICES WE PROVIDE</h1>
                    </div>
                    <p className='font-["Philosopher"] text-[#212121] leading-[15px] xl:leading-5 text-sm xl:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    <div className='flex flex-row gap-3 md:gap-5 pt-5 lg:pt-0'>
                        <button className='font-["Montserrat"] text-white font-bold bg-gradient-to-l from-[#6E72FC] to-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>JOIN US NOW</button>
                        <button className='font-["Montserrat"] font-bold border-2 border-[#AD1DEB] xl:text-base lg:text-sm text-xs xl:px-6 xl:py-4 lg:px-5 py-3 px-3'>CONTACT US</button>
                    </div>
                </div>
                <img src={services_banner} alt="" className='lg:w-[520px] xl:w-[650px]' />
            </div>


            <div className='max-w-[1100px] mx-auto space-y-8 drop-shadow-2xl'>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <img src={services1_5} alt="" className='w-[380px]' />
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>SECURITY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>BOUNCERS/BODY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services2} alt="" className='w-[380px]' />
                </div>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <img src={services3} alt="" className='w-[380px]' />
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>LADY SECURITY GUARDS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>GUNMEN/REVOLVER MEN/PSO</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services4} alt="" className='w-[380px]' />
                </div>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <img src={services1_5} alt="" className='w-[380px]' />
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>SECURITY SUPERVISORS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                </div>
                <div className='flex items-center justify-between rounded-[10px] bg-white px-7 py-1'>
                    <div className='max-w-[510px] space-y-7'>
                        <h1 className='font-["otomanopee-one"] text-[#131313] text-4xl whitespace-nowrap'>SECURITY OFFICERS</h1>
                        <p className='font-["Philosopher"] text-[#212121] text-[15px] leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <img src={services6} alt="" className='w-[380px]' />
                </div>
            </div>
        </>
    )
}

export default ServicesAll

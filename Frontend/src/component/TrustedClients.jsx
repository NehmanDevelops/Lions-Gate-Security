import React from 'react'
import Marquee from "react-fast-marquee";
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.png"
import c7 from "../assets/c7.png"


const TrustedClients = () => {
    return (
        <>
            <h1 className='mt-[34px] md:mt-[80px] xl:mt-[192px] mb-14 lg:mb-16 text-[#131313] font-["otomanopee-one"] text-center text-[32px] md:text-[44px] xl:text-[56px]'>OUR TRUSTED CLIENTS</h1>
            <Marquee autoFill gradient gradientWidth={20} gradientColor='#ECECEC'>
                <div className='flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10'>
                    <img src={c1} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c2} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c3} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c4} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c5} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c6} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full' />
                    <img src={c7} alt="" className='w-24 md:w-28 lg:w-32 xl:w-36 h-full pr-4 md:pr-6 lg:pr-8 xl:pr-10' />
                </div>
            </Marquee>
        </>
    )
}

export default TrustedClients

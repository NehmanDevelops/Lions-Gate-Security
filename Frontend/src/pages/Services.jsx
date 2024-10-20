import React from 'react'
import Navbar from '../Components/Navbar'
import ServicesBanner from '../Components/ServicesBanner'
import ServicesAll from '../Components/ServicesAll'
import Footer from '../Components/Footer'

const Services = () => {
    return (
        <>
            <body className='bg-[#ECECEC] overflow-x-hidden'>
                <Navbar />
                <ServicesBanner />
                <ServicesAll />
                <Footer />
            </body>
        </>
    )
}

export default Services

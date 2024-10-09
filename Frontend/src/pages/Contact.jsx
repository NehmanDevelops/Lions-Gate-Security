import React from 'react'
import Navbar from '../component/Navbar'
import ContactBanner from '../component/ContactBanner'
import Footer from '../component/Footer'

const Contact = () => {
    return (
        <>
            <body className='bg-[#ECECEC]'>
                <Navbar />
                <ContactBanner />
                <Footer />
            </body>
        </>
    )
}

export default Contact

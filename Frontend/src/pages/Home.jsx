import React from 'react'
import Navbar from '../Components/Navbar'
import HomeBanner from '../Components/HomeBanner'
import HomeAbout from "../Components/HomeAbout"
import HomeServices from "../Components/HomeServices"
import HomeCertificate from "../Components/HomeCertificate"
import CustomerReview from "../Components/CustomerReview"
import TrustedClients from "../Components/TrustedClients"
import Footer from "../Components/Footer"
import ScrollToTop from '../Components/ScrollToTop'

const Home = () => {
    return (
        <>
            <body className="bg-[#ECECEC]">
                <ScrollToTop />
                <Navbar />
                <HomeBanner />
                <HomeAbout />
                <HomeServices />
                <HomeCertificate />
                <CustomerReview />
                <TrustedClients />
                <Footer />
            </body>
        </>
    )
}

export default Home

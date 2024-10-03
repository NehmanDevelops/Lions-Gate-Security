import React from 'react'
import logo from '../assets/logo-white.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import twitter from '../assets/twitter-icon.png'
import location from '../assets/location.png'
import phone_call from '../assets/phone_call.png'
import mail from '../assets/mail.png'


const Footer = () => {
    return (
        <>
            <div className='h-full w-full flex flex-col mt-20 bg-gradient-to-r from-[#3E187A] to-[#994ECC] text-white pt-8 pb-5' >
                <div className='flex justify-between mx-auto w-[85%]'>
                    <div className='flex flex-col justify-between space-y-16 w-[350px] h-full'>
                        <div className='flex items-center gap-3'>
                            <img src={logo} alt="logo" className='w-[68px] h-[78px]' />
                            <div className='space-y-1'>
                                <p className='font-["otomanopee-one"] text-lg'>SURAKSHA SECURITY</p>
                                <div className='h-[1px] bg-white'></div>
                                <p className='font-["Red Hat Display"] text-sm font-semibold'>Trusted Security Solutions</p>
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <p className='font-["Philosopher"] text-lg'>FOLLOW US ON</p>
                            <div className='flex'>
                                <img src={facebook} alt="" className='w-[30px] h-[30px]' />
                                <img src={instagram} alt="" className='w-[30px] h-[30px]' />
                                <img src={linkedin} alt="" className='w-[30px] h-[30px]' />
                                <img src={twitter} alt="" className='w-[30px] h-[30px]' />
                            </div>
                            <p className='text-[#D8D8D8] font-["Philosopher"] w-[400px] text-sm leading-[18px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  Lorem ipsum dolor sit amet, consectetur adipiscing elitquis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5'>
                        <h1 className='font-["Red Hat Display"] text-xl'>QUICK LINKS</h1>
                        <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Services</p>
                            <p>Career</p>
                            <p>Contact Us</p>
                            <p>Career Form</p>
                            <p>Brochure</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5'>
                        <h1 className='font-["Red Hat Display"] text-xl'>SERVICES</h1>
                        <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                            <p>Security Guards</p>
                            <p>Lady Security Guards</p>
                            <p>Bouncers and Bodyguards</p>
                            <p>Gun Men</p>
                            <p>Revolver Men</p>
                            <p>Security Supervisors</p>
                            <p>Security Officers</p>
                        </div>
                    </div>
                    <div className='pt-10 space-y-5 w-[260px]'>
                        <h1 className='font-["Red Hat Display"] text-xl'>CONTACT US</h1>
                        <div className='font-["Philosopher"] space-y-2 text-[15px]'>
                            <div className='flex space-x-2'>
                                <img src={location} alt="" className='h-6 w-6 rounded-full' />
                                <p className='leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos nobis architecto velit fuga illum suscipit quo iste recusandae minus</p>
                            </div>
                            <div className='flex space-x-2'>
                                <img src={phone_call} alt="" className='h-6 w-6 rounded-full' />
                                <p>7439537213 , 9474812394</p>
                            </div>
                            <div className='flex space-x-2'>
                                <img src={mail} alt="" className='h-6 w-6' />
                                <p>surakshasecurity@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='border-[#6C6C6C] h-[1px] mx-auto w-[87%] my-5' />
                <p className='font-["Red Hat Display"] text-center text-[15px]'>DESIGNED AND DEVELOPED BY : AYAN | SHIVANSHU</p>
            </div>
        </>
    )
}

export default Footer

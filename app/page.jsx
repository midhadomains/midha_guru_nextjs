import React from "react";
import BookDemoClass from "../components/book-demo-class";
import Image from "next/image";
import PlatformFeatures from '@/components/home/PlatformFeatures';
import Link from 'next/link';
import { BiSolidPhoneCall } from "react-icons/bi";
import Choose from "../components/Choose.jsx"
import About from "../components/About.jsx";
import Hero from "../components/hero.jsx";
import ContinuousSlidingText from "../components/ContinuousSlidingText.jsx";
import Carousel from "../components/home/carousel.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";


export const metadata = {
 userAgent: '*',
   allow: '/',
   Sitemap: 'https://www.midha.guru/sitemap.xml'
  }

function page() {
  return (

    <>
      <Navbar />
      <div>
        <ContinuousSlidingText />
        <Hero />
        <BookDemoClass />
        <About />
        <Choose />
        <div className="mx-[20px]">
          <iframe style={{ aspectRatio: "16/9", width: "100%", maxWidth: "1000px", margin: "0 auto",}} src="https://www.youtube.com/embed/1i7IQj8zmcw?si=R8LXWNP65--T2PMz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <PlatformFeatures />
        <div className='sm:bg-contactbgimage bg-smherobgimg bg-contain sm:bg-cover bg-no-repeat bg-bottom	 md:my-[100px] my-[40px]'>
          <div className='max-w-[1340px] flex justify-center md:justify-around flex-col-reverse items-center md:items-end md:flex-row mx-auto flex-wrap md:flex-nowrap md:px-5 px-2 '>
            <Image src='/Group 161.svg' width={500} height={500} alt='Image' className='flex-shrink-1 md:w-[40%] md:mr-5 md:mx-0 px-4 md:px-0' />
            <div className='text-center md:text-left md:min-w-[400px] my-auto '>
              <h1 className='text-[30px] sm:text-[40px] md:text-[50px]  font-bold '>Book a <span className='text-[#9A391D]'>Free Call</span></h1>
              <p className='px-2 md:px-0 text-[16px]  md:text-[20px]  mx-auto md:mx-0 text-[#2E3442] md:max-w-[380px] my-1 md:my-3'>We would be happy to talk with you about how we could help your studies.</p>
              <Link href='/contact-us' className='flex text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold bg-[#6A1C1A] text-white  w-fit md:px-[60px] sm:px-[50px] px-[30px] py-2 rounded-full mx-auto md:mx-0 my-4 md:mt-7'><BiSolidPhoneCall className='my-auto mr-2' />Contact Us</Link>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}

export default page;


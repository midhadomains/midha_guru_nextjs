import React from "react";
import BookDemoClass from "../components/book-demo-class";
import Image from "next/image";
import PlatformFeatures from '@/components/home/PlatformFeatures';
import Link from 'next/link';
import { BiSolidPhoneCall } from "react-icons/bi";


import Hero from "../components/hero.jsx";
import ContinuousSlidingText from "../components/ContinuousSlidingText.jsx";

import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

function page() {
  return (
    <div>
      <PlatformFeatures />
      <div className='bg-contactbgimage bg-cover bg-no-repeat bg-bottom	 md:my-[100px] my-[40px]'>
        <div className='max-w-[1340px] flex justify-center md:justify-around flex-col-reverse items-center md:items-end md:flex-row mx-auto flex-wrap md:flex-nowrap md:px-5 px-2 '>
          <Image src='/Group 161.svg' width={500} height={500} alt='Image' className='flex-shrink-1 md:w-[40%] md:mr-5 md:mx-0 px-4 md:px-0' />
          <div className='text-center md:text-left md:min-w-[400px] my-auto '>
            <h1 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold '>Book a <span className='text-[#9A391D]'>Free Call</span></h1>
            <p className='px-2 md:px-0 text-[16px]  md:text-[20px]  mx-auto md:mx-0 text-[#2E3442] md:max-w-[380px] my-1 md:my-3'>We would be happy to talk with you about how we could help your studies.</p>
            <Link href='/contact-us' className='flex text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-semibold bg-[#6A1C1A] text-white  w-fit md:px-[60px] sm:px-[50px] px-[30px] py-2 rounded-full mx-auto md:mx-0 my-4 md:mt-7'><BiSolidPhoneCall className='mt-2 mr-2' />Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;


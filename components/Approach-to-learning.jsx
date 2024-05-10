import React from 'react';
import Image from 'next/image';
import Link from "next/link";

function ApproachTolearning() {
  return (
    <div className=" flex flex-wrap sm:flex-nowrap xl:max-w-[1100px] w-[300px] sm:w-[600px] md:w-[700px] lg:w-[900px] sm:justify-center xl:justify-between mx-auto mt-[15px]">
        <div className="">
        <Image src="/ApproachTolearning.svg" alt="Image" width={500} height={500} className="  " />
        </div>
        <div className="sm:ml-[20px] md:ml-[40px] xl:ml-[60px]">
           <h1 className="text-[#2E3442] text-[24px] xl:text-[30px] font-bold mt-2 sm:mt-0">Approach to<span className="text-[#BE4E1E]"> learning</span></h1>
           <p className="text-[#2E3442] text-[12px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl-[24px] xl:w-[500px] lg:w-[410px] md:w-[360px] sm:w-[280px] w-[300px] mt-[15px]   "> 
          <span className="text-[#BE4E1E]"> Midha Guru </span> offers a holistic educational experience that nurtures not only academic success but also personal growth.
          
           </p>
           <Link href='https://www.midha.guru/about' className="mx-auto ">
           <p className="text-[#BE4E1E] font-bold"><br/> Read more  &#62; </p>
           </Link>

        
        </div>
    </div>
  )
}

export default ApproachTolearning

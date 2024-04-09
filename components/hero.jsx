import React from "react";
import Image from "next/image";
import Link from "next/link";
function hero() {
  return (
    <div className=" sm:bg-herobgimg bg-smherobgimg xl:bg-2xlherobgimg sm:bg-cover bg-contain  bg-no-repeat bg-bottom 2xl:bg-cover flex-shrink-0 lg:mt-12 mb-[50px] ">

      <div className="flex flex-wrap 2xl:max-w-[1400px] justify-center mx-auto ">
        <div className="max-w-[400px] lg:max-w-[600px] flex flex-col  lg:block mb-5">
          <h1 className="lg:leading-[70px] text-[#9A391D] text-center lg:text-left text-2xl sm:text-2xl md:text-4xl xl:text-5xl  font-bold ">
            <span className="text-[#202124] ">&quot;</span>
            Your exam
            <span className="text-[#202124] "> is</span>
            <span className="text-[#9A391D] "> Our </span>
            <span className=" text-[#202124] ">Exam&quot;</span>
          </h1>
          <h3 className="text-[#202124] text-center lg:text-left sm:text-[22px] my-[18px] ">
            is what the team at
            <span className="text-[#9A391D] "> MidhaGURU </span>proudly 
            &nbsp;announces and lives up to.
          </h3>
          <h3 className="text-[#202124]   text-center lg:text-left min-w-[20px] ">
            Enroll with us now for high quality and smartest way of learning for classes 6th to 10th students.
          </h3>
          <p className="text-[#9A391D] font-bold text-center lg:text-left  w-[100%] my-1">
            Separate batches for CBSE and ICSE
          </p>

          <Link href='https://edu.midhafin.com/s/authenticate' className="mx-auto ">
          <button
          
            type="Sign Up"
              class="w-[150px] md:min-w-[300px] md:w-[80%] hover:text-white transition-colors duration-200 hover:bg-[#9A391D] bg-white sm:mt-6 mt-2 justify-center mx-auto lg:mt-[18px] border-[#6A1C1A] border-2 rounded-full px-6 py-2 text-lg text-[#6A1C1A]  font-semibold"
          >
            Sign Up
           
          </button>
            </Link>
        </div>
        <div className="">
          <Image
            width={1500}
            height={1600}
            className="2xl:w-[610px] lg:w-[500px] w-[300px] sm:w-[450px] mx-auto lg:mx-0 "
            src="/Group 331.png"
            alt="Additional Image"
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default hero;

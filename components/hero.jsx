import React from "react";
import Image from "next/image";

function hero() {
  return (
    <div className=" sm:bg-herobgimg bg-smherobgimg 2xl:bg-2xlherobgimg sm:bg-cover bg-contain  bg-no-repeat bg-bottom 2xl:bg-cover flex-shrink-0 mt-12 ">
    
      <div className="flex flex-wrap 2xl:max-w-[1400px]    justify-center mx-auto ">
        <div className="max-w-[400px] lg:max-w-[600px]">
          <h1 className="lg:leading-[70px] text-[#9A391D] text-center lg:text-left text-2xl sm:text-2xl md:text-4xl lg:text-5xl  font-bold ">
            <span className="text-[#202124] ">&quot;</span>
            Your exam
            <span className="text-[#202124] "> is</span>
            <span className="text-[#9A391D] "> Our </span>
            <span className=" text-[#202124] ">Exam&quot;</span>
          </h1>
          <h3 className="text-[#202124] text-center lg:text-left sm:text-[22px] mb-[18px] ">
            is what the team at
            <span className="text-[#9A391D] "> MidhaGURU </span>proudly <br />
            &nbsp;announces and lives up to.
          </h3>
          <h3 className="text-[#202124]  text-sm   text-center lg:text-left min-w-[20px] ma">
            Enroll with us now for high quality and smartest way of learning for classes 6th to 10th students.
          </h3>
          <p className="text-[#9A391D] font-bold text-center lg:text-left  w-[100%]">
              Separate batches for CBSE and ICSE
            </p>
          <button
                type="Sign Up"

                class="w-[80%] bg-white sm:mt-6 mt-2 justify-center mx-auto lg:mt-[18px] border-[#6A1C1A] border-[1px] rounded-full px-6 py-2 text-lg text-[#6A1C1A]  font-semibold"
           >
                Sign Up
              </button>
        </div>
        <div className="">
          <Image
            width={1500}
            height={1600}
            className="2xl:w-[610px] lg:w-[500px] w-[300px] sm:w-[450px] mx-auto lg:mx-0 "
            src="/Group 331.svg"
            alt="Additional Image"
          />
        </div>
      </div>
    </div>
  );
}

export default hero;

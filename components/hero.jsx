import React from "react";
import Image from "next/image";
import Link from "next/link";
function hero() {
  return (
    <div className="sm:bg-herobgimg bg-smherobgimg xl:bg-2xlherobgimg sm:bg-cover bg-contain  bg-no-repeat bg-bottom 2xl:bg-cover flex-shrink-0 lg:mt-12 mb-[50px]">

      <div className="mg:flex  2xl:max-w-[1400px] justify-center mx-auto px-[20px] mg:px-[50px]">
        <div className="max-w-[400px] lg:max-w-[610px] flex flex-col  lg:block mb-5 md:px-2 mx-auto">
          <h1 className="lg:leading-[70px]  text-center lg:text-left  text-2xl sm:text-2xl md:text-[32px] xl:text-5xl  font-bold ">
            <span className="">&quot;</span>
            <span className="text-[#9A391D] ">Your exam</span>
            <span className=""> is</span>
            <span className="text-[#9A391D] "> Our </span>
            <span className="">Exam&quot;</span>
          </h1>
          <h3 className="text-center mg:text-left font-bold text-[16px] sm:text-[18px] my-[18px] ">
            is what the team at
            <span className="text-[#9A391D] "> MidhaGURU </span>proudly 
            &nbsp;announces and lives up to.
          </h3>
          <h3 className="text-center mg:text-left text-[12px] sm:text-[14px] lg:text-[18px] min-w-[20px] max-w-[600px] ">
            Enroll with us now for high quality and smartest way of learning for classes 6th to 10th students.
          </h3>
          <p className="text-[#9A391D] font-bold text-center mg:text-left  w-[100%] my-1">
            Separate batches for CBSE and ICSE
          </p>

          <Link href='https://edu.midha.guru/s/authenticate' className="mx-auto mg:mx-0">
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
            src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Hero+Section/Hero.png"
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

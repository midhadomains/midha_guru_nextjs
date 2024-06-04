import React from "react";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className="max-w-[1400px] px-[20px] mg:px-[50px] mx-auto sm:mt-20">
      <div className="">
        <h1 className="text-[24px] lg:text-[50px] text-center font-bold mt-4">
          Students&apos; <span className="text-[#BE4E1E]">Achievements</span>
        </h1>
        <p className="text-[14px] lg:text-[20px] text-center">
          Extending our warmest congratulations to our achievers! <br className="hidden sm:block"/>We are looking
          forward for the continued brilliance you will bring to the future.
        </p>
      </div>

      <div className="flex mt-4 justify-center mx-auto gap-[10px] md:gap-[20px] xl:gap-[30px] flex-wrap ">
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Deeksha.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Nandani.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" /> 
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Aarav.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Tanmay.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/veedant.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Ujjwal.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" /> 
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Harsh.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
        <Image src='https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Achievements/Rishika.png' width={274} height={318} alt="img" className="w-[48%] max-w-[274px] min-w-[140px]" />
      </div>
    </div>
  );
}

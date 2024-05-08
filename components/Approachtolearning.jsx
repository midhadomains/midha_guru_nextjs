import Image from "next/image";
import Link from "next/link";

export default function Approachtolearning() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap xl:mx-40">
      <div className="my-4 sm:my-20 sm:ml-10 md:ml-20 lg:ml-40 ">
        <Image
          src="/Approach.png"
          alt="Approach to Learning"
          width={500}
          height={300}
          className="w-[100%] min-w-[310px] max-w-[500px] px-5 sm:px-0"

        />
      </div>

      {/* <div className="ml-6 sm:ml-20 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-28"> */}
      <div className="flex ">
      <div className="my-auto ml-6 sm:ml-12 lg:ml-20">
        <h1 className="font-bold text-[24px] sm:text-[22px] lg:text-[28px] xl:text-[40px]">
          Approach to <span className="text-[#BE4E1E]">learning</span>
        </h1>
        <p className="sm:w-[80%] lg:w-[70%] mt-6 sm:mt-3 md:mt-6 text-[14px] lg:text-[20px]">
          <span className="font-bold text-[#BE4E1E]">Midha Guru</span> offers a
          holistic educational experience that nurtures not only academic
          success but also personal growth.
        </p>
        <button className="text-[#BE4E1E] font-bold text-[16px]  lg:text-[25px] mt-6 sm:mt-3 md:mt-6">
          <Link href="https://www.midha.guru/about">Read More &#62;</Link>
        </button>
      </div>
      </div>
    </div>
  );
}

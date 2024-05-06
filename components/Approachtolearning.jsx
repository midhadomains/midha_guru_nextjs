import Image from "next/image";
import Link from "next/link";

export default function Approachtolearning() {
  return (
    <div className="flex flex-wrap sm:flex-nowrap">
      <div className="my-4 sm:my-20 sm:ml-10 md:ml-20 lg:ml-40 ">
        <Image
          src="/Approachtolearning.svg"
          alt="Approach to Learning"
          width={500}
          height={382}
          className="flex-shrink-0 min-w-[310px] px-5 sm:px-0"
        />
      </div>

      <div className="ml-6 sm:ml-20 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 2xl:mt-28">
        <h1 className="font-bold text-[24px] lg:text-[40px]">
          Approach to <span className="text-[#BE4E1E]">learning</span>
        </h1>
        <p className="lg:w-[70%] mt-6 text-[14px] md:text-[20px]">
          <span className="font-bold text-[#BE4E1E]">Midha Guru</span> offers a
          holistic educational experience that nurtures not only academic
          success but also personal growth.
        </p>
        <button className="text-[#BE4E1E] font-bold text-[16px] sm:text-[25px] mt-6">
          <Link href="https://www.midha.guru/about">Read More</Link>
          <span className="ml-2">&#62;</span>
        </button>
      </div>
    </div>
  );
}

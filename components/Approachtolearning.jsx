import Image from "next/image";
import Link from "next/link";

export default function Approachtolearning() {
  return (
    <div>
      <div className="max-w-[1400px] px-[25px] mg:px-[50px] mx-auto md:flex justify-center my-[30px] sm:my-[60px] lg:my-[132px]">
        <Image
          src="/Approach.png"
          width={500}
          height={300}
          alt="img"
          className="md:max-w-[500px] max-w-[450px] md:w-[40%] w-[100%] flex-shrink-0 min-w-[280px] my-auto mx-auto "
        />
        <div className="max-w-[450px] mx-auto mg:mx-0 mg:ml-8 md:max-w-[748px]  my-auto  md:ml-[50px]">
          <h1 className="text-[24px] sm:text-[35px] lg:text-[50px] lg:leading-[62px] font-bold mt-4 md:mt-0">
            Approach to <span className="text-[#BE4E1E]">learning</span>
          </h1>
          <p className="text-[14px] lg:text-[20px] lg:leading-[30px] my-4 lg:my-6 font-semibold">
           <span  className="font-bold text-[#BE4E1E]"> Midha Guru</span> offers a holistic educational experience that nurtures
            not only academic success but also personal growth.
          </p>
          <button className="text-[20px] text-[#BE4E1E] lg:text-[30px] lg:leading-[30px] font-bold">
            <Link href="https://www.midha.guru/about">Read More &#62;</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

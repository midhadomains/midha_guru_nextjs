"use client";
import { useState } from "react";
import Image from "next/image";

const Card = ({ imageSrc, title, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" relative overflow-hidden border border-gray-300 rounded-md shadow-lg custom-transition  w-[350px] h-[180px] sm:w-[500px] sm:h-[170px] md:w-[350px] md:h-[200px]  lg:w-[562px] lg:h-[280px] xl:w-[650px] xl:h-[300px] sm:m-4 mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    <div className="w-full h-full relative">
    <div className="absolute inset-0 aspect-w-7 aspect-h-4 md:aspect-w-1 md:aspect-h-1">
      {/* Aspect Ratio Container */}
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
    </div>
  </div>
      {isHovered && (
        <div className="absolute inset-0 flex flex-col  justify-center bg-[#E7E6DF] bg-opacity-100 text-black p-4 animate-fadeInDown">
          <h2 className="text-[16px] sm:text-[14px] md:text-[22px] text-left font-bold text-[#6A1C1A] mb-2 ">{title}</h2>
          <p className=" text-[12px] sm:text-[12px] md:text-[14px] lg:text-[20px] mt-2">{details}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
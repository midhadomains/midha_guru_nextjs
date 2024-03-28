"use client";
import { useState } from "react";
import Image from "next/image";

const Card = ({ imageSrc, title, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" relative overflow-hidden border border-gray-300 rounded-md shadow-lg custom-transition w-[562px] h-[280px] ml-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full xl:h-72 relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      {isHovered && (
        <div className="absolute inset-0 flex flex-col  justify-center bg-[#E7E6DF] bg-opacity-100 text-black p-4">
          <h2 className="text-[24px] text-left font-bold text-[#6A1C1A] mb-4">{title}</h2>
          <p className="text-[20px] mt-2">{details}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

'use client'
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import  { useState} from "react";



  export default function Freecall() {
    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {
      setIsVisible((prevState) => !prevState); // Toggle visibility state
    };

  return (
    <>
    {isVisible && (
      <div className="max-w-[300px] h-[250px] bg-[#FCFBF7] fixed mt-4 hidden lg:block right-6 rounded-xl ">
        <button
          onClick={toggleVisibility}
          className="absolute top-0 right-0 z-10 bg-[#F6F2E9] text-black text-[25px] px-2 rounded-xl shadow-xl"
        >
          <RxCross2 className="text-[35px] p-1"/>
        </button>
      <h1 className="text-[24px] font-bold  text-center mx-auto mt-4">
        Book a <span className="text-[#9A391D]">Free Call</span>
      </h1>

      <p className="text-[16px] mt-4 text-center w-[75%] mx-auto">
        We would be happy to talk with you about how we could help your studies.
      </p>

      <Link
        href="/contact-us"
        className="flex text-center mx-auto text-[20px] sm:text-[20px]  lg:text-[24px] text-[#691D1C] font-semibold  border-2 border-[#C18A62] w-fit md:px-[40px] sm:px-[50px] px-[30px] py-2 rounded-full  my-4 md:mt-7 ">
        <BiSolidPhoneCall className="my-auto mr-2" />
        Contact Us
      </Link>
    </div>
    )}
     {!isVisible && (
        <button onClick={toggleVisibility} className="fixed right-0 z-10 bg-[#F6F2E9] text-black text-[25px] p-2 rounded-xl shadow-xl hidden lg:block">
         <BiSolidPhoneCall className="my-auto mr-2 hidden lg:block" />
        </button>
      )}
    </>
    
  );

  
}

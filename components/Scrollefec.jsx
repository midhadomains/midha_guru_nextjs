"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Scrollefec() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (buttonId) => {
    if (selectedButton !== buttonId) {
      setSelectedButton(buttonId);
    }
  };


  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap justify-center max-w-[1150px] mx-auto  px-[25px] md:px-[50px] mt-6 md:mt-20 mb-8 sm:mb-0">
        <ul className="flex flex-row md:flex-col sm:mr-10 md:border-r-2 border-b-2 md:border-b-0  w-full sm:w-cover md:w-auto justify-center md:justify-normal px-[20px] sm:px-0 md:flex-shrink-0">
          {/* Other list items */}
          <li
            onClick={() => handleButtonClick(1)}
            className={selectedButton === 1 ? "activee" : ""}
          >
            <div
              className={`md:pr-8 mr-7 md:mr-0 ${
                selectedButton === 1
                  ? "border-b-4 md:border-b-0 md:border-r-4 border-[#BE4E1E]"
                  : ""
              }`}
            >
              <p
                className={`text-[12px] sm:text-[14px] md:text-[16px]  lg:text-[24px] mb-2 md:mb-7   justify-center font-semibold md:leading-[100px] flex cursor-pointer  ${
                  selectedButton === 1 ? "text-[#BE4E1E]" : ""
                }`}
              >
                Announcements{" "}
              </p>
            </div>
          </li>
          <li
            onClick={() => handleButtonClick(2)}
            className={selectedButton === 2 ? "activee" : ""}
          >
            <div
              className={`md:pr-8 mr-7 md:mr-0 ${
                selectedButton === 2
                  ? "border-b-4 md:border-b-0 md:border-r-4 border-[#BE4E1E]"
                  : ""
              }`}
            >
              <p
                className={`text-[12px] sm:text-[14px] md:text-[16px]  lg:text-[24px] mb-2 md:mb-8 justify-center font-semibold md:leading-[100px] flex cursor-pointer ${
                  selectedButton === 2 ? "text-[#BE4E1E]" : ""
                }`}
              >
                Offers{" "}
              </p>
            </div>
          </li>

          <li
            onClick={() => handleButtonClick(3)}
            className={selectedButton === 3 ? "activee" : ""}
          >
            <div
              className={` md:pr-8 ${
                selectedButton === 3
                  ? "border-b-4 md:border-b-0 md:border-r-4 border-[#BE4E1E]"
                  : ""
              }`}
            >
              <p
                className={` text-[12px] sm:text-[14px] md:text-[16px]  lg:text-[24px] mb-2  justify-center font-semibold md:leading-[100px] flex  cursor-pointer ${
                  selectedButton === 3 ? "text-[#BE4E1E]" : ""
                }`}
              >
                Holiday<span className="text-white">_</span>List{" "}
              </p>
            </div>
          </li>
        </ul>
        <div className="md:max-w-[600px] lg:max-w-[700px]">
          {selectedButton === 1 && (
            <div className="relative mt-4 md:mt-16 lg:mt-4 w-full max-w-[700px]">
              <Image
                src="/SummerPark.png"
                alt="image"
                width={810}
                height={553}
                className="w-full"
                priority={true}
              />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] flex flex-col items-center">

                <Link href="https://forms.gle/B2hFaSRJXdxTKy8k9" target="_blank" rel="noopener noreferrer" className="bg-[#BE4E1E] text-white text-[8px] sm:text-[14px] md:text-[12px] lg:text-[18px] font-bold py-1 px-4 rounded-2xl inline-block">
                Register @ ₹180 only
                </Link>
              
              <p className="underline mt-2 text-[#BE4E1E] cursor-pointer text-bold text-[10px] sm:text-[14px] md:text-[12px] lg:text-[18px] font-bold" onClick={() => setIsOpen(true)}>view for details</p>
              </div>
              {isOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
               <div className="bg-white p-5 rounded-lg">
                <Image src="/SummerPark2.png" alt="Detail" width={400} height={300} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-250%] flex flex-col items-center">

                <Link href="https://forms.gle/B2hFaSRJXdxTKy8k9" target="_blank" rel="noopener noreferrer" className="bg-[#BE4E1E] text-white text-[8px] sm:text-[14px] md:text-[12px] lg:text-[18px]  font-bold py-2 px-4 rounded-2xl inline-block">
                Register @ ₹180 only
                </Link>
                </div>
               <button className="mt-4 px-4 py-2 bg-[#BE4E1E] text-white rounded" onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
            </div>
          )}
          {selectedButton === 2 && (
            <div>
              {/* Render announcements here */}

              <Image
                src="https://files.midhafin.com/wp-content/uploads/Offers.png"
                alt="image"
                width={807}
                height={553}
                className="mt-4 md:mt-16 lg:mt-4 w-[100%] max-w-[800px]"
                priority={true}
              />
            </div>
          )}
          {selectedButton === 3 && (
            <div className="bg-[#FCFBF7]  w-[320px] sm:w-[550px] lg:w-[55vw] xl:w-[51vw] 2xl:w-[41vw] border text-center  h-[395px] overflow-y-scroll mt-4  ">
              {/* Render achievements here */}
              <p className="font-bold text-[#BE4E1E] text-[16px] lg:text-[32px] mt-2 lg:mt-8 lg:ml-4">
                Holidays 2024-2025
              </p>
              <table className="mt-4  w-[100%]">
                <thead className="">
                  <tr className="bg-[#FFFFFF]">
                    <th className="font-bold pr-8 text-[12px] sm:text-[20px]">
                      Date
                    </th>
                    <th className="font-bold pr-8 text-[12px] sm:text-[20px]">
                      Day
                    </th>
                    <th className="font-bold text-[12px] sm:text-[20px]">
                      Occasion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      17/04/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Rama Navami</td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      17/07/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Muharram</td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      15/08/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Thursday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">
                      Independence Day
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      19/08/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Monday</td>
                    <td className="text-[12px] sm:text-[16px]">
                      Raksha Bandhan
                    </td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      26/08/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Monday</td>
                    <td className="text-[12px] sm:text-[16px]">Janmashtami</td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border sm:leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      02/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">
                      Mahatma Gandhi Jayanti
                    </td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      11/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                    <td className="text-[12px] sm:text-[16px]">Navami</td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      12/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Saturday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Dussehra</td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      31/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Thursday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Diwali</td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      31/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Thursday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Chhat Puja</td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      15/11/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                    <td className="text-[12px] sm:text-[16px]">
                      Guru Nanak Jayanti
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      25/12/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Christmas</td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      31/10/2024
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Thursday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">Diwali</td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border  leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      01/01/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">
                      New Year&apos;s Day
                    </td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      14/01/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Tuesday</td>
                    <td className="text-[12px] sm:text-[16px]">
                      Makar Sankranti
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      26/01/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Sunday</td>
                    <td className="text-[12px] sm:text-[16px]">Republic day</td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      02/02/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Sunday</td>
                    <td className="text-[12px] sm:text-[16px]">
                      Vasant panchami
                    </td>
                  </tr>
                  <tr className="bg-[#FFFFFF] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      26/02/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      Wednesday
                    </td>
                    <td className="text-[12px] sm:text-[16px]">
                      Mahashivratri
                    </td>
                  </tr>
                  <tr className="bg-[#FCFBF7] border leading-10">
                    <td className="pr-8 text-[12px] sm:text-[16px]">
                      14/03/2025
                    </td>
                    <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                    <td className="text-[12px] sm:text-[16px]">Holi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

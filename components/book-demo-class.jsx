// import React from 'react';
// import Image from 'next/image';
// function BookDemoClass() {
//   return (
//     <div className=" 2xl:h-[643px] h-[380px] ">
//             <div className=" 2xl:h-[200px]  ml-[155px]">
//                 <h1 className=" text-[70px] font-bold text-[#2E3442]">Book your <br/><span className="text-[#9A391D]">free demo class!</span></h1>
//             </div>
//         <div className="bg-bgimage flex bg-no-repeat 2xl:h-[632px] h-[380] bg-cover mt-[18px] " >
//             <div className=" inset-0 h-[400px] 2xl-h-[800px] ml-[155px] mb-[19px]">
//                 <Image width={500} height={600} className="2xl:w-[825px] 2xl:h-[582px] lg:h-[391px]   " src="/Group 121.svg" alt="Additional Image" />
//             </div>
//             <div class="lg:w-2/5 md:w-1/2 w-2/3">
// 		<form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
// 			<div>
// 			    <input class="w-full bg-gray-100 px-6 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
//             </div>
// 			<div>
// 				<input class="w-full bg-gray-100 px-6 my-3 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
//             </div>
// 			<div>
// 				<input class="w-full bg-gray-100 px-6 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
//             </div>
// 			<div>
// 				<input class="w-full bg-gray-100 px-6 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
//             </div>
// 				<button type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-6 py-2 text-lg text-white tracking-wide font-semibold font-sans">Register</button>
// 		    </form>
//         </div>
//         </div>

//     </div>
//   );
// }

// export default BookDemoClass;
"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

function BookDemoClass() {
  const classModeSelectRef = useRef(null);
  const timeSlotSectionRef = useRef(null);

  useEffect(() => {
    const classModeSelect = classModeSelectRef.current;
    const timeSlotSection = timeSlotSectionRef.current;

    const handleChange = () => {
      if (classModeSelect.value === "Online Mode") {
        timeSlotSection.style.display = "none";
      } else {
        timeSlotSection.style.display = "block";
      }
    };

    classModeSelect.addEventListener("change", handleChange);

    return () => {
      classModeSelect.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="bg-bgimage bg-contain  min-h-[600px] 2xl:max-h-[1500]   bg-no-repeat bg-bottom">
      <div className="max-w-[1100px]   2xl:max-w-[1600px] mx-auto ">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row ">
          <div className="  min-h-[200px]  ">
            <h1 className="leading-[70px] hidden sm:block  text-[60px] py-20 font-bold text-[#2E3442]">
              Book Your <br />
              <span className="text-[#9A391D] ">Free Demo Class!</span>
            </h1>
            <Image
              width={500}
              height={600}
              className="lg:w-[500px] 2xl:w-[600px] w-[600px] "
              src="/Group 121.svg"
              alt="Additional Image"
            />
          </div>
          <div class="w-[500px] 2xl:h-[500px] lg:W-[700px] mt-[60px] flex-shrink-0 ">
            <div className="  min-w-[200px] sm:hidden block ">
              <h1 className=" text-[20px] py-20 font-bold text-[#2E3442] text-center">
                Book Your
                <span className="text-[#9A391D] ">Free Demo Class!</span>
              </h1>
            </div>
            <form
              class="bg-[#E7D8C5] mx-auto  p-10 rounded-lg w-[390px] "
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <div>
                <input
                  type="hidden"
                  name="access_key"
                  value="1e045b87-5d47-4098-8894-9d8b1d5594a0"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="http://localhost:3000/thankyou"
                ></input>
                <input
                  class="w-full bg-gray-100 px-6 py-2 my-3 rounded-3xl focus:outline-none"
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Name"
                  required
                />
              </div>
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none"
                required
              />
              <div class="relative">
                <select
                  ref={classModeSelectRef}
                  name="Class Mode"
                  class=" appearance-none w-full text-green bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none"
                  id="Class Mode"
                  placeholder="Class Mode"
                >
                  <option value="" selected>
                    Class Mode
                  </option>
                  <option>Offline Mode</option>
                  <option>Online Mode</option>
                </select>
                <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2">
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="relative">
                <select
                  name="Board"
                  class=" appearance-none w-full text-green bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none"
                  id="Board"
                  placeholder="Board"
                >
                  <option value="" selected>
                    Board
                  </option>
                  <option>ICSE</option>
                  <option>CBSE</option>
                </select>
                <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2">
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="relative">
                <select
                  name="class"
                  id="Class"
                  class=" appearance-none w-full bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none"
                  placeholder="Class"
                >
                  <option value="" selected>
                    Class
                  </option>
                  <option>6th</option>
                  <option>7th</option>
                  <option>8th</option>
                  <option>9th</option>
                  <option>10th</option>
                </select>
                <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2">
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="relative">
                <select
                  name="Select the Day"
                  class="appearance-none w-full bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none"
                  id="Select the Day"
                  placeholder="Select the Day"
                >
                  <option value="" selected>
                    Select the Day
                  </option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>
                <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2">
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="relative" ref={timeSlotSectionRef}>
                <select
                  name="Select the Time Slot"
                  class="  appearance-none w-full bg-gray-100 px-6 my-3 py-2 rounded-3xl focus:outline-none "
                  id="Select the Time Slot"
                  placeholder="Select the Time Slot"
                >
                  <option value="" selected>
                    Select the Time Slot
                  </option>
                  <option>10:00 AM - 11:30 AM</option>
                  <option>11:00 AM - 12:30 PM</option>
                  <option>12:00 PM - 1:30 PM</option>
                  <option>1:00 PM - 2:30 PM</option>
                </select>
                <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2">
                  <svg
                    class="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <button
                type="submit"
                class="w-full mt-6 bg-[#6A1C1A] hover:bg-[#9A391D] rounded-3xl px-6 py-2 text-lg text-white tracking-wide font-semibold font-sans"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDemoClass;

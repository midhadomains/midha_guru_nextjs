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
    <div className="lg:bg-bgimage sm:bg-tabcontactbgimg bg-mobilecontactbgimg  2xl:bg-2xlcontactbgimg  sm:min-h-[600px]   bg-contain  bg-no-repeat bg-bottom ">
      <div className="xl:max-w-[1100px] 2xl:max-w-[1200px] lg:max-w-[1000px] mx-auto max-w-[900px] ">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-between  mx-auto ">
          <div className="  min-h-[200px]  ">
            <h1 className="lg:leading-[70px] hidden lg:block  sm:text-[30px] lg:text-5xl py-10 xl:py-10 font-bold text-[#2E3442]">
              Book Your <br />
              <span className="text-[#9A391D] ">Free Demo Class!</span>
            </h1>
            <Image
              width={1500}
              height={1600}
              className="lg:w-[550px]  sm:w-[217px]  w-[400px] mx-auto lg:mx-0 lg:block hidden"
              src="/Group 121.svg"
              alt="Additional Image"
            />
          </div>
          <div class=" 2xl:h-[600px]  h-[450px] sm:h-full  2xl:ml-[28] flex-shrink-0 mx-auto lg:mx-0">
            <div className="  min-w-[200px] lg:hidden block ">
              <h1 className=" text-[20px] sm:text-[30px] py-[13px] font-bold text-[#2E3442] text-center">
                Book Your 
                <span className="text-[#9A391D] "> Free Demo Class!</span>
              </h1>
            </div>
            <form
              class="bg-[#E7D8C5]  lg:w-[450px] mx-auto lg:mt-[40px] lg:h-[550px] sm:p-10 p-6 rounded-lg sm:w-[500px] w-[310px]  lg:mb-0 "
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
                  class="w-full  bg-gray-100 px-6 py-2 mb-1 rounded-3xl focus:outline-none"
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
                className="w-full  bg-gray-100 px-6 sm:my-3 my-1 py-2 rounded-3xl focus:outline-none"
                required
              />
              <div class="relative">
                <select
                  ref={classModeSelectRef}
                  name="Class Mode"
                  class=" appearance-none w-full text-green bg-gray-100 px-6 sm:my-3 my-1  py-2 rounded-3xl focus:outline-none"
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
                  class=" appearance-none w-full sm:my-3 my-1  text-green bg-gray-100 px-6 py-2 rounded-3xl focus:outline-none"
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
                  class=" appearance-none w-full bg-gray-100 px-6 sm:my-3 my-1  py-2 rounded-3xl focus:outline-none"
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
                  class="appearance-none w-full bg-gray-100 px-6 sm:my-3 my-1  py-2 rounded-3xl focus:outline-none"
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
                  class="  appearance-none w-full  bg-gray-100 px-6 sm:my-3 my-1   py-2 rounded-3xl focus:outline-none "
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
                class="w-full sm:mt-6 mt-2 lg:mt-4 bg-[#6A1C1A] hover:bg-[#9A391D] rounded-3xl px-6 py-2 text-lg text-white tracking-wide font-semibold font-sans"
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
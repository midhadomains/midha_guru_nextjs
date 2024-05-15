import React from "react";
import Image from "next/image";

export default function Scrolleffect() {
  return (
    <div className="max-w-[1350px] md:px-[50px] px-[25px] mx-auto md:flex max-h-[450px]">
      <ul className="text-[24px] leading-[120px] font-bold w-[55%] max-w-[300px] border-r-4 text-center">
        <a href="#announcements">
          <li>Announcements</li>
        </a>
        <a href="#offers">
          <li>Offers</li>
        </a>
        <a href="#holiday-list">
          <li>Holiday List</li>
        </a>
      </ul>

      <div className="max-w-[1000px] ml-14 ">
        <div id="announcements">
          <p className=" w-[300px] md:w-[70%] mb-3 mt-2">
            <span className="font-bold text-[#BE4E1E] text-[14px] sm:text-[18px] lg:mt-8">
              Experience the difference with our free demo class!
            </span>
            <br />
            <span
              className="w-[110%] text-[14px] sm:text-[18px]"
              style={{ display: "inline-block" }}
            >
              Join us for an engaging session designed to inspire and inform.
            </span>
            <span className=" font-bold text-[14px] sm:text-[18px]">
              Don&apos;t miss out -{" "}
              <span className="text-red-600">register today!</span>
            </span>
          </p>

          <form
            className="bg-[#E7D8C5] md:w-[550px] md:h-[300px] lg:w-[800px] lg:h-[300px]  mx-auto lg:mt-[20px] sm:p-10 p-6 rounded-lg  w-[310px] h-[430px]"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <div className="md:flex sm:-mt-5 md:mt-5 lg:-mt-0">
              <div className="md:w-[50%]">
                <div>
                  <input
                    type="hidden"
                    name="access_key"
                    value="1e045b87-5d47-4098-8894-9d8b1d5594a0"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="http://www.midha.guru/thankyou"
                  />
                  <input
                    className="w-full  bg-gray-100 px-6 py-2 my-1 lg:mb-2 md:-mt-2  rounded-3xl focus:outline-none"
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
                  className="w-full  bg-gray-100 px-6 lg:my-3 my-1 py-2 lg:mb-2 md:mt-3 rounded-3xl focus:outline-none"
                  required
                />
                {/* Rest of your form elements */}
                <div class="relative">
                  <select
                    //   ref={classModeSelectRef}
                    name="Mode of class"
                    class=" appearance-none w-full text-green bg-gray-100 px-6 lg:my-3 md:mt-2 my-1  py-2 rounded-3xl focus:outline-none"
                    id="Class Mode"
                    placeholder="Class Mode"
                  >
                    <option value="" selected>
                      Mode of Class
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
                    class=" appearance-none w-full lg:my-3 my-1 md:mt-2 text-green bg-gray-100 px-6 py-2 rounded-3xl focus:outline-none"
                    id="Board"
                    placeholder="Board"
                  >
                    <option value="" selected>
                      Curriculum
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
              </div>

              <div className="md:w-[50%] lg:-mt-5 md:-mt-3 md:ml-4">
                <div class="relative sm:mb-3">
                  <select
                    name="class"
                    id="Class"
                    class=" appearance-none w-full bg-gray-100 px-6 lg:my-3 sm:mb-3 my-1  py-2 rounded-3xl focus:outline-none"
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
                  <div class="absolute inset-y-0 right-0 mr-4 flex items-center px-2 pointer-events-none ml-2 ">
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
                <div class="relative sm:-mt-4">
                  <select
                    name="Select the Day"
                    class="appearance-none w-full bg-gray-100 px-6 lg:mt-3 lg:mb-2  py-2 sm:mb-2 my-1 rounded-3xl focus:outline-none"
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
                <div class="relative ">
                  {" "}
                  {/* ref={timeSlotSectionRef} */}
                  <select
                    name="Select the Time Slot"
                    class="  appearance-none w-full  bg-gray-100 px-6 lg:my-3 my-1   py-2 rounded-3xl focus:outline-none"
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
                  className="w-full mt-2 lg:mt-2 bg-[#6A1C1A] hover:bg-[#9A391D] rounded-3xl px-6 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>

        <div id="offers">
          <Image
            src="https://files.midhafin.com/wp-content/uploads/Offers.png"
            alt="image"
            width={807}
            height={553}
            className="mt-4 md:mt-16 lg:mt-4 w-[100%] max-w-[800px]"
            priority={true}
          />
        </div>

        <div
          className="bg-[#FCFBF7]  w-[100%] border text-center  h-[450px] overflow-y-scroll mt-4"
          id="holiday-list"
        >
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
                <td className="pr-8 text-[12px] sm:text-[16px]">17/04/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">Rama Navami</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">17/07/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">Muharram</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">15/08/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Thursday</td>
                <td className="text-[12px] sm:text-[16px]">Independence Day</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">19/08/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Monday</td>
                <td className="text-[12px] sm:text-[16px]">Raksha Bandhan</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">26/08/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Monday</td>
                <td className="text-[12px] sm:text-[16px]">Janmashtami</td>
              </tr>
              <tr className="bg-[#FFFFFF] border sm:leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">02/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">
                  Mahatma Gandhi Jayanti
                </td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">11/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                <td className="text-[12px] sm:text-[16px]">Navami</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">12/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Saturday</td>
                <td className="text-[12px] sm:text-[16px]">Dussehra</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">31/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Thursday</td>
                <td className="text-[12px] sm:text-[16px]">Diwali</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">31/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Thursday</td>
                <td className="text-[12px] sm:text-[16px]">Chhat Puja</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">15/11/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                <td className="text-[12px] sm:text-[16px]">
                  Guru Nanak Jayanti
                </td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">25/12/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">Christmas</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">31/10/2024</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Thursday</td>
                <td className="text-[12px] sm:text-[16px]">Diwali</td>
              </tr>
              <tr className="bg-[#FFFFFF] border  leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">01/01/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">
                  New Year&apos;s Day
                </td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">14/01/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Tuesday</td>
                <td className="text-[12px] sm:text-[16px]">Makar Sankranti</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">26/01/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Sunday</td>
                <td className="text-[12px] sm:text-[16px]">Republic day</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">02/02/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Sunday</td>
                <td className="text-[12px] sm:text-[16px]">Vasant panchami</td>
              </tr>
              <tr className="bg-[#FFFFFF] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">26/02/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Wednesday</td>
                <td className="text-[12px] sm:text-[16px]">Mahashivratri</td>
              </tr>
              <tr className="bg-[#FCFBF7] border leading-10">
                <td className="pr-8 text-[12px] sm:text-[16px]">14/03/2025</td>
                <td className="pr-8 text-[12px] sm:text-[16px]">Friday</td>
                <td className="text-[12px] sm:text-[16px]">Holi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
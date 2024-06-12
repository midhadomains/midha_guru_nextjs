"use client";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
  AnimatePresence,
} from "framer-motion";

function TimeTable() {
  const [activeTab, setActiveTab] = useState("Class-6");

  const defaultSelectedClass = "6th";
  const defaultSelectedDays = "Monday";
  const defaultSelectedBoard = "ICSE";

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [openClass, setOpenClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState(defaultSelectedClass);
  const [openDays, setOpenDays] = useState(false);
  const [selectedDays, setSelectedDays] = useState(defaultSelectedDays);
  const [openBoard, setOpenBoard] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(defaultSelectedBoard);

  const classes = ["6th", "7th", "8th", "9th", "10th"];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const boards = ["CBSE", "ICSE"];

  const handleClassSelect = (cls) => {
    setSelectedClass(cls);
    setOpenClass(false);
  };

  const handleDaysSelect = (day) => {
    setSelectedDays(day);
    setOpenDays(false);
  };

  const handleBoardSelect = (board) => {
    setSelectedBoard(board);
    setOpenBoard(false);
  };

  return (
    <>

    <div className="hidden sm:block">  
      <div className="relative overflow-x-auto   xl:max-w-[1100px] sm:max-w-[630px] md:max-w-[700px] lg:max-w-[900px] justify-center mx-auto pb-12 mt-12">

      
        <div className="mb-4 border-b border-gray-200 ">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center justify-center mx-auto"
            id="additional-tab"
            role="tablist"
          >
            <li className="me-8" role="presentation">
              <button
                className={`inline-block text-lg p-2 px-16 border-b-4 font-bold rounded-t-lg ${
                  activeTab === "tab1" ||
                  activeTab === "Class-6" ||
                  activeTab === "Class-7" ||
                  activeTab === "Class-8" ||
                  activeTab === "Class-9" ||
                  activeTab === "Class-10"
                    ? "text-[#BE4E1E] border-[#BE4E1E]"
                    : "text-[#B7B7B7] border-[#B7B7B7]"
                }`}
                onClick={() => handleTabClick("tab1")}
                role="tab"
                aria-controls="tab1"
                aria-selected={activeTab === "tab1"}
              >
                ICSE
              </button>
            </li>
            <li className="ms-8" role="presentation">
              <button
                className={`inline-block text-lg p-2 px-16 border-b-4 font-bold rounded-t-lg ${
                  activeTab === "tab2" ||
                  activeTab === "CBSE-Class-6" ||
                  activeTab === "CBSE-Class-7" ||
                  activeTab === "CBSE-Class-8" ||
                  activeTab === "CBSE-Class-9" ||
                  activeTab === "CBSE-Class-10"
                    ? "text-[#BE4E1E] border-[#BE4E1E]"
                    : "text-[#B7B7B7] border-[#B7B7B7]"
                }`}
                onClick={() => handleTabClick("tab2")}
                role="tab"
                aria-controls="tab2"
                aria-selected={activeTab === "tab2"}
              >
                CBSE
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 bg-[#F7F1EF]  ">
            <ul
              className={`flex flex-wrap    text-[16px] font-medium text-center ${
                activeTab === "tab1" ||
                activeTab === "Class-6" ||
                activeTab === "Class-7" ||
                activeTab === "Class-8" ||
                activeTab === "Class-9" ||
                activeTab === "Class-10"
                  ? ""
                  : "hidden"
              }`}
              id="default-tab"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] sm:text-[12px]  lg:text-[100%] my-[13px]  py-1 xl:px-[75px] sm:px-[36px] md:px-[44px]  lg:px-[55px] border-r file:  ${
                    activeTab === "tab1" || activeTab === "Class-6"
                      ? "text-[#BE4E1E] underline "
                      : ""
                  }`}
                  onClick={() => handleTabClick("Class-6")}
                  role="tab"
                  aria-controls="profile"
                  aria-selected={activeTab === "Class-6"}
                >
                  Class-6
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] my-[13px] py-1 xl:px-[76px]  sm:px-[36px] sm:text-[12px]  lg:text-[100%]  lg:px-[55px] md:px-[43px] border-r   ${
                    activeTab === "Class-7" ? "text-[#BE4E1E] underline " : ""
                  }`}
                  onClick={() => handleTabClick("Class-7")}
                  role="tab"
                  aria-controls="Class-7"
                  aria-selected={activeTab === "Class-7"}
                >
                  Class-7
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[76px]  sm:px-[36px]  lg:px-[56px] md:px-[43px] border-r   ${
                    activeTab === "Class-8" ? "text-[#BE4E1E] underline  " : ""
                  }`}
                  onClick={() => handleTabClick("Class-8")}
                  role="tab"
                  aria-controls="Class-8"
                  aria-selected={activeTab === "Class-8"}
                >
                  Class-8
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block  border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[76px]  sm:px-[37px]  lg:px-[56px] md:px-[43px]  border-r  ${
                    activeTab === "Class-9" ? "text-[#BE4E1E] underline  " : ""
                  }`}
                  onClick={() => handleTabClick("Class-9")}
                  role="tab"
                  aria-controls="Class-9"
                  aria-selected={activeTab === "Class-9"}
                >
                  Class-9
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block  border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[75px] sm:px-[37px]  lg:px-[56px] md:px-[43px]   ${
                    activeTab === "Class-10" ? "text-[#BE4E1E] underline  " : ""
                  }`}
                  onClick={() => handleTabClick("Class-10")}
                  role="tab"
                  aria-controls="contacts"
                  aria-selected={activeTab === "Class-10"}
                >
                  Class-10
                </button>
              </li>
            </ul>
          </div>

          <table
            id="Class-6-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] justify-center mx-auto text-sm text-left rtl:text-right text-gray-500 ${
              activeTab === "tab1" || activeTab === "Class-6" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7]  leading-none"
                    >
                      <span class="text-[#BE4E1E]  sm:text-[11px]  xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] w-[90px] text-center py-4 border-r bg-[#FFE4E9] border-l-[#FF204E] border-l-[6px] font-bold border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r bg-[#FFE4E9] border-l-[#FF204E] border-l-[6px] font-bold border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden leading-none"/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4  border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] w-[90px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden leading-none"/>-<br className="sm:block md:hidden hidden"/>
                      6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] w-[90px] md:px-6 py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] md:px-6 py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden leading-none"/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English <br />
                      <a href="#" class=" font-normal">
                        (Literature)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                      <a href="#" class="font-normal">
                        <br />
                        (Grammar)
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
          <table
            id="Class-7-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "Class-7" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] xl:px-6 text-center  border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]   border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English <br />
                      <a href="#" class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] font-normal">
                        (Literature)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]   border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English <br />
                      <a href="#" class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] font-normal">
                        (Grammar)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
          <table
            id="Class-8-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "Class-8" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center h-[52.67px] border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
          <table
            id="Class-9-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "Class-9" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  h-[52.67px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class=" xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class=" py-4 border-r h-[52.67px] border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="pxl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6  py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="px-6 py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] xl:px-6 py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>

          <table
            id="Class-10-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "Class-10" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="pxl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
        </div>



















        <div>
          <div className="mb-4 bg-[#F7F1EF]  ">
            <ul
              className={`flex flex-wrap    text-[16px] font-medium text-center  ${
                activeTab === "tab2" ||
                activeTab === "CBSE-Class-6" ||
                activeTab === "CBSE-Class-7" ||
                activeTab === "CBSE-Class-8" ||
                activeTab === "CBSE-Class-9" ||
                activeTab === "CBSE-Class-10"
                  ? ""
                  : "hidden"
              }`}
              id="default-tab"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[76px] sm:px-[36px] md:px-[43px]  lg:px-[55px] border-r   file:  ${
                    activeTab === "tab2" || activeTab === "CBSE-Class-6"
                      ? "text-[#BE4E1E] underline "
                      : ""
                  }`}
                  onClick={() => handleTabClick("CBSE-Class-6")}
                  role="tab"
                  aria-controls="profile"
                  aria-selected={activeTab === "CBSE-Class-6"}
                >
                  Class-6
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] sm:text-[12px]  lg:text-[100%] my-[13px] py-1 xl:px-[76px] sm:px-[36px] md:px-[43px]  lg:px-[55px] border-r   ${
                    activeTab === "CBSE-Class-7"
                      ? "text-[#BE4E1E] underline "
                      : ""
                  }`}
                  onClick={() => handleTabClick("CBSE-Class-7")}
                  role="tab"
                  aria-controls="CBSE-Class-7"
                  aria-selected={activeTab === "CBSE-Class-7"}
                >
                  Class-7
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block border-[#AB9A9F] sm:text-[12px]  lg:text-[100%] my-[13px] py-1 xl:px-[76px] sm:px-[36px] md:px-[43px]  lg:px-[55px] border-r   ${
                    activeTab === "CBSE-Class-8"
                      ? "text-[#BE4E1E] underline  "
                      : ""
                  }`}
                  onClick={() => handleTabClick("CBSE-Class-8")}
                  role="tab"
                  aria-controls="CBSE-Class-8"
                  aria-selected={activeTab === "CBSE-Class-8"}
                >
                  Class-8
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block  border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[75px] sm:px-[37px] md:px-[44px]  lg:px-[55px] border-r  ${
                    activeTab === "CBSE-Class-9"
                      ? "text-[#BE4E1E] underline  "
                      : ""
                  }`}
                  onClick={() => handleTabClick("CBSE-Class-9")}
                  role="tab"
                  aria-controls="CBSE-Class-9"
                  aria-selected={activeTab === "CBSE-Class-9"}
                >
                  Class-9
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block  border-[#AB9A9F] my-[13px] sm:text-[12px]  lg:text-[100%] py-1 xl:px-[75px] sm:px-[37px] md:px-[43px]  lg:px-[55px]   ${
                    activeTab === "CBSE-Class-10"
                      ? "text-[#BE4E1E] underline  "
                      : ""
                  }`}
                  onClick={() => handleTabClick("CBSE-Class-10")}
                  role="tab"
                  aria-controls="contacts"
                  aria-selected={activeTab === "CBSE-Class-10"}
                >
                  Class-10
                </button>
              </li>
            </ul>
          </div>

          <table
            id="CBSE-Class-6-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 ${
              activeTab === "tab2" || activeTab === "CBSE-Class-6"
                ? ""
                : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-l-[#FF204E] border-l-[6px] font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r bg-[#FFE4E9] border-l-[#FF204E] border-l-[6px] font-bold border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4  border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                      <a href="#" class="font-normal">
                        <br />
                        (Literature)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="w-[155px] text-center py-4 border-r border-l-[#24F9F9] border-l-[6px] font-bold bg-[#D9FFFA] border-[c]">
                    Comp
                  </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                      <a href="#" class="font-normal">
                        <br />
                        (Grammar)
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
          <table
            id="CBSE-Class-7-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "CBSE-Class-7" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English <br />
                      <a href="#" class=" font-normal">
                        (Grammar)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                      <a href="#" class="font-normal">
                        <br />
                        (Literature)
                      </a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none "
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
          <table
            id="CBSE-Class-8-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "CBSE-Class-8" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]">
                      <a
                        href="#"
                        class="font-medium text-white hover:underline"
                      ></a>
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>

          <table
            id="CBSE-Class-9-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "CBSE-Class-9" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] h-[52.67px] border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>

          <table
            id="CBSE-Class-10-table"
            className={`xl:w-full sm:w-[630px] md:w-[700px] lg:w-[900px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ${
              activeTab === "CBSE-Class-10" ? "" : "hidden"
            }`}
          >
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-[#50535C] ">
                <thead class="text-xs text-[#50535C] uppercase bg-[#FCFBF7] border-b border-[#B7B7B7] ">
                  <tr>
                    <th
                      scope="col"
                      class=" py-4 border-r border-[#B7B7B7]"
                    ></th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Monday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Tuesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Wednesday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Thursday
                    </th>
                    <th
                      scope="col"
                      class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-4 border-r border-[#B7B7B7]"
                    >
                      Friday
                    </th>
                    <th scope="col" class="xl:w-[10%]  sm:w-[90px] lg:w-[120px] text-center py-3 ">
                      Saturday
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class=" border-b border-[#B7B7B7] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border-r border-[#B7B7B7] leading-none "
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">3:30 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 4:20 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                      Biology
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#62DA44] border-l-[6px] font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                      Chemistry
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-r  border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">4:20 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 5:10 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                      Maths
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class="border-b border-[#B7B7B7]">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">5:10 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:00 PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                      Physics
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px]  border-r border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                      English
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                  <tr class=" border-b border-[] ">
                    <th
                      scope="row"
                      class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center md:py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border-r border-[#B7B7B7] leading-none"
                    >
                      <span class="text-[#BE4E1E] sm:text-[11px] xl:text-[14px] lg:text-[13px]">6:00 PM</span>&nbsp;<br className="sm:block md:hidden hidden "/>-<br className="sm:block md:hidden hidden"/> 6:50
                      PM
                    </th>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>

                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border-r font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                      SST
                    </td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                    <td class="xl:w-[10%] sm:text-[11px] xl:text-[14px] lg:text-[13px] sm:w-[90px] lg:w-[120px] py-4 border-r border-[#B7B7B7]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </table>
        </div>
      </div>
      </div>


















    <div className="sm:hidden block">
    <h1 className="text-3xl text-[#2E3442] text-center font-bold my-[10px]">
          Student Time Table
        </h1>
      <div className="flex justify-center mx-auto">
        <div className="mt-[20px] relative mx-auto">
          <button
            className="rounded-full bg-[#F1EEED] text-[12px] font-semibold  py-2 w-[95px] flex justify-center  text-[#2E3442] transition-colors "
            onClick={() => setOpenClass(!openClass)}
          >
            {selectedClass || "Class"}
            <svg
              className="w-3 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/70"
              onClick={() => setOpenClass(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 left-0 right-0 h-[50vh] w-full overflow-hidden rounded-t-3xl bg-white"
              >
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center  bg-white p-4">
                  <h1 className="h-2 w-14 cursor-grab touch-none rounded-full border-2 border-white text-center active:cursor-grabbing">
                    Class
                  </h1>
                </div>

                <div className="relative text-[20px] z-0 h-full overflow-y-scroll pt-12">
                  {classes.map((cls) => (
                    <div
                      key={cls}
                      onClick={() => handleClassSelect(cls)}
                      className="cursor-pointer text-center font-semibold border-t-2 hover:bg-gray-200 px-4 py-2"
                    >
                      {cls}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="mt-[20px] mx-auto relative">
          <button
            className="rounded-full bg-[#F1EEED] font-semibold text-[12px]  py-2 w-[100px] flex justify-center  text-[#2E3442] transition-colors "
            onClick={() => setOpenDays(!openDays)}
          >
            {selectedDays || "Days"}
            <svg
              className="w-3 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openDays && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/70"
              onClick={() => setOpenDays(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 left-0 right-0 h-[50vh] w-full overflow-hidden rounded-t-3xl bg-white"
              >
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center  bg-white p-4">
                  <h1 className="h-2 w-14 cursor-grab touch-none rounded-full border-2 border-white text-center active:cursor-grabbing">
                    Days
                  </h1>
                </div>

                <div className="relative text-[20px] z-0 h-full overflow-y-scroll pt-12">
                  {days.map((day) => (
                    <div
                      key={day}
                      onClick={() => handleDaysSelect(day)}
                      className="cursor-pointer text-center font-semibold border-t-2 hover:bg-gray-200 px-4 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="mt-[20px] mx-auto relative">
          <button
            className="rounded-full bg-[#F1EEED] font-semibold text-[12px] py-2 w-[95px] flex justify-center  text-[#2E3442] transition-colors "
            onClick={() => setOpenBoard(!openBoard)}
          >
            {selectedBoard || "Board"}
            <svg
              className="w-3 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openBoard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/70"
              onClick={() => setOpenBoard(false)}
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute bottom-0 left-0 right-0 h-[50vh] w-full overflow-hidden rounded-t-3xl bg-white"
              >
                <div className="absolute left-0 right-0 top-0 z-10 flex justify-center  bg-white p-4">
                  <h1 className="h-2 w-14 cursor-grab touch-none rounded-full border-2 border-white text-center active:cursor-grabbing">
                    Board
                  </h1>
                </div>

                <div className="relative text-[20px] z-0 h-full overflow-y-scroll pt-12">
                  {boards.map((board) => (
                    <div
                      key={board}
                      onClick={() => handleBoardSelect(board)}
                      className="cursor-pointer text-center font-semibold border-t-2 hover:bg-gray-200 px-4 py-2"
                    >
                      {board}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Monday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Monday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] text-center py-4 border  border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4  border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>

      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Tuesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border bg-[#FCFBF7] border-[#B7B7B7]">
                  {" "}
                  Tuesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                  Biology
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English <br />
                  <a href="#" class=" font-normal">
                    (Literature)
                  </a>
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Wednesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Wednesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] text-center py-4 border  border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4  border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Thursday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Thursday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] text-center py-4 border-r border-l-[#FF204E] border-l-[6px] font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                  Physics
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Friday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Friday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] text-center py-4 border-r border-l-[#FF204E] border-l-[6px] font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "6th" &&
          selectedDays === "Saturday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Saturday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                  Chemistry
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                  <a href="#" class="font-normal">
                    <br />
                    (Grammar)
                  </a>
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Monday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Monday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                  <a href="#" class="font-normal">
                    <br />
                    (Literature)
                  </a>
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Wednesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Wednesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                  <a href="#" class="font-normal">
                    <br />
                    (Grammar)
                  </a>
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Tuesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Tuesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                  Physics
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Thursday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Thursday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                  Chemistry
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Friday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Friday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "7th" &&
          selectedDays === "Saturday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Saturday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                  Biology
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Monday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Monday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Tuesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Tuesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                  Physics
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Wednesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Wednesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Thursday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Thursday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                  Biology
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Friday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Friday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "8th" &&
          selectedDays === "Saturday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Saturday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                  Chemistry
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Monday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Monday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                  Physics
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Tuesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Tuesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Wednesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Wednesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                  Chemistry
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Thursday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Thursday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Friday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  {" "}
                  Friday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                  Biology
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "9th" &&
          selectedDays === "Saturday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Saturday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Monday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Monday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                  Biology
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Tuesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Tuesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Wednesday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Wednesday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                  Chemistry
                </td>
              </tr>
            </tbody>
          )}
      </div>

      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Thursday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Thursday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Friday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Friday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                  Maths
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                  Physics
                </td>
              </tr>
            </tbody>
          )}
      </div>
      <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
        {selectedBoard === "ICSE" &&
          selectedClass === "10th" &&
          selectedDays === "Saturday" && (
            <tbody className="">
              <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  Timing
                </th>
                <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                  Saturday
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                  4:20 PM
                </th>
                <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
              </tr>
              <tr class=" border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                  5:10 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
              <tr class="border-b border-[#B7B7B7]">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                >
                  <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                  6:00 PM
                </th>
                <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                  English
                </td>
              </tr>
              <tr class=" border-b border-[#B7B7B7] ">
                <th
                  scope="row"
                  class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                >
                  <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                </th>
                <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                  SST
                </td>
              </tr>
            </tbody>
          )}
      </div>

      
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Monday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Monday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border  border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 py-4  border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>

        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Tuesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border bg-[#FCFBF7] border-[#B7B7B7]">
                    {" "}
                    Tuesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                    Biology
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Wednesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Wednesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border  border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 py-4  border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Thursday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Thursday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-r border-l-[#FF204E] border-l-[6px] font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                    Physics
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Friday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Friday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-r border-l-[#FF204E] border-l-[6px] font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English <br />
                    <a href="#" class=" font-normal">
                      (Literature)
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-r border-l-[#24F9F9] border-l-[6px] font-bold bg-[#D9FFFA] border-[#B7B7B7]">
                    Comp
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "6th" &&
            selectedDays === "Saturday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Saturday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                    Chemistry
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                    <a href="#" class="font-normal">
                      <br />
                      (Grammar)
                    </a>
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Monday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Monday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6  border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                    <a href="#" class="font-normal">
                      <br />
                      (Grammar)
                    </a>
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Wednesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Wednesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English <br />
                    <a href="#" class=" font-normal">
                      (Literature)
                    </a>
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Tuesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Tuesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                    Physics
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Thursday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Thursday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                    Biology
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Friday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Friday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "7th" &&
            selectedDays === "Saturday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Saturday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                    Chemistry
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Monday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Monday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Tuesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Tuesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                    Biology
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Wednesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Wednesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Thursday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Thursday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                    Physics
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Friday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Friday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "8th" &&
            selectedDays === "Saturday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Saturday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                    Chemistry
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Monday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Monday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                    Physics
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Tuesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Tuesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Wednesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Wednesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                    Chemistry
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Thursday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Thursday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Friday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    {" "}
                    Friday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                    Biology
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "9th" &&
            selectedDays === "Saturday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Saturday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Monday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Monday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#F4D73C] border-l-[6px] font-bold text-center bg-[#FDFAE7] border-[#B7B7B7]">
                    Biology
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Tuesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Tuesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Wednesday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Wednesday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#FF7A30] border-l-[6px] font-bold text-center bg-[#FFEFE6] border-[#B7B7B7]">
                    Physics
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
              </tbody>
            )}
        </div>

        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Thursday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Thursday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] text-center py-4 border-l-[#FF204E] border-l-[6px]   border font-bold bg-[#FFE4E9] border-[#B7B7B7]">
                    SST
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Friday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Friday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border-l-[6px] border-r border-l-[#62DA44] border font-bold text-center bg-[#ECFAE8] border-[#B7B7B7]">
                    Chemistry
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-l-[#4A74DF] border-l-[6px] font-bold text-center bg-[#E9EEFB] border-[#B7B7B7]">
                    Maths
                  </td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="px-6 w-[155px] border border-l-[#CC78FF] border-l-[6px] font-bold text-center bg-[#F8EEFF] border-[#B7B7B7]">
                    English
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
        <div className="container mx-auto justify-center mt-[15px] max-w-[310px]">
          {selectedBoard === "CBSE" &&
            selectedClass === "10th" &&
            selectedDays === "Saturday" && (
              <tbody className="">
                <tr class=" border-b border-[#B7B7B7] mt-[10px]  ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    Timing
                  </th>
                  <td class="w-[155px] text-center py-4 border  bg-[#FCFBF7]  border-[#B7B7B7]">
                    Saturday
                  </td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7]  whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">3:30 PM</span>&nbsp;-
                    4:20 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] text-[#202124] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E]  text-sm">4:20 PM</span>&nbsp;-
                    5:10 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class="border-b border-[#B7B7B7]">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7]"
                  >
                    <span class="text-[#BE4E1E] text-sm">5:10 PM</span>&nbsp;-
                    6:00 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
                <tr class=" border-b border-[#B7B7B7] ">
                  <th
                    scope="row"
                    class="w-[155px] text-center py-4 font-medium bg-[#FCFBF7] whitespace-nowrap border border-[#B7B7B7] "
                  >
                    <span class="text-[#BE4E1E] ">6:00 PM</span>&nbsp;- 6:50 PM
                  </th>
                  <td class="w-[155px] px-6 py-4 border border-[#B7B7B7]"></td>
                </tr>
              </tbody>
            )}
        </div>
      </div>
    </>
  );
}

export default TimeTable;

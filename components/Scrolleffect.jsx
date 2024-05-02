'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const data = {
    Announcements: {

        text: (
            <>
            <span className="font-bold text-[#BE4E1E]  lg:mt-8 lg:ml-4">Experience the difference with our free demo class!</span><span className=''>Join us for an engaging session designed to</span> <span className="font-bold text-green-500">inspire</span> and <span className="font-bold text-red-500">inform</span>.<span className="text-purple-500  lg:ml-4">Don&apos;t miss out - register today!</span>
        </>
        ),
        form: (
            <form
                className="bg-[#E7D8C5] lg:w-[700px] mx-auto lg:mt-[40px] lg:-mt- lg:h-[300px] sm:p-10 p-6 rounded-lg sm:w-[500px] w-[310px] lg:mb-0 absolute  -top-5  left-[420px]"
                action="https://api.web3forms.com/submit"
                method="POST"
            >
            <div className='flex'>
            <div className='w-[50%]'>
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
                    />
                    <input
                        className="w-full  bg-gray-100 px-6 py-2 mb-1 rounded-3xl focus:outline-none"
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
                {/* Rest of your form elements */}
                <div class="relative">
                <select
                //   ref={classModeSelectRef}
                  name="Mode of class"
                  class=" appearance-none w-full text-green bg-gray-100 px-6 sm:my-3 my-1  py-2 rounded-3xl focus:outline-none"
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
                  class=" appearance-none w-full sm:my-3 my-1  text-green bg-gray-100 px-6 py-2 rounded-3xl focus:outline-none"
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
              
              <div className='w-[50%] -mt-4 ml-4'>              
              <div class="relative">
                <select
                  name="class"
                  id="Class"
                  class=" appearance-none w-full bg-gray-100 px-6 sm:my-4 my-1  py-2 rounded-3xl focus:outline-none"
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
              <div class="relative -mt-3">
                <select
                  name="Select the Day"
                  class="appearance-none w-full bg-gray-100 px-6 sm:my-3 my-1  py-2  rounded-3xl focus:outline-none"
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
             <div class="relative -mt-1" >    {/* ref={timeSlotSectionRef} */}
                <select
                  name="Select the Time Slot"
                  class="  appearance-none w-full  bg-gray-100 px-6 sm:my-4 my-1   py-2 rounded-3xl focus:outline-none"
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
                    className="w-full  sm:mt-6 mt-2 lg:mt-2 bg-[#6A1C1A] hover:bg-[#9A391D] rounded-3xl px-6 py-2 text-lg text-white tracking-wide font-semibold font-sans"
                >
                    Register
                </button>
                </div>
                </div>
            </form>
        )
    },
    Offers: {
        image: '/Announce.svg'
    },
    Achievements: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin ac arcu id risus placerat eleifend.'
    },
    HolidayList: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida condimentum nunc ac rhoncus.'
    },
};

const Scrollbar = ({ clickedOption }) => {
    return (
      <div className="{`scrollbar w-[4px] bg-[#E5E5] absolute top-0 bottom-0 left-60 ${clickedOption ? styles.clicked : ''}`} ">
        <div className={`indicator h-10 bg-red-500 ${clickedOption ? 'active' : ''}`}></div>
      </div>
    );
  };
  
  

  const AppData = ({ onSelect }) => {
    const [showForm, setShowForm] = useState(false);

    const handleOptionClick = (option) => {
        onSelect(option);
        if (option === 'Announcements') {
            setShowForm(true);
        } else {
            setShowForm(false);
        }
    };

    return (
        <div className='appData mt-[100px] ml-[169px] relative'>
            <div className="scrollbar w-[4px] bg-blue-500 absolute top-0 bottom-0 left-60" />
            <div className="flex flex-col h-full">
                {Object.keys(data).map((option) => (
                    <div 
                        key={option}
                        className={` leading-[85px] text-[24px] cursor-pointer`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            {showForm && data['Announcements']?.form}
        </div>
    );
};
  



const Scrolleffect = () => {
    const [selectedData, setSelectedData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const dataSections = useRef({});

    // Update the data sections reference on mount and when data changes
    useEffect(() => {
        const sections = {};
        Object.keys(data).forEach((option) => {
            sections[option] = document.getElementById(option);
        });
        dataSections.current = sections;
    },);

    // Highlight the currently active option based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 500; // Adjusted scroll position for accuracy
            const activeSection = Object.keys(dataSections.current).find((option) => {
                const section = dataSections.current[option];
                return section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
            });
            
            setSelectedOption(activeSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex max-w-[1350px] relative">
            <div className="w-1/4 p-4">
                <AppData onSelect={(option) => { setSelectedData(data[option]); setSelectedOption(option); }} selectedOption={selectedOption} />
            </div>
            <div className="flex-1 p-4" id="scrollContainer" style={{ overflowY: 'auto' }}>
                <div className='ml-[245px]  z-10 max-w-[600px]' id="scrollContainer">
                
                    {selectedData && (
                        <>
                            {selectedData.text && <p>{selectedData.text}</p>}
                            {selectedData.image && <Image src={selectedData.image} alt="Selected Image" width={1012} height={600} />}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Scrolleffect;

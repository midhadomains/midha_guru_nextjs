"use client"
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { CgMenuLeftAlt } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setToggle(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav
                ref={navbarRef}
                className="mx-auto  sticky top-0 z-10 bg-[#FFFDF6] w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <div className='bg-[#6A1C1A] md:flex justify-center  hidden'>
                    <Link href="tel:+91 95061 25061" className='flex py-[10px] text-[20px] lg:text-[25px] text-center text-white  font-[500] mx-auto'><MdCall className='mt-[6px] mr-2' /><h1>Call <span className=' ml-6 bg-[#8F4846] py-1 px-5 rounded-full font-[400] text-[18px] lg:text-[20px] my-auto'>9506125061</span></h1>
                </Link>

                    </div>
                <div className=''>
                    <div className="flex items-center justify-between  w-[100%] h-[55px] md:h-[70px] max-w-[2500px] mx-auto overflow:hidden">
                        <Link href='/'>
                            <Image
                                width={250}
                                height={40}
                                className='ml-1 lg:ml-4 md:item-left w-[150px] h-[30px] lg:w-fit lg:h-[40px] '
                                src="/Midhaguru.svg"
                                alt="Midhaguru"
                                priority={true}
                            />
                        </Link>
                        <div className='flex'>
                            <Link href="tel:+91 95061 25061" className='m-auto w-fit'>
                                <MdCall className='block md:hidden m-auto text-[#6A1C1A] text-[25px] ' />
                            </Link>
                            <Link href='https://edu.midha.guru/s/authenticate' className='block md:hidden bg-[#6A1C1A] py-1 px-5 rounded-3xl text-[#F9ECC7] mx-4 max-w-[100px] w-fit'>Login</Link>
                            {toggle ? (
                                <IoClose
                                    onClick={() => setToggle(!toggle)}
                                    className="text-3xl md:hidden block mr-2 text-[#9A391D]"
                                />
                            ) : (
                                <CgMenuLeftAlt
                                    onClick={() => setToggle(!toggle)}
                                    className="text-3xl md:hidden block mr-2 text-[#9A391D]"
                                />
                            )}
                        </div>

                        <ul className="hidden md:flex  justify-around flex-nowrap  max-w-[1000px] w-[100%]">
                            <NavItem to='/' name='Home' />
                            <li>
                                <div className="relative inline-block group py-[0.6rem] text-center">
                                    <button className="text-[1.1rem] font-[500] h-[100%] cursor-pointe  px-1 hover:text-[#BE4E1E] my-auto  transition duration-300 ">
                                        <span className='flex'>Courses <IoIosArrowDown className='mt-[5px] ml-1' /> </span>
                                    </button>
                                    <div className="absolute -right-12 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-50">
                                        <ul>
                                            <Link href='/contact-us'><li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Classroom Coaching</li></Link>
                                            <hr />
                                            <Link href='https://edu.midha.guru/s/store'><li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Online Courses</li></Link>

                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <NavItem to="/about" name="About" />
                            <NavItem to="/contact-us" name="Contact Us" />
                            <NavItem to="/founder-profile" name="Founder's Profile" />
                            <Link href='https://edu.midha.guru/s/authenticate' className="text-[1.2rem] font-[500] cursor-pointer">
                                <li className="relative group bg-[#6A1C1A] hover:bg-[#BE4E1E] rounded-3xl py-2 px-9 text-white text-[20px] transition duration-300 flex-shrink-0">
                                    Log In
                                </li>
                            </Link>
                        </ul>
                        {/* Responsive */}
                        <ul
                            className={`md:hidden w-[220px] sm:w-[300px] md:w-[40%] h-auto fixed bg-white top-[60px] right-[0]  shadow-2xl
                     ${toggle ? 'visible' : 'hidden'}`}
                        >
                            <SmNavItem to='/' name='Home' />
                            <hr />
                            <SmNavItem to="/about" name="About" />
                            <hr />
                            <li className='text-[1.3rem] font-[700] pt-2 pb-0  px-5 hover:text-[#BE4E1E] text-[] '>Courses</li>
                            <SmNavItem to="https://edu.midha.guru/s/store" name="Online Courses" />
                            <hr className='w-[70%] ml-5' />
                            <SmNavItem to="https://edu.midha.guru/s/store" name="Classroom Coaching" />
                            <hr />
                            <SmNavItem to="/contact-us" name="Contact Us" />
                            <hr />
                            <SmNavItem to="/founder-profile" name="Founder's Profile" />
                            <hr />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

const NavItem = ({ to, name }) => {
    return (
        <li className="relative group  p-4 md:p-0 my-auto">
            <Link
                href={to}
                className="text-[1.1rem] font-[500] cursor-pointer pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 ">
                {name}
            </Link>
        </li>
    );
};
const SmNavItem = ({ to, name }) => {
    return (
        <Link href={to}>
            <li className='text-[1.1rem] font-[500] p-4  px-5 hover:text-[#BE4E1E] '>{name}</li>
        </Link>
    );
};
export default Navbar;
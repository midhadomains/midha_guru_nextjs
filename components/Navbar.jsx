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
        <nav
            ref={navbarRef}
            className="mx-auto sticky top-0 z-10 bg-[#FFFDF6] w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className='max-w-full '>
                <div className="flex items-center justify-between  w-[100%] h-[55px] md:h-[70px] max-w-[2500px] mx-auto">
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
                                    <span className='flex'>Courses <IoIosArrowDown className='mt-[5px] ml-1'/> </span>
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
                        className={`md:hidden w-[60%] sm:w-[40%] md:w-[40%] h-auto fixed bg-white top-[60px]  shadow-2xl
                     ${toggle ? 'right-[0]' : 'hidden'}`}
                    >
                        <SmNavItem to='/' name='Home' />
                        <hr />
                        <SmNavItem to="/about" name="About" />
                        <hr/>
                        <SmNavItem to="https://edu.midha.guru/s/store" name="Courses" />
                        <hr />
                        <SmNavItem to="/contact-us" name="Contact Us" />
                        <hr />                       
                        <SmNavItem to="/founder-profile" name="Founder's Profile" />
                        <hr />
                    </ul>
                </div>
            </div>
        </nav>
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
        <li className="relative group  p-4 md:p-0 my-auto text-[#6A1C1A]">
            <Link
                href={to}
                className="text-[1.1rem] font-[500] cursor-pointer pb-2 px-1 hover:text-[#BE4E1E]  transition duration-300 ">
                {name}
            </Link>
        </li>
    );
};
export default Navbar;
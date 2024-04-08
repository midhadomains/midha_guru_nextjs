import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlinePhoneIphone } from "react-icons/md";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { TiMail } from "react-icons/ti";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10">
          <div className="mx-auto sm:max-w-[70%]">
          <div className="flex justify-center sm:justify-start">
          <Link href="#">
            <Image
              width={200}
              height={121}
              //style={{ minWidth: '150px' }}
              className="sm:ml-4 lg:ml-0 justify-between h-auto sm:w-[200px] sm:h-[121px] w-[150px]"
              src="/Midhaguru.svg"
              alt="MidhaFin Logo"
            />
          </Link>
        </div>
            <div className="sm:w-[60%] mt-2 text-center sm:text-left">
            <p className="text-white">3rd & 5th Floor, The Westend Tower, Lah Kothi, Ratu Road, Ranchi (JHARKHAND)</p>
            </div>
          </div>

          <div className="flex justify-end ">
            <div className=" w-[75%]  sm:w-[33%]">
              {/* <hr/> */}
              <p className="font-semibold text-white text-left mb-1 uppercase max-w-[126px]">
                Quick Links
              </p>
              <div className="flex items-start flex-col m-8 sm:m-4 mt-0 md:m-0 mx-1">
                <div className="flex flex-col text-white mt-5 space-y-1">
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:underline hover:text-[#6A1C1A] "
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                  >
                    About us
                  </Link>
                  <Link
                    href="https://edu.midha.guru/s/store?redirectToMicroFE=true"
                    className="transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                  >
                    Courses
                  </Link>
                  <Link
                    href="https://www.midha.in/"
                    className="transition-colors duration-300 hover:underline hover:text-[#6A1C1A]"
                  >
                    Midha Education
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[70%]  sm:w-[45%] ">
              <p className="font-semibold text-white ml-4 uppercase">
                Contact Us
              </p>
              <div className="mt-5 ml-3">
                <div className="flex text-white my-2 ">
                  <MdOutlinePhoneIphone className="my-auto mr-1" />
                  <Link href="tel:+91 91551 99555">
                    <h1 className=" transition-colors duration-300  hover:underline hover:text-[#6A1C1A] w-[110%] text-sm sm:text-lg">
                      {" "}
                      Call : +91-95061 25061
                    </h1>
                  </Link>
                </div>
                <div className="flex text-white my-2">
                  <TiMail className="my-auto mr-1" />
                  <Link target="_blank" href="mailto:midhafin@gmail.com">
                    <h1 className="transition-colors duration-300  hover:underline hover:text-[#6A1C1A] text-sm sm:text-lg tracking-wider	">
                      midhaguru@gmail.com
                    </h1>
                  </Link>
                </div>
                <div className="flex items-center justify-between">
                <div className="flex -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/midhaguru/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-[#6A1C1A] dark:hover:text-[#6A1C1A]"
                    aria-label="Instagram"
                  >
                    <SlSocialInstagram />
                  </Link>
      
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/Midhaguru"
                    className="mx-2 text-white transition-colors duration-300 hover:text-[#6A1C1A] dark:hover:text-[#6A1C1A]"
                    aria-label="Facebook"
                  >
                    <TiSocialFacebook />
                  </Link>
      
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/midhaguru/"
                    className="mx-2 text-white transition-colors duration-300 hover:text-[#6A1C1A] dark:hover:text-[#6A1C1A]"
                    aria-label="Linkedin"
                  >
                    <SlSocialLinkedin />
                  </Link>
      
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@Midhaguru"
                    className="mx-2 text-white transition-colors duration-300 hover:text-[#6A1C1A] dark:hover:text-[#6A1C1A]"
                    aria-label="You Tube"
                  >
                    <SlSocialYoutube />
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

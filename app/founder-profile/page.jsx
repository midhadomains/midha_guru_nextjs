import Footer from "@/components/Footer";
import Navbar3 from "@/components/Navbar3";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="mx-auto">
      <Navbar3 />
      <div className="h-auto mx-auto bg-gradient-to-r from-[#F1C99599] to-[#FAF8F099]  flex ">
        <div className="max-w-[1300px] mx-auto">
          <div className="sm:flex justify-between overflow-hidden">
            <div className=" w-[100%] sm:w-[60%] mt-12">
              <h1 className="text-[#6A1C1A] text-[26px] sm:text-[26px] md:text-[32px] lg:text-[42px] font-bold mb-4 sm:ml-8 text-center sm:text-left ">
                The Founder&apos;s Profile : Micky Midha
              </h1>
              <div className="block sm:hidden w-[70%] sm:w-[35%] lg:w-[50%] mx-auto mb-4">
                <Image
                  src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Hero+Section/Hero.png"
                  alt="Image"
                  width={400}
                  height={400}
                  priority={true}
                />
              </div>

              <h2 className="text-[22px] md:text-[28px] lg:text-[28px] font-semibold mb-4 sm:ml-8 text-center md:text-left sm:text-left ">
                Meet Micky Midha
              </h2>
              <p className="text-center sm:text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8 mb-4">
                Micky Midha is a distinguished professional known for his
                expertise in finance, mathematics, and computer science. With a
                strong educational background and extensive experience in
                teaching and mentoring, he has made significant contributions to
                academia and educational institutions.
              </p>
            </div>
            <div className=" hidden sm:block max-w-[400px]  w-[40%] sm:w-[35%] lg:w-[50%] mt-8 pr-[32px] overflow-hidden">
              <Image
                src="Group 312.svg"
                alt="Image"
                width={400}
                height={400}
                className=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div className="w-[100%] mt-12">
          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8">
            <Image src="Group 232.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Education
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8">
            Micky earned his Bachelor of Engineering in Computer Science &
            Engineering (BE-CSE) from Birla Institute of Technology (BIT Mesra).
            His academic journey began with an outstanding performance in the
            BITSAT (BITS Pilani) examination in 2005, where he ranked under 400
            nationwide. This achievement opened doors to prestigious
            institutions like BTech (CS) at the Pilani Campus, MTech at IIT
            Kharagpur, and BTech (CS) programs at various NITs, including
            Warangal, Surathkal, and Trichy through JEE & AIEEE.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image src="Group 233.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Professional Journey:
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8">
            Despite opportunities at renowned institutes, Micky chose BIT Mesra
            for his undergraduate studies to stay close to his hometown of
            Ranchi. His goal was to contribute to the development of his city by
            establishing a comprehensive educational institution. He envisioned
            not only academic excellence but also holistic student development
            through extracurricular activities like table tennis and chess.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image
              src="Mask group copy.svg"
              alt="image"
              width={100}
              height={60}
            />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Teaching and Mentoring
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8">
            With over 13 years of teaching experience, Micky has become a
            distinguished mentor in finance, mathematics, and computer science.
            His passion for teaching is evident in his roles at esteemed
            institutions such as the Bombay Stock Exchange Institute, where he
            imparts valuable knowledge. He has also served as a mentor at e-Cell
            IIT Kharagpur, a guest faculty at St. Xavier&apos;s College, and a
            freelance trainer at IIM Ranchi. Additionally, his contributions as
            a keynote speaker and judge at institutions like XISS and BIT Mesra
            have solidified his reputation as an expert and a respected academic
            figure.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image src="Layer 2.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Beyond Academia
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8 mb-7">
            Micky Midha is committed to fostering the all-around development of
            his students. His efforts go beyond traditional academics,
            emphasizing the importance of extracurricular activities in shaping
            well-rounded individuals. By incorporating sports like table tennis
            and strategic games like chess into the curriculum, he aims to
            nurture not only academic excellence but also leadership, teamwork,
            and holistic growth among his students.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

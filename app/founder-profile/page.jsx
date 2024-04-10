import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";




export default function Page() {
  return (
    <div className="mx-auto">
      <Navbar/>
      <div className="h-auto mx-auto bg-gradient-to-r from-[#F1C99599] to-[#FAF8F099]  flex ">
        <div className="max-w-[1300px] mx-auto">
          <div className="sm:flex justify-between">
            <div className=" w-[100%] sm:w-[60%] mt-12">
              <h1 className="text-[#6A1C1A] text-[26px] sm:text-[26px] md:text-[32px] lg:text-[46px] font-bold mb-4 sm:ml-8 text-center sm:text-left ">
                The Founder&apos;s Profile
              </h1>
              <div className="flex sm:hidden w-[70%] sm:w-[35%] lg:w-[50%] mx-auto mb-4">
                <Image
                  src="Group 312.svg"
                  alt="Image"
                  width={400}
                  height={400}
                  priority={true}
                />
              </div>

              <h2 className="text-[22px] md:text-[28px] lg:text-[28px] font-semibold mb-4 sm:ml-8 text-center md:text-left lg:text-left ">
                Micky Midha
              </h2>
              <p className="text-center sm:text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8 mb-4">
                Micky Midha is a highly accomplished professional renowned for
                his expertise in finance, mathematics, and computer science.
                With an impressive educational background and a plethora of
                experience in teaching and mentoring, he has made significant
                contributions to academia and educational institutions.
              </p>
            </div>
            <div className=" hidden sm:flex  flex-shrink-0 lg:justify-center max-w-[400px]  w-[40%] sm:w-[35%] lg:w-[50%] mt-8 pr-[32px]">
              <Image src="Group 312.svg" alt="Image" width={400} height={400} className="flex-shrink-0" priority={true} />
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
            Micky completed his Bachelor of Engineering in Computer Science &
            Engineering (BE-CSE) from Birla Institute of Technology (BIT Mesra).
            However, his academic excellence was evident much earlier when he
            secured an exceptional rank in the BITSAT (BITS Pilani) examination
            in 2005, ranking under 400 nationwide. This remarkable achievement
            presented him with opportunities for admission into prestigious
            institutions like BTech (CS) at the Pilani Campus, MTech in IIT
            Kharagpur, and BTech (CS) programs in various NITs including
            Warangal, Surathkal, and Trichy through JEE & AIEEE.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image src="Group 233.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Professional Journey:
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8">
            Despite having the chance to join renowned institutes, Micky chose
            BIT Mesra for his undergraduate studies to remain in his hometown of
            Ranchi. His decision stemmed from a deep-seated aspiration to
            contribute to the development of his city by establishing a
            comprehensive educational institution. His vision encompassed not
            only academic excellence but also the holistic development of
            students by integrating extracurricular activities like table
            tennis, chess, and more within the campus.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image src="Mask group copy.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
            Teaching and Mentoring
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8">
            With over 13 years of teaching experience, Micky has become a
            distinguished mentor in the field of finance, mathematics, and
            computer science. His passion for teaching is evident through his
            roles as a faculty member at esteemed institutions like the Bombay
            Stock Exchange Institute, where he imparts valuable knowledge. He
            has also served as a mentor at the e-Cell IIT Kharagpur, guest
            faculty at St. Xavier&apos;s College, and a freelance trainer at IIM
            Ranchi. Additionally, his contributions as a keynote speaker and
            judge at institutions like XISS and BIT Mesra have further
            solidified his reputation as an expert and a respected figure in
            academia.
          </p>

          <div className=" w-[12%] sm:w-[30%] lg:w-[50%] ml-8 mt-12">
            <Image src="Layer 2.svg" alt="image" width={100} height={60} />
          </div>
          <h1 className="text-[#6A1C1A] text-[22px] md:text-[28px] lg:text-[28px] font-bold mb-4 ml-8 text-left ">
          Beyond Academia
          </h1>
          <p className=" text-left lg:w-[100%] md:w-[85%] text-[14px] sm:text-[14px] md:text-[18px] lg:text-[22px] leading-16 px-8 mb-7">
            Micky Midha is not just an educator; he is also known for his
            commitment to fostering all-around development in students. His
            efforts extend beyond traditional academics, emphasizing the
            importance of extracurricular activities in shaping well-rounded
            individuals. By incorporating sports like table tennis and strategic
            games like chess into the curriculum, he aims to nurture not only
            academic prowess but also leadership, teamwork, and holistic growth
            among his students.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

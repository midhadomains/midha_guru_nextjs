
import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import BlogsCards from "../../components/BlogsCards.jsx";

function page() {
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-[#C1A06029] h-[300px] ">
          <h1 className="text-[#6A1C1A] xl:text-[50px] md:text-[35px] text-[25px] pt-[20px] lg:pt-[30px] xl:pt-[20px] font-bold text-center">
            Midha Guru <span className="text-[#BE4E1E]  ">Blogs </span>
          </h1>
          <div className="text-[#2E3442] lg:text-[20px] sm:text-[16px] text-[14px] text-center mt-[23px] sm:w-[500px] w-[310px] md:w-[700px] lg:w-[900px] mx-auto">
            Join us as we explore the diverse realms of education, from
            insightful articles to practical tips, guiding you on your journey
            towards academic excellence and personal growth.
          </div>
        </div>
        <div className="-mt-[130px] sm:-mt-[140px] lg:-mt-[88px]">
          <BlogsCards />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;

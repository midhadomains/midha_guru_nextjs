export default function About() {
  return (
    <>
      <div className="mx-auto">
        <div className="max-w-[1300px]  flex flex-wrap justify-between mx-auto">
          <div>
            <h1 className="max-w-[250px] text-[22px] sm:text-[44px] sm:flex sm:flex-col font-bold ml-6 sm:ml-8 mt-4 ">
              About <span className="text-[#6A1C1A]">Midha Guru</span>
            </h1>
            <hr className="block md:hidden lg:border-4 border-[3px] rounded-3xl border-[#BE4E1E]  w-[40px] sm:w-[130px] my-2 mb-1 md:mb-0 ml-6 sm:ml-8" />
          </div>
          <div className="hidden md:block border border-[#BE4E1E] border-t-0 border-l-[8px] border-r-0 border-b-0 mx-4 rounded-3xl my-6"></div>
          <div className=" md:hidden">
            <p className="text-[14px] sm:text-[20px] mt-4 flex-1 px-7 mb-4">
              At MidhaGuru, our mission is to empower students in grades 6 to 10
              with the knowledge, skills and confidence needed to excel
              academically and personally. We are committed to providing
              high-quality education and fostering a nurturing learning
              environment that inspires curiosity, critical thinking and a
              lifelong love for learning. We have collaborated with India&apos;s
              best faculties to create a structured and student-friendly
              platform which gives high-end technological exposure to our
              students.
            </p>
            <a>
              <span className="text-[#9A391D] text-[16px] font-semibold ml-6">
                More About Us &gt;
              </span>
            </a>
          </div>

          <div className=" flex-1 hidden md:block">
            <p className="text-[14px] sm:text-[20px] mt-4 mb-4 flex-1 px-7  w-[100%]">
              At MidhaGuru, our mission is to empower students in grades 6 to 10
              with the knowledge, skills and confidence needed to excel
              academically and personally. We are committed to providing
              high-quality education and fostering a nurturing learning
              environment that inspires curiosity, critical thinking and a
              lifelong love for learning. We have collaborated with India&apos;s
              best faculties to create a structured and student-friendly
              platform which gives high-end technological exposure to our
              students.
            </p>
            <a>
              <span className="text-[#9A391D] text-[22px] font-semibold ml-6 ">
                More About Us &gt;
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

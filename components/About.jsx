export default function About() {
  return (
    <>
      <div className="mx-auto">
        <div className="max-w-[1300px] flex flex-wrap justify-between  mx-auto">
          <h1 className="max-w-[250px] text-[22px] sm:text-[44px] sm:flex sm:flex-col font-bold  mt-4 border-b-2 border-[#6A1C1A] md:border-hidden">
            About <span className="text-[#6A1C1A]">Midha Guru</span>
          </h1>
          <div className="hidden md:block border border-[#BE4E1E] border-t-0 border-l-[8px] border-r-0 border-b-0 mx-4 rounded-3xl my-6"></div>
          <div className="max-w-[600px] md:hidden">

          <p className="text-[14px] sm:text-[20px] mt-4 flex-1 px-7 sm:w-[100%]">
            At MidhaGuru, our mission is to empower students in grades 6 to 10
            with the knowledge, skills and confidence needed to excel
            academically and personally. We are committed to providing
            high-quality education and fostering a nurturing learning
            environment that inspires curiosity, critical thinking and a
            lifelong love for learning. We have collaborated with India&apos;s best
            faculties to create a structured and student-friendly platform which
            gives high-end technological exposure to our students.
          </p>
          <a>
          <span className="text-[#9A391D] text-xl font-semibold ml-6">More About Us &gt;</span>
          </a>
        
          </div>

          <div className="sm:max-w-[850px] flex-1 hidden md:block">

          <p className="text-[14px] sm:text-[20px] mt-4 mb-4 flex-1 px-7 w-[100%]">
            At MidhaGuru, our mission is to empower students in grades 6 to 10
            with the knowledge, skills and confidence needed to excel
            academically and personally. We are committed to providing
            high-quality education and fostering a nurturing learning
            environment that inspires curiosity, critical thinking and a
            lifelong love for learning. We have collaborated with India&apos;s best
            faculties to create a structured and student-friendly platform which
            gives high-end technological exposure to our students.
          </p>
          <a>
          <span className="text-[#9A391D] text-xl font-semibold ml-6 ">More About Us &gt;</span>
          </a>
        
          </div>
        </div>
      </div>
    </>
  );
}

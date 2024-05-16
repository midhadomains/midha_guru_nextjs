import Footer from "@/components/Footer";
import Navbar3 from "@/components/Navbar3";
import dynamic from 'next/dynamic'

const TimeTable2 = dynamic(() => import ("../../components/TimeTable2.jsx"), { ssr: false })

export default function page() {
  return (
    <>
    <Navbar3/>

    <div className="bg-[#C1A06029] h-[200px] ">
          <h1 className="text-[#6A1C1A] xl:text-[50px] md:text-[35px] text-[25px] pt-[20px] lg:pt-[30px] xl:pt-[20px] font-bold text-center">
            Time Table
          </h1>
          <div className="text-[#2E3442] lg:text-[20px] sm:text-[16px] text-[14px] text-center mt-[23px] sm:w-[500px] w-[310px] md:w-[700px] lg:w-[900px] mx-auto font-semibold">
          Stay organized and never miss a class with our easy-to-use student timetable.
          </div>
        </div>
   <TimeTable2/>      
    <Footer/>
    </>
  );
}

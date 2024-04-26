import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
const TimeTable = dynamic(() => import ("../../components/TimeTable.jsx"), { ssr: false })

export default function page() {
  return ( 
    <>
    <div className=" bg-[#FFFAEB] bg-auto">
      <div className="flex flex-wrap  justify-center lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[650px] mx-auto  ">
        <div>
          <Image
            width={500}
            height={600}
            className="2xl:w-[200px] lg:w-[200px] w-[125px] sm:w-[160px] mx-auto mt-[80px] sm:block hidden "
            src="/Group 344.svg"
            alt="Additional Image"
            priority={true}
            quality={100}
          />
        </div>
        <div className="block md:w-[350px] sm:w-[300px]  lg:w-[600px] mx-auto justify-center">
          <div className=" mx-auto justify-center pl-4 sm:pl-0  w-[100px] mb-[15px] lg:mb-0 mt-[20px] sm:mt-[30px] lg:mt-[40px]">
            <Image
              width={500}
              height={600}
              className=" lg:w-[100px] w-[75px] sm:w-[100px]  justify-center "
              src="/image 4.svg"
              alt="Additional Image"
              priority={true}
              quality={100}
            />
          </div>

          <h1 className=" text-[#691D1C] text-center  sm:mr-0  mt-[5px] text-2xl sm:text-3xl md:text-4xl xl:text-[45px]  font-bold  lg:my-[30px] ">
           Smart Classroom
          </h1>
          <h3 className="text-[#BE4E1E] max-w-[280px] xl:max-w-[380px] text-center text-[14px]  md:text-[18px] sm:max-w-[330px] lg:my-[20px] sm:my-[15px]  mx-auto">
            Unlocking brilliance One lesson at a time in Midha Guru's Classroom.
          </h3>
          <div className=" lg:ml-[155px] xl:ml-[180px] mx-auto md:ml-[60px] ml-[66px] sm:ml-[50px] mt-[10px]">
            <Link
              href="https://edu.midha.guru/s/authenticate"
              className=" mx-auto  "
            >
              <button
                type="Sign Up"
                class="min-w-[150px] md:min-w-[200px] mt-2 hover:text-white transition-colors duration-200 hover:bg-[#9A391D] border-[#6A1C1A] border-2 rounded-full  py-1 sm:text-lg text-[16px] text-[#6A1C1A]  font-semibold"
              >
                Enroll Now
              </button>
            </Link>
          </div>
        </div>
        <div className="flex ">
        <Image
            width={500}
            height={600}
            className="2xl:w-[200px] sm:hidden block lg:w-[200px] w-[126px] sm:w-[140px] mx-auto sm:mt-[80px] mr-[30px] "
            src="/Group 344.svg"
            alt="Additional Image"
            priority={true}
            quality={100}
          />
          <Image
            width={500}
            height={600}
            className="2xl:w-[200px] lg:w-[200px] w-[126px] sm:w-[160px] mx-auto lg:mx-0 sm:mt-[80px] sm:ml-0 ml-[30px]"
            src="/Group 343.svg"
            alt="Additional Image"
            priority={true}
            quality={100}
          />
        </div>
      </div>
    </div>
    <TimeTable/>
    </>
  );
}

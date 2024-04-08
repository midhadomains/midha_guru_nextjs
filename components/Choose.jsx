import Image from "next/image";
import Card from "../components/Card.jsx";

export default function Choose() {
  return (
    <div className="container max-w-[1300px] px-4 sm:min-w-[750px]  md:min-w-[900px]  mx-auto lg:px-0 p-8">

    
      <div className="mx-auto  ">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between">
         
        <div className=" relative overflow-hidden border border-gray-300 font-bold rounded-md shadow-md  w-[350px] h-[80px]  sm:w-[500px] sm:h-[200px] lg:w-[562px] lg:h-[280px] xl:w-[650px] xl:h-[300px]  mb-1 flex justify-center items-center sm:m-4">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
              Why to <span className="text-[#6A1C1A]">choose us.</span>
            </h1>
          </div>

          <Card
            imageSrc="/Group 307.svg"
            title="Interactive Smart Classes"
            details="Our Smart Classes are designed to make learning enjoyable, interactive and effective. With the latest technology and multimedia tools, students can grasp complex concepts with ease. Interactive multimedia content, real-life examples and simulation discussions bring the classroom to life."
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between">
          <Card
            imageSrc="/Group 308.svg"
            title="Separate Batches for ICSE & CBSE"
            details="At MidhaGuru, we understand that different education boards have distinct requirements. That’s why we offer seperate batches for ICSE and CBSE students, ensuring that each student receives the appropriate guidance & support."
          />
          <Card
            imageSrc="/Group 309.svg"
            title="Highly Qualified Mentors"
            details="At MidhaGuru, We are driven by a passion for education and a commitment to nurture young minds. We have a team of experienced teachers & educators who are dedicated in providing the best learning experience for students in classes 6 to 10."
          />
        </div>
      </div>
    </div>
  );
}
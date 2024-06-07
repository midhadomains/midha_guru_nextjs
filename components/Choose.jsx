import Image from "next/image";
import Card from "../components/Card.jsx";

export default function Choose() {
  return (
    <div className=" max-w-[1300px] mx-auto sm:min-w-[650px]  md:min-w-[800px] lg:px-0 p-6">
      <div className="mx-auto">
        <div className="flex flex-wrap sm:flex-nowrap justify-center ">
          <div className=" relative overflow-hidden border border-gray-300  rounded-md shadow-md w-[350px] h-[178px]  sm:w-[500px] sm:h-[170px] md:w-[350px] md:h-[200px] lg:w-[562px] lg:h-[280px] xl:w-[650px] xl:h-[300px]  mb-1  sm:m-4">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl ml-4 mt-2 font-bold">
              Why to <span className="text-[#6A1C1A]">choose us.</span>
            </h1>
            <p className=" text-[14px] sm:text-[12px] md:text-[14px] lg:text-[20px] mt-12  mg:mt-14 ml-2 px-2">
              Choose <b>Midha Guru</b> to tutor your children for personalized,{" "}
              <b>expert guidance that fosters academic excellence</b> and
              confidence.
            </p>
          </div>
          <Card
            imageSrc="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Why+to+Choose+Us/Why+to+choose+us+youtube.png"
            
            details=<iframe
            style={{ aspectRatio: "16/9", width: "100%", height: "93%", maxWidth: "650px", margin: "0 auto",}}            
              src="https://www.youtube.com/embed/1i7IQj8zmcw"
              title="Why join MidhaGURU in Ranchi ?"
              frameborder="0"
              className="mt-2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          />
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-center ">
          {/* <div className=" relative overflow-hidden border border-gray-300 font-bold rounded-md shadow-md  w-[350px] h-[80px]  sm:w-[500px] sm:h-[170px] md:w-[350px] md:h-[200px] lg:w-[562px] lg:h-[280px] xl:w-[650px] xl:h-[300px]  mb-1 flex justify-center items-center sm:m-4" >
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
              Why to <span className="text-[#6A1C1A]">choose us.</span>
            </h1>
          </div> */}
          <Card
            imageSrc="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Why+to+Choose+Us/Teaching_Visualization.png"
            title="Teaching by Visualization"
            details="One of the most powerful and successful strategy we use in teaching is Teaching by Visualisation. Our faculties help students understand abstract topics more clearly by putting them into visual representations like animations, interactive simulations, charts & diagrams."
          />

          <Card
            imageSrc="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Why+to+Choose+Us/Interactive_Smart_Classes.png"
            title="Interactive Smart Classes"
            details="Our Smart Classes are designed to make learning enjoyable, interactive and effective. With the latest technology and multimedia tools, students can grasp complex concepts with ease. Interactive multimedia content, real-life examples and simulation discussions bring the classroom to life."
          />
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-center ">
          <Card
            imageSrc="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Why+to+Choose+Us/Separate_Batches.png"
            title="Separate Batches for ICSE & CBSE"
            details="At MidhaGuru, we understand that different education boards have distinct requirements. That&apos;s why we offer seperate batches for ICSE and CBSE students, ensuring that each student receives the appropriate guidance & support."
          />
          <Card
            imageSrc="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Why+to+Choose+Us/Highly_Qualified_Mentors.png"
            title="Highly Qualified Mentors"
            details="At MidhaGuru, we are driven by a passion for education and a commitment to nurture young minds. We have a team of experienced teachers & educators who are dedicated in providing the best learning experience for students in classes 6 to 10."
          />
        </div>
      </div>
    </div>
  );
}

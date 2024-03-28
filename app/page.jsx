import Image from "next/image";
import Card from "../components/Card.jsx";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-4"> Cards in Next.js for MIdhaGuru</h1>
      <div className="grid gap-8">
        <div className="flex justify-center">
          <Card 
            imageSrc="/image1.jpg"
            title="Interactive Smart Classes"
            details="Our Smart Classes are designed to make learning enjoyable, interactive and effective. With the latest technology and multimedia tools, students can grasp complex concepts with ease. Interactive multimedia content, real-life examples and simulation discussions bring the classroom to life." 
          />
          <Card 
            imageSrc="/ICSE.svg"
            title="Separate Batches for ICSE & CBSE"
            details="At MidhaGuru, we understand that different education boards have distinct requirements. That’s why we offer seperate batches for ICSE and CBSE students, ensuring that each student receives the appropriate guidance & support." 
          />
        </div>
        
        <div className="flex justify-center">
        <div className=" relative overflow-hidden border border-gray-300 font-bold rounded-md shadow-md w-[562px] h-[280px] ml-4 flex justify-center items-center">
        <h1 className="text-5xl">Why to <span className="text-[#6A1C1A]">choose us.</span></h1>
        </div>
          <Card 
            imageSrc="/image4.jpg"
            title="Highly Qualified Mentors"
            details="At MidhaGuru, We are driven by a passion for education and a commitment to nurture young minds. We have a team of experienced teachers & educators who are dedicated in providing the best learning experience for students in classes 6 to 10." 
          />
        </div>
      </div>
    </div>
  );
}


// <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>




// <a
// href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// target="_blank"
// rel="noopener noreferrer"
// >
// <h2 className={`mb-3 text-2xl font-semibold`}>
//   Deploy{" "}
//   <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//     -&gt;
//   </span>
// </h2>
// <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//   Instantly deploy your Next.js site to a shareable URL with Vercel.
// </p>
//</a>
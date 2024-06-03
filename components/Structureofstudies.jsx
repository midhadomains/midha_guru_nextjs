import Image from "next/image";

export default function Structureofstudies() {
  return (
    <div>
      <div className="bg-[#F9F8F0] my-[30px]  pb-[30px]">
        <h1 className="text-center text-[24px] md:text-[32px] lg:text-[50px] font-bold py-[30px] sm:py-[50px] lg:py-[70px] text-center">
          <span className="text-[#BE4E1E]">Structure</span>{" "}
          <span className="text-[#6A1C1A]">of Studies</span>
        </h1>
        <Image 
          src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Structure+of+Studies/StructureofStudies.webp"
          alt="image"
          width={1500}
          height={400}
          className="mx-auto hidden lg:block max-w-[1400px] px-[50px] w-[100%]"
          quality={100}
        />
        <Image
          src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Structure+of+Studies/StructureofStudies2.webp"
          alt="image"
          width={600}
          height={1000}
          className="mx-auto hidden md:block lg:hidden max-w-[616px] px-[20px] w-[100%]"
          quality={100}

        />
        <Image
          src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Classroom+page/Structure+of+Studies/StructureofStudies3.webp"
          alt="image"
          width={400}
          height={850}
          className="mx-auto block md:hidden max-w-[400px] w-[85%]"
          quality={100}

        />
      </div>
    </div>
  );
}

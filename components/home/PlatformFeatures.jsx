import Image from "next/image"

export default function PlatformFeatures() {
  return (
    <div className="mt-[50px] md:mt-[100px]">
      <h1 className="text-[30px] sm:text-[40px] md:text-[50px]  font-bold text-center my-3 md:my-7">Our Platform <span className="text-[#9A391D]">Features</span></h1>
      <div className="md:flex flex-wrap justify-center max-w-[1300px] mx-auto ">
        <Card img='/lecture-video.svg' title='Lecture Videos' desc='"Lecture Videos" is one of the standout features of our platform, designed to enrich your learning experience. With a commitment to providing high-quality educational content, we offer a vast library of lecture videos led by experienced instructors. ' />
        <Card img='/mock-test.png' title='Topic wise tests' desc='Our platform offers a comprehensive assessment experience through topic-wise and full-length tests. These tests are meticulously designed to evaluate your knowledge and skills across various  subjects and domains. ' />
        <Card img='/question-bank.svg' title='Daily Practice Papers' desc='Daily Practice Papers offer you a steady and structured approach to learning. With new practice papers available for each topic , you can maintain a consistent study routine. These questions are updated based on the current syllabus and are a good mixture of easy, medium, and difficult questions. ' />
        <Card img='/Complete-study-material.png' title='Complete Study Material' desc=' "Lecture Videos" is one of the standout features of our platform, designed to enrich your learning experience. With a commitment to providing high-quality educational content, we offer a vast library of lecture videos led by experienced instructors.' />
        <Card img='/ief.svg' title='Expert Faculty' desc=" With our expert faculty, you're not just learning you're learning from the best. Their dedication to your success, their practical insights, and their commitment to your development ensure that you receive a world-class education. Our faculty's excellent teaching style ensures that complex concepts are presented in a clear and engaging manner " />
        <Card img='/doubt-solving-forum.svg' title='Doubt Solving' desc=' Our Doubt solving sessions offer a haven where no question is too trivial and no inquiry goes unanswered.You gain deeper insights, and enhance their understanding of various subjects here. We provide interactive discussions, where learners can pose specific questions or present challenging problems to our mentors.' />
      </div>
    </div>
  )
}
const Card = ({ img, title, desc }) => {
  return (
    <div className="flex md:flex-col justify-start   md:w-[320px] lg:w-[400px] w-[100%]  items-left  px-2 my-4 md:m-[15px]">
      <div className="w-[90px] sm:w-[170px] sm:h-[170px] flex flex-col justify-start md:justify-end mt-2 md:mt-0 flex-shrink-0">
        <Image src={img} alt="image" width={170} height={170} quality={100} />
      </div>
      <div className="ml-3 md:ml-0">
        <h1 className="my-2 md:my-5 text-[16px] md:text-[30px] font-bold text-[#6A1C1A]">{title}</h1>
        <p className=" text-[12px] sm:text-[15px] md:text-[18px] font-[400] pr-2 md:pr-0">{desc}</p>
      </div>
    </div>
  )
}
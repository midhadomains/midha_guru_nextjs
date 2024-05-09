import Image from "next/image";
import Link from "next/link";
export default function Reviewcard({ data }) {
  return (
    <div className="w-[300px] md:w-[350px] lg:w-[409px]  mx-auto border  shadow-xl rounded-xl">
      <Link href={data.link}>
      <Image src={data.images} alt="img" width={410} height={320} />
      <div className=" bg-white  rounded-xl p-5 h-[150px] lg:h-[190px] flex flex-col justify-between">
        <h2 className=" text-[14px] lg:text-[20px] font-bold tracking-wide">
          {data.titles}
        </h2>
        <div className="flex justify-between ">
          <h2 className=" text-[14px] lg:text-[16px] my-auto tracking-wide">
            {data.author}
          </h2>
          <h2 className=" text-[14px] lg:text-[16px] my-auto tracking-wide">
            {data.dates}
          </h2>
        </div>
      </div>
      </Link>
    </div>
  );
}

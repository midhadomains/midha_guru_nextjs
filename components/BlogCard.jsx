import React from 'react'
import Image from "next/image";
import Link from "next/link";

function BlogCard({ data }) {
  return (
    <div className="w-[300px] sm:w-[400px] md:w-[300px] xl:w-[360px] lg:w-[310px]  mx-auto   shadow-xl rounded-xl">
      <Link href={data.link}>
      <Image ClassName="rounded-xl" src={data.images} alt="img" width={410} height={320} />
      <div className=" bg-white  rounded-xl p-5 h-[130px] lg:h-[190px] flex flex-col justify-between">
        <h2 className=" text-[14px] lg:text-[20px] font-semibold tracking-wide">
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
  )
}

export default BlogCard
import React from "react";
import Image from "next/image";

function ReviewCarousel({ images, titles, videos, currentIndex }) {
  return (
    <div className=" max-w-[320px] transition-transform	duration-300 ">
      <div>
        <div style={{ borderRadius: "10px" }}>
          <embed
            title="false"
            showinfo="false"
            width="320"
            height="190"
            src={videos[currentIndex]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className=" bg-white flex justify-between py-4 ">
          <div className="my-auto py-2">
            <h2 className=" text-xl lg:text-2xl font-semibold  my-auto   tracking-wide">
              {titles[currentIndex]}
            </h2>
            <p className="mt-2 font-[500] text-[16px] lg:text-xl">
              Class 10 <span className="font-bold">ICSE</span>{" "}
            </p>
          </div>
          <div
            className="border rounded-full w-[80px] h-[80px] bg-cover  shadow-xl "
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;

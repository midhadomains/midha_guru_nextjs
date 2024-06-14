import React from "react";

function ReviewCarousel({ images, titles, videos, currentIndex }) {
  const getBoard = (title) => {
    if (title === "Ujjwal") {
      return "CBSE";
    }
    return "ICSE";
  };

  return (
    <div className="max-w-[300px]  transition-transform duration-300">
      <div>
        <div style={{ borderRadius: "10px" }}>
          <embed
            title="false"
            showinfo="false"
            width="320"
            height="180"
            src={videos[currentIndex]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="bg-white flex justify-between py-4">
          <div className="my-auto py-2">
            <h2 className="text-xl lg:text-2xl font-semibold my-auto tracking-wide">
              {titles[currentIndex]}
            </h2>
            <p className="mt-2 font-[500] text-[16px] lg:text-xl">
              Class 10 <span className="font-bold">{getBoard(titles[currentIndex])}</span>
            </p>
          </div>
          <div
            className="border rounded-full w-[80px] h-[80px] bg-cover shadow-xl"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCarousel;

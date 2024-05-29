import React from "react";

const ContinuousSlidingText = () => {
  return (
    <div className="overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="8">
        <h1 className="text-[19px]">
          🎉{" "}
          <span className="text-[#9A391D] text-[14px] mg:text-[20px] font-bold">
            {" "}
            Admission Open{" "}
          </span>
          <span className="text-[14px] mg:text-[20px]">for the coming </span>{" "}
          <span className="text-[#9A391D] text-[14px] mg:text-[20px] font-bold">
            2024-25
          </span>{" "}
          <span className="text-[14px] mg:text-[20px]">session 🎉</span>
        </h1>
      </marquee>
    </div>
  );
};

export default ContinuousSlidingText;

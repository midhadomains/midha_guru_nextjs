import React from 'react';

const ContinuousSlidingText = () => {
    return (
        <div className="overflow-hidden">
            <marquee behavior="scroll" direction="right" scrollamount="8" >
                <h1 className="text-[19px]">
                    🎉 <span className="text-[#9A391D] text-[20px] font-bold"> Admission Open </span> for the coming <span className="text-[#9A391D] text-[20px] font-bold">2024-25</span> session 🎉
                </h1>
            </marquee>
        </div>
    );
};

export default ContinuousSlidingText;

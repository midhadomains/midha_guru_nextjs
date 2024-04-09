import React from 'react';
import Image from 'next/image'

function ReviewCarousel({ images, titles, videos, currentIndex }){
    return (
        <div className=" max-w-[320px] transition-transform	duration-300 ">
            <div>
                <iframe
                    style={{borderRadius:"10px"}}
                    title="false"
                    showinfo="false"
                    width="320px"
                    height="190px"
                    src={videos[currentIndex]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className=' bg-white flex justify-between py-4 '>
                    <div className='my-auto py-2'>
                        <h2 className=" text-xl lg:text-2xl font-semibold  my-auto   tracking-wide">{titles[currentIndex]}</h2>
                        <p className='mt-2 font-[500] text-[16px] lg:text-xl'>Class 10  <span className='font-bold'>ICSE</span> </p>
                    </div>
                    <div className="border rounded-full w-[80px] h-[80px] bg-cover m shadow-xl "style={{ backgroundImage:`url(${images[currentIndex]})`}}></div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCarousel;

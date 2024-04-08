import React from 'react';

function ReviewCarousel({ images, titles, videos, currentIndex }) {
    return (
        <div className="mx-3 border-2 rounded-lg shadow-xl transition-transform	duration-300 hover:shadow-2xl flex-shrink-0 w-[400px] h-[100%]" >
            <div>
                <div className='h-[140px] bg-white m-4 b'>
                    <div className="border rounded-full w-[100px] h-[100px] bg-cover mx-auto shadow-xl" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
                    <h2 className=" text-xl lg:text-xl font-semibold	  text-center my-3 pl-2 uppercase tracking-wide	"><span className='border-[#6A1C1A] border-l-[3px] pl-2'>{titles[currentIndex]}</span></h2>
                </div>
                {/* <iframe
                    title="false"
                    showinfo="false"
                    width="300px"
                    height="170px"
                    src={videos[currentIndex]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe> */}
                <p>{videos}</p>
            </div>
        </div>
    );
}

export default ReviewCarousel;

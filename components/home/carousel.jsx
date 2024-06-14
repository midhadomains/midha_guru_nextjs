"use client";
import React, { useState, useEffect } from 'react';
import ReviewCarousel from './card.jsx';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);
    const [dotCount, setDotCount] = useState(3);
    const [dotColors, setDotColors] = useState(['bg-indigo-900', 'bg-gray-200']);

    const images = [
        "https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Youtube+carousel/Diksha.png",
        "https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Youtube+carousel/Nandini.png",
        "https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/HomePage/Youtube+carousel/ujjawal.webp"
    ];

    const titles = [
        "Deeksha",
        "Nandini",
        "Ujjwal"
    ];

    const videos = [
        "https://www.youtube.com/embed/wFBpOKlZIKE?si=vMJqA9N1dhDVdvJK",
        "https://www.youtube.com/embed/hgfLEgadyug?si=0olbz12AogWIjhwo",
        "https://www.youtube.com/embed/wGMmKyL_mjU?si=aqalcSt701JUVutp"
    ];

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 800) {
                setVisibleComponents(1);
                setDotCount(3);
            } else if (screenWidth < 1024) {
                setVisibleComponents(2);
                setDotCount(2);
            } else {
                setVisibleComponents(3);
                setDotCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + visibleComponents) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - visibleComponents + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index * visibleComponents);
    };

    const renderCarousels = () => {
        const carousels = [];
        for (let i = 0; i < visibleComponents; i++) {
            const index = (currentIndex + i) % images.length;
            carousels.push(
                <ReviewCarousel
                    key={index}
                    images={images}
                    titles={titles}
                    videos={videos}
                    currentIndex={index}
                />
            );
        }
        return carousels;
    };

    return (
        <div>
            <div>
                <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-bold text-center mb-[30px] md:mb-[50px] mx-auto px-5'>
                    Hear success stories from our <span className='text-[#9A391D]'>satisfied students.</span>
                </h1>
            </div>
            <div className="bg-custom-background bg-repeat flex items-center justify-around px-5 relative mx-auto mb-[50px] max-w-[1200px]">
                {renderCarousels()}
                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 left-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <span className="inline-flex justify-start items-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <span className="inline-flex justify-end items-center w-8 h-8 rounded-full sm:w-10 sm:h-10">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="hidden">Next</span>
                    </span>
                </button>
                <div className="flex justify-center gap-0 absolute -bottom-8 w-[350px]">
                    {[...Array(dotCount)].map((_, index) => (
                        <span
                            key={index}
                            className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-3 cursor-pointer ${
                                index === Math.floor(currentIndex / visibleComponents) ? dotColors[0] : dotColors[1]
                            }`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

"use client";
import React, { useState, useEffect } from 'react';
import Card from './card.jsx';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);
    const [dotCount, setDotCount] = useState(2);
    const [dotColors, setDotColors] = useState(['bg-indigo-900', 'bg-gray-200']);

    const images = [
        "https://files.midhafin.com/wp-content/uploads/Diksha.png",
        " https://files.midhafin.com/wp-content/uploads/Nandini.png"
    ];

    const titles = [
        "Deeksha",
        "Nandini"
    ];

    const videos = [
        "https://www.youtube.com/embed/wFBpOKlZIKE?si=vMJqA9N1dhDVdvJK",
        "https://www.youtube.com/embed/hgfLEgadyug?si=0olbz12AogWIjhwo"
    ];




    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 800) {
                setVisibleComponents(1);
                setDotCount(2);
            } else if (screenWidth < 1024) {
                setVisibleComponents(2);
                setDotCount(1);
            } else {
                setVisibleComponents(2);
                setDotCount(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const renderCarousels = () => {
        const carousels = [];
        const itemsPerCarousel = Math.ceil(images.length / visibleComponents);
        for (let i = 0; i < visibleComponents; i++) {
            const startIndex = i * itemsPerCarousel;
            const endIndex = Math.min(startIndex + itemsPerCarousel, images.length);
            carousels.push(
                <Card
                    key={i}
                    images={images.slice(startIndex, endIndex)}
                    titles={titles.slice(startIndex, endIndex)}
                    videos={videos.slice(startIndex, endIndex)}
                    currentIndex={currentIndex % itemsPerCarousel}
                />
            );
        }
        return carousels;
    };

    return (
        <div className=''>
            <div>
                <h1 className='text-[20px] sm:text-[30px] md:text-[45px] font-bold text-center mb-[30px] md:mb-[50px]  mx-auto px-5'>Hear success stories from our <span className='text-[#9A391D]'>satisfied students.</span></h1>
            </div>
            <div className="bg-custom-background bg-repeat flex items-between justify-around px-5  relative mx-auto mb-[50px] max-w-[900px]">
                {renderCarousels()}
                <button
                    type="button"
                    className="absolute -top-9 left-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={prevSlide}
                >
                    <span className="inline-flex justify-start items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-black"
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
                    className="absolute -top-9 right-0 z-30 justify-center items-center px-1 h-full cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={nextSlide}
                >
                    <span className="inline-flex justify-end items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 ">
                        <svg
                            className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-black"
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
                <div className="flex justify-center gap-0 absolute -bottom-8 w-[350px] ">
                    {[...Array(dotCount)].map((_, index) => (
                        <span
                            key={index}
                            className={`md:w-3 md:h-3 w-2 h-2 rounded-full mx-3 cursor-pointer ${dotCount === 2
                                ? index % 2 === currentIndex % 2 ? dotColors[0] : dotColors[1]
                                : dotCount === 3
                                    ? index % 3 === currentIndex % 3 ? dotColors[0] : dotColors[1]
                                    : index === currentIndex ? dotColors[0] : dotColors[1]
                                }`}

                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

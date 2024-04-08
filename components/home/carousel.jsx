


"use client";
import React, { useState, useEffect } from 'react';
import Card from './card.jsx';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleComponents, setVisibleComponents] = useState(1);
    const [dotCount, setDotCount] = useState(6);
    const [dotColors, setDotColors] = useState(['bg-indigo-900', 'bg-gray-200']);

    const images = [
        '/Student1.webp',
        '/Student2.webp',
        '/Student3.webp',
        '/Student4.webp',
        '/Student5.webp',
    ];

    const titles = [
        'Aryaman Singh',
        'Vansh Sardana',
        'Vedant Jasuja',
        ' Aarav Midha',
        'Tanmay Dutta'
    ];

    const videos = [
        "A wonderful opportunity is awaiting in the best coaching institute of Ranchi where one on one doubts are paid attention to.",
        " I have been a part of MidhaGuru class 9 ICSE batch since the start. My concepts had become very poor after 2 years of online studies during covid times.But joining MidhaGuru classes I got concept clarity for the topics. Daily Practice Problems are given for each chapter and home work is checked every single day. Teachers of Maths, Science and Computer are very good. Even if the batch size is small, still we get different teachers for each subject. Overall I'm very satisfied.",
        "I am Vedant Jasuja, a student from Midha GURU.I took admission in Midha GURU, hardly 3weeks ago and I am surprised that teachers are very friendly and I don't know from where I got the nerve but i can't really spend a day without studying maths and science and i use to hate maths earlier and isn't it curious but because of teachers support in the institute the change came in me." ,
        " I took admission in Midha Guru in June 2022 for class 9 tutions. I am from ICSE board and there is a separate batch for ICSE. In these 4 months, I have loved the way of teaching in these smart classrooms where we can see new things. The teachers are very supportive and environment is really competitive. Also, all classrooms are air conditioned for our comfort." ,
        "All the teachers here are highly qualified and helpful. Good guidance and proper environment for competitive exams. Best Coaching for Personality Development ... Midha Guru is supposed to be the best one in the city ."
    ];




    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) {
                setVisibleComponents(1);
                setDotCount(6);
            } else if (screenWidth < 1024) {
                setVisibleComponents(2);
                setDotCount(3);
            } else {
                setVisibleComponents(3);
                setDotCount(2);
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
        <div className="bg-custom-background bg-repeat flex items-center justify-around px-5  relative mx-auto mb-[50px]">
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

    );
}

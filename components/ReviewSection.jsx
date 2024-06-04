"use client"

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css'
import Reviewcard from "./Reviewcard";



function ReviewSection() {
    const [colorIndex, setColorIndex] =useState(0);
    const colors = ['#BE4E1E', '#C7C7C7'];

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 5500);

        return () => clearInterval(interval);
    }, []);
    const data = [
        {
            titles: 'Myths in biology & debunking it',
            author: "Prashanti Bharagava",
            dates: 'April 22, 2024',
            images: 'https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/Myths.png',
            link: "/blogs/myths-in-biology"
        },
        {
            titles: '5 Magic Foods which can keep students cool during summer',
            author: 'Prashanti Bharagava',
            dates: 'April 30, 2024',
            images: 'https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/fruitdrink.png',
            link: "/blogs/5-Magic-Foods"
        },
        {
            titles: 'The power of visualization in teaching',
            author: "Prashanti Bharagava",
            dates: 'April 30, 2024',
            images: 'https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/powerofvisualization.png',
            link: '/blogs/The-power-of-visualization'
        },
        {
            titles: 'Embracing New Horizons: The Transformative Power of Studying Abroad and Cultural Exchange',
            author: "Malobika Mukherjee",
            dates: "May 7, 2024",
            images: 'https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/Abroad.png',
            link: "/blogs/Embracing-New-Horizons"
        },
        {
            titles: 'Unraveling the Enigma: Exploring the Intricacies of Mind Psychology',
            author: "Sachin Semwal",
            dates: "May 10, 2024",
            images: 'https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/Mindpysc.png',
            link: "/blogs/Unravelling-the-Enigma"
        },
    ]
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    speed: 3000,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };
    return (
        <div className="mx-auto max-w-[1400px] mg:px-[50px] px-[25px] overflow-hidden mb-[80px]">
            
            <div className=' md:mb-[3rem] mb-[1.5rem] px-2 text-center'>
                <h2 className='lg:text-[3rem] md:text-[2.5rem]  sm:text-[2rem] text-[1.6rem] font-semibold inline-block'>Blogs</h2>
          </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {data.map((data, index) => (
                        <Reviewcard data={data} key={index} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ReviewSection;
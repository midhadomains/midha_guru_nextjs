import Head from "next/head";
import React from "react";
import BlogCard from "./BlogCard";

const data = [
  {
    titles: 'myths in biology & debunking it',
    author: "Prashanti Bharagava",
    dates: 'April 22, 2024',
    images: '/Myths.png',
    link: "/blogs/myths-in-biology"
  },
  {
    titles: '5 Magic Foods which can keep students cool during summer',
    author: 'Prashanti Bharagava',
    dates: 'April 30, 2024',
    images: '/fruitdrink.png',
    link: "/blogs/5-Magic-Foods"
  },
  {
    titles: 'The power of visualization in teaching',
    author: "Prashanti Bharagava",
    dates: 'April 30, 2024',
    images: '/powerofvisualization.png',
    link: '/blogs/The-power-of-visualization'
  },
  {
    titles: 'Embracing New Horizons: The Transformative Power of Studying Abroad and Cultural Exchange',
    author: "Malobika Mukherjee",
    dates: "May 7, 2024",
    images: '/Abroad.png',
    link: "/blogs/Embracing-New-Horizons"
  },
  {
    titles: 'Unraveling the Enigma: Exploring the Intricacies of Mind Psychology',
    author: "Sachin Semwal",
    dates: "May 10, 2024",
    images: '/Mindpysc.png',
    link: "/blogs/Unravelling-the-Enigma"
  },
];

function BlogsCards() {
  return (
    <div className="mx-auto xl:max-w-[1150px] lg:max-w-[1000px] md:max-w-[710px]   md:px-[25px] px-[10px] overflow-hidden mt-6 ">
      <div className="flex flex-wrap justify-start -mx-4">
        {data.map((data, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-8">
            <BlogCard className="my-[20px] justify-between mb-[10px]" data={data} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsCards;

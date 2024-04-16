"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from './Slider.module.css';
import Image from 'next/image';
import { ImNext2, ImPrevious2 } from "react-icons/im";

function Slider() {
    const listRef = useRef(null); // Reference to the <ul> element
    const [itemWidth, setItemWidth] = useState(0); // State to store the item width
    const [currentSlide, setCurrentSlide] = useState(0); // State to store the current slide index
    const noOfSlides=5;

  

    // Calculate and set item width when listRef changes
    useEffect(() => {
        const list = listRef.current;
        if (list && list.children.length > 0) {
            const firstItem = list.children[0]; // Accessing the first item within the list
            if (firstItem) {
                setItemWidth(firstItem.offsetWidth);
            } else {
                // Handle the case when the first item is not found
                console.error("Could not find the first item within the list.");
            }
        } 
        else {
            // Handle the case when 'list' is null or empty
            console.error("List element is not available or empty.");
        }
    }, [listRef]);

    // Function to handle button clicks
    const handleClick = (direction) => {
        const list = listRef.current; // Accessing the <ul> element via the ref

        // Based on the direction, scroll the list by the item width
        if (list) {
            if (direction === 'previous') {
                list.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            } else {
                list.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % noOfSlides); // Assuming there are 5 slides
        }, 2000); // 2000 milliseconds = 2 seconds

        return () => clearInterval(interval);
    }, []);


    // Scroll to the current slide when currentSlide changes
    useEffect(() => {
        const list = listRef.current;
        if (list) {
            list.scrollTo({ left: itemWidth * currentSlide, behavior: 'smooth' });
        }
    }, [currentSlide, itemWidth]);
    
    useEffect(() => {
        if (currentSlide === noOfSlides) {
            setCurrentSlide(0); // Reset to the first slide
        }
    }, [currentSlide, noOfSlides]);

    return (
        <>
            <div className={styles.list_wrapper}>
                <ul ref={listRef} className={styles.list}>
                    <li className={styles.item}><div className={styles.content}>  <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/Rectangle 50.png" alt="About us heroImg" priority /></div></li>
                    <li className={styles.item}><div className={styles.content}>  <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/Rectangle 51.png" alt="About us heroImg" priority /></div></li>
                    <li className={styles.item}><div className={styles.content}>  <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/Rectangle 52.png" alt="About us heroImg" priority /></div></li>
                    <li className={styles.item}><div className={styles.content}>  <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/Rectangle 50.png" alt="About us heroImg" priority /></div></li>
                    <li className={styles.item}><div className={styles.content}>  <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/Rectangle 51.png" alt="About us heroImg" priority /></div></li>
                </ul>
                <button onClick={() => handleClick('previous')} className={`${styles.button} ${styles.button_previous}`} type="button"><ImPrevious2 className='text-[#f0d97e] text-[35px]' /></button>
                <button onClick={() => handleClick('next')} className={`${styles.button} ${styles.button_next} `} type="button"><ImNext2 className='text-[#f4db78] text-[35px]' /></button >
            </div >
        </>
    );
}

export default Slider;

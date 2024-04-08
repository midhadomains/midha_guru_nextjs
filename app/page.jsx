
import React from 'react';
import BookDemoClass from '../components/book-demo-class';
import Image from "next/image";
import Card from "../components/Card.jsx";
import Choose from "@/components/Choose.jsx";
import About from "../components/About.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";

function page() {
  return (

    <>
    <Navbar/>
    <div className="">
    <About/>
    <Choose/>
    
    </div>
    <Footer/>
    </>
  );
}

export default page;
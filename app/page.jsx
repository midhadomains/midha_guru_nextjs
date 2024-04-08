import React from "react";
import BookDemoClass from "../components/book-demo-class";
import Image from "next/image";
import Card from "../components/Card.jsx";
import Choose from "@/components/Choose.jsx";
import About from "../components/About.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/hero.jsx";
import ContinuousSlidingText from "../components/ContinuousSlidingText.jsx";

function page() {
  return (
    <div className="sm:p-8">
      <About />
      <Choose />
      <BookDemoClass />
    </div>
  )
}
export default page;

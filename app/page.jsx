import Image from "next/image";
import Card from "../components/Card.jsx";
import Choose from "@/components/Choose.jsx";
import About from "../components/About.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";


export default function Home() {
  return (
    <>
    <Navbar/>
    <div>
    <About/>
    <Choose/>
    
    </div>
    <Footer/>
    </>
  );
}








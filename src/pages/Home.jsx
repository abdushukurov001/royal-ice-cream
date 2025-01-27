import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/About";
import ClassicFavorites from "../components/ClassicFavorites";
import Documents from "../components/Documents";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import video from "../assets/video/bg-vd.mp4";
import heroFallback from "../assets/hero.jpg"; 

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
      <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    poster={heroFallback}
  >
    <source src={video} type="video/mp4" />
    <img src={heroFallback} alt="Background" />
  </video>
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF] opacity-30"></div>
 

        <Navbar className="relative z-10" />
        <Hero className="relative z-0" />
      </div>
      
      <AboutUs />
      <ClassicFavorites />
      <Documents />
      <News />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

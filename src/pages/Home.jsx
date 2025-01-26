import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.jpg";
import AboutUs from "../components/About";
import ClassicFavorites from "../components/ClassicFavorites";
import Documents from "../components/Documents";

const Home = () => {
  return (
    <>
      <div 
        className="relative h-screen bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${hero})`,
        }}
      >

        <Navbar className="relative z-10" />
        <Hero className="relative z-0" />
      </div>
      <AboutUs/>
      <ClassicFavorites/>
      <Documents/>
    </>
  );
};

export default Home;

import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.jpg";

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
    </>
  );
};

export default Home;

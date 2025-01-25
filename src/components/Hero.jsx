import React from "react";
import hero from "../assets/hero1.jpg";
import heroLeft from "../assets/her0-left.svg";
import heroRight from "../assets/hero-right.svg";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-[#00000033] backdrop-blur-[3px]"></div>

      <img
        src={heroLeft}
        alt="Decoration Left"
        className="absolute left-0 bottom-[-40px] md:bottom-[-80px] h-[100px] md:h-[200px]"
      />

      <img
        src={heroRight}
        alt="Decoration Right"
        className="absolute right-0 bottom-[-40px] md:bottom-[-80px] h-[100px] md:h-[200px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-berkshire">
            Discover <span className="text-pink-400">Sweet </span> Delights!
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            The high quality of used materials ensure the reliability of our
            products
          </p>
          <button className="bg-pink-500 hover:bg-pink-400 text-white px-6 py-3 rounded-3xl text-lg font-semibold shadow-md transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

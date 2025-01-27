import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-pink-100 p-[50px] mt-35 mb-35 rounded-2xl flex items-center flex-wrap lg:justify-between gap-8 justify-center  max-w-6xl mx-auto scroll-mt-26" id='about'>
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold mb-4">About <span className="text-pink-500">us</span></h2>
        <p className="text-gray-500 md:text-lg leading-relaxed">
          Crafting a special craft sweet taste is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem ipsum passage, will go up through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem ipsum comes from
          sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".
        </p>
      </div>
      <div className="w-80 h-80 relative">
        <img 
          src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="Ice cream"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
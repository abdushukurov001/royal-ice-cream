import React from 'react';

const ImageSlider = () => {
  return (
   <div id='advantages' className='scroll-mt-28'>
    <h2 
    data-aos="fade-up" 
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" className="text-4xl font-extrabold text-pink-500 text-center mb-12">
    Почему выбирают нас?
  </h2>
    <div className="mb-12 flex justify-center">
        
      <img
        src="https://static.xabar.uz/crop/2/5/736_736_95_2559578676.jpg"
        alt="Static Image"
        className="w-full lg:max-w-5xl h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
    </div>
  );
};

export default ImageSlider;
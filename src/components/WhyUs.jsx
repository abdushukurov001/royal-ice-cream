import React from 'react';

import { FaTruck, FaChartLine, FaCertificate, FaThumbsUp } from 'react-icons/fa';
import ImageSlider from './Gallery';





const advantages = [
  { 
    icon: <FaTruck className="text-5xl text-blue-600" />, 
    title: "Быстрая доставка", 
    description: "Мы гарантируем оперативную доставку по всей стране." 
  },
  { 
    icon: <FaChartLine className="text-5xl text-green-600" />, 
    title: "Большой опыт работы", 
    description: "Многолетний опыт позволяет нам предоставлять лучший сервис." 
  },
  { 
    icon: <FaCertificate className="text-5xl text-yellow-600" />, 
    title: "Товар сертифицирован", 
    description: "Вся продукция проходит строгий контроль качества." 
  },
  { 
    icon: <FaThumbsUp className="text-5xl text-red-600" />, 
    title: "Высшее качество", 
    description: "Мы предоставляем только надежные и проверенные товары." 
  },
];

const AdvantagesSection = () => {
  return (
    <div className="py-25 bg-gray-50">
      <div className="max-w-5xl mx-auto px-2 sm:px-2 lg:px-1">
      <ImageSlider />
        <h2 
          data-aos="fade-up" 
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000" className="text-4xl font-extrabold text-pink-500 text-center mb-12">
          Почему выбирают нас?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, index) => (
            <div 
            data-aos="fade-up" 
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
              key={index} 
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-pink-100 to-pink-200 shadow-lg 
                         transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"
            >
              <div className="mb-4">
                {adv.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{adv.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default AdvantagesSection;
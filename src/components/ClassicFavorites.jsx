import React from 'react';
import gradient from '../assets/Gradient.jpg'
import leftImg from '../assets/classicLeft.svg'
import rightImg from '../assets/classicRight.svg'


const ClassicFavorites = () => {
  const products = [
    {
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie",
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie",
      image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie",
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
  ];

  return (
    <div className="py-45 relative h-screen  bg-white "   style={{ 
              backgroundImage: `url(${gradient})`,
            }}>

      <img
            src={leftImg}
            alt="Decoration Left"
            className="absolute left-0 bottom-[-40px]  md:top-[10px] h-[100px] md:h-[500px]"
          />
    
          <img
            src={rightImg}
            alt="Decoration Right"
            className="absolute right-0 bottom-[-40px] md:bottom-[35px] h-[100px] md:h-[500px]"
          />
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-2">Our <span className="text-pink-500">Classic</span> Favorites</h2>
        <p className="text-center text-gray-600 mb-12">Check out the top products that our customers love.</p>
        
        <div className="grid grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden mb-4 transform transition-transform group-hover:scale-105">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassicFavorites;
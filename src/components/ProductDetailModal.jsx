import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

 
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={handleOutsideClick} 
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl"> 
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-[#FF1493]">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6"> 
              <h3 className="text-2xl font-semibold">Mahsulot haqida batafsil:</h3> 
              <p className="text-gray-600 text-lg">{product.description}</p> 
              <div className="mt-6"> 
                <h4 className="text-xl font-medium">Qo'shimcha ma'lumotlar:</h4> 
                <ul className="list-disc list-inside text-gray-600 text-lg"> 
                  <li>Narxi: $10</li>
                  <li>Og'irligi: 500g</li>
                  <li>Ishlab chiqaruvchi: "..."</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
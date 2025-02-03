import React, { useState, useEffect } from 'react';
import ice1 from '../assets/ice1.png';
import Navbar from "./Navbar.jsx";
import { useTranslation } from "react-i18next";
import Footer from "./Footer.jsx";
import ProductModal from './ProductDetailModal.jsx'; // Modal komponentini import qilamiz

const products = [
  {
    id: 1,
    name: "Zarli",
    description: "  tg twrtgrtgr gtrgtretg trgre tgrg ertegretgtgrg  ",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsEqWI5dkAVDpJ7qm27MKhnQlZfWaJBP4fQ&s',
  },
  {
    id: 2,
    name: "Коровка из Кореновки",
    description: "Sample of brownie",
    image: 'https://zira.uz/wp-content/uploads/2018/07/morojenoe-korovka-2.jpg',
  },
  {
    id: 3,
    name: "Stakan",
    description: "Sample of brownie",
    image: 'https://zira.uz/wp-content/uploads/2018/07/morojenoe-korovka-2.jpg',
  },
  {
    id: 5,
    name: "Коровка из Кореновки",
    description: "Sample of brownie",
    image: 'https://zira.uz/wp-content/uploads/2018/03/icecream-2.jpg',
  },
];

const ProductDetail = () => {

    useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="breadcrumb flex">
            <a
              href="/"
              className="mb-6 me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              onClick={() => window.history.back()}
              className="mb-6 inline-flex cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-8 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
              Products catalog
            </a>
            <a
              onClick={() => window.history.back()}
              className="mb-6 inline-flex font-bold cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-8 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
              Products Info
            </a>
          </div>

          <div className="space-y-12">
            {[1].map((category) => (
              <section key={category}>
                <h2 className="text-3xl font-semibold mb-4">Chopli</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
                    >
                      <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          width={260}
                          height={200}
                          className="object-cover h-60"
                        />
                      </div>
                      <h3 className="text-md font-medium text-[#FF1493]">{product.name}</h3>
                      <p className="text-sm text-gray-500  line-clamp-2">{product.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
};

export default ProductDetail;
import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Documents = () => {
  const { t } = useTranslation();
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    {
      title: "Document 1",
      image: "https://blog.eversign.com/content/images/2018/12/pexels-photo-209137.jpeg",
      description: "This comprehensive document provides detailed information about our processes and procedures. It includes guidelines, best practices, and important references for users.",
      downloadLink: "#"
    },
    {
      title: "Document 2",
      image: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "An essential guide covering all aspects of our system. This document contains valuable insights and detailed explanations of key features.",
      downloadLink: "#"
    },
    {
      title: "Document 3",
      image: "https://blog.eversign.com/content/images/2018/12/pexels-photo-209137.jpeg",
      description: "A complete reference manual that outlines important policies and procedures. It serves as a crucial resource for understanding our framework.",
      downloadLink: "#"
    },
  ];

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedDoc(null);
    }
  };

  return (
    <>
      <div className="py-16 px-8 scroll-mt-16 md:mt-0 mt-12" id='documents'>
        <div className="max-w-6xl mx-auto">
          <h2 
            data-aos="fade-up" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="text-4xl font-bold text-pink-500 text-center mb-12"
          >
            {t('navbar.documents')}
          </h2>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
            {documents.map((doc, index) => (
              <div 
                onClick={() => setSelectedDoc(doc)}
                key={index}
                data-aos="fade-up" 
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="bg-pink-100 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div >
                  <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full md:h-[300px] h-[250px] object-cover rounded-lg mb-4"
                  />
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {selectedDoc && (
  <div 
    className="fixed inset-0 bg-gray-600/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    onClick={handleBackdropClick}
  >
    <div className="bg-white rounded-xl max-w-[1000px] w-full h-auto max-h-[95vh] overflow-auto shadow-2xl flex flex-col">

      <div className="flex justify-between items-center p-4 border-b-white">
        <h3 className="text-xl font-semibold">{selectedDoc.title}</h3>
        <button 
          onClick={() => setSelectedDoc(null)}
          className="p-1 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
        >
          <X size={24} />
        </button>
      </div>


      <div className="p-6 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="h-[250px] md:h-[350px]">
            <img
              src={selectedDoc.image}
              alt={selectedDoc.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-between h-full">
            <p className="text-gray-600 mb-6">{selectedDoc.description}</p>
            <button
              className="w-full bg-pink-500 cursor-pointer text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors"
            >
              <Download size={20} />
              <span>Download </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Documents;
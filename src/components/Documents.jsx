import React from 'react';

const Documents = () => {
  const documents = [
    {
      title: "Document 1",
      image: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Document 2",
      image: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Document 3",
      image: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-pink-500">DOCUMENTS</span>
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={doc.image} 
                alt={doc.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2">
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
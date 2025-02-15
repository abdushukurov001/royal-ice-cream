import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { useTranslation } from "react-i18next";
import client from '../service';

const Documents = () => {
  const { t, i18n } = useTranslation();

  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null); 

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const lang = i18n.language || i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/documents/`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setDocuments(response.data); 
        } else {
          console.warn("No documents found in API response");
          setDocuments([]);
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
        setDocuments([]);
      }
    };
    fetchDocuments();
  }, [i18n.resolvedLanguage]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedDocument(null);
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
                key={index}
                onClick={() => setSelectedDocument(doc)}
                data-aos="fade-up" 
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="bg-pink-100 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={doc.image}
                  alt={doc.title}
                  className="w-full md:h-[300px] h-[250px] object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-center">{doc.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedDocument && (
        <div 
          className="fixed inset-0 bg-gray-600/75 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-xl max-w-[1000px] w-full h-auto max-h-[95vh] overflow-auto shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedDocument.title}</h3>
              <button 
                onClick={() => setSelectedDocument(null)}
                className="p-1 hover:bg-gray-100 cursor-pointer rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                <div className="h-[250px] md:h-[350px]">
                  <img
                    src={selectedDocument.image}
                    alt={selectedDocument.title}
                    className="w-full shadow-lg h-full object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col justify-between h-full">
                  <p className="text-gray-600 mb-6">{selectedDocument.description}</p>
                  <a
                    href={selectedDocument.file} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-pink-500 cursor-pointer text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-600 transition-colors"
                  >
                    <Download size={20} />
                    <span>{t("download")}</span>
                  </a>
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

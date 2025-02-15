import {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import client from '../service';
import ImageSlider from './Gallery';







const AdvantagesSection = () => {
  const { i18n} = useTranslation();
  const [advertisements,setAdvertisements] = useState([])





      useEffect(() => {
        const fetchNews = async () => {
          try{
              const lang = i18n.language || i18n.resolvedLanguage;
              const response = await client.get(`/${lang}/advertisements/`);
              if (Array.isArray(response.data) && response.data.length > 0) {
                  setAdvertisements(response.data); 
              } else {
                  console.warn("No documents found in API response");
                  setAdvertisements([]);
                }
          }  catch (error) {
              console.error("Error fetching documents:", error);
              setAdvertisements([]);
            }
        }
        fetchNews()
      }, [i18n.resolvedLanguage])




  return (
    <div className="py-25 bg-gray-50">
      <div className="max-w-5xl mx-auto px-2 sm:px-2 lg:px-1">
      <ImageSlider />
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advertisements.map((adv, index) => (
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
              <img src={adv.icon} className="mb-4 h-16"/>
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
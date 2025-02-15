import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import client from "../service";


const ImageSlider = () => {
  const {  i18n } = useTranslation();
  const [wyUs, setWyUs] = useState("");



    useEffect(() => {
      const fetchDescription = async () => {
        try {
          const lang = i18n.language || i18n.resolvedLanguage;
          const response = await client.get(`/${lang}/why_us/`);
          if (Array.isArray(response.data) && response.data.length > 0) {
            setWyUs(response.data[0]);
          } else {
            console.warn("No main_description found in API response");
            setWyUs(""); 
          }
        } catch (error) {
          console.error("Error fetching about description:", error);
          setWyUs("");
        }
      };
  
      fetchDescription();
    }, [i18n.resolvedLanguage]);


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
        src={wyUs.image}
        alt="Static Image"
        className="w-full lg:max-w-5xl h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
    </div>
  );
};

export default ImageSlider;
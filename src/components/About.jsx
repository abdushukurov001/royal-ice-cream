import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import client from "../service";
import img from '../assets/about.svg';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const lang = i18n.language || i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/about/`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setDescription(response.data[0].main_description);
        } else {
          console.warn("No main_description found in API response");
          setDescription(""); 
        }
      } catch (error) {
        console.error("Error fetching about description:", error);
        setDescription("");
      }
    };

    fetchDescription();
  }, [i18n.resolvedLanguage]);

  return (
    <div 
      data-aos="fade-down" 
      className="bg-pink-100 p-[50px] mt-35 mb-35 rounded-2xl flex items-center flex-wrap lg:justify-between gap-8 justify-center max-w-6xl mx-auto scroll-mt-26" 
      id='about'
    >
      <div className="max-w-xl">
        <h2 
          data-aos="fade-down" 
          data-aos-easing="linear" 
          data-aos-delay="500"
          data-aos-duration="900" 
          className="text-4xl text-pink-500 font-bold mb-4"
        >
          {t('navbar.about')}
        </h2>
        <p 
          data-aos="fade-up" 
          data-aos-easing="linear" 
          data-aos-delay="900"
          data-aos-duration="1000" 
          className="text-gray-500 md:text-lg leading-relaxed mb-4"
        >
          {description}
        </p>
        <Link 
          data-aos="fade-up" 
          data-aos-easing="linear" 
          data-aos-delay="1200"
          data-aos-duration="1200" 
          className="cursor-pointer py-2 px-5 bg-white rounded text-pink-500 transition-colors delay-75 shadow hover:text-white hover:bg-pink-500"
          to="/about"
        >
          More details
        </Link>
      </div>
      <div className="w-80 h-80 relative">
        <img 
          data-aos="flip-right" 
          data-aos-easing="linear"
          data-aos-duration="900"
          src={img}
          alt="Ice cream"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;
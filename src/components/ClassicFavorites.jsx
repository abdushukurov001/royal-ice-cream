import Slider from "react-slick";
import gradient from "../assets/Gradient.jpg";
import leftImg from "../assets/classicLeft.svg";
import rightImg from "../assets/classicRight.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import client from "../service";
import { useEffect, useState } from "react";


const ClassicFavorites = () => {
      const {t,i18n} = useTranslation();
      const [category, setCategory] = useState([])
      const navigate = useNavigate();


       useEffect(() => {
            const fetchNews = async () => {
              try{
                  const lang = i18n.resolvedLanguage;
                  const response = await client.get(`/${lang}/categories/`);
                  console.log('qqq',response)
                  if (Array.isArray(response.data) && response.data.length > 0) {
                      setCategory(response.data); 
                  } else {
                      console.warn("No documents found in API response");
                      setCategory([]);
                    }
              }  catch (error) {
                  console.error("Error fetching documents:", error);
                  setCategory([]);
                }
            }
            fetchNews()
          }, [i18n.resolvedLanguage])

  
  const slickOptions = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div
      className="py-45 relative h-screen bg-white"
      style={{
        backgroundImage: `url(${gradient})`,
      }}
    >
      <img
        src={leftImg}
        alt="Decoration Left"
        className="absolute left-0 z-0 top-[10px] lg:top-[10px] h-[200px] lg:h-[400px]"
      />
      <img
        src={rightImg}
        alt="Decoration Right"
        className="absolute right-0 z-0 bottom-[40px] lg:bottom-[35px] h-[120px] lg:h-[500px]"
      />
      <div className="max-w-7xl relative mx-auto">
       <div className="z-20">
       <h2 data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50" className="text-4xl text-pink-500  font-bold text-center mb-2">
         {t('home.favourites')}
        </h2>
        <p data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50" className="text-center text-gray-600 mb-12">
             {t('home.top_products')}
        </p>
       </div>

        <Slider {...slickOptions}>
  {category.map((product, index) => (
    <div data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
 data-aos-duration="1700" data-aos-delay="50" key={index} className="px-2">
      <div className="group cursor-pointer h-[330px] bg-white p-3 rounded-[10px] z-10 overflow-hidden">
        <div className="rounded-lg overflow-hidden mb-4 transform transition-transform group-hover:scale-105">
          <img
            src={product.image}
            alt={product.title}
            className="mx-auto h-52 object-cover"
          />
        </div>
        <div className="h-full overflow-hidden relative">
          <h3 className="font-semibold line-clamp-2 text-center text-xl mb-2">{product.title}</h3>
          <div className="absolute inset-0 overflow-y-auto hidden-scrollbar">
            <p className="text-gray-600 text-md">
            </p>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

      </div>
     <div className="flex justify-center items-center  mt-15">
     <button
           onClick={() => navigate("/catalog")}
            className="mt-4 cursor-pointer text-2xl text-center text-pink-400 hover:text-pink-500"
          >
           {t('buttons.more_details')}...
          </button>
     </div>
    </div>
  );
};

export default ClassicFavorites;

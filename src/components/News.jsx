import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gradient from "../assets/Gradient.jpg";
import imgL from "../assets/classicL.svg";
import imgR from "../assets/classicR.svg";
import { useTranslation } from "react-i18next";
import client from "../service";
import Modal from "./Modal";

function News() {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const lang = i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/news/`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setNews(response.data);
        } else {
          console.warn("No news found in API response");
          setNews([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      }
    };
    fetchNews();
  }, [i18n.resolvedLanguage]);

  const openModal = (newsItem) => {
    setSelectedNews(newsItem);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  const slickOptions = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2, dots: true } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 4 } },
    ],
  };

  return (
    <section
      className="overflow-visible mb-40 relative h-screen text-black py-36 scroll-mt-5"
      id="news"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <img src={imgL} alt="Decoration Left" className="absolute left-0 md:top-[40px] top-[50px] h-[200px] md:h-[500px]" />
      <img src={imgR} alt="Decoration Right" className="absolute right-0 bottom-[80px] md:bottom-[80px] h-[250px]" />
      
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl z-40 font-bold text-pink-500">{t("navbar.news")}</h2>
        <h4 className="pt-5 text-lg z-40 text-gray-700">{t("home.top_news")}.</h4>
      </div>

      <div className="container mx-auto px-4">
        <Slider {...slickOptions} className="mx-auto">
          {news.map((item, key) => (
            <div key={key} className="px-2" onClick={() => openModal(item)}>
              <div className="relative md:h-[360px] h-[400px] bg-pink-100 cursor-pointer p-[15px] rounded-[20px]">
                <img src={item.image} alt={item.title} className=" h-48 mx-auto  object-cover" />
                <h5 className="text-[18px] font-bold md:line-clamp-1 line-clamp-2 text-black tracking-wide mt-[10px] text-center">{item.title}</h5>
                <p className="font-light lg:line-clamp-2 md:line-clamp-3 line-clamp-4 text-black indent-1">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal isOpen={selectedNews !== null} onClose={closeModal} newsItem={selectedNews} />
    </section>
  );
}

export default News;

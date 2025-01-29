import Slider from "react-slick";
import gradient from "../assets/Gradient.jpg";
import leftImg from "../assets/classicLeft.svg";
import rightImg from "../assets/classicRight.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";


const ClassicFavorites = () => {
      const {t} = useTranslation();
  
  const slickOptions = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const products = [
    {
      name: "Chocolate Brownie Sundae",
      description: "Rich chocolate ice cream with chunks of brownie",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Strawberry Delight",
      description: "Creamy strawberry ice cream with fresh strawberries",
      image:
        "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Vanilla Bean Bliss",
      description: "Classic vanilla ice cream with a hint of vanilla bean",
      image:
        "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Mint Chocolate Chip",
      description: "Refreshing mint ice cream with chocolate chips",
      image:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

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
        className="absolute left-0 z-0 top-[10px] lg:top-[10px] h-[200px] lg:h-[500px]"
      />
      <img
        src={rightImg}
        alt="Decoration Right"
        className="absolute right-0 z-0 bottom-[40px] lg:bottom-[35px] h-[120px] lg:h-[500px]"
      />
      <div className="max-w-6xl relative mx-auto">
       <div className="z-20">
       <h2 data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50" className="text-4xl text-pink-500  font-bold text-center mb-2">
         {t('home.favourites')}
        </h2>
        <p data-aos="fade-down" data-aos-duration="1500" data-aos-delay="50" className="text-center text-gray-600 mb-12">
          Check out the top products that our customers love.
        </p>
       </div>

        <Slider {...slickOptions}>
  {products.map((product, index) => (
    <div data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
 data-aos-duration="1700" data-aos-delay="50" key={index} className="px-2">
      <div className="group cursor-pointer h-[400px] bg-white p-3 rounded-[10px] z-10 overflow-hidden">
        <div className="rounded-lg overflow-hidden mb-4 transform transition-transform group-hover:scale-105">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-62 object-cover"
          />
        </div>
        <div className="h-full overflow-hidden relative">
          <h3 className="font-semibold line-clamp-2 text-xl mb-2">{product.name}</h3>
          <p className="text-gray-600 line-clamp-2 text-md mb-2">{product.description}</p>
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
    </div>
  );
};

export default ClassicFavorites;

import { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gradient from '../assets/Gradient.jpg'
import imgL from '../assets/classicL.svg'
import imgR from '../assets/classicR.svg'



function News() {
    const [news, setNews] = useState([
        {
            title: "News Title 1",
            description: "This is the description of news 1.",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "News Title 2",
            description: "This is the description of news 2.",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "News Title 3",
            description: "This is the description of news 3.",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "News Title 4",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eaque quis eius? Incidunt, nesciunt accusamus quas est quisquam repellat natus nam officia corrupti amet. This is the description of news 4.  ",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            title: "News Title 4",
            description: "This is the description of news 4.",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
    ]);

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
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
        ],
    };

    return (
        <div className="">
    <section
        className="overflow-visible mb-40 relative h-screen text-black py-36"
        id="news"
        style={{
            backgroundImage: `url(${gradient})`,
        }}
    >
        {/* Left Decoration */}
        <img
            src={imgL}
            alt="Decoration Left"
            className="absolute left-0   top-[40] h-[300px] md:h-[500px]"
            style={{ transform: "translateY(-50%)" }}
        />
        {/* Right Decoration */}
        <img
            src={imgR}
            alt="Decoration Right"
            className="absolute right-0 bottom-[80px] md:bottom-[80px] h-[300px] md:h-[500px]"
            style={{ transform: "translateY(50%)" }}
        />
        <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-bold">
                <span className="text-pink-500">News</span>
            </h2>
            <h4 className="pt-5 text-lg text-gray-700">Check out our top news</h4>
        </div>
        <div className="container mx-auto px-4">
            <Slider {...slickOptions} className="mx-auto">
                {news.map((item, key) => (
                    <div key={key} className="px-2">
                        <div className="border h-[430px] border-slate-400 border-none bg-pink-100 cursor-pointer backdrop-blur-[20px] p-[15px] rounded-[20px]">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-[20px]  w-full aspect-[29/17] object-cover"
                            />
                            <h5 className="text-[18px] text-black font-medium tracking-wide mt-[10px]">
                                {item.title}
                            </h5>
                            <p className="font-light text-black tracking-wide">
                                {item.description}
                            </p>
                            <p className="mt-[15px] text-black w-fit ml-auto font-light text-[14px] tracking-wide">
                                2 mins read
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </section>
</div>

    );
}

export default News;

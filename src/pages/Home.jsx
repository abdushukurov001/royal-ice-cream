import { useState, useEffect, useRef } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/About";
import ClassicFavorites from "../components/ClassicFavorites";
import Documents from "../components/Documents";
import News from "../components/News";
import Contact from "../components/Contact";
import AdvantagesSection from "../components/WhyUs";
import heroFallback from "../assets/hero.jpg";
import client from "../service/index"; 
import { useTranslation } from "react-i18next";


const Home = () => {
    const [videoUrl, setVideoUrl] = useState(null);
    const videoRef = useRef(null);
        const { i18n} = useTranslation();
    

    useEffect(() => {
        
        const fetchVideo = async () => {
            try {
                const lang = i18n.language || i18n.resolvedLanguage;
                const response = await client.get(`${lang}/hero/`);
                if (response.data && response.data.length > 0) {
                    setVideoUrl(response.data[0].video);
                } else {
                    console.warn("Video topilmadi yoki noto‘g‘ri formatda");
                }
            } catch (error) {
                console.error("Error fetching video:", error);
            }
        };

        fetchVideo();

        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.log("Video autoplay failed:", error);
                });
            }
        };

        document.addEventListener("touchstart", playVideo);
        return () => {
            document.removeEventListener("touchstart", playVideo);
        };
    }, [i18n.resolvedLanguage]);

    return (
        <>
            <div className="relative h-screen">
                {videoUrl ? (
                    <video
                        ref={videoRef}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        playsInline
                        loop
                        muted
                        preload="auto"
                        poster={heroFallback}
                    >
                        <source src={videoUrl} type="video/mp4"/>
                        <img src={heroFallback} alt="Background"/>
                    </video>
                ) : (
                    <img src={heroFallback} alt="Fallback Background" className="absolute top-0 left-0 w-full h-full object-cover"/>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF] opacity-30"></div>

                <Navbar className="relative z-10"/>
                <Hero className="relative z-0"/>
            </div>

            <AboutUs/>
            <ClassicFavorites/>
            <Documents />
            <AdvantagesSection/>
            <News/>
            <Contact/>
        </>
    );
};

export default Home;


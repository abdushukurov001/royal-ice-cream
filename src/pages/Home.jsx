import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/About";
import ClassicFavorites from "../components/ClassicFavorites";
import Documents from "../components/Documents";
import News from "../components/News";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import video from "../assets/video/bg-vd.mp4";
import heroFallback from "../assets/hero.jpg";
import {useEffect, useRef} from "react";
import AdvantagesSection from "../components/WhyUs";

const Home = () => {
    const videoRef = useRef(null);

    useEffect(() => {

        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
            videoRef.current.setAttribute('webkit-playsinline', 'true');

        }

        const playVideo = () => {
            if (videoRef.current) {
                videoRef.current.play().catch(error => {
                    console.log("Video autoplay failed:", error);
                });
            }
        };

        playVideo();
        document.addEventListener('touchstart', playVideo);

        return () => {
            document.removeEventListener('touchstart', playVideo);
        };
    }, []);
    return (
        <>
            <div className="relative h-screen">
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    playsInline
                    loop
                    muted
                    preload="auto"
                    defaultmuted="true"
                    webkitplaysinline="true"
                    poster={heroFallback}
                >
                    <source src={video} type="video/mp4"/>
                    <img src={heroFallback} alt="Background"/>
                </video>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF] opacity-30"></div>


                <Navbar className="relative z-10"/>
                <Hero className="relative z-0"/>
            </div>

            <AboutUs/>
            <ClassicFavorites/>
            <Documents />
            <AdvantagesSection/>
            <News/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;

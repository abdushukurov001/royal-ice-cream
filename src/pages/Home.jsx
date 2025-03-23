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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Reset video state when language changes
    setVideoLoaded(false);
    setVideoUrl(null);
    
    const fetchVideo = async () => {
      try {
        const lang = i18n.resolvedLanguage;
        const response = await client.get(`${lang}/hero/`);
        
        if (response.data && response.data.length > 0) {
          setVideoUrl(response.data[0].video);
        } else {
          console.warn("Video topilmadi yoki noto'g'ri formatda");
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    
    fetchVideo();
  }, [i18n.resolvedLanguage]);
  
  useEffect(() => {
    // iOS uchun maxsus sozlamalar
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && videoRef.current) {
      videoRef.current.setAttribute('playsinline', 'true');
      videoRef.current.setAttribute('muted', 'true');
    }
  
    // Separate useEffect for video playback logic
    if (!videoRef.current || !videoUrl) return;
  
    const playVideo = () => {
      if (videoRef.current && !videoLoaded) {
        videoRef.current.load(); // Ensure video is loaded before playing
  
        videoRef.current.play()
          .then(() => {
            setVideoLoaded(true);
          })
          .catch(error => {
            console.log("Video autoplay failed:", error);
            // Add fallback for browsers that block autoplay
            document.addEventListener("click", handleUserInteraction);
            document.addEventListener("touchstart", handleUserInteraction);
          });
      }
    };
    
    const handleUserInteraction = () => {
      if (videoRef.current && !videoLoaded) {
        videoRef.current.play()
          .then(() => {
            setVideoLoaded(true);
            // Remove event listeners after successful play
            document.removeEventListener("click", handleUserInteraction);
            document.removeEventListener("touchstart", handleUserInteraction);
          })
          .catch(error => {
            console.log("Video play failed after user interaction:", error);
          });
      }
    };
    
    // Try to play the video immediately for browsers that allow autoplay
    playVideo();
    
    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);
    
    return () => {
      // Clean up event listeners on unmount
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [videoUrl, videoLoaded]);
  
  const handleVideoLoaded = () => {
    // Additional handler for when video data has loaded
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setVideoLoaded(true))
        .catch(e => console.log("Autoplay prevented:", e));
    }
  };
  
  return (
    <>
      <div className="relative h-screen">
        {videoUrl ? (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            playsInline
            loop
            muted
            preload="metadata"
            poster={heroFallback}
            onLoadedData={handleVideoLoaded}
          >
            {/* Multiple source formats for better browser compatibility */}
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
            <source src={videoUrl.replace('.mp4', '.ogg')} type="video/ogg" />
            <img src={heroFallback} alt="Background" />
          </video>
        ) : (
          <img 
            src={heroFallback} 
            alt="Fallback Background" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FFFFFF] to-[#FFF] opacity-30"></div>
        
        <Navbar className="relative z-10" />
        <Hero className="relative z-0" />
      </div>
      
      <AboutUs />
      <ClassicFavorites />
      <Documents />
      <AdvantagesSection />
      <News />
      <Contact />
    </>
  );
};

export default Home;
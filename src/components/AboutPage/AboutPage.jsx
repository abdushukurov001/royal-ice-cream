
import {Play} from 'lucide-react';
import ice_back from "../../assets/ice-back.jpg"
import Navbar from "../Navbar.jsx";
import React, {useEffect, useState} from "react";
import Footer from "../Footer.jsx";
import { useTranslation } from 'react-i18next';
import client from '../../service/index.jsx';


const AboutPage = () => {

    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const {t, i18n} = useTranslation();
    const [about, setAbout] = useState('')
    const [advertisements, setAdvertisements] = useState([]);


     
    useEffect(() => {
        const fetchData = async () => {
            try {
                const lang = i18n.language || i18n.resolvedLanguage;
                const [aboutRes, adsRes] = await Promise.all([
                    client.get(`${lang}/about/`),
                    client.get(`${lang}/advertisements/`)
                ]);
    
                if (aboutRes.data && aboutRes.data.length > 0) {
                    setAbout({
                        title: aboutRes.data[0].title,
                        description: aboutRes.data[0].description,
                        video: aboutRes.data[0].video  
                    });
                }
    
                if (adsRes.data) {
                    setAdvertisements(adsRes.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [i18n.language]);
    


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(error => console.error("Video play error:", error));
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    
    

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
                <section className="relative h-[70vh] overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"/>
                    <img
                        src={ice_back}
                        alt="Ice cream production"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">{t('navbar.about')}</h1>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    {about.video ? (
    <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={about.video.poster} 
        playsInline
        preload="metadata"
        controls
        muted
        // onClick={handlePlayPause}
    >
        <source src={about.video} type="video/mp4" />
        <source src={about.video.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
    </video>
) : (
    <p>Loading...</p>
)}

                        {!isPlaying && (
                            <button
                                onClick={handlePlayPause}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                                aria-label="Play video"
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play size={40} className="text-pink-500 ml-2"/>
                                </div>
                            </button>
                        )}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div className="bg-white rounded-2xl p-12 shadow-xl">
                        <h2 className="text-4xl font-bold mb-8 text-center"> {about.title}</h2>
                        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                            {about.description}
                        </p>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">{t('about.ourValues')}</h2>
                    <div className="flex flex-wrap  justify-center gap-8">
                        {advertisements.map((ad, index) => (
                            <div key={index} className="bg-white w-72 p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                                {/* <img src={ad.icon} alt={ad.title} className="w-16 h-16 mb-4 mx-auto" /> */}
                                <h3 className="lg:text-2xl font-bold mb-4 text-pink-500">{ad.title}</h3>
                                <p className="text-gray-600">{ad.description}</p>
                            </div>
                        ))}
                    </div>
                </section>


            </div>

            <Footer/>
        </>
    );
};


export default AboutPage;
// qq

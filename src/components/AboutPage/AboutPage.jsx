import {Play, Pause} from 'lucide-react';
import ice_back from "../../assets/ice-back.jpg"
import Navbar from "../Navbar.jsx";
import React, {useEffect, useState} from "react";
import Footer from "../Footer.jsx";
import {useTranslation} from 'react-i18next';
import client from '../../service/index.jsx';

const AboutPage = () => {
    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [showControls, setShowControls] = React.useState(true);
    const {t, i18n} = useTranslation();
    const [about, setAbout] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const lang = i18n.language || i18n.resolvedLanguage;
                const response = await client.get(`${lang}/about/`);

                if (response.data && response.data.length > 0) {
                    console.log("Fetched video URL:", response.data);
                    setAbout({
                        title: response.data[0].title,
                        main_description: response.data[0].main_description,
                        description: response.data[0].description,
                        video: response.data[0].video
                    });
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
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    // Add event listeners for video
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => {
            setIsPlaying(false);
            setShowControls(true);
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('ended', handleEnded);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('ended', handleEnded);
        };
    }, []);

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
                            <h1 className="text-5xl md:text-7xl font-bold mb-2">{about.title}</h1>
                            <p className="text-xl md:text-2xl font-medium mb-4">{about.main_description}</p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div
                        className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(isPlaying ? false : true)}
                    >
                        {about.video ? (
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                poster={about.video.poster}
                                playsInline
                                preload="metadata"
                                controls={true}
                                muted={false}
                            >
                                <source src={about.video} type="video/mp4"/>
                                <source src={about.video.replace('.mp4', '.webm')} type="video/webm"/>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <p>Loading...</p>
                        )}

                        {showControls && (
                            <button
                                onClick={handlePlayPause}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                                aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                                <div
                                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform"
                                >
                                    {isPlaying ? (
                                        <Pause size={40} className="text-pink-500"/>
                                    ) : (
                                        <Play size={40} className="text-pink-500"/>
                                    )}
                                </div>
                            </button>
                        )}
                    </div>
                </section>

                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div className="bg-white rounded-2xl p-12 shadow-xl">
                        <h2 className="text-4xl font-bold mb-8 text-center"> {t('about.mission')}</h2>
                        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                            {about.description}
                        </p>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default AboutPage;
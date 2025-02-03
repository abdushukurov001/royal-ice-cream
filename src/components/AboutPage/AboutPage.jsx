import {Play} from 'lucide-react';
import ice_back from "../../assets/ice-back.jpg"
import Navbar from "../Navbar.jsx";
import React, {useEffect} from "react";
import Footer from "../Footer.jsx";

const data = {
    company: {
        name: "Royal ice cream",
        founded: 1985,
        description: "Crafting moments of joy through artisanal ice cream since 1985. Every scoop tells a story of passion, tradition, and the finest ingredients nature has to offer.",
        mission: "At Royal, our mission is to create joy, one scoop at a time. We are dedicated to crafting the finest, most delicious ice cream using only the highest quality, locally sourced ingredients. Our commitment to innovation, sustainability, and community drives us to deliver unforgettable flavors that bring people together. Whether it’s a classic favorite or a bold new creation, we strive to make every moment sweeter for our customers while giving back to the planet and the communities we serve. Because life is better with ice cream!",
        video: {
            url: 'https://download.samplelib.com/mp4/sample-5s.mp4',
            poster: "https://media.gettyimages.com/id/1500492437/video/hello-summer-ice-cream-2d-animation-4k.jpg?s=640x640&k=20&c=IiP2OHUnNt_sqCshIJWuo2BaV9Qz_X8mYatGDeDGhoI="
        },
        values: [{
            title: "Quality First", description: "We use only the finest, natural ingredients sourced from local farms."
        }, {
            title: "Sustainable Practice",
            description: "Our packaging is 100% recyclable and we're committed to reducing our carbon footprint."
        }, {
            title: "Community Focus",
            description: "We actively participate in local events and support community initiatives."
        }],
        stats: [{number: "150+", label: "Flavors Created"}, {number: "50+", label: "Local Partners"}, {
            number: "1M+", label: "Happy Customers"
        }]
    }
};

const AboutPage = () => {

    const videoRef = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
                {/* Hero Section */}
                <section className="relative h-[70vh] overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"/>
                    <img
                        src={ice_back}
                        alt="Ice cream production"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">{data.company.name}</h1>
                            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
                                {data.company.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster={data.company.video.poster}
                            playsInline
                            preload="metadata"
                            controls={isPlaying}
                            onClick={handlePlayPause}
                            // Mobile-friendly attributes
                            webkit-playsinline="true"
                            x-webkit-airplay="allow"
                            x5-video-player-type="h5"
                            x5-video-player-fullscreen="true"
                            x5-video-orientation="portraint"
                        >
                            {/* Multiple source formats for broader compatibility */}
                            <source src={`${data.company.video.url}.mp4`} type="video/mp4"/>
                            <source src={`${data.company.video.url}.webm`} type="video/webm"/>
                            {/* Fallback message */}
                            Your browser does not support the video tag.
                        </video>
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
                {/* Mission Section */}
                <section className="max-w-7xl mx-auto py-24 px-4">
                    <div className="bg-white rounded-2xl p-12 shadow-xl">
                        <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
                        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                            {data.company.mission}
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-pink-500 py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            {data.company.stats.map((stat, index) => (<div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-pink-100">{stat.label}</div>
                            </div>))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="max-w-7xl mx-auto py-24 px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {data.company.values.map((value, index) => (<div key={index}
                                                                         className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <h3 className="text-2xl font-bold mb-4 text-pink-500">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>))}
                    </div>
                </section>


            </div>

            <Footer/>
        </>
    );
};

export default AboutPage;
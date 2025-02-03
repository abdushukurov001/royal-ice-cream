import heroLeft from "../assets/her0-left.svg";
import heroRight from "../assets/hero-right.svg";

const Hero = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        } else {
            window.location.href = `/?scroll=${sectionId}`;
        }
    };

    return (
        <div className="relative z-0 h-full text-center">
            <img
                src={heroLeft}
                alt="Decoration Left"
                className="absolute left-0 bottom-[-40px] md:bottom-[-130px] h-[100px] md:h-[300px]"
            />

            <img
                src={heroRight}
                alt="Decoration Right"
                className="absolute right-0 bottom-[-40px] md:bottom-[-130px] h-[100px] md:h-[300px]"
            />

            <div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
                <div className="text-white">
                    <h1
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"

                        className="md:text-[100px] text-5xl drop-shadow-xl bekshire font-bold mb-4 font-berkshire">
                        Discover <span className="text-pink-400">Sweet </span> Delights!
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"

                        className="text-lg md:text-2xl mb-8">
                        The high quality of used materials ensure the reliability of our
                        products
                    </p>
                    <button data-aos="zoom-in" data-aos-delay="1000"
                            onClick={() => scrollToSection("contact")}
                            className="bg-pink-500 cursor-pointer hover:bg-pink-400 text-white px-6 py-3 rounded-3xl text-lg font-semibold shadow-md transition-colors">
                        Contact us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;


import {Link} from 'react-router-dom';
import img from '../assets/footer-bg.svg';
import logo from '../assets/logo.svg';
import ScrollTop from './TopScroll';
import {FaTelegramPlane, FaInstagram, FaFacebook} from "react-icons/fa";
import {useTranslation} from "react-i18next";


const Footer = () => {
    const {t} = useTranslation();


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        } else {
            window.location.href = `/?scroll=${sectionId}`;
        }
    };


    return (
        <footer className="bg-pink-500 relative text-white pb-4 pt-0">
            <div className="map">

                <div className="relative overflow-hidden">
                    <iframe
                        src="https://yandex.uz/map-widget/v1/org/royal_muz_morozhenoye_dlya_tebya/141009352422/?ll=69.259422%2C41.308594&z=16"
                        width="100%" height="450" frameBorder="1" allowFullScreen={true}
                        className="relative"></iframe>
                </div>


            </div>
            <img
                src={img}
                alt="Decoration Left"
                className="absolute left-0 z-0  bottom-[100px]  h-[200px] lg:h-[300px]"
            />
            <div className='container z-20 mb-0 md:block flex relative justify-center mx-auto'>
                <img src={logo}
                     className='md:h-[80px] z-10'
                     alt=""/>
            </div>
            <div className="container mx-auto flex justify-center items-center">


                <ul className="flex flex-col sm:flex-row  gap-4 md:gap-6 space-x-4">
                    <li><a onClick={() => window.location.href = "/"}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.home')}</a></li>
                    <li><a onClick={() => scrollToSection("about")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.about')}</a></li>
                    <Link to='/catalog' className="hover:text-gray-300">{t('navbar.catalog')}</Link>
                    <li><a onClick={() => scrollToSection("documents")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.documents')}</a></li>
                    <li><a onClick={() => scrollToSection("news")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.news')}</a></li>
                    <li><a onClick={() => scrollToSection("contact")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.contact')}</a></li>
                </ul>


            </div>
            <div className='bg-pink-400 h-[1px] mt-1 mb-2'></div>

            <div className="flex justify-center gap-8">
                <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane className="w-6 h-6 text-white hover:text-pink-700"/>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="w-6 h-6 text-white hover:text-pink-700"/>
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="w-6 h-6 text-white hover:text-pink-900"/>
                </a>
            </div>
            <ScrollTop/>
        </footer>
    );
};

export default Footer;
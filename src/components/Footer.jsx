import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import img from "../assets/classicLeft.svg";
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
<>
     <footer className="bg-pink-400 relative text-white pb-4 pt-4">
           
            <img
                src={img}
                alt="Decoration Left"
                className="absolute left-0 z-0  md:bottom-[130px]  h-[100px] lg:h-[100px]"
            />
          
            <div className="container px-3 md:px-6 mx-auto  flex justify-between items-center">
             <img src={logo}
                     className='h-[80px] z-10'
                     alt=""/>

                <ul className="flex z-1 flex-col justify-center flex-wrap sm:flex-row  gap-4 md:gap-6 space-x-4">
                    <li><a onClick={() => window.location.href = "/"}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.home')}</a></li>
                    <li><a onClick={() => scrollToSection("about")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.about')}</a></li>
                    <Link to='/catalog' className="hover:text-gray-300">{t('navbar.catalog')}</Link>
                    <li><a onClick={() => scrollToSection("documents")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.documents')}</a></li>
                    <li><a onClick={() => scrollToSection("advantages")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.advantages')}</a></li>
                    <li><a onClick={() => scrollToSection("news")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.news')}</a></li>
                    <li><a onClick={() => scrollToSection("contact")}
                           className="hover:text-gray-300 cursor-pointer">{t('navbar.contact')}</a></li>
                </ul>
                 <div/>

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
        </>
    );
};

export default Footer;
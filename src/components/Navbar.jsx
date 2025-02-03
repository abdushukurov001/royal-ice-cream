import { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import logoDark from '../assets/logoDark.svg'
import Language from './Language';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const {t} = useTranslation();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        } else {
            window.location.href = `/?scroll=${sectionId}`;
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full py-4 z-50 transition-all ${scrolling || window.location.pathname.startsWith('/catalog') || window.location.pathname.startsWith('/about') ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'}`}>
            <div className="container mx-auto flex items-center justify-between px-6">
                <div className="flex items-center">
                    {scrolling || window.location.pathname.startsWith('/catalog') || window.location.pathname.startsWith('/about') ? (
                        <a href='/'><img src={logoDark} alt="Logo" className="h-12" /></a>
                    ) : (
                        <a href='/'><img src={logo} alt="Logo" className="h-12" /></a>
                    )}
                </div>


                <button
                    className=" lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <div className="hidden lg:flex items-center gap-19">
                  <div className='flex gap-10'>
                  <a href="/" className="hover:text-pink-500 lg:text-lg  transition-colors">{t('navbar.home')}</a>
                    <a onClick={() => scrollToSection("about")}  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.about')}</a>
                    <Link to="/catalog"  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.catalog')}</Link>
                    <a onClick={() => scrollToSection("documents")}  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.documents')}</a>
                    <a onClick={() => scrollToSection("advantages")}  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.advantages')}</a>
                    <a onClick={() => scrollToSection("news")}  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.news')}</a>
                    <a onClick={() => scrollToSection("contact")}  className="hover:text-pink-500 cursor-pointer lg:text-lg transition-colors">{t('navbar.contact')}</a>
                  </div>

                    
                    <div className='flex gap-5'>
                      <Language />
                    </div>
                    

                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white text-black transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } lg:hidden z-50`}
            >
                <div className="flex flex-col items-center gap-4 py-8">
                    <a href="/" className="hover:text-pink-500 transition-colors">{t('navbar.home')}</a>
                    <a onClick={() => scrollToSection("about")} className="hover:text-pink-500 cursor-pointer transition-colors">{t('navbar.about')}</a>
                    <Link to="/catalog" className="hover:text-pink-500 cursor-pointer transition-colors">{t('navbar.catalog')}</Link>
                    <a onClick={() => scrollToSection("documents")} className="hover:text-pink-500 cursor-pointer transition-colors">{t('navbar.documents')}</a>
                    <a onClick={() => scrollToSection("news")} className="hover:text-pink-500 cursor-pointer transition-colors">{t('navbar.news')}</a>
                    <a onClick={() => scrollToSection("contact")} className="hover:text-pink-500 cursor-pointer transition-colors">{t('navbar.contact')}</a>

                    <Language />
                </div>
            </div>


            {isMenuOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-[1px] bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

        </nav>
    );
};

export default Navbar;

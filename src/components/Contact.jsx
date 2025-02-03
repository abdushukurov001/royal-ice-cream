import {Phone, Mail, MapPin} from 'lucide-react';
import bgimg from '../assets/bg-contact.svg'
import {useTranslation} from "react-i18next";


const ContactSection = () => {
    const {t} = useTranslation();

    return (
        <section id='contact'
                 className="container relative mb-16  rounded-3xl mx-auto  bg-pink-100 px-2 md:px-18 py-20 scroll-mt-26">
            <img
                src={bgimg}
                alt="Decoration Left"
                className="absolute left-0 bottom-[40px] md:bottom-[0px] h-[300px] md:h-[500px]"
            />
            <div className="flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
                <div data-aos="zoom-out-right" className="text-gray-700 text-center md:text-left space-y-4">
                    <h2 data-aos="fade-down" className="md:text-5xl text-3xl font-bold text-pink-600 mb-7">
                        {t('navbar.contact')}
                    </h2>
                    <p data-aos="flip-up" data-aos-duration="1200" data-aos-delay="150" className="flex text-start md:text-center items-center gap-3">
                        <Phone size={20} className="text-pink-600"/>
                        +999 (99) 123-45-67
                    </p>
                    <p data-aos="flip-up" data-aos-duration="1200" data-aos-delay="250" className="flex text-start md:text-center items-center gap-3">
                        <Mail size={20} className="text-pink-600"/>
                        royal@gmail.com
                    </p>
                    <p data-aos="flip-up" data-aos-duration="1200" data-aos-delay="350" className="flex text-start md:text-center items-center gap-3">
                        <MapPin size={20} className="text-pink-600"/>
                        Uzbekistan, Tashkent, Small ring road 32/1Block
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1500"
                     className="w-full z-10 md:w-1/2 h-[350px] p-4 rounded-lg shadow-xl">
                    <form id="contactForm" className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 p-2 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactSection;

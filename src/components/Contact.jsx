import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import bgimg from '../assets/bg-contact.svg'

const ContactSection = () => {
    return (
        <section id='contact' className="container relative mb-16 rounded-3xl mx-auto bg-pink-100 px-18 py-20">
            <img
                    src={bgimg}
                    alt="Decoration Left"
                    className="absolute left-0 bottom-[40px] md:bottom-[0px] h-[300px] md:h-[500px]"
                  />
            <div className="flex flex-col md:flex-row justify-between items-center px-6 space-y-6 md:space-y-0">
                <div className="text-gray-700 text-center md:text-left space-y-4">
                    <h2 className="text-3xl font-bold text-pink-600 mb-7">
                        Contact Us
                    </h2>
                    <p className="flex items-center gap-3">
                        <Phone size={20} className="text-pink-600" />
                         +999 (99) 123-45-67
                    </p>
                    <p className="flex items-center gap-3">
                        <Mail size={20} className="text-pink-600" />
                         royal@gmail.com
                    </p>
                    <p className="flex items-center gap-3">
                        <MapPin size={20} className="text-pink-600" />
                       Uzbekistan, Tashkent, Small ring road 32/1Block
                    </p>
                </div>
                <div className="w-full z-10 md:w-1/2 h-[450px]">
                    <iframe
                        src="https://maps.google.com/maps?q=tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full rounded-lg shadow-lg"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
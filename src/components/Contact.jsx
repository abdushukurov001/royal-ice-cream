import { Phone, Mail, MapPin } from 'lucide-react';
import bgimg from '../assets/bg-contact.svg'
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import client from '../service';


const ContactSection = () => {
    const [contact, setContact] = useState(null)
    const { t, i18n } = useTranslation();
    const lang =  i18n.resolvedLanguage;


    useEffect(() => {
        const fetchContact = async () => {
            try {
                const response = await client.get(`${lang}/contact/`);
                if (response.data && response.data.length > 0) {
                    setContact(response.data[0]);
                } else {
                    console.warn("Video topilmadi yoki noto‘g‘ri formatda");
                }
            } catch (error) {
                console.error("Error fetching video:", error);
            }
        };
        fetchContact()
    }, [i18n.resolvedLanguage])

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };

        try {
            if (data) {
                client.post(`${lang}/send/`, data)
                toast.success(t('succes'));
                event.target.reset()
            } else {
                toast.error(t('error'));
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            toast.error(t('error'));
        }

    };

    return (
        <>
            <div className='container mx-auto px-3 md:px-6'>

                <section id='contact' className="relative mb-16 rounded-3xl mx-auto bg-pink-100 px-2 md:px-18 py-20">
                    <img
                        src={bgimg}
                        alt="Background"
                        className="absolute left-0 bottom-[40px] md:bottom-[0px] h-[300px] md:h-[500px]"
                    />
                    <div className="flex flex-col lg:flex-row justify-between items-center px-6 space-y-6 lg:space-y-0">
                        <div className="text-gray-700 text-center md:text-left space-y-4">
                            <h2 className="md:text-5xl text-3xl font-bold text-pink-600 mb-7">
                                {t('navbar.contact')}
                            </h2>
                            {contact && (
                                <>
                                    <p className="flex text-start items-center gap-3">
                                        <Phone size={20} className="text-pink-600" />
                                        <a href={`tel:+${contact.phone.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '$1$2$3$4$5')}`} className="text-black">
                                            {contact.phone.replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '+$1 $2 $3-$4-$5')}
                                        </a>
                                    </p>
                                    <p className="flex text-start items-center gap-3">
                                        <Mail size={20} className="text-pink-600" />
                                        <a href={`mailto:${contact.email}`} className="text-black">
                                            {contact.email}
                                        </a>
                                    </p>
                                    <p className="flex text-start items-center gap-3">
                                        <MapPin size={20} className="text-pink-600" />
                                        <a href={`https://www.google.com/maps?q=${contact.address}`} target="_blank" rel="noopener noreferrer" className="text-black">
                                            {contact.address}
                                        </a>
                                    </p>

                                </>
                            )}
                        </div>
                        <div className="w-full lg:w-1/2 h-[350px] p-4 rounded-lg bg-white shadow-xl">
                            <form className="flex relative z-20 flex-col space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name"
                                        className="block text-sm font-medium text-gray-700">{t('contact.name')}</label>
                                    <input type="text" id="name" name="name" required
                                        className="mt-1 p-2 w-full rounded-md border border-pink-500" />
                                </div>
                                <div>
                                    <label htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700">{t('contact.phone')}</label>
                                    <input type="tel" id="phone" name="phone" required
                                        className="mt-1 p-2 w-full rounded-md border border-pink-500" />
                                </div>
                                <div>
                                    <label htmlFor="message"
                                        className="block text-sm font-medium text-gray-700">{t('contact.message')}</label>
                                    <textarea id="message" name="message" rows="2" required
                                        className="mt-1 p-2 w-full rounded-md border border-pink-500"></textarea>
                                </div>
                                <button type="submit"
                                    className="py-2 px-4 bg-pink-500 text-white rounded-md hover:bg-pink-400">
                                    {t('contact.send')}
                                </button>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </section>


            </div>

            <div className="relative">
                {/* Yuqori to‘lqin */}
                <div className="absolute top-[-14px] left-0 w-full overflow-hidden" style={{ height: "40px", zIndex: 1 }}>

                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M0, 0 
                   L1200, 10
                   L1200, 30
                   Q1125,40 1050,30 
                   Q975,0 900,30 
                   Q825,60 750,30 
                   Q675,0 600,30 
                   Q525,60 450,30 
                   Q375,0 300,30 
                   Q225,60 150,30 
                   Q75,0 0,30 
                   Z"
                            fill="pink"
                        />
                    </svg>
                </div>

                <div className="absolute top-[-19px] left-0 w-full overflow-hidden" style={{ height: "40px", zIndex: 1 }}>

                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M0, 0 
                   L1200, 10
                   L1200, 30
                   Q1125,40 1050,30 
                   Q975,0 900,30 
                   Q825,60 750,30 
                   Q675,0 600,30 
                   Q525,60 450,30 
                   Q375,0 300,30 
                   Q225,60 150,30 
                   Q75,0 0,30 
                   Z"
                            fill="white"
                        />
                    </svg>
                </div>

                {contact && contact.location && (
                    <div className="mt-10 w-full h-[400px] md:h-[400px] relative">
                        <iframe
                            src={contact.location}
                            className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-300"
                            allowFullScreen={true}
                            frameBorder="0"
                        />
                    </div>
                )}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "50px" }}>
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M0,0 
                   Q190,-1 400,50 
                   Q450,20 700,30 
                   Q750,40 900,35 
                   Q1050, 30 1200,40 
                   L1200,60 
                   L0,90 
                   Z"
                            fill="#DB2777"
                        />
                    </svg>
                </div>

                <div className="absolute bottom-[-7px] left-0 w-full overflow-hidden" style={{ height: "50px" }}>
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M0,0 
                   Q190,-1 400,50 
                   Q450,20 700,30 
                   Q750,40 900,35 
                   Q1050, 30 1200,40 
                   L1200,60 
                   L0,90 
                   Z"
                            fill="#fb64b6"
                        />
                    </svg>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactSection;

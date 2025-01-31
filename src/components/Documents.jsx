import {LucideDownload} from 'lucide-react';
import {useTranslation} from "react-i18next";


const Documents = () => {
    const {t} = useTranslation();

    const documents = [
        {
            title: "Document 1",
            image: "https://blog.eversign.com/content/images/2018/12/pexels-photo-209137.jpeg",
        },
        {
            title: "Document 2",
            image: "https://images.unsplash.com/photo-1568290747765-1b4a44724fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
            title: "Document 3",
            image: "https://blog.eversign.com/content/images/2018/12/pexels-photo-209137.jpeg",
        },
    ];

    return (
        <div className=" py-16 px-8 scroll-mt-16 md:mt-0 mt-12" id='documents'>
            <div className="max-w-6xl mx-auto">
                <h2 data-aos="fade-up" data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="text-4xl font-bold text-pink-500 text-center mb-12">
                    {t('navbar.documents')}
                </h2>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8">
                    {documents.map((doc, index) => (
                        <div key={index}
                             data-aos="fade-up" data-aos-offset="200"
                             data-aos-delay="100"
                             data-aos-duration="1000"
                             data-aos-easing="ease-in-out"
                             className="bg-pink-100 rounded-xl p-4 shadow-lg  hover:shadow-xl transition-shadow">
                            <img
                                src={doc.image}
                                alt={doc.title}
                                className="w-full md:h-[500px] h-[300px] object-cover rounded-lg mb-4"
                            />
                            <button
                                className="w-full  text-black py-2 rounded-lg cursor-pointer transition-colors flex items-center justify-center gap-2">
                                <LucideDownload/> <span>Download</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Documents;
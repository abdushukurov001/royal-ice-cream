import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import client from "../service/index.jsx";
import Loading from "./Loading.jsx";

export default function CatalogPage() {
    const {t, i18n} = useTranslation();
    const [catalogs, setCatalogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const fetchData = async () => {
            try {
                const lang = i18n.language || i18n.resolvedLanguage;

                const [catalogResponse, categoriesResponse] = await Promise.all([
                    client.get(`/${lang}/catalog/`),
                    client.get(`/${lang}/categories/`)
                ]);
                console.log(catalogResponse.data, 'catalog')
                console.log(categoriesResponse.data, 'category')

                setCatalogs(catalogResponse.data);
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <>
                <Navbar/>
                <Loading/>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <div className="container mx-auto mt-22 min-h-dvh px-4 z-20 relative py-8">
                <header className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-[#FF1493]">{t('navbar.catalog')}</h1>
                    <button className="bg-[#FF1493] text-white px-3 py-2 rounded-3xl hover:bg-[#FF1493]/90">
                        {t('catalog.download')}
                    </button>
                </header>

                <div className="space-y-12">
                    {catalogs.map((catalog) => (
                        <section key={catalog.id}>
                            <h2 className="text-3xl font-semibold mb-4">{catalog.title}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {categories
                                    .filter(category => category.catalog.id === catalog.id)
                                    .map((category) => (
                                        <Link to={`/catalog/${category.id}`} key={category.id}>
                                            <div
                                                className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                                                <div
                                                    className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                                                    <img
                                                        src={category.image}
                                                        alt={category.title}
                                                        width={260}
                                                        height={200}
                                                        className="object-cover h-60"
                                                    />
                                                </div>
                                                <h3 className="text-md font-medium text-[#FF1493]">{category.title}</h3>
                                                <p className="text-sm text-gray-500">{category.description}</p>
                                            </div>
                                        </Link>
                                    ))}

                            </div>

                        </section>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}
import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import client from "../service/index.jsx";
import ProductModal from "./ProductDetailModal.jsx";
import Loading from "./Loading.jsx";

export default function CatalogPage() {
    const {t, i18n} = useTranslation();


    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});

        const fetchData = async () => {
            try {
                const lang = i18n.language || i18n.resolvedLanguage;

                const [categoriesResponse, productsResponse] = await Promise.all([
                    client.get(`/${lang}/categories/`),
                    client.get(`/${lang}/products/`)
                ]);
                console.log(categoriesResponse.data, 'categroy')
                console.log(productsResponse.data, 'prods')

                setCategories(categoriesResponse.data);
                setProducts(productsResponse.data);
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
                        Download catalog
                    </button>
                </header>

                <div className="space-y-12">
                    {categories.map((category) => (
                        <section key={category.id}>
                            <h2 className="text-3xl font-semibold mb-4">{category.title}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {products
                                    .filter(product => product.category.id === category.id)
                                    .map((product) => (
                                        <div key={product.id} onClick={() => handleProductClick(product)}

                                             className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                                            <div
                                                className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    width={260}
                                                    height={200}
                                                    className="object-cover h-60"
                                                />
                                            </div>
                                            <h3 className="text-md font-medium text-[#FF1493]">{product.title}</h3>
                                            <p className="text-sm text-gray-500">{product.description}</p>
                                        </div>
                                    ))}
                                <Link to={`/catalog/${category.id}`}>
                                    <div
                                        className="bg-[#FFF5F7] flex items-center justify-center rounded-lg p-4 w-full h-full transition-transform hover:scale-105">
                                        <div
                                            className="mx-auto mb-3 rounded-lg overflow-hidden">
                                            <h1>see more</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            {selectedProduct && (
                                <ProductModal product={selectedProduct} onClose={closeModal}/>
                            )}
                        </section>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}
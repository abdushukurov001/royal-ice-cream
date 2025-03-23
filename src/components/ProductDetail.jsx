import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import ProductModal from "./ProductDetailModal.jsx";
import client from "../service/index.jsx";

const ProductDetail = () => {
  const { productId } = useParams();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedSubproduct, setSelectedSubproduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const lang = i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/products/`);

        if (response.data) {
          setProduct(response.data);
        } else {
          setError(t("catalog.not_found"));
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(t("catalog.not_found"));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, i18n.resolvedLanguage]);

  const handleSubproductClick = (subproduct) => {
    setSelectedSubproduct(subproduct);
  };

  const closeModal = () => {
    setSelectedSubproduct(null);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-8 mt-23 px-4 sm:px-6 lg:px-8">
          <div className="lg:max-w-7xl max-w-3xl mx-auto">
            <div className="breadcrumb flex mb-6">
              <Link to="/" className="me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                {t("navbar.home")}
              </Link>
              <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/catalog" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                {t("navbar.catalog")}
              </Link>
            </div>
            <p className="text-center py-8">{error}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 mt-23 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="breadcrumb flex mb-6">
            <Link to="/" className="me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              {t("navbar.home")}
            </Link>
            <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link to="/catalog" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              {t("navbar.catalog")}
            </Link>
            <svg className="w-5 h-5 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-bold text-[#FF1493]">{product.title}</span>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.subproducts?.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSubproductClick(sub)}
                    className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <img src={sub.image} alt={sub.title} className="w-full max-h-52 object-cover rounded-lg mb-3" />
                    <h3 className="text-md font-medium text-[#FF1493] line-clamp-2">{sub.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{sub.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      {selectedSubproduct && <ProductModal product={selectedSubproduct} onClose={closeModal} />}
    </>
  );
};

export default ProductDetail;



















// import {useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import Navbar from "./Navbar.jsx";
// import {useTranslation} from "react-i18next";
// import Footer from "./Footer.jsx";
// import ProductModal from './ProductDetailModal.jsx';
// import client from "../service/index.jsx";
// import Loading from "./Loading.jsx";

// const ProductDetail = () => {
//     const {category} = useParams(); // Get category from the URL
//     const {t, i18n} = useTranslation();
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [loading, setLoading] = useState(true)
//     // Fetch products based on the category
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const lang =  i18n.resolvedLanguage;

//                 const response = await client.get(`/${lang}/products?category=${category}`); // Fetch products from API
//                 setProducts(response.data); // Assuming the response contains an array of products
//                 setLoading(false)
//                 console.log(response.data)
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         };

//         if (category) {
//             fetchProducts();
//         }
//     }, [category, i18n.resolvedLanguage]);

//     const handleProductClick = (product) => {
//         setSelectedProduct(product);
//     };

//     const closeModal = () => {
//         setSelectedProduct(null);
//     };

//     useEffect(() => {
//         window.scrollTo({top: 0, behavior: 'smooth'});
//     }, []);

//     return (
//         <>
//             <Navbar/>
//             <div className="min-h-screen bg-gray-50 py-8 mt-23 px-4 sm:px-6 lg:px-8">
//                 <div className="max-w-7xl mx-auto">


//                     {loading ? <Loading/> :
//                         <>
//                             <div className="breadcrumb flex">
//                                 <a
//                                     href="/"
//                                     className="mb-6 me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
//                                 >
//                                      {t('navbar.home')}
//                                 </a>
//                                 <a
//                                     onClick={() => window.history.back()}
//                                     className="mb-6 inline-flex cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
//                                 >
//                                     <svg
//                                         className="w-8 h-5 mr-1"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M5 12h14m-7-7l7 7-7 7"
//                                         />
//                                     </svg>
//                                    {t('navbar.catalog')}
//                                 </a>
//                                 <a
//                                     onClick={() => window.history.back()}
//                                     className="mb-6 inline-flex font-bold cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
//                                 >
//                                     <svg
//                                         className="w-8 h-5 mr-1"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         viewBox="0 0 24 24"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M5 12h14m-7-7l7 7-7 7"
//                                         />
//                                     </svg>
//                                      {t('catalog.product_info')}
//                                 </a>
//                             </div>
//                             <div className="space-y-12">
//                                 <section>
//                                     {products.length > 0 && (
//                                         <h2 className="text-3xl font-semibold mb-4">{products[0].category.title}</h2>
//                                     )}
//                                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//                                         {products.length > 0 ? (
//                                             products.map((product) => (
//                                                 <div
//                                                     key={product.id}
//                                                     onClick={() => handleProductClick(product)}
//                                                     className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
//                                                 >
//                                                     <div
//                                                         className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
//                                                         <img
//                                                             src={product.image}
//                                                             alt={product.name}
//                                                             width={260}
//                                                             height={200}
//                                                             className="object-cover "
//                                                         />
//                                                     </div>
//                                                     <h3 className="text-md font-medium text-[#FF1493] line-clamp-2">{product.title}</h3>
//                                                     <p className="text-sm text-gray-500  line-clamp-2">{product.description}...</p>
//                                                 </div>
//                                             ))
//                                         ) : (
//                                             <p className='text-center'>{t('catalog.not_found')}</p>
//                                         )}
//                                     </div>
//                                 </section>
//                             </div>
//                         </>}
//                 </div>
//             </div>
//             <Footer/>

//             {selectedProduct && (
//                 <ProductModal product={selectedProduct} onClose={closeModal}/>
//             )}
//         </>
//     );
// };

// export default ProductDetail;

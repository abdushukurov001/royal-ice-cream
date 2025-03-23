import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import ProductModal from "./ProductDetailModal.jsx";

const ProductDetail = () => {
  const { productId } = useParams(); // URL dan productId ni olish
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [selectedSubproduct, setSelectedSubproduct] = useState(null)

  // Statik ma'lumotlar
  const categories = [
    {
      id: 1,
      title: "Muzqaymoq",
      products: [
        {
          id: 1,
          title: "Chopli",
          description: "Muzqaymoqning birinchi turi",
          image: "http://api.royal.uz/media/product/images/%D0%9F%D0%BB%D0%BE%D0%BC%D0%B1%D0%B8%D1%80_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9_150.png",
          subproducts: [
            {
              id: 101,
              title: "Chopli - Vanil",
              description: "Vanilli Chopli muzqaymoq",
              image: "http://api.royal.uz/media/product/images/%D0%9F%D0%BB%D0%BE%D0%BC%D0%B1%D0%B8%D1%80_1950_%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4_80.png",
            },
            {
              id: 102,
              title: "Chopli - Shokolad",
              description: "Shokoladli Chopli muzqaymoq",
              image: "http://api.royal.uz/media/product/images/%D0%9F%D0%BB%D0%BE%D0%BC%D0%B1%D0%B8%D1%80_%D0%B3%D0%BE%D1%81%D1%82%D0%BE%D1%80%D0%B3.png",
            },
          ],
        },
        {
          id: 2,
          title: "Kiloli",
          description: "Muzqaymoqning ikkinchi turi",
          image: "http://api.royal.uz/media/product/images/telegram-cloud-photo-size-2-5397862022726675174-x.jpg",
          subproducts: [
            {
              id: 201,
              title: "Kiloli - Vanil",
              description: "Vanilli Kiloli muzqaymoq",
              image: "http://api.royal.uz/media/product/images/telegram-cloud-document-2-5397862022270442989.jpg",
            },
            {
              id: 202,
              title: "Kiloli - Shokolad",
              description: "Shokoladli Kiloli muzqaymoq",
              image: "http://api.royal.uz/media/product/images/telegram-cloud-photo-size-2-5397862022726675174-x.jpg",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Sirok",
      products: [
        {
          id: 4,
          title: "Sirok",
          description: "Sirokning birinchi turi",
          image: "http://api.royal.uz/media/product/images/%D0%A1%D1%8B%D1%80%D0%BE%D0%BA__%D0%AF%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9.png",
          subproducts: [
            {
              id: 401,
              title: "Sirok - Apelsin",
              description: "Apelsinli Sirok",
              image: "http://api.royal.uz/media/product/images/orange_cheese.png",
            },
            {
              id: 402,
              title: "Sirok - Qulupnay",
              description: "Qulupnayli Sirok",
              image: "http://api.royal.uz/media/product/images/strawberry_cheese.png",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Yarim tayyor mahsulotlar",
      products: [
        {
          id: 6,
          title: "Chuchvara",
          description: "Yarim tayyor mahsulotning ikkinchi turi",
          image: "http://api.royal.uz/media/product/images/%D0%9F%D0%B5%D0%BB%D1%8C%D0%BC%D0%B5%D0%BD%D0%B8_300.png",
          subproducts: [
            {
              id: 601,
              title: "Chuchvara - Go'shtli",
              description: "Go'shtli Chuchvara",
              image: "http://api.royal.uz/media/product/images/meat_dumplings.png",
            },
            {
              id: 602,
              title: "Chuchvara - Sabzavotli",
              description: "Sabzavotli Chuchvara",
              image: "http://api.royal.uz/media/product/images/vegetable_dumplings.png",
            },
          ],
        },
        {
          id: 7,
          title: "Xamir",
          description: "Yarim tayyor mahsulotning ikkinchi turi",
          image: "http://api.royal.uz/media/product/images/%D0%A2%D0%B5%D1%81%D1%82%D0%BE_%D0%B4%D0%BB%D1%8F_%D0%B4%D0%B5%D1%81%D0%B5%D1%80%D1%82%D0%BE%D0%B2.png",
          subproducts: [
            {
              id: 701,
              title: "Xamir - Tuxumli",
              description: "Tuxumli Xamir",
              image: "http://api.royal.uz/media/product/images/egg_dough.png",
            },
            {
              id: 702,
              title: "Xamir - Sutsiz",
              description: "Sutsiz Xamir",
              image: "http://api.royal.uz/media/product/images/milkless_dough.png",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Barcha mahsulotlarni qidirish
    let foundProduct = null;
    for (const category of categories) {
      foundProduct = category.products.find((p) => p.id === parseInt(productId));
      if (foundProduct) break;
    }

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setProduct(null);
    }

    setLoading(false);
  }, [productId]);

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

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-8 mt-23 px-4 sm:px-6 lg:px-8">
       <div className="lg:max-w-7xl max-w-3xl mx-auto">
       <div className="breadcrumb  flex mb-6">
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

          </div>

          <div className="max-w-7xl mx-auto">
            <p className="text-center py-8">{t("catalog.not_found")}</p>
          </div>
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
                {product.subproducts.map((sub) => (
                  <div key={sub.id}  onClick={() => handleSubproductClick(sub)} className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer">
                    <img src={sub.image} alt={sub.title} className="w-full max-h-48 object-cover rounded-lg mb-3" />
                    <h3 className="text-md font-medium text-[#FF1493]">{sub.title}</h3>
                    <p className="text-sm text-gray-500">{sub.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      {selectedSubproduct && (
        <ProductModal product={selectedSubproduct} onClose={closeModal} />
      )}
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

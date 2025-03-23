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
        const arr = []

        if (response.data) {
          console.log(response.data[0])
          for (const element of response.data) {
            if (element.category["id"] == Number(productId)) {
              arr.push(element)
            }
            setProduct(arr)
          }
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

  if (error || !product ||  product.length === 0) {
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
            <p className="text-center py-8 text-black font-bold">{t("catalog.not_found")}</p>
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
          <div className="breadcrumb flex flex-wrap">
            <a
              href="/"
              className="mb-6 me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              {t('navbar.home')}
            </a>
            <a
              onClick={() => window.history.back()}
              className="mb-6 inline-flex cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-8 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
              {t('navbar.catalog')}
            </a>
            <a
              onClick={() => window.history.back()}
              className="mb-6 inline-flex font-bold cursor-pointer items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-8 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
              {t('catalog.product_info')}
            </a>
               
          </div>

          <div className="space-y-12">
            <section>
            {product.length > 0 && (
                                        <h2 className="text-3xl font-semibold mb-6">{product[0].category.title}</h2>
                                    )}
              <h2 className="text-3xl font-semibold mb-6">{product.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => handleSubproductClick(sub)}
                    className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <img src={sub.image} alt={sub.title} className="w-full md:h-[200px] object-cover rounded-lg mb-3" />
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
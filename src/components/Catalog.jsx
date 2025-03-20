import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import client from "../service/index.jsx";
import ProductModal from "./ProductDetailModal.jsx";
import Loading from "./Loading.jsx";

export default function CatalogPage() {
  const { t, i18n } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [documentData, setDocumentData] = useState(null); 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };


  const fetchDocument = async () => {
    try {
      const lang = i18n.language || i18n.resolvedLanguage;
      const response = await client.get(`/${lang}/categories/document/`);
      console.log(response.data)
      setDocumentData(response.data[0]); 
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };


  const handleDownload = () => {
    if (documentData) {
      alert(documentData.file)
      const link = document.createElement("a");
      link.href = documentData.file; 
      link.download = documentData.name || "document"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No document data available");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        const lang = i18n.language || i18n.resolvedLanguage;

        const [categoriesResponse, productsResponse] = await Promise.all([
          client.get(`/${lang}/categories/`),
          client.get(`/${lang}/products/`),
        ]);

        const categoryOrder = {
          "Ice cream": 1, "Мороженое": 1, "Muzqaymoq": 1,
          "Glazed curd snack": 2, "Сырок": 2, "Sirok": 2,
          "Semi-finished products": 3, "Полуфабрикаты": 3, "Yarim tayyor mahsulotlar": 3,
          "Dumplings": 4, "Пельмени": 4, "Chuchvara": 4,
          "Sunflower seeds": 5, "Семечки": 5, "Pista": 5,
        };

        const sortedCategories = categoriesResponse.data
          .filter(category => category?.title)
          .sort((a, b) => {
            const orderA = categoryOrder[a.title] ?? 999;
            const orderB = categoryOrder[b.title] ?? 999;
            return orderA - orderB;
          });

        setCategories(sortedCategories);
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    fetchDocument(); 
  }, [i18n.language]);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-22 min-h-dvh px-4 z-20 relative py-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#FF1493]">{t("navbar.catalog")}</h1>
          <button
            className="bg-[#FF1493] cursor-pointer text-white px-3 py-2 rounded-3xl hover:bg-[#FF1493]/90"
            onClick={handleDownload} 
          >
            {t("catalog.download")}
          </button>
        </header>

        <div className="space-y-12">
          {categories.map((category) => {
            const categoryProducts = products.filter((product) => product.category.id === category.id);
            const visibleProducts = categoryProducts.slice(0, 5); // Har bir kategoriyadan 5 ta mahsulot chiqaramiz

            return (
              <section key={category.id} className="space-y-6">
                <h2 className="text-3xl font-semibold">{category.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {visibleProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105"
                    >
                      <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          width={260}
                          height={200}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-md font-medium text-[#FF1493] line-clamp-2">{product.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{product.description}...</p>
                    </div>
                  ))}

                  {categoryProducts.length > 5 && (
                    <Link to={`/catalog/${category.id}`}>
                      <div className="bg-[#FFF5F7] flex items-center justify-center rounded-lg p-4 w-full h-full transition-transform hover:scale-105">
                        <h1 className="text-[#FF1493] font-semibold">{t("catalog.see_more")}</h1>
                      </div>
                    </Link>
                  )}
                </div>

                {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
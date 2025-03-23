import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import client from '../service';

export default function CatalogPage() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);

  const fetchDocument = async () => {
    try {
      const lang = i18n.resolvedLanguage;
      const response = await client.get(`/${lang}/categories/document/`);
      setDocumentData(response.data[0]);
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const lang = i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/categories/`);

        if (Array.isArray(response.data) && response.data.length > 0) {
          const groupedCategories = {};

          response.data.forEach((product) => {
            if (product.catalog) {
              const categoryId = product.catalog.id;
              const categoryTitle = product.catalog.title;

              if (!groupedCategories[categoryId]) {
                groupedCategories[categoryId] = {
                  id: categoryId,
                  title: categoryTitle,
                  products: [],
                };
              }

              groupedCategories[categoryId].products.push(product);
            }
          });

          setCategories(Object.values(groupedCategories));
        } else {
          console.warn("No categories found in API response");
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchDocument();
  }, [i18n.resolvedLanguage]);

  const handleDownload = () => {
    if (documentData) {
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
  }, []);

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
          {categories.map((category) => (
            <section key={category.id} className="space-y-6">
              <h2 className="text-3xl font-semibold">{category.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.products.length > 0 ? (
                  category.products.map((product) => (
                    <Link key={product.id} to={`/catalog/${category.id}/${product.id}`}>
                      <div className="bg-[#FFF5F7] p-4 rounded-lg hover:shadow-md transition-all">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-40 object-cover rounded-lg mb-3"
                        />
                        <h3 className="text-lg font-bold text-center text-[#FF1493] line-clamp-2">
                          {product.title}
                        </h3>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">{t("catalog.no_products")}</p>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
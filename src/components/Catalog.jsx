import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import client from "../service";

export default function CatalogPage() {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [documentData, setDocumentData] = useState(null);

  const categoryMapping = [
    { uz: "Muzqaymoq", ru: "Мороженое", en: "Ice cream", order: 1 },
    { uz: "Sirok", ru: "Сырок", en: "Glazed curd snack", order: 2 },
    { uz: "Yarim tayyor mahsulotlar", ru: "Полуфабрикаты", en: "Semi-finished products", order: 3 },
    { uz: "Quyiltirilgan sut", ru: "Сгущенное молоко", en: "Condensed milk", order: 4 },
    { uz: "Pista", ru: "Семечки", en: "Sunflower seeds", order: 5 },
  ];

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

              const matchedCategory = categoryMapping.find(
                (cat) =>
                  cat.ru === categoryTitle ||  cat.uz === categoryTitle ||  cat.en === categoryTitle
              );

              const baseCategory = matchedCategory ? matchedCategory.uz : categoryTitle;

              if (!groupedCategories[baseCategory]) {
                groupedCategories[baseCategory] = {
                  id: categoryId,
                  title: matchedCategory ? matchedCategory[lang] || matchedCategory.uz : categoryTitle, 
                  products: [],
                  order: matchedCategory ? matchedCategory.order : 99, 
                };
              }

              groupedCategories[baseCategory].products.push(product);
            }
          });

          const sortedCategories = Object.values(groupedCategories).sort(
            (a, b) => a.order - b.order
          );

          setCategories(sortedCategories);
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
          <h1 className="md:text-3xl text-xl font-bold text-[#FF1493]">{t("navbar.catalog")}</h1>
          <button
            className="bg-[#FF1493] cursor-pointer text-white md:px-3 px-2 py-2 rounded-3xl hover:bg-[#FF1493]/90"
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
                      <div className="bg-[#FFF5F7]  p-4 rounded-lg hover:shadow-md transition-all">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full md:h-48  object-cover rounded-lg mb-3"
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
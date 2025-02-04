import ice1 from '../assets/ice1.png'
import ice2 from '../assets/ice2.png'
import ice3 from '../assets/ice3.png'
import pista from "../assets/pista.png";
import ice4 from '../assets/ice4.png'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";


const products = [
  {
    id: 1,
    name: "Chopli",
    description: "Sample of brownie",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsEqWI5dkAVDpJ7qm27MKhnQlZfWaJBP4fQ&s',
  },
  {
    id: 2,
    name: "Kiloli",
    description: "Sample of brownie",
    image: 'https://zira.uz/wp-content/uploads/2018/07/morojenoe-korovka-2.jpg',
  },
  {
    id: 3,
    name: "Stakan",
    description: "Sample of brownie",
    image: ice4,
  },
  {
    id: 5,
    name: "Sirok",
    description: "Sample of brownie",
    image: 'https://dostavo4ka.uz/upload-file/2021/05/05/1770/750x750-11af9acf-2c8b-4af7-afcc-2e7d5f2c41d2.jpg',
  },
  
]


const products1 = [
  {
    id: 1,
    name: "Chuchvara",
    description: "Sample of brownie",
    image: "https://zira.uz/wp-content/uploads/2018/01/chuchvara-15.jpg",
  },
  {
    id: 2,
    name: "Mясная продукция",
    description: "Sample of brownie",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfichhUAQF4emfpOcNs4mnaz3IWWc1xie4Ag&s",
  },

];

const products2 = [
  {
    id: 1,
    name: "Сгущенное молоко",
    description: "Sample of brownie",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6K2H8fhJdPOulOX3kw3zTM4ZEoNTXSwZSg&s",
  },


];

const products3 = [
  {
    id: 1,
    name: "Семечки",
    description: "Sample of brownie",
    image: pista,
  },

];
  

export default function CatalogPage() {
        const {t} = useTranslation();
    
        window.scrollTo({ top: 0, behavior: 'smooth' });



  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-22 px-4 z-20 relative py-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#FF1493]">{t('navbar.catalog')}</h1>
        <button className="bg-[#FF1493] text-white px-3 py-2 rounded-3xl hover:bg-[#FF1493]/90">Download catalog</button>
      </header>

      <div className="space-y-12">
        {[1].map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold mb-4">{t('catalog.iceCream')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products.map((product) => (
                <Link to={`/catalog/${product.id}`} key={product.id}>
                  <div className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                    <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={200}
                        className="object-cover h-60"
                      />
                    </div>
                    <h3 className="text-md font-medium text-[#FF1493]">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="space-y-12 mt-7">
        {[1].map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold mb-4">{t('catalog.semiFinished')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products1.map((product) => (
                <Link to={`/catalog/${product.id}`} key={product.id}>
                  <div className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                    <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={200}
                        className="object-cover h-60"
                      />
                    </div>
                    <h3 className="text-md font-medium text-[#FF1493]">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="space-y-12 mt-7">
        {[1].map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold mb-4">Сгущенное молоко</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products2.map((product) => (
                <Link to={`/catalog/${product.id}`} key={product.id}>
                  <div className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                    <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={200}
                        className="object-cover h-60"
                      />
                    </div>
                    <h3 className="text-md font-medium line-clamp-2 text-[#FF1493]">{product.name}</h3>
                    <p className="text-sm line-clamp-2 text-gray-500">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="space-y-12 mt-7">
        {[1].map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold mb-4">Семечки</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {products3.map((product) => (
                <Link to={`/catalog/${product.id}`} key={product.id}>
                  <div className="bg-[#FFF5F7] rounded-lg p-4 transition-transform hover:scale-105">
                    <div className="aspect-square mx-auto relative mb-3 rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        width={260}
                        height={200}
                        className="object-cover h-60"
                      />
                    </div>
                    <h3 className="text-md font-medium line-clamp-2 text-[#FF1493]">{product.name}</h3>
                    <p className="text-sm line-clamp-2 text-gray-500">{product.description}</p>
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
  )
}


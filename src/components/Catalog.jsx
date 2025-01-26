import ice1 from '../assets/ice1.png'
import ice2 from '../assets/ice2.png'
import ice3 from '../assets/ice3.png'
import ice4 from '../assets/ice4.png'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from "react-router-dom"

const products = [
  {
    id: 1,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice1,
  },
  {
    id: 2,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice2,
  },
  {
    id: 3,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice3,
  },
  {
    id: 4,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice4,
  },
  {
    id: 5,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice1,
  },
  {
    id: 6,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice2,
  },
  {
    id: 7,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: ice3,
  },
]


const products1 = [
  {
    id: 1,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://zira.uz/wp-content/uploads/2018/01/chuchvara-15.jpg",
  },
  {
    id: 2,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://www.centralasia-travel.com/upload/text/chuchvara-05.jpg",
  },
  {
    id: 3,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://fk100.ru/modules/image/src/images/cache/product_image_782_29-520-323-728b7ffa.jpg",
  },
  {
    id: 4,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://gortrapeza.ru/thumb/2/XeZCHg_1C1m8li4QGemf5w/r/d/chuchvara.jpg",
  },
  {
    id: 5,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://ic.pics.livejournal.com/stalic/2762948/2296482/2296482_original.jpg",
  },

];

const products2 = [
  {
    id: 1,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://cdn.xabardor.uz/media/photo/2023/11/10/news_photo-20231216-140703.webp",
  },
  {
    id: 2,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://storage.kun.uz/source/10/JMxmgSJLAer4JWuHO7dBN0txZfFFlqKZ.jpg",
  },
  {
    id: 3,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://i5.walmartimages.com/seo/Aidells-Chicken-Apple-Smoked-Chicken-Sausage-Links-12-oz-4-Ct_037075cf-5992-45a9-92ce-dc58e80a2e98.f81ab53f30bb33027f3555e97e4cf301.jpeg",
  },
  {
    id: 4,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://i5.walmartimages.com/asr/a5ad6101-40fc-4c8f-a4b8-50e9a25e8220.d1911bbc214da016699033f43959ba69.jpeg",
  },
  {
    id: 5,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://www.olepetfood.com/uploads/%E5%86%BB%E5%B9%B2%E9%B8%A1%E8%82%891.jpg",
  },
  {
    id: 6,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://cdn.xabardor.uz/media/photo/2023/11/10/news_photo-20231216-140703.webp",
  },
  {
    id: 2,
    name: "Chocolate Brownie Sundae",
    description: "Sample of brownie",
    image: "https://storage.kun.uz/source/10/JMxmgSJLAer4JWuHO7dBN0txZfFFlqKZ.jpg",
  },                      

];
  

export default function CatalogPage() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-16 px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#FF1493]">Catalog</h1>
        <button className="bg-[#FF1493] text-white px-3 py-2 rounded-3xl hover:bg-[#FF1493]/90">Download catalog</button>
      </header>

      <div className="space-y-12">
        {[1].map((category) => (
          <section key={category}>
            <h2 className="text-3xl font-semibold mb-4">Category name</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            <h2 className="text-3xl font-semibold mb-4">Category name</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            <h2 className="text-3xl font-semibold mb-4">Category name</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                    <h3 className="text-md font-medium text-[#FF1493]">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
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


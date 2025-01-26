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
        {[1, 2, 3].map((category) => (
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
                        className="object-cover"
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


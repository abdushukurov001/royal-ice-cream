import ice1 from '../assets/ice1.png'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";
import { FaArrowRight } from 'react-icons/fa';

const product = {
    id: 1,
    name: "Chocolate Brownie Sundae",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    image: ice1,
}

const ProductDetail = () => {

    useEffect(() => {
        window.scrollY = 0
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50 py-8 mt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="breadcrumb flex">
                        <a
                            href="/"
                            className="mb-6 me-2 inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Home
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

                            Products catalog
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

                            Products Info
                        </a>
                        
                    </div>

                    <div className="bg-[#FFF5F7] rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Product Image */}
                            <div className="aspect-w-1 aspect-h-1">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    width={476}
                                    height={517}
                                    className="w-full h-full object-center object-cover rounded-lg shadow"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="space-y-6 py-20">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {product.name}
                                </h1>

                                <div className="prose max-w-none text-gray-600">
                                    <p>{product.description}</p>
                                </div>

                                <div className="mt-8 pt-6">
                                    <dl className="space-y-4">
                                        <div className="flex gap-5 px-4 py-3 rounded-lg">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Info
                                            </dt>
                                            <dd className="text-sm text-gray-900">
                                                value
                                            </dd>
                                        </div>
                                    </dl>
                                    <dl className="space-y-4">
                                        <div className="flex gap-5 px-4 py-3 rounded-lg">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Info
                                            </dt>
                                            <dd className="text-sm text-gray-900">
                                                value
                                            </dd>
                                        </div>
                                    </dl>
                                    <dl className="space-y-4">
                                        <div className="flex gap-5 px-4 py-3 rounded-lg">
                                            <dt className="text-sm font-medium text-gray-500">
                                                Info
                                            </dt>
                                            <dd className="text-sm text-gray-900">
                                                value
                                            </dd>
                                        </div>
                                    </dl>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
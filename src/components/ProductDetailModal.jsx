
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import {useTranslation} from 'react-i18next';


const ProductModal = ({ product, onClose }) => {
    const {t} = useTranslation();
    if (!product) return null;
       
    

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleOutsideClick}
        >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl max-h-[calc(100vh-3rem)]">
                <div className="flex justify-between items-center p-4 border-b-white">
                    <h2 className="text-xl font-bold text-[#FF1493]">{product.title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 flex flex-col max-h-[calc(100vh-10rem)] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="aspect-square">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full md:h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-6 mt-6 max-h-[400px] overflow-y-auto">
                            <h3 className="text-2xl font-semibold">{t("catalog.detailed_product")}:</h3>
                            <p className="text-gray-600 text-lg">{product.description}</p>

                            <div className="max-h-[300px] overflow-y-auto">
                                <h4 className="text-xl font-medium">{t("catalog.information")}:</h4>
                                <ul className="list-disc list-inside text-gray-600 text-lg">
                                    <li>{t('catalog.price')}: {product.cost}</li>
                                    <li>{t('catalog.weight')}: {product.weight} gr</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductModal.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        weight: PropTypes.number.isRequired, 
        cost: PropTypes.number.isRequired 
    }).isRequired,
    onClose: PropTypes.func.isRequired
};

export default ProductModal;

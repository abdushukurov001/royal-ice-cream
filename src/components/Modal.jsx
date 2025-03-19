
import PropTypes from "prop-types"; 

export default function Modal({ isOpen, onClose, newsItem }) {
  if (!isOpen || !newsItem) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-56 object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold text-black mt-4">{newsItem.title}</h2>
        <p className="text-gray-700 mt-2">{newsItem.description}</p>
      </div>
    </div>
  );
}

// ✅ PropTypes ni qo‘shamiz
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // `isOpen` boolean bo‘lishi kerak
  onClose: PropTypes.func.isRequired, // `onClose` function bo‘lishi kerak
  newsItem: PropTypes.shape({
    image: PropTypes.string.isRequired, // `newsItem.image` string bo‘lishi kerak
    title: PropTypes.string.isRequired, // `newsItem.title` string bo‘lishi kerak
    description: PropTypes.string.isRequired, // `newsItem.description` string bo‘lishi kerak
  }),
};

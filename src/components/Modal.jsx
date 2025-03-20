
import PropTypes from "prop-types"; 

export default function Modal({ isOpen, onClose, newsItem }) {
  if (!isOpen || !newsItem) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-4"
    onClick={onClose}
    >
      <div className="bg-white max-h-[calc(90vh-10rem)] overflow-y-auto rounded-lg shadow-lg max-w-lg w-full p-6 relative"
      onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times; 
        </button>
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold text-black mt-4">{newsItem.title}</h2>
        <p className="text-gray-700 mt-2">{newsItem.description}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  newsItem: PropTypes.shape({
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
  }),
};

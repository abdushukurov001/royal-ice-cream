import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';

const Language = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedLanguage, setSelectedLanguage] = useState('Eng'); // Tanlangan til
  const dropdownRef = useRef(null); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = ['Eng', 'Ru', 'Uzb'];

  return (
    <div className="relative ml-4 " ref={dropdownRef}>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm">{selectedLanguage}</span>
      </button>

   
      {isOpen && (
        <div className="absolute top-8 left-0  bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className={`px-4 py-2 text-sm  text-black hover:bg-gray-100 ${
                selectedLanguage === lang ? 'font-bold text-blue-600' : ''
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;

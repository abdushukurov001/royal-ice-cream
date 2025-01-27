import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Eng'); // Default value is 'Eng'
  const dropdownRef = useRef(null);

  // Check if there's a saved language in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage); // Set the language to saved one
      i18n.changeLanguage(savedLanguage);
    } else {
      const defaultLanguage = i18n.language || 'en'; // Use i18n's language if no saved one
      setSelectedLanguage(defaultLanguage === 'en' ? 'Eng' : defaultLanguage === 'ru' ? 'Ru' : 'Uzb');
    }
  }, [i18n]);

  // Handle outside click to close the dropdown
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

  // Filter out the selected language from the list
  const availableLanguages = languages.filter(lang => lang !== selectedLanguage);

  // Handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);

    // Map selected language to i18next language code (e.g., 'Eng' -> 'en')
    const languageCode = lang === 'Eng' ? 'en' : lang === 'Ru' ? 'ru' : 'uz';
    i18n.changeLanguage(languageCode);

    // Save the selected language to localStorage
    localStorage.setItem('language', languageCode);
  };

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm">{selectedLanguage}</span>
      </button>

      {isOpen && (
        <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-4 py-2 text-sm text-black hover:bg-gray-100 ${
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

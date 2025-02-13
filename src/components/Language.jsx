import { useState, useEffect, useRef } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languageMap = {
    en: 'Eng',
    ru: 'Ru',
    uz: 'Uzb'
  };

  const getDisplayName = (code) => languageMap[code] || code;

  const getLanguageCode = (display) => 
    Object.entries(languageMap).find(([_, value]) => value === display)?.[0] || 'en';

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && Object.keys(languageMap).includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    } else {
      const defaultLanguage = i18n.language || 'en';
      localStorage.setItem('language', defaultLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const availableLanguages = Object.values(languageMap).filter(
    lang => lang !== getDisplayName(i18n.language)
  );

  const handleLanguageChange = (displayName) => {
    const languageCode = getLanguageCode(displayName);
    i18n.changeLanguage(languageCode);
    localStorage.setItem('language', languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative ml-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm">{getDisplayName(i18n.language)}</span>
      </button>

      {isOpen && (
        <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-4 py-2 text-sm text-black hover:bg-gray-100 ${
                getDisplayName(i18n.language) === lang ? 'font-bold text-blue-600' : ''
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


import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-colors duration-200 bg-white"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
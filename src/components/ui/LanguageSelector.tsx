'use client';

import { useState } from 'react';
import { BsTranslate } from 'react-icons/bs';

interface LanguageSelectorProps {
  onLanguageChange?: (lang: string) => void;
  className?: string;
}

export default function LanguageSelector({ onLanguageChange, className = '' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageSelect = (lang: string) => {
    setCurrentLang(lang);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Select language"
      >
        <BsTranslate className="h-4 w-4" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`w-full text-left px-4 py-2 text-sm ${
                currentLang === 'en'
                  ? 'bg-gray-100 dark:bg-gray-700 text-primary-500'
                  : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect('vi')}
              className={`w-full text-left px-4 py-2 text-sm ${
                currentLang === 'vi'
                  ? 'bg-gray-100 dark:bg-gray-700 text-primary-500'
                  : 'text-gray-700 dark:text-gray-300'
              } hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
              role="menuitem"
            >
              Tiếng Việt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

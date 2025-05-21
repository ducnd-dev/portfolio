'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import LanguageSelector from './ui/LanguageSelector';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  const cvLinks = {
    en: '/cv/resume-en.pdf',
    vi: '/cv/resume-vi.pdf',
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg dark:border-gray-800 dark:bg-dark-DEFAULT/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
          Đức<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Nguyễn</span>
        </Link>
          <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/#about" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#experience" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
          <div className="flex items-center space-x-4">
          <a 
            href={cvLinks[currentLang as keyof typeof cvLinks]} 
            target="_blank"
            className="hidden md:block px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg transition-all"
          >
            Download CV
          </a>
          <LanguageSelector onLanguageChange={handleLanguageChange} />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
          </button>
          
        </div>
      </div>
    </header>
  );
}

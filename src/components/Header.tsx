'use client';

// import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
import AnimatedElement from './ui/AnimatedElement';
import { scrollToSection } from '../lib/scrollUtils';

export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg dark:border-gray-800 dark:bg-dark-DEFAULT/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <AnimatedElement animation="fadeIn" delay={0.2}>
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Đức<span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Nguyễn</span>
          </Link>
        </AnimatedElement>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">            <AnimatedElement animation="fadeIn" delay={0.3}>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all cursor-pointer"
                >
                  About
                </a>
              </li>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all cursor-pointer"
                >
                  Skills
                </a>
              </li>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.5}>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all cursor-pointer"
                >
                  Projects
                </a>
              </li>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.6}>
              <li>
                <a 
                  href="#experience" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all cursor-pointer"
                >
                  Experience
                </a>
              </li>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.7}>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-all cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </AnimatedElement>
          </ul>
        </nav>          <div className="flex items-center space-x-4">
            {/* <AnimatedElement animation="fadeIn" delay={0.8}>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400 transition-all"
                aria-label="Toggle theme"
              >
                <AnimatedElement animation="rotate" duration={0.3}>
                  {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </AnimatedElement>
              </button>
            </AnimatedElement> */}
          </div>
      </div>
    </header>
  );
}

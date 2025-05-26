'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaEnvelope, FaDiscord } from 'react-icons/fa';
import SocialIcons from '../ui/SocialIcons';
import LanguageSelector from '../ui/LanguageSelector';

export default function HeroSection() {
  const [currentLang, setCurrentLang] = useState('en');
  
  const cvLinks = {
    en: '/cv/resume-en.pdf',
    vi: '/cv/resume-vi.pdf',
  };

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute top-4 right-4 z-20">
        <LanguageSelector onLanguageChange={handleLanguageChange} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="text-primary">Nguyễn Đình Đức</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Frontend Developer with Fullstack Experience</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I build high-performance, maintainable, and scalable enterprise systems 
              with a focus on integrating modern technologies.
            </p>              <div className="flex flex-wrap gap-4">
              <Link 
                href="/#projects"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
              >
                View My Work
              </Link>
              <a 
                href={cvLinks[currentLang as keyof typeof cvLinks]} 
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-tertiary-500 to-accent-500 text-white rounded-full hover:shadow-lg transition-all"
              >
                Download CV
              </a>
              <Link 
                href="/#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Me
              </Link>            </div>
            
            <SocialIcons 
              className="mt-8" 
              iconSize={7} 
              useGradient={true}              customIcons={[
                {
                  name: "Discord",
                  url: "https://discord.com/users/ducnguyen2904",
                  icon: FaDiscord,
                  gradientColors: "bg-gradient-to-r from-indigo-600 to-indigo-500"
                },
                {
                  name: "Email",
                  url: "mailto:nguyendinhducbg2904@gmail.com",
                  icon: FaEnvelope,
                  gradientColors: "bg-gradient-to-r from-red-600 to-red-500"
                }
              ]}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              {/* Profile image */}
              <Image 
                src="/images/avatar.jpg" 
                alt="Nguyễn Đình Đức" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

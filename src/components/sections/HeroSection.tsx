'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
  return (    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-light dark:via-dark-DEFAULT dark:to-primary-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400 opacity-20 rounded-full blur-3xl dark:opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-tertiary-400 opacity-20 rounded-full blur-3xl dark:opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-400 opacity-20 rounded-full blur-3xl dark:opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-400 opacity-20 rounded-full blur-3xl dark:opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">Duc</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Full Stack Developer</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences 
              for the web. Focused on creating clean, user-friendly applications.
            </p>              <div className="flex flex-wrap gap-4">
              <Link 
                href="/#contact"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all transform hover:-translate-y-0.5"
              >
                Contact Me
              </Link>
              <div className="relative group">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black rounded-full hover:from-secondary-700 hover:to-secondary-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </button>                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-dark-light ring-1 ring-black ring-opacity-5 hidden group-hover:block z-10 overflow-hidden transform origin-top-left transition-all">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <a
                      href="/cv/resume-en.pdf"
                      download
                      className="block px-4 py-2 text-sm text-black-700 dark:text-gray-300 hover:bg-secondary-50 dark:hover:bg-secondary-900/30 hover:text-secondary-600 dark:hover:text-secondary-400 transition-all flex items-center gap-2"
                      role="menuitem"
                    >
                      <span className="w-4 h-4 inline-block bg-gradient-to-r from-red-500 to-blue-500 rounded-full opacity-70"></span>
                      English Version
                    </a>
                    <a
                      href="/cv/resume-vi.pdf"
                      download
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-secondary-50 dark:hover:bg-secondary-900/30 hover:text-secondary-600 dark:hover:text-secondary-400 transition-all flex items-center gap-2"
                      role="menuitem"
                    >
                      <span className="w-4 h-4 inline-block bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-70"></span>
                      Vietnamese Version
                    </a>
                  </div>
                </div>
              </div>
            </div>
              <div className="flex items-center mt-8 gap-4">
              <a 
                href="https://github.com/ducnd-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nguyen-dinh-duc-b183561b7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-tertiary-500 dark:text-gray-400 dark:hover:text-tertiary-400 transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://x.com/Duc_N_D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400 transition-all transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              {/* Replace with your profile image */}
              {/* <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold">
                JD
              </div> */}
              <Image 
                src="/images/avatar.jpg" // Replace with your image path
                alt="Profile Image"
                fill
                className="object-cover"
                style={{ borderRadius: '50%' }}
                />
            </div>
          </motion.div>
        </div>
        
      
      </div>
    </section>
  );
}

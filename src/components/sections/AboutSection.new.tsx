'use client';

import { FaCode, FaDesktop, FaServer } from 'react-icons/fa';
import AnimatedElement from '../ui/AnimatedElement';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <AnimatedElement animation="scale" delay={0.3} className="w-20 h-1 bg-primary mx-auto">
            <div className="w-full h-full"></div>
          </AnimatedElement>
        </AnimatedElement>
        
        <div className="flex flex-col md:flex-row gap-8">
          <AnimatedElement animation="slideRight" delay={0.1} className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <AnimatedElement animation="fadeIn" delay={0.3}>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I am a passionate Frontend Developer with expertise in React.js and Vue.js ecosystems. 
                With 4+ years of experience, I&apos;ve crafted engaging user interfaces for international clients including
                e-commerce platforms, healthcare applications, and real estate websites.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My professional goal is to push the boundaries of frontend development, creating high-performance, 
                accessible, and visually stunning web applications while staying at the forefront of modern UI/UX trends and technologies.
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fadeIn" delay={0.5}>
              <p className="text-gray-600 dark:text-gray-300">
                I graduated from Hanoi College of Technology with a degree in Information Technology (2017-2021),
                and I&apos;m proficient in reading and understanding technical documentation in English.
              </p>
            </AnimatedElement>
          </AnimatedElement>

          <AnimatedElement animation="slideLeft" delay={0.3} className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              <AnimatedElement animation="fadeIn" delay={0.4}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <AnimatedElement animation="bounce" delay={0.6}>
                      <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                        <FaDesktop className="h-6 w-6 text-primary" />
                      </div>
                    </AnimatedElement>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Building responsive and interactive user interfaces with Vue.js (Vuex, Nuxt.js), React.js (Next.js),
                      Tailwind CSS, SCSS, and Bootstrap. I create clean, efficient frontends for optimal user experiences.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeIn" delay={0.5}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <AnimatedElement animation="bounce" delay={0.7}>
                      <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                        <FaServer className="h-6 w-6 text-primary" />
                      </div>
                    </AnimatedElement>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">UI/UX Implementation</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transforming design mockups into pixel-perfect, responsive interfaces with advanced CSS techniques.
                      Implementing complex animations, micro-interactions, and ensuring cross-browser compatibility for optimal user experience.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeIn" delay={0.6}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <AnimatedElement animation="bounce" delay={0.8}>
                      <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                        <FaCode className="h-6 w-6 text-primary" />
                      </div>
                    </AnimatedElement>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Frontend Architecture & Performance</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Building scalable frontend architectures with state management libraries, implementing code splitting, 
                      and optimizing performance. Experienced with testing frameworks like Jest, React Testing Library, and Cypress to ensure code quality and reliability.
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

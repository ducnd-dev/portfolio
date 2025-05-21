'use client';

import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaServer } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a passionate full-stack developer with a strong foundation in both frontend and backend technologies. 
              With over 5 years of experience in the industry, I&apos;ve worked on a wide range of projects from small business 
              websites to large enterprise applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in software development began when I was in college, and since then, 
              I&apos;ve been constantly learning and adapting to new technologies. I believe in writing clean, 
              maintainable code and creating intuitive user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What I Do
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                    <FaDesktop className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building responsive and interactive user interfaces with modern frameworks like React, 
                    Next.js, and Vue. I focus on creating seamless user experiences with clean and maintainable code.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                    <FaServer className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Backend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designing and implementing robust backend systems using Node.js, Express, and various databases. 
                    I ensure scalable and secure server-side solutions that power the frontend.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                    <FaCode className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Full-Stack Integration</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connecting all the dots to create cohesive applications. From API design to deployment and 
                    CI/CD pipelines, I handle the complete development lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

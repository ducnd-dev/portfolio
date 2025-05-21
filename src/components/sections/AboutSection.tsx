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
            </h3>            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I am a passionate Fullstack Developer with expertise in both frontend and backend technologies. 
              With 4+ years of experience, I&apos;ve worked on various projects for Japanese clients including
              e-commerce, healthcare, and real estate applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My professional goal is to develop as a Fullstack Developer, focusing on building high-performance, 
              maintainable, and scalable enterprise systems while integrating cutting-edge technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I graduated from Hanoi College of Technology with a degree in Information Technology (2017-2021),
              and I&apos;m proficient in reading and understanding technical documentation in English.
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
                <div>                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Frontend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Building responsive and interactive user interfaces with Vue.js (Vuex, Nuxt.js), React.js (Next.js),
                    Tailwind CSS, SCSS, and Bootstrap. I create clean, efficient frontends for optimal user experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                    <FaServer className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Backend Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Designing and implementing robust backend systems with Node.js (NestJS), PHP (Laravel), C#/ASP.NET,
                    MySQL, PostgreSQL, and MSSQL. I focus on creating scalable, secure, and maintainable APIs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
                    <FaCode className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>                  <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">DevOps & Other Technologies</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Implementing DevOps practices with Docker, CI/CD, Nginx, Kubernetes, and cloud platforms (Azure, GCP).
                    Experienced with Firebase, Supabase, GraphQL, Socket.IO, and managing projects with Jira and Git.
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

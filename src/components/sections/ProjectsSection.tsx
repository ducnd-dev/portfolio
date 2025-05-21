'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
// import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
    image: '/projects/placeholder.jpg',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with real-time updates and collaboration features.',
    image: '/projects/placeholder.jpg',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-app-demo.com',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Social Media API',
    description: 'A robust RESTful API for a social media platform with authentication, posts, comments, and likes.',
    image: '/projects/placeholder.jpg',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/yourusername/social-api',
    liveUrl: 'https://social-api-docs.com',
    category: 'backend'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A weather forecast dashboard with location search, data visualization, and responsive design.',
    image: '/projects/placeholder.jpg',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-dashboard-demo.com',
    category: 'frontend'
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    description: 'A full-stack application for restaurants to manage orders, inventory, and customer information.',
    image: '/projects/placeholder.jpg',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/yourusername/restaurant-system',
    liveUrl: 'https://restaurant-system-demo.com',
    category: 'fullstack'
  },
  {
    id: 6,
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile app for tracking workouts, nutrition, and fitness progress.',
    image: '/projects/placeholder.jpg',
    tech: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/yourusername/fitness-app',
    liveUrl: 'https://fitness-app-demo.com',
    category: 'mobile'
  }
];

type FilterType = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-DEFAULT relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tertiary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-tertiary-500 to-primary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project reflects my skills and experience in different areas.
          </p>
        </motion.div>        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
              filter === 'all'
                ? 'bg-gradient-to-r from-tertiary-500 to-primary-500 text-white shadow-md transform -translate-y-0.5'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
            }`}
          >
            All
          </button>          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
              filter === 'frontend'
                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md transform -translate-y-0.5'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
            }`}
          >
            Frontend
          </button>          <button
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
              filter === 'backend'
                ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-md transform -translate-y-0.5'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
            }`}
          >
            Backend
          </button>          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
              filter === 'fullstack'
                ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-md transform -translate-y-0.5'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
            }`}
          >
            Full Stack
          </button>
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 dark:bg-dark-light"
            >
              <div className="h-48 w-full relative bg-gray-200 dark:bg-gray-600">
                {/* Replace with actual project images */}
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        i % 4 === 0 ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' :
                        i % 4 === 1 ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300' :
                        i % 4 === 2 ? 'bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900/30 dark:text-tertiary-300' :
                        'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-tertiary-500 dark:text-gray-300 dark:hover:text-tertiary-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

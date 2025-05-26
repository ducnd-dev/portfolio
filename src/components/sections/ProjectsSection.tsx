'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImagePlaceholder from '../ui/ProjectImagePlaceholder';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  period?: string;
  client?: string;
  teamSize?: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'MYHEART',
    description: 'A healthcare platform for Czech clients that analyzes medical requirements, develops AI-based diagnostic features, treatment plans, and progress tracking. Integrates Nuxt.js frontend with ASP.NET backend, deployed on Azure Cloud.',
    image: '/projects/myheart.png',
    tech: ['Vue.js', 'Nuxt.js', 'C#/ASP.NET', 'MSSQL', 'Azure', 'Python'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack',
    period: '06/2023 - 04/2025',
    client: 'Czech Republic',
    teamSize: 3
  },
  {
    id: 2,
    title: 'AEONTOWN',
    description: 'An e-commerce platform for Japanese retailers featuring store, order and customer management. Developed with Vue.js frontend and Express/Firebase backend, optimized UI/UX, implemented business logic, and deployed on GCP with notifications for 1 million users.',
    image: '/projects/aeontown.png',
    tech: ['Vue.js', 'Vuex', 'Firebase', 'Express', 'GCP'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack',
    period: '08/2024 - 04/2025',
    client: 'Japan',
    teamSize: 5
  },
  {
    id: 3,
    title: 'DENTALCONNECT',
    description: 'A dental appointment booking system for Japanese clients featuring patient record management, appointment scheduling, Supabase authentication, and responsive UI with Next.js and data synchronization.',
    image: '/projects/dentalconnect.png',
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Shadcn'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack',
    period: '09/2025 - 03/2025',
    client: 'Japan',
    teamSize: 5
  },
  {
    id: 4,
    title: 'MITSUKURU',
    description: 'A Japanese real estate website for buying, selling, and renting properties with search functionality, filtering, OTP, and administration using Vue.js and Laravel. Deployed with Docker and Nginx.',
    image: '/projects/mitsukuru.png',
    tech: ['Vue.js', 'Vuex', 'ElementUI', 'Laravel', 'MySQL', 'Docker'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack',
    period: '04/2024 - 12/2024',
    client: 'Japan',
    teamSize: 2
  },
  {
    id: 5,
    title: 'LINEPRAYER',
    description: 'A LineWorks-like platform for Japanese clients featuring scheduling, voice/video calls, and posting. Managed a team of 8, assigned tasks, conducted reviews, handled real-time processing, and connected React frontend with Golang backend. Deployed using Kubernetes and Docker.',
    image: '/projects/lineprayer.png',
    tech: ['React.js', 'Golang', 'MySQL', 'Kubernetes', 'Docker', 'Keycloak'],
    githubUrl: '',
    liveUrl: '',
    category: 'fullstack',
    period: '12/2023 - 01/2025',
    client: 'Japan',
    teamSize: 8
  },
  {
    id: 6,
    title: 'ADVISER',
    description: 'Backend development for Japanese clients including requirement analysis, implementation, system optimization, and API development for frontend integration.',
    image: '/projects/adviser.png',
    tech: ['C#/ASP.NET', 'MySQL', 'AWS'],
    githubUrl: '',
    liveUrl: '',
    category: 'backend',
    period: '12/2022 - 08/2023',
    client: 'Japan',
    teamSize: 3
  },
  {
    id: 7,
    title: 'GEOMARK',
    description: 'UI development for a Japanese tourism map system with optimized loading speed and multi-layer map data display.',
    image: '/projects/geomark.png',
    tech: ['Vue.js', 'Nuxt.js', 'PHP/Laravel', 'MySQL'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '09/2023 - 12/2023',
    client: 'Japan',
    teamSize: 10
  },
  {
    id: 8,
    title: 'LMS',
    description: 'A learning management system for Vietnamese users featuring lecture and document management, user-friendly UI, document editing features, and permission management.',
    image: '/projects/lms.png',
    tech: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '04/2022 - 09/2022',
    client: 'Vietnam',
    teamSize: 10
  },
  {
    id: 9,
    title: 'CTV24H',
    description: 'An affiliate sales system for Vietnamese users with affiliate link generation, backend API integration, and mobile-optimized UI.',
    image: '/projects/ctv24h.png',
    tech: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '02/2022 - 06/2022',
    client: 'Vietnam',
    teamSize: 15
  },
  {
    id: 10,
    title: 'ELEARNING',
    description: 'An online learning platform for Vietnamese users featuring videos, quizzes, virtual classrooms, mini-games, and optimized learning experience for students and teachers.',
    image: '/projects/elearning.png',
    tech: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '09/2021 - 02/2022',
    client: 'Vietnam',
    teamSize: 15
  },
  {
    id: 11,
    title: 'TANZANIA SHOP',
    description: 'UI development for a Tanzanian fashion e-commerce platform with GraphQL API data integration.',
    image: '/projects/tanzania.png',
    tech: ['React.js', 'Redux', 'GraphQL API', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '02/2021 - 09/2021',
    client: 'Tanzania',
    teamSize: 8
  },
  {
    id: 12,
    title: 'THE BODY SHOP',
    description: 'UI development for The Body Shop cosmetics website in Malaysia with responsive layout optimization and multi-device experience.',
    image: '/projects/bodyshop.png',
    tech: ['React.js', 'Redux', 'GraphQL API', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '06/2020 - 01/2021',
    client: 'Malaysia',
    teamSize: 8
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
          <div className="h-1 w-20 bg-gradient-to-r from-tertiary-500 to-primary-500 mx-auto rounded-full"></div>          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project showcases my experience with different technologies and client industries.
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
        </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 dark:bg-dark-light"
            >              <div className="h-48 w-full relative bg-gray-200 dark:bg-gray-600">
                {/* Project images */}
                {project.image && project.image.startsWith('/projects/') ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={() => console.log(`Failed to load image for ${project.title}`)}
                  />
                ) : (
                  <ProjectImagePlaceholder
                    title={project.title}
                    category={project.category}
                    className="h-full"
                  />
                )}
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
                  { project.githubUrl && (<a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </a>)}
                  {project.liveUrl && (<a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-tertiary-500 dark:text-gray-300 dark:hover:text-tertiary-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </a>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

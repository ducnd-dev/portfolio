'use client';

import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImageWithOverlay from '../ui/ProjectImageWithOverlay';
import AnimatedElement from '../ui/AnimatedElement';

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
    "id": 10,
    "title": "TaskZen",
    "description": "A minimal SaaS landing page for a productivity app that helps users organize tasks, track time, and achieve goals. Built with Next.js and Tailwind CSS featuring a responsive design with multiple sections including hero, features, pricing with toggle functionality, FAQ accordion, and newsletter signup. Implemented SEO optimization with metadata, structured data, and semantic HTML.",
    "image": "/projects/taskzen.png",
    "tech": ["Next.js", "React", "TailwindCSS", "Framer Motion", "Responsive Design", "SEO Optimization"],
    "githubUrl": "https://github.com/ducnd-dev/taskzen-app",
    "liveUrl": "https://taskzen-app.ducnd.dev",
    "category": "frontend",
    "period": "05/2025",
    "client": "TaskZen SaaS",
    "teamSize": 1
  },
  {
    id: 1,
    title: 'MYHEART',
    description: 'A healthcare platform for Czech clients that analyzes medical requirements, for which I developed the frontend Nuxt.js interface for AI-based diagnostic features, treatment plans, and progress tracking. Created responsive UI components integrating with ASP.NET backend endpoints.',
    image: '/projects/myheart.png',
    tech: ['Vue.js', 'Nuxt.js', 'Vuex', 'TailwindCSS', 'REST API Integration'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '06/2023 - 04/2025',
    client: 'Czech Republic',
    teamSize: 3
  },
  {
    id: 2,
    title: 'AEONTOWN',
    description: 'An e-commerce platform for Japanese retailers where I built the Vue.js frontend featuring store, order and customer management interfaces. Implemented responsive UI/UX design, created reusable components, integrated Firebase authentication, and built notification systems with WebSockets reaching 1 million users.',
    image: '/projects/aeontown.png',
    tech: ['Vue.js', 'Vuex', 'Firebase', 'ElementUI', 'WebSocket', 'Express.js'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
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
    category: 'frontend',
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
    category: 'frontend',
    period: '04/2024 - 12/2024',
    client: 'Japan',
    teamSize: 2
  },
  {
    id: 5,
    title: 'LINEPRAYER',
    description: 'A LineWorks-like platform for Japanese clients featuring scheduling, voice/video calls, and posting. Managed a team of 8, assigned tasks, conducted reviews, handled real-time processing, and connected React frontend with Golang backend.',
    image: '/projects/lineprayer.png',
    tech: ['React.js', 'Golang', 'MySQL', 'Kubernetes', 'Docker', 'Keycloak'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '12/2023 - 01/2025',
    client: 'Japan',
    teamSize: 8
  },
  {
    id: 6,
    title: 'ADVISER',
    description: 'Backend development for Japanese clients including requirement analysis, implementation, system optimization, and API development for frontend integration.',
    image: '',
    tech: ['C#/ASP.NET', 'MySQL', 'AWS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '12/2022 - 08/2023',
    client: 'Japan',
    teamSize: 3
  },
  {
    id: 7,
    title: 'GEOMARK',
    description: 'UI development for a Japanese tourism map system with optimized loading speed and multi-layer map data display.',
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
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
    image: '',
    tech: ['React.js', 'Redux', 'GraphQL API', 'JavaScript', 'SCSS'],
    githubUrl: '',
    liveUrl: '',
    category: 'frontend',
    period: '06/2020 - 01/2021',
    client: 'Malaysia',
    teamSize: 8
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  
  // Function to get default image based on project type
  const getDefaultImageForProject = (project: Project): string => {
    // Check if project uses React
    if (project.tech.some(tech => tech.toLowerCase().includes('react'))) {
      return '/projects/default-react.jpg';
    }
    
    // Check if project uses Vue
    if (project.tech.some(tech => tech.toLowerCase().includes('vue'))) {
      return '/projects/default-vue.jpg';
    }
    
    // Check for e-commerce projects
    if (project.title.toLowerCase().includes('ecommerce') || 
        project.description.toLowerCase().includes('ecommerce') ||
        project.description.toLowerCase().includes('e-commerce')) {
      return '/projects/default-ecommerce.jpg';
    }
    
    // Check for education projects
    if (project.title.toLowerCase().includes('education') || 
        project.description.toLowerCase().includes('education') ||
        project.title.toLowerCase().includes('lms') ||
        project.description.toLowerCase().includes('learning')) {
      return '/projects/default-education.jpg';
    }
    
    // Check for healthcare projects
    if (project.title.toLowerCase().includes('health') || 
        project.description.toLowerCase().includes('health') ||
        project.description.toLowerCase().includes('medical')) {
      return '/projects/default-healthcare.jpg';
    }
    
    // Check for portfolio projects
    if (project.title.toLowerCase().includes('portfolio') || 
        project.description.toLowerCase().includes('portfolio')) {
      return '/projects/default-portfolio.jpg';
    }
    
    // Frontend projects
    if (project.category === 'frontend') {
      return '/projects/default-frontend.jpg';
    }
    
    // Default fallback
    return '/projects/default-project.jpg';
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'vue'
      ? projects.filter(project => project.tech.some(tech => tech.toLowerCase().includes('vue')))
      : projects.filter(project => 
          filter === 'frontend' 
            ? project.tech.some(tech => tech.toLowerCase().includes('react')) 
            : project.category === filter
        );
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-DEFAULT relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-tertiary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frontend Projects</h2>
          <AnimatedElement animation="scale" delay={0.2} className="h-1 w-20 mx-auto rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-tertiary-500 to-primary-500"></div>
          </AnimatedElement>
          <AnimatedElement animation="fadeIn" delay={0.4}>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              As a specialized Frontend Developer, I&apos;ve created modern, responsive interfaces using React.js and Vue.js. Here are some key projects showcasing my expertise in building engaging user experiences.
            </p>
          </AnimatedElement>
        </AnimatedElement>
        
        <AnimatedElement animation="fadeIn" delay={0.3} className="flex justify-center flex-wrap gap-2 mb-10">
          <AnimatedElement animation="scale" delay={0.4} duration={0.4}>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-tertiary-500 to-primary-500 text-white shadow-md transform -translate-y-0.5'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
              }`}
            >
              All Projects
            </button>
          </AnimatedElement>
          <AnimatedElement animation="scale" delay={0.5} duration={0.4}>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                filter === 'frontend'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md transform -translate-y-0.5'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
              }`}
            >
              React.js Projects
            </button>
          </AnimatedElement>
          <AnimatedElement animation="scale" delay={0.6} duration={0.4}>
            <button
              onClick={() => setFilter('vue')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow-sm ${
                filter === 'vue'
                  ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-md transform -translate-y-0.5'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 hover:shadow hover:-translate-y-0.5 transform'
              }`}
            >
              Vue.js Projects
            </button>
          </AnimatedElement>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement
              key={project.id}
              animation="slideUp"
              delay={0.1 + index * 0.1}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 dark:bg-dark-light"
            >
              <div className="h-48 w-full relative bg-gray-200 dark:bg-gray-600 overflow-hidden group">
                {/* Enhanced project images with overlay for default images */}
                <ProjectImageWithOverlay
                  title={project.title}
                  category={project.category}
                  imageSrc={
                    project.image && project.image.startsWith('/projects/') 
                      ? project.image 
                      : getDefaultImageForProject(project)
                  }
                />
                {/* Image hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <AnimatedElement animation="fadeIn" delay={0.2 + index * 0.1}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.3 + index * 0.1}>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.4 + index * 0.1} className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </AnimatedElement>
                
                <div className="flex justify-between items-center">
                  {project.period && (
                    <AnimatedElement animation="fadeIn" delay={0.5 + index * 0.1} className="text-sm text-gray-500 dark:text-gray-400">
                      {project.period}
                    </AnimatedElement>
                  )}
                  
                  <AnimatedElement animation="fadeIn" delay={0.6 + index * 0.1} className="flex space-x-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="GitHub repository"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400"
                        aria-label="Live demo"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                    )}
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}

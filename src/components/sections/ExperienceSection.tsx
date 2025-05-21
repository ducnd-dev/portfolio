'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: 'Fullstack Developer',
    company: 'YOPAZ',
    date: 'Sep 2022 - Apr 2025',
    description: [
      'Worked on projects for Japanese clients (e-commerce, healthcare, real estate)',
      'Participated in the entire software development lifecycle',
      'Mentored 3 team members, reviewed code, organized internal seminars',
      'Developed high-performance, user-friendly applications with modern technologies'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'NestJS', 'Laravel', 'C#/ASP.NET', 'Docker', 'Azure', 'GCP'],
    type: 'work'
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Flextech',
    date: 'Sep 2021 - Sep 2022',
    description: [
      'Developed UI following Agile Scrum methodology',
      'Supported team management: task distribution, mentoring, code reviews',
      'Built responsive, interactive user interfaces'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Socket.IO', 'NestJS'],
    type: 'work'
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'SimiCart',
    date: 'Sep 2020 - Apr 2021',
    description: [
      'Created Magento extensions & PWA using React',
      'Developed responsive e-commerce interfaces',
      'Worked with GraphQL and RESTful APIs'
    ],
    technologies: ['React.js', 'Redux', 'GraphQL', 'SCSS'],
    type: 'work'
  },
  {
    id: 4,
    title: 'Information Technology',
    company: 'Hanoi College of Technology',
    date: 'Sep 2017 - Mar 2021',
    description: [
      'Studied programming fundamentals and software development',
      'Developed practical projects and applications',
      'Gained knowledge in web development technologies'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL', 'Data Structures'],
    type: 'education'
  }
];

export default function ExperienceSection() {
  return (    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-DEFAULT relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-accent-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my career.
          </p>
        </motion.div>        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 ml-4 md:ml-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 via-secondary-400 to-accent-400 dark:from-primary-700 dark:via-secondary-700 dark:to-accent-700 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >                  <div className="flex-1 w-full md:w-auto">
                    <div className={`p-5 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-dark-light border-t-4 ${
                      item.type === 'work' 
                        ? 'border-primary-500' 
                        : 'border-secondary-500'
                    }`}>
                      <div className="flex items-center mb-2">
                        <div className={`p-2 rounded-full mr-3 ${
                          item.type === 'work' 
                            ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                            : 'bg-secondary-100 text-secondary-600 dark:bg-secondary-900/20 dark:text-secondary-400'
                        }`}>
                          {item.type === 'work' ? (
                            <FaBriefcase />
                          ) : (
                            <FaGraduationCap />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.date}</p>
                      <ul className="list-disc list-inside space-y-1 mb-3 text-gray-600 dark:text-gray-300">
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full font-medium ${
                              item.type === 'work'
                                ? i % 3 === 0 ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' :
                                  i % 3 === 1 ? 'bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900/30 dark:text-tertiary-300' :
                                  'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300'
                                : i % 3 === 0 ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300' :
                                  i % 3 === 1 ? 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300' :
                                  'bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900/30 dark:text-tertiary-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 top-8 w-8 h-8 rounded-full bg-white shadow-md dark:bg-dark-light transform md:-translate-x-1/2 flex items-center justify-center border-2 ${
                    item.type === 'work'
                      ? 'border-primary-500 dark:border-primary-600'
                      : 'border-secondary-500 dark:border-secondary-600'
                  }`}>
                    {item.type === 'work' ? (
                      <FaBriefcase className={`text-primary-500 dark:text-primary-400 text-xs`} />
                    ) : (
                      <FaGraduationCap className={`text-secondary-500 dark:text-secondary-400 text-xs`} />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

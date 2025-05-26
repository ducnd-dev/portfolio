'use client';

import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import AnimatedElement from '../ui/AnimatedElement';

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
      'Built custom UI components and pages'
    ],
    technologies: ['React.js', 'Magento', 'PWA', 'Jest'],
    type: 'work'
  },
  {
    id: 4,
    title: 'Hanoi College of Technology',
    company: 'Computer Programing',
    date: '2017 - 2021',
    description: [
      'Specialized in web development',
      'Developed several academic projects including e-commerce websites'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
    type: 'education'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience & Education</h2>
          <AnimatedElement animation="scale" delay={0.2} className="h-1 w-20 mx-auto rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-accent-500 to-tertiary-500"></div>
          </AnimatedElement>
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey focused on frontend development, showcasing growth from creating e-commerce interfaces to building complex interactive web applications.
            </p>
          </AnimatedElement>
        </AnimatedElement>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <AnimatedElement 
                key={item.id}
                animation={index % 2 === 0 ? "slideRight" : "slideLeft"} 
                delay={0.1 * index}
                className="relative"
              >
                <div className={`flex flex-col md:flex-row ${index % 2 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-3 md:-translate-x-3.5 flex items-center justify-center">
                    <AnimatedElement animation="bounce" delay={0.2 + (index * 0.1)} className="w-7 h-7 rounded-full bg-white dark:bg-dark-DEFAULT border-4 border-tertiary-500 dark:border-tertiary-400 z-10 flex items-center justify-center">
                      {item.type === 'work' ? (
                        <FaBriefcase className="h-3 w-3 text-tertiary-500 dark:text-tertiary-400" />
                      ) : (
                        <FaGraduationCap className="h-3 w-3 text-tertiary-500 dark:text-tertiary-400" />
                      )}
                    </AnimatedElement>
                  </div>
                  
                  <div className={`pb-8 pl-20 md:pl-0 md:w-1/2 ${index % 2 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all transform hover:-translate-y-1">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900/30 dark:text-tertiary-300">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <h4 className="text-lg font-medium text-tertiary-600 dark:text-tertiary-400 mb-4">{item.company}</h4>
                      
                      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                        {item.description.map((desc, i) => (
                          <AnimatedElement key={i} animation="fadeIn" delay={0.3 + (i * 0.1) + (index * 0.05)} className="pl-2">
                            <li>{desc}</li>
                          </AnimatedElement>
                        ))}
                      </ul>
                      
                      <AnimatedElement animation="fadeIn" delay={0.4 + (index * 0.1)} className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </AnimatedElement>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

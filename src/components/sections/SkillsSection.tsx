'use client';

import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaLaravel, } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNestjs, SiVuedotjs, SiNuxtdotjs, SiFirebase, SiSupabase, SiGraphql, SiMysql, SiDotnet } from 'react-icons/si';
import AnimatedElement from '../ui/AnimatedElement';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const reactSkills: Skill[] = [
  { name: 'React.js', icon: <FaReact className="h-8 w-8" />, level: 90 },
  { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8" />, level: 85 },
  { name: 'Redux', icon: <SiGraphql className="h-8 w-8" />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8" />, level: 80 },
  { name: 'React Testing Library', icon: <FaGitAlt className="h-8 w-8" />, level: 80 }
];

const vueSkills: Skill[] = [
  { name: 'Vue.js', icon: <SiVuedotjs className="h-8 w-8" />, level: 90 },
  { name: 'Nuxt.js', icon: <SiNuxtdotjs className="h-8 w-8" />, level: 85 },
  { name: 'Vuex', icon: <SiNestjs className="h-8 w-8" />, level: 85 },
  { name: 'Vue Router', icon: <FaNodeJs className="h-8 w-8" />, level: 90 },
  { name: 'Vue Testing', icon: <FaGitAlt className="h-8 w-8" />, level: 80 }
];

const cssSkills: Skill[] = [
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-8 w-8" />, level: 80 },
  { name: 'SCSS/SASS', icon: <FaDatabase className="h-8 w-8" />, level: 85 },
  { name: 'CSS Animations', icon: <SiFirebase className="h-8 w-8" />, level: 85 },
  { name: 'Responsive Design', icon: <SiSupabase className="h-8 w-8" />, level: 95 },
  { name: 'Bootstrap', icon: <FaGitAlt className="h-8 w-8" />, level: 85 },
];

const additionalSkills: Skill[] = [
  { name: 'Node.js', icon: <FaNodeJs className="h-8 w-8" />, level: 60 },
  { name: 'MySQL', icon: <SiMysql className="h-8 w-8" />, level: 65 },
  { name: 'Docker', icon: <FaDocker className="h-8 w-8" />, level: 60 },
  { name: 'Laravel', icon: <FaLaravel className="h-8 w-8" />, level: 50 },
  { name: 'C#/ASP.NET', icon: <SiDotnet className="h-8 w-8" />, level: 55 }
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <AnimatedElement 
      animation="slideRight"
      delay={0.1 + index * 0.05}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <AnimatedElement animation="bounce" delay={0.3 + index * 0.05} className="mr-3 text-primary-500 dark:text-primary-400">
            {skill.icon}
          </AnimatedElement>
          <div className="font-medium text-gray-900 dark:text-white">{skill.name}</div>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</div>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <AnimatedElement
          animation="slideRight"
          delay={0.2 + index * 0.05}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
          style={{ width: `${skill.level}%` }}
        >
          <div className="w-full h-full"></div>
        </AnimatedElement>
      </div>
    </AnimatedElement>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Frontend Skills</h2>
          <AnimatedElement animation="scale" delay={0.2} className="h-1 w-20 mx-auto rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-primary-500 to-accent-500"></div>
          </AnimatedElement>
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              As a specialized Frontend Developer, I&apos;ve mastered various frontend technologies, frameworks, and libraries. Here&apos;s a breakdown of my technical expertise and proficiency levels.
            </p>
          </AnimatedElement>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <AnimatedElement animation="slideUp" delay={0.1} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3">
                <FaReact className="text-primary-600 dark:text-primary-400" /> 
                React Ecosystem
              </h3>
            </AnimatedElement>
            <div className="space-y-4">
              {reactSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slideUp" delay={0.2} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
            <AnimatedElement animation="fadeIn" delay={0.3}>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3">
                <SiVuedotjs className="text-primary-600 dark:text-primary-400" /> 
                Vue Ecosystem
              </h3>
            </AnimatedElement>
            <div className="space-y-4">
              {vueSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement animation="slideUp" delay={0.3} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3">
                <SiTailwindcss className="text-primary-600 dark:text-primary-400" /> 
                CSS & UI/UX
              </h3>
            </AnimatedElement>
            <div className="space-y-4">
              {cssSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.3} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
            <AnimatedElement animation="fadeIn" delay={0.4}>
              <h3 className="text-xl font-semibold text-center mb-6 text-gray-900 dark:text-white flex items-center justify-center gap-3">
                <SiTailwindcss className="text-primary-600 dark:text-primary-400" /> 
                Additional Skills
              </h3>
            </AnimatedElement>
            <div className="space-y-4">
              {additionalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

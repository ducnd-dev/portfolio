'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiNestjs, SiVuedotjs, SiNuxtdotjs, SiDotnet, SiMysql, SiFirebase, SiSupabase, SiGraphql } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const frontendSkills: Skill[] = [
  { name: 'Vue.js', icon: <SiVuedotjs className="h-8 w-8" />, level: 80 },
  { name: 'React.js', icon: <FaReact className="h-8 w-8" />, level: 75 },
  { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8" />, level: 70 },
  { name: 'Nuxt.js', icon: <SiNuxtdotjs className="h-8 w-8" />, level: 80 },
  { name: 'Next.js', icon: <SiNextdotjs className="h-8 w-8" />, level: 75 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-8 w-8" />, level: 80 }
];

const backendSkills: Skill[] = [
  { name: 'Node.js', icon: <FaNodeJs className="h-8 w-8" />, level: 60 },
  { name: 'NestJS', icon: <SiNestjs className="h-8 w-8" />, level: 60 },
  { name: 'Laravel', icon: <FaLaravel className="h-8 w-8" />, level: 50 },
  { name: 'PHP', icon: <FaPhp className="h-8 w-8" />, level: 60 },
  { name: 'C#/ASP.NET', icon: <SiDotnet className="h-8 w-8" />, level: 55 },
  { name: 'MySQL', icon: <SiMysql className="h-8 w-8" />, level: 65 },
  { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8" />, level: 50 }
];

const otherSkills: Skill[] = [
  { name: 'Docker', icon: <FaDocker className="h-8 w-8" />, level: 60 },
  { name: 'Firebase', icon: <SiFirebase className="h-8 w-8" />, level: 65 },
  { name: 'Supabase', icon: <SiSupabase className="h-8 w-8" />, level: 60 },
  { name: 'GraphQL', icon: <SiGraphql className="h-8 w-8" />, level: 65 },
  { name: 'Git', icon: <FaGitAlt className="h-8 w-8" />, level: 80 },
  { name: 'REST APIs', icon: <FaDatabase className="h-8 w-8" />, level: 90 }
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="mr-3 text-primary-500 dark:text-primary-400">{skill.icon}</div>
          <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className={`h-3 rounded-full ${getGradientClass(skill.level)}`}
        />
      </div>
    </motion.div>
  );
}

function getGradientClass(level: number): string {
  if (level >= 90) return 'bg-gradient-to-r from-primary-600 to-primary-400';
  if (level >= 80) return 'bg-gradient-to-r from-tertiary-600 to-tertiary-400';
  if (level >= 70) return 'bg-gradient-to-r from-secondary-600 to-secondary-400';
  return 'bg-gradient-to-r from-accent-600 to-accent-400';
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">{title}</h3>
      <div>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-DEFAULT">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies I&apos;ve been working with recently. I&apos;m constantly learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SkillCategory title="Frontend" skills={frontendSkills} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SkillCategory title="Backend" skills={backendSkills} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SkillCategory title="Other" skills={otherSkills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

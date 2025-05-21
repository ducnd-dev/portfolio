'use client';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ElementType } from 'react';

interface SocialIconLink {
  name: string;
  url: string;
  icon: ElementType;
  gradientColors?: string;
}

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconClassName?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  showGithub?: boolean;
  showLinkedin?: boolean;
  showTwitter?: boolean;
  useGradient?: boolean;
  customIcons?: SocialIconLink[];
}

export default function SocialIcons({ 
  className = '', 
  iconSize = 6,
  iconClassName,
  githubUrl = "https://github.com/yourusername",
  linkedinUrl = "https://linkedin.com/in/yourusername",
  twitterUrl = "https://twitter.com/yourusername",
  showGithub = true,
  showLinkedin = true,
  showTwitter = true,
  useGradient = false,
  customIcons = []
}: SocialIconsProps) {  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {showGithub && (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClassName || (useGradient 
            ? "relative group overflow-hidden"
            : "text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-all transform hover:-translate-y-1")}
          aria-label="GitHub"
        >
          {useGradient && (
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 -z-10"></span>
          )}
          <FaGithub className={`w-${iconSize} h-${iconSize} ${useGradient ? 'group-hover:text-white transition-colors duration-300' : ''}`} />
        </a>
      )}
      
      {showLinkedin && (
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClassName || (useGradient 
            ? "relative group overflow-hidden"
            : "text-gray-600 hover:text-tertiary-500 dark:text-gray-400 dark:hover:text-tertiary-400 transition-all transform hover:-translate-y-1")}
          aria-label="LinkedIn"
        >
          {useGradient && (
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-tertiary-600 to-tertiary-500 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 -z-10"></span>
          )}
          <FaLinkedin className={`w-${iconSize} h-${iconSize} ${useGradient ? 'group-hover:text-white transition-colors duration-300' : ''}`} />
        </a>
      )}
      
      {showTwitter && (
        <a 
          href={twitterUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={iconClassName || (useGradient 
            ? "relative group overflow-hidden"
            : "text-gray-600 hover:text-accent-500 dark:text-gray-400 dark:hover:text-accent-400 transition-all transform hover:-translate-y-1")}
          aria-label="Twitter"
        >
          {useGradient && (
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-600 to-accent-500 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 -z-10"></span>
          )}
          <FaTwitter className={`w-${iconSize} h-${iconSize} ${useGradient ? 'group-hover:text-white transition-colors duration-300' : ''}`} />
        </a>
      )}
      
      {customIcons.map((icon, index) => {
        const Icon = icon.icon;
        return (
          <a 
            key={`custom-icon-${index}`}
            href={icon.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={iconClassName || (useGradient 
              ? "relative group overflow-hidden"
              : "text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-all transform hover:-translate-y-1")}
            aria-label={icon.name}
          >
            {useGradient && (
              <span className={`absolute inset-0 w-full h-full ${icon.gradientColors || 'bg-gradient-to-r from-primary-600 to-primary-500'} opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300 -z-10`}></span>
            )}
            <Icon className={`w-${iconSize} h-${iconSize} ${useGradient ? 'group-hover:text-white transition-colors duration-300' : ''}`} />
          </a>
        );
      })}
    </div>
  );
}

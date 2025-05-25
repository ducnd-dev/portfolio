'use client';

import { FC, useMemo } from 'react';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa';

interface ProjectImagePlaceholderProps {
  title: string;
  category: string;
  className?: string;
}

/**
 * A component that generates a visually appealing placeholder when a project image is not available
 * Uses gradients and icons based on the project category (frontend, backend, fullstack)
 */
const ProjectImagePlaceholder: FC<ProjectImagePlaceholderProps> = ({ 
  title, 
  category,
  className = ''
}) => {  
  // Generate a unique but consistent background gradient based on project title
  const backgroundGradient = useMemo(() => {
    // Simple hash function to create a consistent number from a string
    const hash = title.split('').reduce((acc: number, char: string): number => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Determine gradient direction and colors based on category and hash
    // Use hash to slightly vary the gradient direction
    const gradientDirections = ['bg-gradient-to-br', 'bg-gradient-to-r', 'bg-gradient-to-tr', 'bg-gradient-to-b'];
    const gradientClass = gradientDirections[Math.abs(hash) % gradientDirections.length];
    
    let fromColor = '';
    let toColor = '';
    
    // Assign colors based on category
    switch(category) {
      case 'frontend':
        fromColor = 'from-primary-400';
        toColor = 'to-tertiary-500';
        break;
      case 'backend':
        fromColor = 'from-secondary-400';
        toColor = 'to-secondary-700';
        break;
      case 'fullstack':
        fromColor = 'from-accent-400';
        toColor = 'to-tertiary-600';
        break;
      default:
        // For 'mobile' or other categories
        fromColor = 'from-tertiary-400';
        toColor = 'to-primary-600';
    }

    return `${gradientClass} ${fromColor} ${toColor} animate-gradient-x`;
  }, [title, category]);

  // Determine which icon to show based on the project category
  const CategoryIcon = useMemo(() => {
    switch(category) {
      case 'frontend': return FaCode;
      case 'backend': return FaServer;
      case 'fullstack': return FaLaptopCode;
      default: return FaCode;
    }
  }, [category]);

  // Generate a two-letter acronym from the project name
  const acronym = useMemo(() => {
    return title
      .split(' ')
      .map((word: string) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }, [title]);

  return (
    <div className={`w-full h-full flex items-center justify-center relative overflow-hidden ${backgroundGradient} ${className}`}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNSAzLjMgMS40IDEuOCAxLjggMS44IDQuNiAwIDYuNC0xLjkgMS45LTUuMSAxLjktNyAwLTEuOS0xLjktMS45LTUuMSAwLTctMSAuOS0yLjEgMS40LTMuMyAxLjR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      {/* Overlay with title acronym and icon */}
      <div className="flex flex-col items-center justify-center z-10">
        <div className="text-white text-4xl font-bold mb-2">{acronym}</div>
        <CategoryIcon className="text-white text-3xl mb-3" />
        <div className="text-white text-sm font-medium bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      
      {/* Light shine effect */}
      <div className="absolute inset-0 bg-gradient-shine animate-shine"></div>
    </div>
  );
};

export default ProjectImagePlaceholder;
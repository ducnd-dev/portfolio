'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaReact, FaVuejs, FaLaptopCode, FaShoppingCart, FaGraduationCap, FaHeartbeat } from 'react-icons/fa';
import AnimatedElement from './AnimatedElement';

interface ProjectImageWithOverlayProps {
  title: string;
  category: string;
  imageSrc: string;
}

/**
 * Enhanced project image component that adds a branded overlay when using default images
 * Provides visual differentiation with icons and styling based on project type
 */
const ProjectImageWithOverlay: React.FC<ProjectImageWithOverlayProps> = ({ 
  title, 
  category,
  imageSrc
}) => {
  const [isDefaultImage, setIsDefaultImage] = useState(false);
  const [imgType, setImgType] = useState<string>('');
    useEffect(() => {
    // Check if using a default image and determine which type
    if (imageSrc.includes('default-')) {
      setIsDefaultImage(true);
      
      if (imageSrc.includes('default-react')) setImgType('react');
      else if (imageSrc.includes('default-vue')) setImgType('vue');
      else if (imageSrc.includes('default-frontend')) setImgType('frontend');
      else if (imageSrc.includes('default-ecommerce')) setImgType('ecommerce');
      else if (imageSrc.includes('default-education')) setImgType('education');
      else if (imageSrc.includes('default-healthcare')) setImgType('healthcare');
      else if (imageSrc.includes('default-portfolio')) setImgType('portfolio');
      else setImgType('generic');
    } else {
      setIsDefaultImage(false);
    }
  }, [imageSrc]);
    // Get appropriate icon based on image type
  const getIcon = () => {
    switch (imgType) {
      case 'react': return <FaReact className="text-2xl text-blue-400" />;
      case 'vue': return <FaVuejs className="text-2xl text-green-500" />;
      case 'ecommerce': return <FaShoppingCart className="text-2xl text-yellow-400" />;
      case 'education': return <FaGraduationCap className="text-2xl text-purple-400" />;
      case 'healthcare': return <FaHeartbeat className="text-2xl text-red-500" />;
      case 'portfolio': return <FaLaptopCode className="text-2xl text-pink-400" />; 
      case 'frontend':
      default: return <FaLaptopCode className="text-2xl text-sky-400" />;
    }
  };
  
  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Project image with blur loading */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        className={`object-cover transition-all duration-300 ${isDefaultImage ? 'opacity-90 group-hover:scale-110' : 'group-hover:scale-105'}`}
        onError={(e) => {
          console.log(`Using fallback image for ${title}`);
          e.currentTarget.src = '/projects/default-project.jpg';
          setIsDefaultImage(true);
          setImgType('generic');
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50"></div>
        {/* Enhanced overlay for default images with animation */}
      {isDefaultImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedElement animation="scale" duration={0.4}>
            <div className="text-center px-4 py-3 rounded-lg backdrop-blur-sm bg-black/30 transform transition-transform duration-300 group-hover:scale-105 border border-white/10">
              <div className="flex items-center justify-center mb-2">
                <AnimatedElement animation="bounce" delay={0.1}>
                  {getIcon()}
                </AnimatedElement>
                <h3 className="text-white text-xl font-bold ml-2">{title}</h3>
              </div>
              <AnimatedElement animation="fadeIn" delay={0.2}>
                <span className="text-white/80 text-sm uppercase tracking-wider">{category} Development</span>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      )}
    </div>
  );
};

export default ProjectImageWithOverlay;

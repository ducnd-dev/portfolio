'use client';

import React, { useEffect, useRef, ReactNode, useState } from 'react';
import { motion, useAnimation, Variant, useInView } from 'framer-motion';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale' | 'bounce' | 'rotate' | 'flip' | 'typewriter';
  duration?: number;
  delay?: number;
  once?: boolean;
  className?: string;
  threshold?: number;
  style?: React.CSSProperties;
}

/**
 * A versatile component that adds various animation effects to its children
 */
const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  animation = 'fadeIn', 
  duration = 0.5, 
  delay = 0, 
  once = true,
  className = '',
  threshold = 0.1,
  style = {}
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  // Animation variants
  const animations: Record<string, { initial: Variant; animate: Variant }> = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration, delay } }
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration, delay } }
    },
    slideRight: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    slideLeft: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0, transition: { duration, delay } }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1, transition: { duration, delay } }
    },
    bounce: {
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: duration * 1.2, 
          delay,
          type: "spring", 
          stiffness: 200, 
          damping: 15 
        } 
      }
    },
    rotate: {
      initial: { opacity: 0, rotate: -10, scale: 0.9 },
      animate: { 
        opacity: 1, 
        rotate: 0, 
        scale: 1, 
        transition: { duration, delay } 
      }
    },
    flip: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { 
        opacity: 1, 
        rotateY: 0, 
        transition: { 
          duration: duration * 1.2, 
          delay 
        } 
      }
    }
  };
  
  // Special case for typewriter animation
  const isTypewriter = animation === 'typewriter';
  
  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    }
  }, [isInView, controls]);
  
  // For regular animations using variants
  if (!isTypewriter) {
    const selectedAnimation = animations[animation] || animations.fadeIn;
    
    return (
      <motion.div
        ref={ref}
        initial="initial"
        animate={controls}
        variants={selectedAnimation}
        className={className}
        style={style}
      >
        {children}
      </motion.div>
    );
  }
  
  // Special handling for typewriter animation
  return (
    <div className={className} ref={ref}>
      {isInView && typeof children === 'string' && (
        <TypewriterText text={children} speed={duration * 20} delay={delay * 1000} />
      )}
      {isInView && typeof children !== 'string' && children}
    </div>
  );
};

// Helper component for typewriter effect
const TypewriterText: React.FC<{ text: string; speed: number; delay: number }> = ({ text, speed, delay }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0) {
      timeout = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }
    
    function startTyping() {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed, delay]);
  
  return (
    <span>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default AnimatedElement;
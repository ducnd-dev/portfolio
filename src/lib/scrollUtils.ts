'use client';

/**
 * Smoothly scrolls to an element with the specified ID
 * @param id The ID of the element to scroll to (without the # sign)
 */
export const scrollToSection = (id: string): void => {
  // Prevent default anchor behavior
  const element = document.getElementById(id);
  
  if (element) {
    // Add some offset to account for fixed header
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    // Smooth scroll to the target
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SocialIcons from './ui/SocialIcons';
import AnimatedElement from './ui/AnimatedElement';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="slideRight" delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Đức<span className="text-primary">Nguyễn</span>
              </h3>
              <p className="text-gray-400 mb-4">
                A professional portfolio showcasing my skills, projects, and experience in web development and software engineering.
              </p>
              <div className="flex items-center space-x-4">
                <AnimatedElement animation="fadeIn" delay={0.3}>
                  <SocialIcons 
                    iconSize={5} 
                    iconClassName="text-gray-400 hover:text-white dark:hover:text-white transition-all transform hover:-translate-y-1"
                    customIcons={[
                      {
                        name: "Email",
                        url: "mailto:nguyendinhducbg2904@gmail.com",
                        icon: FaEnvelope
                      },
                      {
                        name: "Phone",
                        url: "tel:+84347634141",
                        icon: FaPhone
                      },
                      {
                        name: "Location",
                        url: "https://maps.google.com/?q=Hanoi+Vietnam",
                        icon: FaMapMarkerAlt
                      }
                    ]}
                  />
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <AnimatedElement animation="fadeIn" delay={0.3}>
                  <li>
                    <Link href="/#about" className="text-gray-400 hover:text-primary transition-colors">
                      About
                    </Link>
                  </li>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.35}>
                  <li>
                    <Link href="/#skills" className="text-gray-400 hover:text-primary transition-colors">
                      Skills
                    </Link>
                  </li>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.4}>
                  <li>
                    <Link href="/#projects" className="text-gray-400 hover:text-primary transition-colors">
                      Projects
                    </Link>
                  </li>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.45}>
                  <li>
                    <Link href="/#experience" className="text-gray-400 hover:text-primary transition-colors">
                      Experience
                    </Link>
                  </li>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.5}>
                  <li>
                    <Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                </AnimatedElement>
              </ul>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideLeft" delay={0.3}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              
              <AnimatedElement animation="fadeIn" delay={0.4}>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium">Email:</span> nguyendinhducbg2904@gmail.com
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeIn" delay={0.45}>
                <p className="text-gray-400 mb-2">
                  <span className="font-medium">Phone:</span> +84 347 634 141
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="fadeIn" delay={0.5}>
                <p className="text-gray-400">
                  <span className="font-medium">Location:</span> Ha Noi, Viet Nam
                </p>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-gray-400">
              &copy; {currentYear} Đức<span className="text-primary">Nguyễn</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed and developed by <span className="text-primary">Nguyễn Đình Đức</span>
            </p>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
}

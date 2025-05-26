'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import SocialIcons from '../ui/SocialIcons';
import AnimatedElement from '../ui/AnimatedElement';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send the form data to your backend or a form service
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-DEFAULT relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement animation="slideUp" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <AnimatedElement animation="scale" delay={0.2} className="h-1 w-20 mx-auto rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-primary-500 to-secondary-500"></div>
          </AnimatedElement>
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out using the form below.
            </p>
          </AnimatedElement>
        </AnimatedElement>

        <div className="flex flex-col lg:flex-row gap-12">
          <AnimatedElement animation="slideRight" delay={0.1} className="lg:w-1/3">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out to me through any of these channels. I&apos;m always open to discussing new projects,
                opportunities, or partnerships.
              </p>

              <div className="space-y-4">
                <AnimatedElement animation="fadeIn" delay={0.2}>
                  <div className="flex items-start">
                    <AnimatedElement animation="bounce" delay={0.4} className="p-3 bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 rounded-lg mr-4 shadow-sm">
                      <FaEnvelope className="h-5 w-5" />
                    </AnimatedElement>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                      <a href="mailto:nguyendinhducbg2904@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                        nguyendinhducbg2904@gmail.com
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.3}>
                  <div className="flex items-start">
                    <AnimatedElement animation="bounce" delay={0.5} className="p-3 bg-secondary-100 text-secondary-600 dark:bg-secondary-900/20 dark:text-secondary-400 rounded-lg mr-4 shadow-sm">
                      <FaPhoneAlt className="h-5 w-5" />
                    </AnimatedElement>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">Phone</h4>
                      <a href="tel:+84973243422" className="text-gray-600 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors">
                        +84 973 243 422
                      </a>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.4}>
                  <div className="flex items-start">
                    <AnimatedElement animation="bounce" delay={0.6} className="p-3 bg-accent-100 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400 rounded-lg mr-4 shadow-sm">
                      <FaMapMarkerAlt className="h-5 w-5" />
                    </AnimatedElement>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-medium">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Hanoi, Vietnam
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>

            <AnimatedElement animation="fadeIn" delay={0.5}>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h3>
                <SocialIcons className="flex justify-start gap-4" iconSize={6} />
              </div>
            </AnimatedElement>
          </AnimatedElement>

          <AnimatedElement animation="slideLeft" delay={0.3} className="lg:w-2/3">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatedElement animation="fadeIn" delay={0.4} className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </AnimatedElement>
                  
                  <AnimatedElement animation="fadeIn" delay={0.5} className="space-y-2">
                    <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                      placeholder="Your email"
                    />
                  </AnimatedElement>
                </div>
                
                <AnimatedElement animation="fadeIn" delay={0.6} className="space-y-2">
                  <label htmlFor="subject" className="text-gray-700 dark:text-gray-300 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                    placeholder="Subject"
                  />
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.7} className="space-y-2">
                  <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all resize-none text-gray-900 dark:text-white"
                    placeholder="Your message"
                  ></textarea>
                </AnimatedElement>
                
                <AnimatedElement animation="fadeIn" delay={0.8}>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${
                        isSubmitting 
                          ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed' 
                          : 'bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400 rounded-lg">
                      Your message has been sent successfully! I&apos;ll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400 rounded-lg">
                      There was an error sending your message. Please try again later.
                    </div>
                  )}
                </AnimatedElement>
              </form>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

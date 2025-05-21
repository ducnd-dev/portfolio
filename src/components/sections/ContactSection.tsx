'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaYoutube } from 'react-icons/fa';
import SocialIcons from '../ui/SocialIcons';

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

  return (    <section id="contact" className="py-20 bg-white dark:bg-dark-DEFAULT relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-accent-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out using the form below.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Feel free to reach out to me through any of these channels. I&apos;m always open to discussing new projects,
                opportunities, or partnerships.
              </p>

              <div className="space-y-4">                <div className="flex items-start">
                  <div className="p-3 bg-primary-100 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 rounded-lg mr-4 shadow-sm">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                    <a href="mailto:contact@yourdomain.com" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                      contact@yourdomain.com
                    </a>
                  </div>
                </div>                <div className="flex items-start">
                  <div className="p-3 bg-secondary-100 text-secondary-600 dark:bg-secondary-900/20 dark:text-secondary-400 rounded-lg mr-4 shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">                <div className="p-3 bg-tertiary-100 text-tertiary-600 dark:bg-tertiary-900/20 dark:text-tertiary-400 rounded-lg mr-4 shadow-sm">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      San Francisco, CA, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>            <div>              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <SocialIcons 
                iconSize={5} 
                className="space-x-4" 
                useGradient={true}
                showTwitter={false}
                customIcons={[
                  {
                    name: "Instagram",
                    url: "https://instagram.com/yourusername",
                    icon: FaInstagram,
                    gradientColors: "bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500"
                  },
                  {
                    name: "YouTube",
                    url: "https://youtube.com/@yourusername",
                    icon: FaYoutube,
                    gradientColors: "bg-gradient-to-r from-red-600 to-red-500"
                  }
                ]}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >            <div className="bg-white dark:bg-dark-light rounded-lg shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-primary-500 to-tertiary-500 h-6 w-1 rounded-full mr-3"></span>
                Send me a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-700 hover:to-primary-600 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-center text-green-500 dark:text-green-400">
                    Message sent successfully!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="mt-4 text-center text-red-500 dark:text-red-400">
                    Failed to send message. Please try again.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

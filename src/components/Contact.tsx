
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send the form data to a server
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message (in a real app, this would be after successful submission)
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="absolute -top-[40%] -right-[30%] w-[60%] h-[60%] rounded-full bg-neon-blue/5 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -bottom-[30%] -left-[20%] w-[50%] h-[50%] rounded-full bg-neon-purple/5 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Get In <span className="text-neon-blue">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400">I'm open to freelance opportunities, collaborations, and interesting projects.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-neon-blue mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <p className="text-gray-300">hello@neonflux.design</p>
              </div>
              
              <div className="flex items-center">
                <div className="text-neon-blue mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center">
                <div className="text-neon-blue mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Connect</h3>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin', 'instagram'].map((social) => (
                  <motion.a 
                    key={social}
                    href={`https://${social}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-gray-800 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-800 p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-black/50 border-gray-800 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full bg-black/50 border-gray-800 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  required
                  className="w-full bg-black/50 border border-gray-800 rounded-md p-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 px-8 py-3 rounded-md text-white font-medium transition-all duration-300 w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { motion } from 'framer-motion';

const TechSleekFooter = () => {
  return (
    <footer className="w-full bg-black text-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-8"
      >
        {/* Footer Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gradient-to-r from-cyan-500 to-purple-600 uppercase">
              Lok<span className="text-gray-400">Alamanda</span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Shaping the future of technology with every step.
            </p>
          </div>

          {/* Social Media Icons - Inline Layout */}
          <div className="flex justify-center md:justify-end space-x-6 items-center">
            {['email', 'github', 'linkedin', 'instagram'].map((social) => (
              <motion.div
                key={social}
                className="group w-12 h-12 flex justify-center items-center space-x-2 rounded-full bg-transparent border-2 border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                    <a
                      href={social === 'email' ? 'mailto:contact@lokprasanth09s@gmail.com' : 
                            social === 'github' ? 'https://github.com/yourprofile' :
                            social === 'linkedin' ? 'https://www.linkedin.com/in/lok-prasanth' :
                            'https://instagram.com/lok_alamanda'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group-hover:text-cyan-500 flex items-center"
                    >
                  {/* Email Icon */}
                  {social === 'email' && (
                    <img 
                      src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454734_640.png" 
                      alt="Email" 
                      className="w-8 h-8" 
                    />
                  )}

                  {/* GitHub Icon */}
                  {social === 'github' && (
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                      alt="GitHub" 
                      className="w-8 h-8" 
                    />
                  )}

                  {/* LinkedIn Icon */}
                  {social === 'linkedin' && (
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                      alt="LinkedIn" 
                      className="w-8 h-8"
                    />
                  )}

                  {/* Instagram Icon */}
                  {social === 'instagram' && (
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                      alt="Instagram" 
                      className="w-8 h-8"
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LokAlamanda. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default TechSleekFooter;

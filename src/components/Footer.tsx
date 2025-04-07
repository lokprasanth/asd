import { motion } from 'framer-motion';

const MinimalSocialFooter = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center"
      >
        {/* Simple Logo and Tagline */}
        <h2 className="text-3xl font-semibold mb-4">
          <span className="text-neutral-300">Lok</span><span className="text-gray-400">Alamanda</span>
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          Innovating with clarity and precision for a clean digital experience.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center space-x-8">
          {['twitter', 'github', 'linkedin', 'instagram'].map((social) => (
            <motion.div
              key={social}
              className="group w-12 h-12 flex justify-center items-center rounded-full bg-gray-800 hover:bg-gray-600 transition-all"
            >
              <a
                href={`https://${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 group-hover:text-white transition-colors"
              >
                {social === 'twitter' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                )}
                {social === 'github' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.44 3.26 8.17 7.72 9.47.56.1.76-.24.76-.5v-1.8c-3.14.67-3.8-1.44-3.8-1.44-.51-1.28-1.25-1.62-1.25-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.15 1.73 1.15 1.01 1.73 2.64 1.23 3.28.94.1-.73.39-1.23.72-1.52-2.64-.3-5.44-1.32-5.44-5.87 0-1.3.46-2.36 1.23-3.18-.12-.3-.54-1.5.12-3.14 0 0 1.05-.34 3.42 1.28.99-.28 2.06-.42 3.11-.42s2.12.14 3.11.42c2.37-1.62 3.42-1.28 3.42-1.28.66 1.64.24 2.84.12 3.14.77.82 1.23 1.88 1.23 3.18 0 4.56-2.8 5.57-5.44 5.87.39.32.74.95.74 1.89v2.8c0 .26.2.6.76.5C18.74 20.17 22 16.44 22 12c0-5.52-4.48-10-10-10z"></path>
                  </svg>
                )}
                {social === 'linkedin' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8c0 1.104-.896 2-2 2s-2-.896-2-2c0-1.104.896-2 2-2s2 .896 2 2zM4 8c0 1.104-.896 2-2 2s-2-.896-2-2c0-1.104.896-2 2-2s2 .896 2 2zM3 5c-.552 0-1 .448-1 1v15c0 .552.448 1 1 1h18c.552 0 1-.448 1-1V6c0-.552-.448-1-1-1H3z"></path>
                  </svg>
                )}
                {social === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v6c0 1.104-.896 2-2 2H9c-1.104 0-2-.896-2-2V2zM1 9c0-1.104.896-2 2-2h3v10H3c-1.104 0-2-.896-2-2V9zM20 9c0 1.104-.896 2-2 2h-3v10h3c1.104 0 2-.896 2-2V9z"></path>
                  </svg>
                )}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-xs text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} LokFlux. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default MinimalSocialFooter;

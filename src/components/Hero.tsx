
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        duration: 1.5,
        text: "Welcome to NeonFlux",
        ease: "power2.inOut",
        delay: 0.5
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black/90 to-neon-purple/20 z-10"></div>
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-neon-blue/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-neon-purple/10 blur-[120px] animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-neon-blue text-xl md:text-2xl font-medium mb-3">Portfolio</h2>
          </motion.div>
          
          <motion.h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 glitch-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.h1>
          
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Creating cutting-edge digital experiences with futuristic design and advanced technology
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="bg-gradient-to-r from-neon-blue to-neon-purple px-8 py-3 rounded-md text-white font-medium hover:shadow-glow transition-all duration-300 inline-block"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

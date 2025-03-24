import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [glowLines, setGlowLines] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateGlowLines = () => {
      const newLines = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 80}%`,
        y: `${Math.random() * 80}%`,
        width: Math.random() * 100 + 50,
        rotate: Math.random() * 360,
      }));
      setGlowLines(newLines);
    };

    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
      setStars(newStars);
    };

    generateGlowLines();
    generateStars();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white overflow-hidden px-6 md:px-8 lg:px-12">
      {/* Background Glow Lines */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.y,
            left: star.x,
            opacity: star.opacity,
          }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {glowLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60"
          style={{
            width: `${line.width}px`,
            height: "2px",
            top: line.y,
            left: line.x,
            transform: `rotate(${line.rotate}deg)`,
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Holographic Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-700 tracking-widest uppercase text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Hyperspace Vision
      </motion.h1>

      {/* Main Content Panel */}
      <motion.div
        className="relative w-full max-w-6xl bg-opacity-10 backdrop-blur-lg p-6 md:p-12 rounded-3xl border border-[rgba(255,255,255,0.2)] mt-8 md:mt-12 shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Futuristic Info Block */}
          <motion.div
            className="relative flex flex-col space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide">
              Exploring the Infinite
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Merging <strong>AI intelligence, spatial computing</strong>, and
              the <strong>deep unknown</strong>, we are redefining digital
              experiences.
            </p>
            <p className="text-gray-400 text-base md:text-lg">
              Welcome to the <strong>next-gen</strong> space where reality
              bends, and possibilities expand.
            </p>
            <button className="relative px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium bg-gradient-to-r from-black to-gray-400 rounded-lg shadow-xl hover:opacity-80 transition transform hover:scale-105 border border-gray-900">
              Discover More
            </button>
          </motion.div>

          {/* Dynamic AI Sphere */}
          <motion.div
            className="relative w-full h-[300px] md:h-[450px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-purple-900 opacity-40 blur-3xl"></div>
            <motion.div
              className="w-40 md:w-60 h-40 md:h-60 rounded-full bg-opacity-10 border border-gray-700 flex items-center justify-center shadow-[0_0_60px_rgba(130,0,295,0.9)]"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <img
                src="https://unsplash.com/photos/purple-and-black-galaxy-illustration-uXchDIKs4qI"
                alt="Futuristic"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="relative w-full max-w-4xl bg-opacity-10 backdrop-blur-lg p-6 md:p-10 rounded-3xl border border-[rgba(255,255,255,0.2)] mt-12 md:mt-20 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide text-center">
          Contact Us
        </h2>
        <p className="text-gray-300 text-base md:text-lg text-center mt-4">
          Have a project in mind? Let's connect and create something futuristic.
        </p>
        <form className="mt-6 md:mt-8 space-y-4 md:space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 md:px-5 py-3 text-base md:text-lg bg-transparent border border-gray-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 md:px-5 py-3 text-base md:text-lg bg-transparent border border-gray-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full px-4 md:px-5 py-3 text-base md:text-lg bg-transparent border border-gray-900 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 md:py-4 text-base md:text-lg font-medium bg-gradient-to-r from-black to-gray-400 rounded-lg shadow-xl hover:opacity-80 transition border border-gray-700"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default About;

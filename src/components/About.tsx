import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [bgColor, setBgColor] = useState("bg-black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 300) {
        setBgColor("bg-black");
      } else {
        setBgColor("bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`relative min-h-screen flex flex-col justify-center items-center transition-colors duration-500 ${bgColor} text-white overflow-hidden`}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="absolute w-[700px] h-[700px] bg-gray-500 opacity-30 blur-[200px] rounded-full animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500 opacity-20 blur-[150px] rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Title Section with Animated Glow */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_20px_rgba(128,0,128,0.6)] animate-glow">
            Beyond Limits.
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Immersive digital experiences blending motion, interactivity, and design innovation.
          </p>
        </motion.div>

        {/* 3D Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image with 3D Hover Effect */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[450px] rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://source.unsplash.com/600x600/?cyberpunk,futuristic"
                alt="Futuristic Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500 to-black opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Text Side with Floating Effect */}
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-semibold text-white drop-shadow-md">Who Am I?</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              A creative visionary, shaping futuristic interfaces and engaging digital experiences.
            </p>
            <p className="text-gray-400 text-lg">
              Whether it’s <span className="text-purple-400">UI/UX</span>, <span className="text-blue-400">web development</span>, or <span className="text-pink-400">motion design</span>, my goal is to craft experiences that feel intuitive and powerful.
            </p>
          </motion.div>
        </div>

        {/* Floating 3D Stats */}
        <div className="flex flex-wrap justify-center mt-20 gap-12">
          {[
            { title: "Projects", number: "50+" },
            { title: "Years of Experience", number: "5+" },
            { title: "Happy Clients", number: "100%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-opacity-30 bg-gray-800 rounded-2xl p-8 backdrop-blur-lg shadow-2xl border border-gray-700 hover:scale-110 hover:shadow-gray-500 transition-transform duration-500 animate-float"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-white drop-shadow-md">{stat.number}</h3>
              <p className="text-gray-400 text-lg">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
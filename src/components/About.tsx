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
      {/* Starry Background Effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-80 bg-cover bg-center"
        />
      </div>

      {/* Small Background Planets */}
{/* Small Background Planets - Realistic Colors with Fixed Positions & Proper Rotation */}
{[...Array(8)].map((_, index) => {
  const planetImages = [
    "https://upload.wikimedia.org/wikipedia/commons/9/97/Mercury_in_true_color.jpg", // Mercury ⚪ (1st)
    "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg", // Venus 🟡 (2nd)
    "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg", // Earth 🌍 (3rd)
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg", // Mars 🔴 (4th)
    "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg", // Jupiter 🟠 (5th)
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg", // Saturn 🟠 with rings (6th)
    "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg", // Uranus 🟣 (7th)
    "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg", // Neptune 🔵 (8th)
  ];

  // Fixed planet positions (from closest to farthest from Sun)
  const fixedPositions = [
    { top: "1%", left: "33%" }, // Mercury
    { top: "45%", left: "35%" }, // Venus
    { top: "25%", left: "28%" }, // Earth
    { top: "45%", left: "80%" }, // Mars
    { top: "55%", left: "50%" }, // Jupiter
    { top: "70%", left: "24%" }, // Saturn
    { top: "85%", left: "5%" }, // Uranus
    { top: "82%", left: "85%" }, // Neptune
  ];

  return (
    <motion.div
      key={index}
      className="absolute opacity-90"
      style={{
        width: `${40 + index * 10}px`, // Different sizes but fixed
        height: `${40 + index * 10}px`,
        top: fixedPositions[index].top, // Uses fixed positions
        left: fixedPositions[index].left,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%", // Keeps it circular
        backgroundImage: `url(${planetImages[index]})`, // Uses real planet textures
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(1.1) contrast(1.2)", // Enhances visibility
        boxShadow: `0 0 15px rgba(255, 255, 255, 0.3)`, // Soft glow
      }}
      animate={{
        y: [-5, 5, -5], // Floating motion
        rotate: [0, 360], // Now rotation will be visible
      }}
      transition={{
        y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" }, // Smooth rotation
      }}
    />
  );
})}


      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-extrabold text-white drop-shadow-lg">
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
                src="https://unsplash.com/photos/blue-and-black-galaxy-digital-wallpaper-qtRF_RxCAo0"
                alt="Futuristic Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Side */}
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
          {[{ title: "Projects", number: "50+" }, { title: "planets", number: "678" }, { title: "Happys", number: "100%" }].map((stat, index) => (
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
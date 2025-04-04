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

{/* Small Background Planets - Realistic Colors with Fixed Positions & Proper Rotation */}
{[...Array(12)].map((_, index) => {
  const planetImages = [
    "https://pngimg.com/uploads/github/github_PNG28.png", // Mercury ⚪ (1st)
    "https://img.freepik.com/premium-vector/3d-web-development-icon-with-bubble-speech-concept-website-developer-coding-with-software-engineer-computer-screen-web-page-3d-programming-vector-icon-render-illustration_412828-1600.jpg?ga=GA1.1.1115525540.1734690644&semt=ais_hybrid", // Venus 🟡 (2nd)
    "https://img.freepik.com/premium-psd/html-3d-icon_498307-232.jpg", // Earth 🌍 (3rd)
    "https://pbs.twimg.com/profile_images/1730334391501488129/G0R0sjHH_400x400.jpg", // Mars 🔴 (4th)
    "https://static.vecteezy.com/system/resources/previews/022/100/657/non_2x/microsoft-excel-logo-transparent-free-png.png", // Jupiter 🟠 (5th)
    "https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png", // Saturn 🟠 with rings (6th)
    "https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png", // Uranus 🟣 (7th)
    "https://shopify.github.io/react-native-skia/img/logo.png", // Neptune 🔵 (8th)
    "https://mir-s3-cdn-cf.behance.net/projects/404/ed144c99766163.Y3JvcCwxNTM0LDEyMDAsMzQsMA.png", // fig 🟤 (9th)
    "https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png", // Proxima Centauri 🌟 (10th)
    "https://static.vecteezy.com/system/resources/previews/012/697/295/non_2x/3d-python-programming-language-logo-free-png.png", // Eris ⚫ (11th)
    "https://www.htx.gov.sg/images/default-source/news/2024/ai-article-1-banner-shot-min.jpg?sfvrsn=4b7c6915_1", // ai ⚪ (12th)
  ];

  // Fixed planet positions (from closest to farthest from Sun)
  const fixedPositions = [
    { top: "1%", left: "33%" }, // Mercury
    { top: "23%", left: "40%" }, // Venus
    { top: "2%", left: "15%" }, // Earth
    { top: "43%", left: "73%" }, // Mars
    { top: "55%", left: "50%" }, // Jupiter
    { top: "70%", left: "24%" }, // Saturn
    { top: "89%", left: "5%" }, // Uranus
    { top: "82%", left: "87%" }, // Neptune
    { top: "5%", left: "84%" }, // fig
    { top: "48%", left: "90%" }, // Proxima Centauri
    { top: "39%", left: "3%" }, // Eris
    { top: "15%", left: "59%" }, // ai
    
  ];
  const isDesktop = window.innerWidth >= 768;
  const size = isDesktop ? 50 + index * 5 : 30 + index * 2;
  
  return (
    <motion.div
      key={index}
      className="absolute opacity-90"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: fixedPositions[index].top,
        left: fixedPositions[index].left,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        backgroundImage: `url(${planetImages[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(1.1) contrast(1.2)",
        boxShadow: `0 0 15px rgba(255, 255, 255, 0.3)`,
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
          <img src="./lp.png" alt="Futuristic Vision" className="w-full h-full object-cover" />

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
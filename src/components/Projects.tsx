import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const projectLinks = [
  { name: "iTNT HUB Project", url: "https://itnthub.tn.gov.in/", description: "iTNT is building India’s largest Emerging & Deep Tech Innovation Network by connecting startups, researchers, and institutions. Website proudly created by me.", image: "./itnt.png" },
  { name: "Vitti Living ", url: "https://vittiliving.com/", description: "VITTI Living – Premium, custom home furniture crafted with style and precision,developed by me.", image: "./vitti.png" },
  { name: "Speed Exam", url: "https://speedexamwebsite.ldev.in/", description: "A secure, reliable online exam portal used in 127+ countries—streamlining recruitment with seamless testing,developed by me.", image: "./speed.png" },
  { name: "upcoming Project ", url: "https://example.com/delta", description: "Next-gen cybersecurity solutions.", image: "https://via.placeholder.com/300" },
  { name: "Vitti Living ", url: "https://vittiliving.com/", description: "VITTI Living – Premium, custom home furniture crafted with style and precision,developed by me.", image: "./vitti.png" },

];

const GrokReplica = () => {
  const [particles, setParticles] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [backgroundParticles, setBackgroundParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }).map((_, index) => ({
        id: index,
        angle: (index / 50) * 360,
        distance: Math.random() * 50 + 75,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 10 + 15,
        project: index % 10 === 0 ? projectLinks[(index / 10) % projectLinks.length] : null,
      }));
      setParticles(newParticles);
    };

    const generateBackgroundParticles = () => {
      const newBackgroundParticles = Array.from({ length: 100 }).map((_, index) => ({
        id: index,
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      }));
      setBackgroundParticles(newBackgroundParticles);
    };

    generateParticles();
    generateBackgroundParticles();
  }, []);

  const handleButtonClick = (url) => {
    setTimeout(() => window.open(url, "_blank"), 300);
  };

  return (
    <section
      id="projects"
      className="bg-black text-white min-h-screen md:min-h-screen sm:min-h-[120vh] flex flex-col items-center justify-center relative overflow-hidden px-5 md:px-10"
    >
      {/* Background Particles */}
      {backgroundParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: particle.y,
            left: particle.x,
            opacity: particle.opacity,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Projects</h1>

      <div className="flex flex-wrap justify-center items-center w-full max-w-6xl gap-6 transition-all duration-500">
        {/* Rotating Galaxy Effect */}
        <motion.div
          className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-blue-400 rounded-full"
              style={{ width: `${particle.size}px`, height: `${particle.size}px`, top: "50%", left: "50%", transformOrigin: "center" }}
            >
              <motion.div
                style={{ position: "absolute", width: "100%", height: "100%", transform: `rotate(${particle.angle}deg) translate(${particle.distance}px)` }}
              >
                <div className="w-full h-full bg-blue-400 rounded-full"></div>
                <div className="absolute w-[1px] bg-blue-300" style={{ height: `${particle.distance}px`, top: `-${particle.distance}px`, left: "50%", transform: "translateX(-50%)" }}></div>
                {particle.project && (
                  <button
                    onClick={() => setSelectedProject(particle.project)}
                    className="absolute w-12 h-12 md:w-8 md:h-8 bg-gray-800 text-white text-xs flex items-center justify-center rounded-md shadow-md hover:bg-gray-600 transition"
                    style={{ top: `-${particle.distance}px`, left: "50%", transform: "translateX(-50%)" }}
                  >
                    {particle.project.name}
                  </button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Panel */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="w-full max-w-md bg-gradient-to-br from-black to-blue-400 p-6 rounded-2xl shadow-lg relative border border-gray-600 text-white backdrop-blur-lg space-y-4 overflow-hidden"
          >
            <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 text-gray-300 hover:text-white">
              <X size={20} />
            </button>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-400 tracking-wide uppercase">{selectedProject.name}</h2>
            <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-40 object-cover rounded-lg shadow-md" />
            <p className="text-gray-300 text-lg leading-relaxed">{selectedProject.description}</p>
            <div className="relative">
              <button
                onClick={() => handleButtonClick(selectedProject.url)}
                className="relative block mt-4 text-white font-medium bg-gradient-to-r from-black to-blue-700 px-6 py-3 rounded-lg text-center shadow-lg hover:opacity-80 transition transform hover:scale-105 border border-gray-600"
              >
                Explore the Project
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GrokReplica;

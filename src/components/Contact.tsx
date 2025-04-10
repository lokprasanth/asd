import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const achievements = [
  {
    title: "ITNT HUB WEBSITE",
    subtitle: "AI meets interstellar exploration.",
    description:
      "Developed a neural network simulating star path predictions across galaxies.",
    image: "./lp.png",
    link: "https://yourdomain.com/docs/quantum-vision-cert.pdf", // Add this
  },
  {
    title: "VITTI Living",
    subtitle: "Digital twin of our solar system.",
    description:
      "Real-time planet data linked with 3D holographic UI and spatial gestures.",
    image: "./lp.png",
    link: "https://yourdomain.com/docs/quantum-vision-cert.pdf", // Add this
  },
  {
    title: "SPEED Exam",
    subtitle: "3D AI Guardian Interface",
    description:
      "A humanoid holographic assistant trained to adapt and respond intelligently.",
    image: "./lp.png",
  },
];

const transitionVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction > 0 ? -90 : 90,
    scale: 0.8,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    rotateY: direction < 0 ? 90 : -90,
    scale: 0.8,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

export default function Achievements() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextSlide = () => setIndex([(index + 1) % achievements.length, 1]);
  const prevSlide = () => setIndex([(index - 1 + achievements.length) % achievements.length, -1]);

  // Auto-play every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="achievements">
      <div className="relative w-full max-w-6xl mx-auto p-6 md:p-12 mt-10">
        <motion.h1
          className="text-5xl md:text-5xl font-extrabold bg-clip-text text-white bg-gradient-to-r from-white text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Achievements
        </motion.h1>

        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={transitionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center bg-gradient-to-tr from-black via-gray-900 to-gray-800 p-8 md:p-14 rounded-3xl border border-gray-700/40 shadow-[0_0_60px_rgba(0,0,255,0.2)] backdrop-blur-xl"
            >
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
                  {achievements[index].title}
                </h2>
                <p className="text-purple-200 text-lg">{achievements[index].subtitle}</p>
                <p className="text-gray-400 text-base md:text-lg">
                  {achievements[index].description}
                </p>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-xl hover:scale-105 hover:brightness-110 transition-all shadow-lg">
                  Dive Deeper
                </button>
              </div>

              {/* Glowing Sphere */}
              <motion.div
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-purple-500/30 shadow-[0_0_80px_rgba(160,80,255,0.5)] flex items-center justify-center relative z-10"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                <img
                  src={achievements[index].image}
                  alt="Achievement"
                  className="rounded-full w-full h-full object-cover shadow-2xl"
                />
                <div className="absolute w-full h-full rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
            <button
              onClick={prevSlide}
              className="p-3 bg-black/30 backdrop-blur-md hover:bg-black/60 text-white rounded-full"
            >
              <ChevronLeft size={30} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
            <button
              onClick={nextSlide}
              className="p-3 bg-black/30 backdrop-blur-md hover:bg-black/60 text-white rounded-full"
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

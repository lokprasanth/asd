import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const achievements = [
  {
    title: "iTNT HUB WEBSITE",
    subtitle: "Recognized Achievement in ITNT Hub Website Development (Government Project)",
    description:
      "Successfully developed and launched the official website for the ITNT Hub, a government initiative. The project involved designing a user-centric interface, ensuring seamless functionality, and adhering to the highest standards of performance and security. This achievement demonstrates dedication to delivering impactful digital solutions for government projects and reflects a commitment to quality and innovation.",
    image: "./lp.png",
    link: "https://yourdomain.com/docs/quantum-vision-cert.pdf",
  },
  {
    title: "Google Digital Marketing",
    subtitle: " Google Digital Marketing Certification fundamental",
    description:
      "Successfully completed the Google Digital Marketing Certification, gaining comprehensive knowledge and skills in digital marketing strategies. This certification covers key areas such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and data analytics. This achievement reflects my commitment to staying updated with the latest trends in digital marketing and my ability to implement effective strategies to drive online growth and engagement.",
    image: "./lp.png",
    link: "https://yourdomain.com/docs/quantum-vision-cert.pdf",
  },
  {
    title: "Full Stack Development Certification ",
    subtitle: "Achievement in Full Stack Development Certification (Udemy)",
    description:
      "Successfully completed the Full Stack Development course on Udemy, gaining in-depth knowledge and hands-on experience in both front-end and back-end technologies. The course covered key areas such as HTML, CSS, JavaScript,Angular,Python and more, equipping me with the skills to build dynamic and scalable web applications. This certification demonstrates my proficiency in full-stack development and my ability to create robust, high-performance websites and applications.",
    image: "./lp.png",
  },
];

const transitionVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction > 0 ? -180 : 180,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8,
    rotateY: direction < 0 ? 180 : -180,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

export default function Achievements() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextSlide = () => setIndex([(index + 1) % achievements.length, 1]);
  const prevSlide = () => setIndex([(index - 1 + achievements.length) % achievements.length, -1]);

  const handleDotClick = (idx) => setIndex([idx, idx > index ? 1 : -1]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section id="achievements" className="relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto p-6 md:p-12 mt-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-white text-center"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center bg-opacity-20 p-8 md:p-14 rounded-3xl border border-transparent shadow-xl backdrop-blur-lg"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
                  {achievements[index].title}
                </h2>
                <p className="text-lg text-gray-300">{achievements[index].subtitle}</p>
                <p className="text-gray-400 text-base md:text-lg">
                  {achievements[index].description}
                </p>
                <button className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl transform transition-all hover:scale-105 hover:shadow-xl hover:brightness-110">
                  Dive Deeper
                </button>
              </div>

              <motion.div
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-xl border-2 border-teal-500 shadow-lg bg-opacity-50 backdrop-blur-xl flex items-center justify-center relative z-10"
                animate={{
                  rotateY: [0, 180, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <img
                  src={achievements[index].image}
                  alt="Achievement"
                  className="rounded-xl w-full h-full object-cover shadow-xl"
                />
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

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {achievements.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full bg-teal-500 transition-all ${
                  idx === index ? "bg-teal-700 scale-125" : "opacity-50 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

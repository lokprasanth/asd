
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Galaxy",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A futuristic web design project featuring glassmorphism and neon elements."
  },
  {
    id: 2,
    title: "Cyber Dashboard",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "An advanced dashboard UI with dark mode and interactive data visualizations."
  },
  {
    id: 3,
    title: "Quantum App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A React Native mobile application with gesture-based interactions."
  },
  {
    id: 4,
    title: "Flux Motion",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A collection of advanced animations created using GSAP and Three.js."
  },
  {
    id: 5,
    title: "Synthwave Portfolio",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    description: "A retro-futuristic portfolio design with synthwave aesthetics."
  },
  {
    id: 6,
    title: "Neural Interface",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A concept UI for a neural interface system with minimalist design."
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      className="rounded-xl overflow-hidden group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
    >
      <div className="aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500" 
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-3">{project.description}</p>
          <span className="inline-block bg-neon-blue/20 backdrop-blur-sm text-neon-blue px-3 py-1 rounded-full text-xs">
            {project.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Design', 'UI/UX', 'Development', 'Animation'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Featured <span className="text-neon-purple">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative design and development solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'bg-black/50 text-gray-400 hover:text-white backdrop-blur-md'
              }`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors"
          >
            <span className="mr-2">Interested in working together?</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

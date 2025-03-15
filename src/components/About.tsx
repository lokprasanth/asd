
import { motion } from 'framer-motion';

const AboutCard = ({ title, icon, description }: { title: string; icon: string; description: string }) => {
  return (
    <motion.div
      className="bg-black/50 backdrop-blur-lg border border-gray-800 p-6 rounded-xl hover:shadow-glow hover:border-neon-blue/50 transition-all duration-300"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-neon-blue mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const cards = [
    {
      title: "UI/UX Design",
      icon: "✨",
      description: "Creating intuitive and engaging user experiences with cutting-edge design principles."
    },
    {
      title: "Web Development",
      icon: "💻",
      description: "Building responsive and performant web applications using modern technologies."
    },
    {
      title: "Animation",
      icon: "🎬",
      description: "Bringing interfaces to life with smooth animations and interactive elements."
    },
    {
      title: "Responsive Design",
      icon: "📱",
      description: "Ensuring perfect experiences across all devices and screen sizes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-dark-bg relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">About <span className="text-neon-blue">Me</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate digital creator focused on building modern, interactive, and visually stunning web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <AboutCard 
              key={index} 
              title={card.title} 
              icon={card.icon} 
              description={card.description} 
            />
          ))}
        </div>

        <motion.div
          className="mt-16 bg-black/30 backdrop-blur-md p-8 rounded-xl border border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">My <span className="text-neon-blue">Journey</span></h3>
              <p className="text-gray-400 mb-4">
                With over 5 years of experience in digital design and development, I've worked on projects ranging from small business websites to complex web applications.
              </p>
              <p className="text-gray-400">
                My passion lies in creating seamless user experiences that combine aesthetic appeal with functional design, always staying ahead of the latest industry trends and technologies.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-white">UI/UX Design</span>
                  <span className="text-neon-blue">90%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-white">React Development</span>
                  <span className="text-neon-blue">85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mb-1">
                  <span className="text-white">Animation</span>
                  <span className="text-neon-blue">80%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-neon-blue to-neon-purple h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

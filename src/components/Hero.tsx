import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [emoji, setEmoji] = useState('✨');
  const [backgroundParticles, setBackgroundParticles] = useState([]);
  const texts = ["Web Developer", "Think Different.", "Create the Future.", "Innovate Boldly."];
  let textIndex = 0;

  useEffect(() => {
    // Text change animation
    const titleRef = document.getElementById('title');
    if (titleRef) {
      const changeText = () => {
        gsap.to(titleRef, {
          duration: 1.5,
          text: texts[textIndex],
          ease: "power2.inOut",
          onComplete: () => {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(changeText, 2000);
          }
        });
      };
      changeText();
    }

    // Emoji change animation
    const emojiInterval = setInterval(() => {
      const emojis = ['✨', '🔥', '🚀', '💡', '🌟'];
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1500);

    // Particle generation
    const generateParticles = () => {
      const particles = Array.from({ length: 200 }).map((_, index) => ({
        id: index,
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1, // Star size range (1-3px)
        opacity: Math.random() * 0.8 + 0.2, // Opacity for twinkling effect
        speed: Math.random() * 1 + 0.5, // Speed for moving effect
        directionX: Math.random() * 2 - 1, // Random horizontal direction
        directionY: Math.random() * 2 - 1, // Random vertical direction
      }));
      setBackgroundParticles(particles);
    };

    generateParticles();

    return () => clearInterval(emojiInterval);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #000, #111)',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundImage: 'url("path_to_background_image.jpg")', // Add your background image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Starry Universe Background */}
      <div className="starry-background"></div>

      {/* Render background particles */}
      {backgroundParticles.map(particle => (
        <div
          key={particle.id}
          className="particle"  // CSS class for animation
          style={{
            position: 'absolute',
            top: particle.y,
            left: particle.x,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: particle.opacity,  // Keep opacity here for initial state
            pointerEvents: 'none',
            transform: `translate(-50%, -50%)`, // Initial transform for centering
            animationDelay: `${Math.random() * 3}s`, // Random delay for alternating effect
          }}
        />
      ))}

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
        <motion.h1
          id="title"
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            letterSpacing: '-1px',
            textShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
            transform: 'perspective(1000px) rotateX(10deg)',
            transition: 'transform 0.5s ease-in-out',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.h1>

        <motion.p
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.5rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Innovation that redefines the way you think, work, and create. {emoji}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          <a
            href="#explore"
            style={{
              display: 'inline-block',
              padding: '12px 36px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: '#000',
              background: 'white',
              borderRadius: '50px',
              boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.2)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 4px 30px rgba(255, 255, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 4px 20px rgba(255, 255, 255, 0.2)';
            }}
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Styles for particles animation */}
      <style>{`
        @keyframes blink {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .particle {
          animation: blink 3s alternate infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

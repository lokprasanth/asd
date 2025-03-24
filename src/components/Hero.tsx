import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [emoji, setEmoji] = useState('✨');
  const [backgroundParticles, setBackgroundParticles] = useState([]);
  const texts = ["galaxy", "Think Different.", "Create the Future.", "Innovate Boldly."];
  let textIndex = 0;

  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

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

    const emojiInterval = setInterval(() => {
      const emojis = ['✨', '🔥', '🚀', '💡', '🌟'];
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1500);

    const generateParticles = () => {
      const particles = Array.from({ length: 150 }).map((_, index) => ({
        id: index,
        x: `${Math.random() * 95 + 2}%`,
        y: `${Math.random() * 95 + 2}%`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
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
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #000, #111)',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundImage: 'url("path_to_background_image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Starry Background */}
      <div className="starry-background"></div>

      {/* Particles */}
      {backgroundParticles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            top: particle.y,
            left: particle.x,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: particle.opacity,
            pointerEvents: 'none',
            transform: 'translate( -50%, -50%)',
          }}
        />
      ))}

      {/* Hero Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
        <motion.h1
          id="title"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            letterSpacing: '-1px',
            textShadow: '0px 4px 20px rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.h1>

        <motion.p
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.2rem',
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
        href="/path-to-your-resume.pdf" 
        download="Your_Resume.pdf"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 30px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#000',
          background: 'white',
          borderRadius: '50px',
          boxShadow: '0px 4px 20px rgba(255, 255, 255, 0.2)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          textDecoration: 'none',
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
          Download 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>

        </motion.div>
      </div>

      {/* Responsive Sun Effect */}
      <div
  className="sun-effect"
  style={{
    position: 'absolute',
    top: '70%',
    right: '-5vw', 
    width: 'clamp(150px, 25vw, 300px)', 
    height: 'clamp(150px, 25vw, 300px)', 
    background: `
      radial-gradient(circle, 
        rgba(255, 230, 0, 1) 25%, 
        rgba(255, 140, 0, 0.9) 50%, 
        rgba(255, 60, 0, 0.8) 70%, 
        rgba(100, 0, 0, 0.6) 85%, 
        rgba(0, 0, 0, 0) 95%
      ),
      repeating-radial-gradient(circle, 
        rgba(255, 200, 0, 0.6) 3%, 
        rgba(255, 50, 0, 0.7) 7%, 
        rgba(100, 0, 0, 0.4) 12%
      ),
      radial-gradient(circle at 30% 40%, 
        rgba(255, 255, 255, 0.1) 5%, 
        rgba(255, 100, 0, 0.2) 15%, 
        rgba(0, 0, 0, 0) 50%
      )
    `,
    borderRadius: '50%',
    boxShadow: `
      0px 0px 100px rgba(255, 200, 0, 0.9), 
      0px 0px 140px rgba(255, 80, 0, 0.8),
      0px 0px 180px rgba(255, 30, 0, 0.7)
    `,
    animation: 'burningEffect 2s infinite alternate ease-in-out, shapeWarp 4s infinite alternate ease-in-out',
    transform: 'translateY(-50%)',
    zIndex: 1,
  }}
></div>

<style>
  {`
    @keyframes burningEffect {
      0% {
        filter: blur(6px) brightness(1);
      }
      50% {
        filter: blur(9px) brightness(1.3);
      }
      100% {
        filter: blur(6px) brightness(1);
      }
    }

    @keyframes shapeWarp {
      0% {
        border-radius: 50%;
      }
      50% {
        border-radius: 48% 52% 50% 52%;
      }
      100% {
        border-radius: 50%;
      }
    }
  `}
</style>


      {/* Styles for particles animation */}
      <style>{`
        @keyframes blink {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        .particle {
          animation: blink 3s alternate infinite;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          #title {
            font-size: 2.5rem !important;
          }

          .sun-effect {
            right: -15vw; /* Moves it slightly off-screen */
            width: 150px;
            height: 150px;
            filter: blur(10px); /* Reduces blur for smaller screens */
            box-shadow: 0px 0px 40px rgba(255,255,0,0.8), 0px 0px 120px rgba(255,165,0,0.9);

          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

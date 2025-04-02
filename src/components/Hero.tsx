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
          Learn more 
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

{/* Cyber Firewall Sun Effect */}
<div className="firewall-sun">
  <div className="sun-core"></div>
  <div className="shield">
    <div className="ring ring1"></div>
    <div className="ring ring2"></div>
    <div className="ring ring3"></div>
  </div>
  <div className="glitch-lines"></div>
</div>

<style>
  {`
    /* Core Sun */
    .firewall-sun {
      position: absolute;
      top: 50%;
      right: -3vw;
      width: clamp(150px, 25vw, 300px);
      height: clamp(150px, 25vw, 300px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sun-core {
      width: 60%;
      height: 60%;
      background: radial-gradient(circle, 
        rgba(255, 150, 0, 1) 30%, 
        rgba(255, 100, 0, 0.9) 55%, 
        rgba(255, 50, 0, 0.7) 75%
      );
      border-radius: 50%;
      box-shadow: 0px 0px 50px rgba(255, 140, 0, 0.9);
      animation: glowPulse 2s infinite alternate ease-in-out;
      position: relative;
    }

    /* Firewall Shield */
    .shield {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgba(255, 140, 0, 0.7);
      animation: rotateRing 4s infinite linear;
      background: radial-gradient(circle, rgba(255, 100, 0, 0.1) 20%, transparent 80%);
      box-shadow: inset 0px 0px 10px rgba(255, 140, 0, 0.4);
    }

    .ring1 {
      width: 90%;
      height: 90%;
      border-width: 3px;
      animation-duration: 4s;
    }

    .ring2 {
      width: 120%;
      height: 120%;
      border-width: 2px;
      animation-duration: 6s;
    }

    .ring3 {
      width: 150%;
      height: 150%;
      border-width: 1px;
      animation-duration: 8s;
    }

    /* Grid-like glitch lines for a security feel */
    .glitch-lines {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(255, 150, 0, 0.3) 2px, transparent 2px);
      background-size: 100% 10px;
      animation: glitchMove 2s infinite linear;
      opacity: 0.3;
    }

    /* Animations */
    @keyframes glowPulse {
      0% { filter: blur(5px) brightness(1); }
      50% { filter: blur(10px) brightness(1.4); }
      100% { filter: blur(5px) brightness(1); }
    }

    @keyframes rotateRing {
      0% { transform: rotate(0deg) scale(1); opacity: 1; }
      50% { transform: rotate(180deg) scale(1.1); opacity: 0.8; }
      100% { transform: rotate(360deg) scale(1); opacity: 1; }
    }

    @keyframes glitchMove {
      0% { background-position-y: 0px; }
      100% { background-position-y: -10px; }
    }

    /* Unlock Animation */
    .firewall-unlocked .shield .ring {
      animation: unlockRings 3s forwards ease-in-out;
    }

    @keyframes unlockRings {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.5; }
      100% { transform: scale(2); opacity: 0; }
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

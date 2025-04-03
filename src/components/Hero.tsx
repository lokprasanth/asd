import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

gsap.registerPlugin(TextPlugin);

const Model = () => {
  const { scene } = useGLTF("https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf");
  return <primitive object={scene} scale={1.4} />;
};

const RotatingModel = () => {
  const { scene } = useGLTF("https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf");
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xRotation = (clientY / window.innerHeight - 0.5) * 2;
      const yRotation = (clientX / window.innerWidth - 0.5) * 2;
      setRotation([xRotation, yRotation, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <primitive object={scene} scale={1} rotation={rotation} />;
};

const GlowingAura = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "rgba(0, 255, 255, 0.9)",
      "rgba(0, 206, 209, 0.8)",
      "rgba(0, 191, 255, 0.7)",
      "rgba(64, 224, 208, 0.6)"
    ];

    let waves = [];
    for (let i = 0; i < 5; i++) {
      waves.push({
        baseRadius: 120 + i * 18,
        amplitude: 12 + i * 4,
        frequency: 0.06 + i * 0.005,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + i * 0.002,
        color: colors[i % colors.length],
        width: 3 + i * 0.4
      });
    }

    function drawAura() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2.3;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        ctx.shadowBlur = 40;
        ctx.shadowColor = wave.color;
        for (let angle = 0; angle < Math.PI * 2; angle += 0.02) {
          let radiusOffset = Math.sin(angle * wave.frequency + wave.phase) * wave.amplitude;
          let x = centerX + (wave.baseRadius + radiusOffset) * Math.cos(angle);
          let y = centerY + (wave.baseRadius + radiusOffset) * Math.sin(angle);
          if (angle === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
        wave.phase += wave.speed;
      });
      requestAnimationFrame(drawAura);
    }

    drawAura();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }} />;
};

const Hero = () => {
  const [emoji, setEmoji] = useState("✨");
  const [backgroundParticles, setBackgroundParticles] = useState([]);
  const texts = ["ai asssistance", "Think Different.", "Create the Future.", "Innovate Boldly."];
  let textIndex = 0;

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    const titleRef = document.getElementById("title");
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
      const emojis = ["✨", "🔥", "🚀", "💡", "🌟"];
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1500);

    const generateParticles = () => {
      const particles = Array.from({ length: 150 }).map((_, index) => ({
        id: index,
        x: `${Math.random() * 95 + 2}%`,
        y: `${Math.random() * 95 + 2}%`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
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
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #000, #111)",
        overflow: "hidden",
        textAlign: "center",
        backgroundImage: 'url("path_to_background_image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Glowing Aura Effect */}
      <GlowingAura />

      {/* Starry Background */}
      {backgroundParticles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            position: "absolute",
            top: particle.y,
            left: particle.x,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: particle.opacity,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)"
          }}
        />
      ))}

      {/* 3D Model */}
      <Canvas camera={{ position: [0, 0, 2] }} style={{ height: "50vh", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 1]} />
        <RotatingModel />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", padding: "0 20px" }}>
        <motion.h1 id="title" style={{ fontSize: "3rem", fontWeight: "bold", color: "white", marginBottom: "1rem", letterSpacing: "-1px", textShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)" }}></motion.h1>

        <motion.p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto 2rem", lineHeight: "1.6" }}>
          Innovation that redefines the way you think, work, and create. {emoji}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [visitorCount, setVisitorCount] = useState(100); // Default visitor count

  useEffect(() => {
    // Simulating visitor count increase (Replace with API call for real visitors)
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "fixed", width: "100%", top: "20px", display: "flex", justifyContent: "center", zIndex: 100 }}>
      {/* Navbar Section - Horizontally Centered */}
      <motion.nav
        style={{
          background: "rgba(20, 20, 20, 0.8)",
          backdropFilter: "blur(20px)",
          padding: "1rem 2.5rem",
          display: "flex",
          alignItems: "center",
          borderRadius: "16px",
          boxShadow: "0px 12px 40px rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              transition: "all 0.3s ease-in-out",
              padding: "12px 24px",
              borderRadius: "10px",
              margin: "0 12px",
              background: "rgba(50, 50, 50, 0.6)",
              display: "inline-block",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
            whileHover={{
              scale: 1.1,
              background: "rgba(80, 80, 80, 0.9)",
              boxShadow: "0px 4px 20px rgba(100, 100, 100, 0.5)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>

      {/* Visitor Count in the Top-Right Corner */}
      <motion.div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          background: "rgba(20, 20, 20, 0.9)",
          color: "white",
          padding: "6px 10px",
          borderRadius: "10px",
          fontSize: "1rem",
          fontWeight: "bold",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Visit: {visitorCount}
      </motion.div>
    </div>
  );
};

export default Navbar;
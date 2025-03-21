import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [visitorCount, setVisitorCount] = useState(100);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed w-full top-5 flex justify-center z-50">
      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:flex bg-gray-900/80 backdrop-blur-lg p-4 rounded-2xl shadow-lg border border-white/20 gap-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {["space", "universe", "stars", "detail"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white text-lg font-semibold px-4 py-2 rounded-lg bg-gray-700/60 uppercase tracking-wide transition-all"
            whileHover={{ scale: 1.1, background: "rgba(80, 80, 80, 0.9)", boxShadow: "0px 4px 20px rgba(100, 100, 100, 0.5)", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-gray-900/80 p-3 rounded-lg shadow-lg border border-white/20"
        >
          {isMobileMenuOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed top-16 left-5 w-3/4 bg-gray-900/90 backdrop-blur-lg rounded-lg p-5 flex flex-col items-center gap-4 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {["Home", "About", "stars", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-lg font-semibold py-2 px-6 rounded-lg bg-gray-700/60 uppercase tracking-wide w-full text-center"
                whileHover={{ scale: 1.05, background: "rgba(80, 80, 80, 0.9)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visitor Count */}
      <motion.div
        className="fixed top-5 right-5 bg-gray-900/90 text-white px-4 py-2 rounded-lg text-lg font-bold shadow-lg border border-white/20 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <User className="w-5 h-5" /> {visitorCount}
      </motion.div>
    </div>
  );
};

export default Navbar;
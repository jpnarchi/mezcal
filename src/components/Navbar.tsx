"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Productos" },
    { name: "Sobre <br /> nosotros" },
    { name: "Cócteles" },
    { name: "Sustentabilidad" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 leading-none">
      {/* First Navbar - Logo and Mobile Menu */}
      <nav className="w-full bg-montelobos-dark/95 backdrop-blur-sm block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-center items-center h-20">
            {/* Logo - Left on mobile, centered on desktop */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <img
                src="/logo_texto.png"
                alt="Montelobos Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Mobile Menu Button - Right side */}
            <div className="md:hidden">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-montelobos-cream focus:outline-none p-2"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`h-0.5 w-full bg-montelobos-cream transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-montelobos-cream transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-montelobos-cream transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Second Navbar - Navigation Items (Desktop only) */}
      <nav className="w-full relative hidden md:block -mt-8">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bg-header-min.png"
            alt="Background"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop Navigation */}
          <div className="flex justify-center items-center h-28 space-x-16">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-montelobos-dark group-hover:text-gray-600 transition-colors duration-300 font-serif font-bold uppercase tracking-wide text-center text-lg flex items-center gap-2"
                >
                  {/* Left Chevron - Hidden by default, shown on hover */}
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>

                  <span dangerouslySetInnerHTML={{ __html: item.name }} />

                  {/* Right Chevron - Hidden by default, shown on hover */}
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            ))}


          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-montelobos-dark/95 backdrop-blur-md overflow-hidden border-t border-montelobos-bronze/20"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-montelobos-cream hover:text-montelobos-bronze transition-colors duration-200 font-serif font-bold uppercase tracking-wider text-center border-b border-montelobos-bronze/10 last:border-0"
                  dangerouslySetInnerHTML={{ __html: item.name }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-end overflow-hidden md:h-screen md:items-center md:justify-center"
      style={{
        marginTop: '100px',
      }}
    >
      {/* Background Image */}
      <div className="relative w-full md:absolute md:inset-0">
        <img
          src="/hero.png"
          alt="Montelobos Mezcal"
          className="w-full h-auto object-contain md:w-full md:h-full md:object-cover md:object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-montelobos-dark/80 md:from-montelobos-dark/70 md:via-montelobos-dark/50 md:to-montelobos-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full -mt-32 pb-8 md:mt-0 md:absolute md:bottom-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-serif font-light text-montelobos-cream tracking-wide text-center uppercase leading-tight md:leading-normal"
          >
            MEZCAL ARTESANAL <span className="font-bold">CIELO Y TIERRA</span>: <br className="hidden sm:block" />
            <span className="block sm:inline">EL AUTÉNTICO SABOR MEXICANO</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

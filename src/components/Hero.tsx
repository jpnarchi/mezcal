"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ marginTop: '130px', height: 'calc(100vh - 130px)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt="Montelobos Mezcal"
          className="w-full h-full object-contain object-center md:object-cover md:object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-montelobos-dark/70 via-montelobos-dark/50 to-montelobos-dark"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-4 md:bottom-2 left-0 right-0 z-10 pb-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif font-light text-montelobos-cream tracking-wide text-center uppercase leading-tight md:leading-normal"
          >
            MEZCAL ARTESANAL <span className="font-bold">CIELO Y TIERRA</span>: <br className="hidden sm:block" />
            <span className="block sm:inline">EL AUTÉNTICO SABOR MEXICANO</span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

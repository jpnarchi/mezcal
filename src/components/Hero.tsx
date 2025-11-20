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
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-montelobos-dark/60 via-montelobos-dark/40 to-montelobos-dark"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-2 left-0 right-0 z-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-montelobos-cream tracking-wide text-center uppercase"
          >
            MEZCAL ARTESANAL <span className="font-bold">CIELO Y TIERRA</span>: <br />EL AUTÉNTICO SABOR MEXICANO
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

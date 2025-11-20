"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-montelobos-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 border border-montelobos-bronze rounded-full"></div>
        <div className="absolute bottom-20 right-32 w-96 h-96 border border-montelobos-bronze rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-montelobos-bronze/20 rounded-lg">
              {/* Placeholder for agave field image */}
              <div className="absolute inset-0 flex items-center justify-center text-montelobos-cream/20 text-6xl font-serif">
                AGAVE
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-montelobos-cream leading-tight">
              Tradición que se
              <br />
              Destila en Cada Gota
            </h2>
            <div className="w-20 h-1 bg-montelobos-bronze"></div>
            <p className="text-lg text-montelobos-cream/80 leading-relaxed">
              En las montañas de Oaxaca, donde el agave espadín crece bajo el
              sol mexicano, nace Montelobos. Cada planta requiere de 8 a 10
              años para alcanzar su madurez perfecta.
            </p>
            <p className="text-lg text-montelobos-cream/80 leading-relaxed">
              Utilizando métodos ancestrales de destilación y un profundo
              respeto por la tierra, creamos un mezcal que honra siglos de
              tradición mientras abraza la innovación sostenible.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-montelobos-bronze mb-2">
                  100%
                </div>
                <div className="text-montelobos-cream/70 uppercase text-sm tracking-wider">
                  Agave Espadín
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-montelobos-bronze mb-2">
                  8-10
                </div>
                <div className="text-montelobos-cream/70 uppercase text-sm tracking-wider">
                  Años de Maduración
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function SustainabilitySection() {
  const initiatives = [
    {
      title: "Agricultura Regenerativa",
      description: "Trabajamos con productores locales para implementar prácticas agrícolas sostenibles que regeneran la tierra.",
    },
    {
      title: "Conservación del Agua",
      description: "Sistemas de reciclaje y uso eficiente del agua en todos nuestros procesos de destilación.",
    },
    {
      title: "Energía Renovable",
      description: "Nuestra destilería funciona con energía solar y biomasa renovable.",
    },
    {
      title: "Comunidad Local",
      description: "Apoyamos a las comunidades oaxaqueñas a través de empleo justo y programas educativos.",
    },
  ];

  return (
    <section id="sustentabilidad" className="py-24 bg-montelobos-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-montelobos-cream mb-6">
            Compromiso Sustentable
          </h2>
          <p className="text-lg text-montelobos-cream/70 max-w-3xl mx-auto">
            Nuestro compromiso va más allá del mezcal. Trabajamos para proteger
            la tierra, el agua y las comunidades que hacen posible nuestra
            tradición.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-montelobos-bronze/20 flex items-center justify-center group-hover:bg-montelobos-bronze/30 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-montelobos-bronze/40"></div>
              </div>

              <h3 className="text-xl font-serif font-bold text-montelobos-cream mb-4">
                {initiative.title}
              </h3>
              <p className="text-montelobos-cream/70 leading-relaxed">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="px-10 py-4 border-2 border-montelobos-bronze text-montelobos-cream hover:bg-montelobos-bronze hover:text-montelobos-dark transition-all duration-300 rounded-sm font-medium tracking-wide uppercase text-sm">
            Conoce Más Sobre Nuestro Impacto
          </button>
        </motion.div>
      </div>
    </section>
  );
}

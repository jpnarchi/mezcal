"use client";

import { motion } from "framer-motion";

export default function ProductSection() {
  const products = [
    {
      name: "Mezcal Joven",
      description: "Nuestro mezcal insignia, destilado de agave espadín. Notas herbales con un final suave y ahumado.",
      abv: "43.2% ABV",
    },
    {
      name: "Mezcal Pechuga",
      description: "Mezcal ceremonial tradicional, destilado con frutas de temporada. Complejo y aromático.",
      abv: "47.8% ABV",
    },
    {
      name: "Mezcal Tobalá",
      description: "Elaborado con el raro agave tobalá silvestre. Elegante, floral y excepcionalmente suave.",
      abv: "47.2% ABV",
    },
  ];

  return (
    <section id="productos" className="py-24 bg-montelobos-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-montelobos-dark mb-6">
            Nuestros Mezcales
          </h2>
          <p className="text-lg text-montelobos-brown max-w-2xl mx-auto">
            Cada botella representa generaciones de conocimiento artesanal y
            respeto por la tierra
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              {/* Product Image Placeholder */}
              <div className="relative aspect-[3/4] bg-montelobos-brown/10 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-48 bg-montelobos-bronze/20 rounded-full"></div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-montelobos-dark/0 group-hover:bg-montelobos-dark/10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-montelobos-dark mb-3">
                  {product.name}
                </h3>
                <p className="text-montelobos-bronze text-sm font-medium mb-4 tracking-wider">
                  {product.abv}
                </p>
                <p className="text-montelobos-brown/80 leading-relaxed mb-6">
                  {product.description}
                </p>
                <button className="px-8 py-3 border-2 border-montelobos-bronze text-montelobos-dark hover:bg-montelobos-bronze hover:text-montelobos-cream transition-all duration-300 rounded-sm font-medium uppercase text-sm">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

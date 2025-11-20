"use client";

import { motion } from "framer-motion";

export default function CocktailSection() {
  const cocktails = [
    {
      name: "Margarita de Montelobos",
      ingredients: ["2 oz Mezcal Joven", "1 oz Jugo de Limón", "0.75 oz Agave", "Sal de Mar"],
    },
    {
      name: "Paloma Ahumada",
      ingredients: ["2 oz Mezcal Joven", "Refresco de Toronja", "Jugo de Limón", "Sal"],
    },
    {
      name: "Mezcal Mule",
      ingredients: ["2 oz Mezcal Joven", "Cerveza de Jengibre", "Jugo de Limón", "Hierbabuena"],
    },
  ];

  return (
    <section id="cocteles" className="py-24 bg-montelobos-brown/10">
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
            Cócteles Artesanales
          </h2>
          <p className="text-lg text-montelobos-brown max-w-2xl mx-auto">
            Descubre nuevas formas de disfrutar el mezcal con estas recetas
            cuidadosamente creadas
          </p>
        </motion.div>

        {/* Cocktails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cocktails.map((cocktail, index) => (
            <motion.div
              key={cocktail.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-montelobos-cream rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Cocktail Image Placeholder */}
              <div className="aspect-square bg-montelobos-bronze/10 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-montelobos-bronze/20"></div>
              </div>

              {/* Cocktail Info */}
              <h3 className="text-2xl font-serif font-bold text-montelobos-dark mb-4">
                {cocktail.name}
              </h3>
              <div className="space-y-2">
                <p className="text-montelobos-bronze font-medium text-sm uppercase tracking-wider mb-3">
                  Ingredientes
                </p>
                <ul className="space-y-2">
                  {cocktail.ingredients.map((ingredient, i) => (
                    <li
                      key={i}
                      className="flex items-start text-montelobos-brown/80"
                    >
                      <span className="text-montelobos-bronze mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full mt-6 py-3 border border-montelobos-bronze text-montelobos-dark hover:bg-montelobos-bronze hover:text-montelobos-cream transition-all duration-300 rounded-sm font-medium uppercase text-sm">
                Ver Receta Completa
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

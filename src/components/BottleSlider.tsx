"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BottleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "CRISTALINO JOVEN",
      subtitle: "Mezcal Premium",
      description: "Primera producción blanco de agave fuerte. Cristalino y puro con 42% de alcohol. Un mezcal joven que honra la tradición de Don Memo.",
      specs: [
        { label: "Tipo", value: "Cristalino Joven" },
        { label: "Alcohol", value: "42%" },
        { label: "Agave", value: "Espadín" }
      ],
      background: "/page-home-slider-bg-1-espading-min.jpg",
      bottleImage: "/botella1.png",
      color: "white"
    },
    {
      id: 2,
      title: "REPOSADO",
      subtitle: "Mezcal Premium",
      description: "Añejado de 6 a 8 meses en barril de madera. Suavidad y complejidad en cada sorbo.",
      specs: [
        { label: "Tipo", value: "Reposado" },
        { label: "Añejamiento", value: "6-8 meses" },
        { label: "Barril", value: "Madera" }
      ],
      background: "/page-home-slider-bg-2-ensamble-min.jpg",
      bottleImage: "/botella2.png",
      color: "gold"
    },
    {
      id: 3,
      title: "AÑEJO",
      subtitle: "Edición Especial",
      description: "Añejado de 6 a 10 meses en barril de cognac. El más suave de nuestra colección, con notas complejas y elegantes.",
      specs: [
        { label: "Tipo", value: "Añejo" },
        { label: "Añejamiento", value: "6-10 meses" },
        { label: "Barril", value: "Cognac" }
      ],
      background: "/page-home-slider-bg-1-espading-min.jpg",
      bottleImage: "/botella1.png",
      color: "black"
    },
    {
      id: 4,
      title: "CRISTALINO PREMIUM",
      subtitle: "Edición Especial",
      description: "Nuestro mezcal más exclusivo. Añejado 10 meses en barril de acero inoxidable, cristalino y refinado.",
      specs: [
        { label: "Tipo", value: "Cristalino Premium" },
        { label: "Añejamiento", value: "10 meses" },
        { label: "Barril", value: "Acero Inoxidable" }
      ],
      background: "/page-home-slider-bg-2-ensamble-min.jpg",
      bottleImage: "/botella2.png",
      color: "gold"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[100vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slides[currentSlide].background}
              alt="Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-2 h-full items-center py-12 md:py-0">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 md:space-y-6 ml-0 md:ml-20 order-1 lg:order-1"
              >
                {/* Subtitle/Category */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    slides[currentSlide].color === 'white' ? 'bg-white' :
                    slides[currentSlide].color === 'black' ? 'bg-gray-900 border border-white' :
                    'bg-montelobos-bronze'
                  }`}></div>
                  <span className="text-montelobos-bronze text-sm md:text-base font-serif uppercase tracking-widest">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-montelobos-cream leading-tight">
                  {slides[currentSlide].title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-montelobos-cream/90 leading-relaxed max-w-lg">
                  {slides[currentSlide].description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg">
                  {slides[currentSlide].specs.map((spec, index) => (
                    <div key={index} className="border border-montelobos-bronze/30 rounded-sm p-2 md:p-3 bg-black/20 backdrop-blur-sm">
                      <p className="text-montelobos-bronze text-xs uppercase tracking-wider mb-1">{spec.label}</p>
                      <p className="text-montelobos-cream text-xs md:text-sm font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Don Memo Reference */}
                <p className="text-montelobos-cream/60 text-xs md:text-sm italic">
                  De las macetas del agave de Don Memo
                </p>

                {/* Button */}
                <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-black hover:bg-montelobos-bronze hover:text-white transition-all duration-300 rounded-sm font-serif font-light tracking-wide uppercase text-xs md:text-sm">
                  Comprar Ahora
                </button>
              </motion.div>

              {/* Right Side - Bottle Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center h-full relative order-2 lg:order-2 min-h-[50vh] md:min-h-0"
              >
                {/* Bottle Image with Drop Shadow */}
                <img
                  src={slides[currentSlide].bottleImage}
                  alt={slides[currentSlide].title}
                  className={`h-[50vh] md:h-[60vh] w-auto object-contain ${
                    currentSlide === 0
                      ? 'drop-shadow-[0_10px_30px_rgba(255,255,255,0.4)]'
                      : 'drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
                  }`}
                  style={{
                    filter: currentSlide === 0
                      ? 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.4))'
                      : 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7))'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 md:w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

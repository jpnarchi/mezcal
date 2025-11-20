"use client";

import { motion } from "framer-motion";

export default function OwlSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden bg-montelobos-dark">
        {/* Background for text section */}
        <div className="relative py-12 px-4 sm:px-6">
          <div className="absolute inset-0">
            <img
              src="/bg-owl.png"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Title with Chevrons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              {/* Left Chevron */}
              <svg
                className="w-6 h-6 text-white flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>

              {/* Title */}
              <h2 className="text-2xl font-serif font-bold text-montelobos-cream">
                La Naturaleza del Búho
              </h2>

              {/* Right Chevron */}
              <svg
                className="w-6 h-6 text-white flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-montelobos-cream/90 leading-relaxed mb-6"
            >
              El búho es el guardián de las montañas donde crece nuestro agave.
              Símbolo de sabiduría ancestral y visión clara, representa nuestra
              conexión profunda con la naturaleza y el respeto por el ecosistema
              que nos da vida.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-montelobos-cream/90 leading-relaxed mb-8"
            >
              El búho es el guardián de las montañas donde crece nuestro agave.
              Símbolo de sabiduría ancestral y visión clara, representa nuestra
              conexión profunda con la naturaleza y el respeto por el ecosistema
              que nos da vida.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="px-8 py-3 bg-white text-black hover:bg-montelobos-bronze hover:text-white transition-all duration-300 rounded-sm font-serif tracking-wide uppercase text-xs">
                Explorar
              </button>
            </motion.div>
          </div>
        </div>

        {/* Owl Image - Below text on mobile */}
        <div className="relative w-full h-64">
          <img
            src="/buho.png"
            alt="Búho Montelobos"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block relative overflow-hidden h-[80vh]">
        {/* Background Image - Full Section */}
        <div className="absolute inset-0">
          <img
            src="/bg-owl.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Owl Image - On the left */}
        <div className="absolute left-0 top-0 bottom-0 w-2/5 p-8 z-10">
          <img
            src="/buho.png"
            alt="Búho Montelobos"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="flex justify-center items-center w-full">
            <div className="max-w-3xl text-center">
              {/* Title with Chevrons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-8"
              >
                {/* Left Chevron */}
                <svg
                  className="w-10 h-10 text-white flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>

                {/* Title */}
                <h2 className="text-6xl font-serif font-bold text-montelobos-cream">
                  La Naturaleza del Búho
                </h2>

                {/* Right Chevron */}
                <svg
                  className="w-10 h-10 text-white flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-montelobos-cream/90 leading-relaxed mb-10"
              >
                El búho es el guardián de las montañas donde crece nuestro agave.
                Símbolo de sabiduría ancestral y visión clara, representa nuestra
                conexión profunda con la naturaleza y el respeto por el ecosistema
                que nos da vida.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-montelobos-cream/90 leading-relaxed mb-10"
              >
                El búho es el guardián de las montañas donde crece nuestro agave.
                Símbolo de sabiduría ancestral y visión clara, representa nuestra
                conexión profunda con la naturaleza y el respeto por el ecosistema
                que nos da vida.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button className="px-10 py-4 bg-white text-black hover:bg-montelobos-bronze hover:text-white transition-all duration-300 rounded-sm font-serif tracking-wide uppercase text-sm">
                  Explorar
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

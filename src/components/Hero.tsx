import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/luanda/1920/1080"
          alt="Luanda Skyline"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-6 tracking-wider uppercase">
            Exclusividade em Angola
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            O seu futuro <span className="text-gold-gradient italic">Mora em Luanda</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            A Luanda Prime Imóveis é a sua porta de entrada para o mercado imobiliário mais dinâmico de Angola. Descubra moradias exclusivas e apartamentos de alto padrão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#imoveis"
              className="bg-accent hover:bg-accent-hover text-primary px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group"
            >
              Ver Imóveis
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacto"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
            >
              Agendar Consultoria
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

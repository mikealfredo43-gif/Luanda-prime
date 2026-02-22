import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Imóveis', href: '#imoveis' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-display font-bold text-white">
              LUANDA<span className="text-accent">PRIME</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-accent transition-colors px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="bg-accent hover:bg-accent-hover text-primary px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2"
              >
                <Phone size={16} />
                Fale Connosco
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-accent block px-3 py-4 text-base font-medium border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-primary block px-3 py-4 text-base font-bold text-center mt-4"
              >
                Fale Connosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

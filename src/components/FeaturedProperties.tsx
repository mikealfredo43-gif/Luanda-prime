import React, { useEffect, useState } from 'react';
import { Property } from '../constants';
import PropertyCard from './PropertyCard';
import { motion } from 'motion/react';
import { api } from '../services/api';

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProperties().then(data => {
      setProperties(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="py-24 text-center">Carregando imóveis...</div>;

  return (
    <section id="imoveis" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm"
          >
            Portfólio Selecionado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mt-2"
          >
            Imóveis em Destaque
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg">
            Ver Todos os Imóveis
          </button>
        </div>
      </div>
    </section>
  );
}

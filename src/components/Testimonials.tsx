import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { api, Testimonial } from '../services/api';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    api.getTestimonials().then(setTestimonials);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-2">
            O que dizem os nossos clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-accent/20 w-12 h-12" />
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

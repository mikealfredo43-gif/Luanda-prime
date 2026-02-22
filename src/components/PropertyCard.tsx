import React from 'react';
import { BedDouble, Bath, Square, MapPin } from 'lucide-react';
import { Property } from '../constants';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-black/5 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-accent font-bold text-xl">{property.price}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {property.beds && (
            <div className="flex items-center gap-1 text-gray-600">
              <BedDouble size={18} className="text-accent" />
              <span className="text-sm">{property.beds}</span>
            </div>
          )}
          {property.baths && (
            <div className="flex items-center gap-1 text-gray-600">
              <Bath size={18} className="text-accent" />
              <span className="text-sm">{property.baths}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-600">
            <Square size={18} className="text-accent" />
            <span className="text-sm">{property.area}</span>
          </div>
        </div>
        
        <button className="w-full mt-6 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}

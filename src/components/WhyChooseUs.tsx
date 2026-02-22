import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Conhecimento do Mercado Local",
      description: "Entendemos as dinâmicas específicas de Luanda, desde a Centralidade do Kilamba às zonas nobres do Miramar e Talatona."
    },
    {
      icon: <Award className="w-12 h-12 text-accent" />,
      title: "Segurança e Transparência",
      description: "Processos rigorosos que garantem a legalidade da sua propriedade perante as instituições angolanas."
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Rede de Contactos em Angola",
      description: "Acesso exclusivo a oportunidades que ainda não chegaram ao mercado aberto, graças à nossa vasta rede local."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm">A Nossa Excelência</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-8">
              Porquê escolher a <span className="text-accent">Luanda Prime</span>?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Com anos de experiência no mercado imobiliário angolano, consolidamo-nos como a referência para quem busca imóveis de luxo e investimentos estratégicos. O nosso compromisso é com a sua satisfação e o seu património.
            </p>
            <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-3 rounded-full font-bold transition-all">
              Conheça a Nossa História
            </button>
          </div>
          
          <div className="grid gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

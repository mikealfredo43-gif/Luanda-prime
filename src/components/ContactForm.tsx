import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-primary p-12 text-white">
              <h2 className="text-4xl font-display font-bold mb-8">Vamos Conversar?</h2>
              <p className="text-white/70 mb-12 text-lg">
                Seja para comprar, vender ou arrendar, a nossa equipa está pronta para o ajudar a tomar a melhor decisão.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Telefone</h4>
                    <p className="text-white/60">+244 931 961 497</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">E-mail</h4>
                    <p className="text-white/60">Mikealfredo43@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Escritório</h4>
                    <p className="text-white/60">Camama, Jardim do Éden</p>
                    <p className="text-white/60">Luanda - Angola</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="text-sm text-white/40">Horário de Atendimento: Seg - Sex, 08:00 - 18:00</p>
              </div>
            </div>
            
            {/* Form */}
            <div className="p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Ex: João Manuel"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Ex: joao@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Província</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white">
                      <option>Luanda</option>
                      <option>Benguela</option>
                      <option>Huíla</option>
                      <option>Cabinda</option>
                      <option>Huambo</option>
                      <option>Outra</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Assunto</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white">
                    <option>Interesse em Comprar</option>
                    <option>Interesse em Arrendar</option>
                    <option>Quero Vender o meu Imóvel</option>
                    <option>Outros Assuntos</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

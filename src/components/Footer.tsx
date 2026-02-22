import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Settings } from 'lucide-react';

export default function Footer({ onAdminClick }: { onAdminClick?: () => void }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-display font-bold text-white mb-6 block">
              LUANDA<span className="text-accent">PRIME</span>
            </span>
            <p className="text-white/60 leading-relaxed mb-4">
              A sua parceira de confiança no mercado imobiliário de luxo em Angola.
            </p>
            <p className="text-white/40 text-sm mb-8">
              Camama, Jardim do Éden<br />
              Luanda - Angola
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#imoveis" className="hover:text-accent transition-colors">Imóveis em Destaque</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre a Luanda Prime</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacte-nos</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Categorias</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Apartamentos de Luxo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Moradias em Talatona</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Escritórios Corporate</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terrenos para Investimento</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-display font-bold mb-6">Newsletter</h4>
            <p className="text-white/60 mb-6">Subscreva para receber as melhores oportunidades imobiliárias.</p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="O seu e-mail"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-all"
              />
              <button className="bg-accent text-primary font-bold py-3 rounded-xl hover:bg-accent-hover transition-all">
                Subscrever
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {currentYear} Luanda Prime Imóveis. Todos os direitos reservados.</p>
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            {onAdminClick && (
              <button
                onClick={onAdminClick}
                className="flex items-center gap-1 hover:text-accent transition-colors"
              >
                <Settings size={14} /> Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

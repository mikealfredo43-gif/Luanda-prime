export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  type: 'Apartamento' | 'Moradia' | 'Escritório';
  beds?: number;
  baths?: number;
  area: string;
  image: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Moradia T3 - Condomínio Boa Vida",
    location: "Talatona, Luanda",
    price: "450.000.000 Kz",
    type: "Moradia",
    beds: 3,
    baths: 3,
    area: "280m²",
    image: "https://picsum.photos/seed/boavida/800/600"
  },
  {
    id: 2,
    title: "Apartamento T3 - Condomínio Austin",
    location: "Camama, Luanda",
    price: "180.000.000 Kz",
    type: "Apartamento",
    beds: 3,
    baths: 2,
    area: "160m²",
    image: "https://picsum.photos/seed/austin/800/600"
  },
  {
    id: 3,
    title: "Apartamento T3 - Talatona Plaza",
    location: "Talatona, Luanda",
    price: "250.000.000 Kz",
    type: "Apartamento",
    beds: 3,
    baths: 3,
    area: "190m²",
    image: "https://picsum.photos/seed/plaza/800/600"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mateus Alfredo",
    role: "Cliente Satisfeito",
    content: "A Luanda Prime Imóveis encontrou exatamente o que eu procurava no Camama. O atendimento foi excelente e muito profissional.",
    avatar: "https://picsum.photos/seed/mateus/100/100"
  },
  {
    id: 2,
    name: "Eunice Kiala",
    role: "Proprietária",
    content: "Vendi a minha moradia no Talatona em tempo recorde. A equipa é muito séria e conhece bem o mercado de Luanda.",
    avatar: "https://picsum.photos/seed/eunice/100/100"
  },
  {
    id: 3,
    name: "Domingos Neto",
    role: "Investidor",
    content: "Melhor imobiliária para quem busca segurança e transparência em Angola. Recomendo vivamente os seus serviços.",
    avatar: "https://picsum.photos/seed/domingos/100/100"
  }
];

import { Property } from '../constants';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const api = {
  getProperties: async (): Promise<Property[]> => {
    const res = await fetch('/api/properties');
    return res.json();
  },
  saveProperty: async (property: Partial<Property>): Promise<void> => {
    const method = property.id ? 'PUT' : 'POST';
    const url = property.id ? `/api/properties/${property.id}` : '/api/properties';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(property),
    });
  },
  deleteProperty: async (id: number): Promise<void> => {
    await fetch(`/api/properties/${id}`, { method: 'DELETE' });
  },
  getTestimonials: async (): Promise<Testimonial[]> => {
    const res = await fetch('/api/testimonials');
    return res.json();
  }
};

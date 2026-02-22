/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [view, setView] = useState<'site' | 'admin'>('site');

  if (view === 'admin') {
    return <AdminPanel onBack={() => setView('site')} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer onAdminClick={() => setView('admin')} />
    </div>
  );
}

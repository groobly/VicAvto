import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="bg-[#080808] text-gray-300 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ContactForm />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
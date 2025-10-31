import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-gold-border/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-5xl font-brand-italic gold-text cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('hero')}>
          Victory Avto
        </h1>
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:gold-text transition-colors duration-300 text-lg font-medium">
            О Нас
          </button>
          <button onClick={() => scrollToSection('why-us')} className="text-gray-300 hover:gold-text transition-colors duration-300 text-lg font-medium">
            Почему мы?
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:gold-text transition-colors duration-300 text-lg font-medium">
            Связь с нами
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
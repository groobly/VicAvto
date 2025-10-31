import React from 'react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-zoom-pan"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1617469723732-5a7732297645?q=80&w=1932&auto=format&fit=crop)'}}
      ></div>

      <div className="corner-glow top-left"></div>
      <div className="corner-glow top-right"></div>
      <div className="corner-glow bottom-left"></div>
      <div className="corner-glow bottom-right"></div>
      
      <div className="container mx-auto px-6 z-10 relative">
        <AnimatedSection>
          <div className="stagger-children">
            <h2 className="text-6xl md:text-8xl font-playfair-normal font-bold gold-text leading-tight mb-4 tracking-wider">
              №1 Автосервис
            </h2>
            <p className="text-3xl md:text-4xl text-gray-200 mb-10 font-brand-sub font-light">
              в Новороссийске
            </p>
            <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12">
              Профессиональный ремонт АКПП, DSG и вариаторов. Доверьте сердце вашего автомобиля экспертам с 25-летним опытом.
            </p>
            <button 
              onClick={scrollToContact}
              className="gold-gradient font-brand-heading text-xl tracking-wider py-4 px-16 rounded-sm hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/40"
            >
              Получить консультацию
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
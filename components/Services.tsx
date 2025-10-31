import React from 'react';
import AnimatedSection from './AnimatedSection';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-28 bg-black relative overflow-hidden">
       <div className="corner-glow top-left"></div>
       <div className="corner-glow top-right"></div>
       <div className="corner-glow bottom-left"></div>
       <div className="corner-glow bottom-right"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-6xl md:text-7xl font-brand-title gold-text mb-16 tracking-widest">Наши Услуги</h2>
        </AnimatedSection>
        
        <AnimatedSection className="max-w-4xl mx-auto text-lg text-gray-300 space-y-8 leading-relaxed">
          <p>
            Мы специализируемся на высокоточном ремонте и обслуживании автоматических трансмиссий, включая классические АКПП, роботизированные коробки DSG и бесступенчатые вариаторы (CVT) для автомобилей всех марок и моделей.
          </p>
          <p>
            В нашем распоряжении всегда имеется широкий ассортимент оригинальных и проверенных контрактных запчастей. Мы также предлагаем оригинальные трансмиссионные масла, рекомендованные производителями для АКПП, DSG и вариаторов.
          </p>
          <p className="font-brand-italic gold-text text-3xl tracking-wider py-4">
            Мы проводим комплексную диагностику трансмиссии абсолютно бесплатно!
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
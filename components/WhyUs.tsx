import React from 'react';
import AnimatedSection from './AnimatedSection';

const WrenchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622a12.02 12.02 0 00-3.382-5.968z" /></svg>
);

const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


const features = [
  {
    icon: <WrenchIcon />,
    title: 'Опыт более 25 лет',
    description: 'Наши мастера обладают глубокими знаниями и практическим опытом в ремонте самых сложных автоматических трансмиссий.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Гарантия качества',
    description: 'Мы используем только оригинальные запчасти и предоставляем гарантию на все выполненные работы и установленные детали.',
  },
  {
    icon: <UserGroupIcon />,
    title: 'Клиентский сервис',
    description: 'Индивидуальный подход к каждому клиенту. Бесплатная диагностика и консультация на всех этапах ремонта.',
  },
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-28 bg-[#0a0a0a] relative overflow-hidden">
       <div className="corner-glow top-left"></div>
       <div className="corner-glow top-right"></div>
       <div className="corner-glow bottom-left"></div>
       <div className="corner-glow bottom-right"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-6xl md:text-7xl font-brand-title gold-text mb-16 tracking-widest">Почему выбирают нас?</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <div className="bg-black/30 p-8 rounded-lg border border-gray-800/50 h-full flex flex-col items-center backdrop-blur-sm">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-brand-heading gold-text mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
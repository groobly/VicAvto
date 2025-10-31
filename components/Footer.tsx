import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-border/50 to-transparent"></div>
      <div className="container mx-auto px-6 text-center text-gray-400">
        <a href="tel:+79180623636" className="inline-flex items-center justify-center text-4xl md:text-5xl mb-2 font-brand-heading gold-text tracking-wider hover:opacity-80 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+7 (918) 062-36-36</span>
        </a>
        <p className="mb-6 text-gray-500">Звонок по России бесплатный</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Victory Avto. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
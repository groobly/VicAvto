import React, { useState } from 'react';
import { ContactSubmission } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import AnimatedSection from './AnimatedSection';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissions, setSubmissions] = useLocalStorage<ContactSubmission[]>('contactSubmissions', []);

  // Updated admin view condition - now case-insensitive and layout-insensitive for 'a'
  const isAdminView = name.trim().toLowerCase() === 'a' && phone.trim() === '79146344740' && message.trim().toLowerCase() === 'a';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdminView) return; // Prevent submission if admin credentials are typed

    const newSubmission: ContactSubmission = {
      name,
      subject: message, // 'subject' in type now holds the message
      phone,
      timestamp: new Date().toLocaleString('ru-RU'),
    };
    setSubmissions([...submissions, newSubmission]);
    
    setName('');
    setMessage('');
    setPhone('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClass = "w-full bg-[#0a0a0a] border border-gray-800 rounded-md py-3 px-4 text-gray-200 focus:outline-none focus:border-gold-border focus:ring-1 focus:ring-gold-border transition-colors duration-300";

  return (
    <section id="contact" className="py-28 bg-black relative overflow-hidden">
      <div className="corner-glow top-left"></div>
      <div className="corner-glow top-right"></div>
      <div className="corner-glow bottom-left"></div>
      <div className="corner-glow bottom-right"></div>
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-6xl md:text-7xl font-brand-title gold-text text-center mb-16 tracking-widest">
            {isAdminView ? 'Панель администратора' : 'Связаться с нами'}
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto">
          {isSubmitted && (
            <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6" role="alert">
              <strong className="font-bold">Спасибо! </strong>
              <span className="block sm:inline">Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.</span>
            </div>
          )}

          {isAdminView ? (
            <div className="bg-[#0a0a0a] p-6 rounded-lg border border-gray-800">
              <h3 className="text-3xl gold-text mb-4 font-brand-heading">Полученные заявки</h3>
              {submissions.length > 0 ? (
                <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {submissions.slice().reverse().map((sub, index) => (
                    <div key={index} className="bg-black/50 p-4 rounded border border-gray-800">
                      <p className="font-bold">{sub.name} <span className="text-sm text-gray-400 font-normal">- {sub.timestamp}</span></p>
                      <p><span className="gold-text">Телефон:</span> {sub.phone}</p>
                      <p><span className="gold-text">Сообщение:</span> {sub.subject}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Заявок пока нет.</p>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Ваше имя</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2">Номер телефона</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                  className={inputClass}
                  placeholder="+7 (___) ___-__-__"
                  pattern="\+?[78][\s\(\-]?\d{3}[\s\)\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}"
                  title="Введите номер в российском формате, например +7 918 123 45 67"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Сообщение</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className={inputClass}></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="gold-gradient font-brand-heading text-xl tracking-wider py-4 px-16 rounded-sm hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/40">
                  Отправить
                </button>
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
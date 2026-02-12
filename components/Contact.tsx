
import React, { useState } from 'react';

const Contact: React.FC<{ t: any }> = ({ t }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Билдирүүнү Ватсап үчүн форматтоо
    const whatsappNumber = "996221152691";
    const text = `Салам Алина! Менин атым: ${name}. Почтам: ${email}. Билдирүү: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Ватсапка багыттоо
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          {t.contact.title.split(' ')[0]} <span className="text-gradient">{t.contact.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-gray-400 mb-12">{t.contact.subtitle}</p>
        
        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6 text-left shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.name}</label>
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Сиздин атыңыз" 
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.email}</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">{t.contact.message}</label>
            <textarea 
              required
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Кандай суроолоруңуз бар?..." 
              className="w-full bg-black/50 border border-white/10 rounded-2xl px-4 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-600 resize-none text-white"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white hover:shadow-blue-500/25 hover:shadow-2xl transition-all active:scale-95"
          >
            {t.contact.send} (WhatsApp)
          </button>
        </form>

        <div className="mt-16 flex justify-center space-x-8">
          <a 
            href="https://wa.me/996221152691" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-green-500 transition-colors font-bold flex items-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.891-.971z"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/aisulnn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-pink-500 transition-colors font-bold flex items-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

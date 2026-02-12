
import React from 'react';

const Footer: React.FC<{ t: any }> = ({ t }) => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-gradient mb-2">Алина Султанмуратова</h2>
          <p className="text-gray-500 text-sm">© 2026. Бишкек, Кыргызстан.</p>
        </div>
        
        <div className="flex gap-12 text-sm text-gray-400">
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-[10px] tracking-widest">{t.nav.home}</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">{t.nav.projects}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-[10px] tracking-widest">Социалдык</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://wa.me/996221152691" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-500 transition-colors flex items-center gap-1"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/aisulnn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-500 transition-colors flex items-center gap-1"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

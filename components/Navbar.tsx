
import React from 'react';
import { Language } from '../types';

interface NavbarProps {
  activeSection: string;
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang, t }) => {
  const navItems = [
    { name: t.nav.home, id: 'hero' },
    { name: t.nav.about, id: 'about' },
    { name: t.nav.skills, id: 'skills' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Matches scroll-margin-top and CSS variable
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-6 px-4">
      {/* Language Toggle */}
      <div className="glass px-2 py-1.5 mb-4 rounded-full flex items-center shadow-lg border-white/10">
        <button 
          onClick={() => setLang('kg')} 
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
            lang === 'kg' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'text-gray-400 hover:text-white'
          }`}
        >
          КЫРГЫЗЧА
        </button>
        <button 
          onClick={() => setLang('ru')} 
          className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${
            lang === 'ru' ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'text-gray-400 hover:text-white'
          }`}
        >
          РУССКИЙ
        </button>
      </div>

      {/* Main Navigation */}
      <div className="glass px-4 md:px-8 py-3 rounded-full flex items-center space-x-2 md:space-x-8 shadow-2xl transition-all border-white/5 overflow-x-auto no-scrollbar max-w-full">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`text-[11px] md:text-sm font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-300 px-3 py-1.5 rounded-full ${
              activeSection === item.id 
                ? 'text-blue-400 bg-blue-400/10' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Navbar;

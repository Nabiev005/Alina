import React from 'react';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20 md:pt-0">
      
      {/* Фондогу динамикалык градиенттер (About бөлүмү менен окшош стиль) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl text-center space-y-8 relative z-10">
        
        {/* Badge - Анимациясы менен */}
        <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full text-[10px] md:text-xs font-bold text-blue-400 border border-blue-500/30 mb-2 animate-bounce-slow uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          {t.hero.badge}
        </div>
        
        {/* Башкы заголовок - Мобилдикте оптималдаштырылган */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.1]">
          {t.hero.title} <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sultanmuratova
          </span>
        </h1>
        
        {/* Subtitle - Тексттин туурасы чектелди */}
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed md:px-0 px-4">
          {t.hero.subtitle}
        </p>

        {/* Баскычтар (CTAs) - Мобилдикте толук туурасы (full width) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-10">
          <a 
            href="#projects" 
            className="group w-full sm:w-auto px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          >
            {t.hero.viewWork}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>

          <a 
            href="https://wa.me/996221152691"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 border border-white/10"
          >
            <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.891-.971z"/>
            </svg>
            {t.hero.contactMe}
          </a>
        </div>
      </div>

      {/* Төмөн түшүү индикатору (Scroll indicator) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
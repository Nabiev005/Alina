import React from 'react';

const About: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-black/50 relative overflow-hidden">
      {/* Фон үчүн кооздук элементтери */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Сүрөт блогу: Мобилдикте кичирээк жана борбордо */}
        <div className="relative group max-w-sm md:max-w-md mx-auto lg:mx-0 w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <div className="relative glass aspect-square rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="../assets/alina.png" 
              alt="Alina" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
          </div>
        </div>

        {/* Текст блогу */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">{t.about.title} </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Alina
              </span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400/90">{t.about.fullName}</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 italic">
              "{t.about.desc}"
            </p>
          </div>
          
          {/* Инфо-карточкалар */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-4 text-left">
            
            {/* Билими */}
            <div className="flex items-center lg:items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{t.about.edu}</h4>
                <p className="text-gray-400 text-sm leading-snug">{t.about.eduDesc}</p>
              </div>
            </div>

            {/* Мектеп/Иш орду */}
            <div className="flex items-center lg:items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{t.about.school}</h4>
                <p className="text-gray-400 text-sm leading-snug">{t.about.schoolDesc}</p>
              </div>
            </div>

            {/* Локация */}
            <div className="flex items-center lg:items-start gap-5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">{t.about.loc}</h4>
                <p className="text-gray-400 text-sm leading-snug">{t.about.locDesc}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
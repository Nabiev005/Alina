
import React from 'react';

const Projects: React.FC<{ t: any }> = ({ t }) => {
  return (
    <section id="projects" className="py-24 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-white">{t.projects.title.split(' ')[0]} </span>
          <span className="text-gradient">{t.projects.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-gray-400 mb-16 text-lg max-w-2xl mx-auto">{t.projects.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Academic Status Card */}
          <div className="glass p-10 md:p-16 rounded-[2.5rem] border-dashed border-white/10 flex flex-col items-center justify-center space-y-6 relative group overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4 animate-float">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{t.projects.status}</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t.projects.desc}
            </p>
          </div>

          {/* Education Context Card */}
          <div className="glass p-10 md:p-16 rounded-[2.5rem] group relative overflow-hidden flex flex-col items-center justify-center text-center">
             <div className="absolute top-6 right-6 bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
               KSTU / КМТУ
             </div>
             <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-8 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
               </svg>
             </div>
             <h3 className="text-2xl font-bold mb-4 text-white">Университеттик тапшырмалар</h3>
             <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
               Лабораториялык иштер, C++ жана Python тилиндеги алгоритмдик тапшырмалар жакында бул жерге жайгаштырылат.
             </p>
             <div className="mt-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-200"></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

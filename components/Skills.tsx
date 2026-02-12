
import React from 'react';

const Skills: React.FC<{ t: any }> = ({ t }) => {
  const skills = [
    { name: 'C++', category: 'Core', level: 70 },
    { name: 'Python', category: 'Backend', level: 60 },
    { name: 'HTML / CSS', category: 'Frontend', level: 85 },
    { name: 'JavaScript', category: 'Frontend', level: 75 },
    { name: 'Git', category: 'Tools', level: 65 },
    { name: 'Algorithm Logic', category: 'Math', level: 80 },
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.skills.title.split(' ')[0]} <span className="text-gradient">{t.skills.title.split(' ').slice(1).join(' ')}</span></h2>
          <p className="text-gray-400">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="glass p-6 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">{skill.category}</span>
                <span className="text-blue-400 text-xs">{skill.level}%</span>
              </div>
              <h3 className="text-lg font-bold mb-4 text-white">{skill.name}</h3>
              <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-1000 group-hover:scale-x-105" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

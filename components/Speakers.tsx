
import React from 'react';
import { SPEAKERS } from '../constants';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Expert Speakers</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Learn from global leaders and industry professionals who are shaping the future of technology and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS.map((speaker, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">{speaker.name}</h3>
                <p className="text-ieee-blue font-semibold text-sm">{speaker.role}</p>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;

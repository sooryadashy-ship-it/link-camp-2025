
import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { ScheduleItem } from '../types';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const getTypeStyles = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'technical': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'leadership': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'networking': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'break': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const currentDayData = SCHEDULE_DATA.find(d => d.day === activeDay);

  return (
    <section id="schedule" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-900">Event Agenda</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Three days of intensive learning, growth, and community building.</p>
          
          <div className="flex justify-center pt-8">
            <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
              {SCHEDULE_DATA.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeDay === day.day 
                      ? 'bg-ieee-blue text-white shadow-md' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Day {day.day}
                  <span className="block text-[10px] uppercase tracking-wider opacity-60 font-medium">
                    {day.date.split(',')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {currentDayData?.items.map((item, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}>
                <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-ieee-blue -translate-x-1/2 z-10 hidden sm:block shadow-sm"></div>

                <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12'} text-center sm:text-left pl-8 sm:pl-0`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <span className="text-ieee-blue font-bold text-lg">{item.time}</span>
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTypeStyles(item.type)}`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    {item.speaker && (
                      <p className="text-slate-600 text-sm font-medium mb-2">
                        <span className="text-slate-400">Speaker:</span> {item.speaker}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

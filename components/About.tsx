
import React from 'react';

const About: React.FC = () => {
  const benefits = [
    {
      title: "Strategic Networking",
      description: "Connect with like-minded IEEE members and industry leaders from diverse technical backgrounds.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Skill Acquisition",
      description: "Participate in hands-on workshops focused on leadership, professional ethics, and emerging technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Global Vision",
      description: "Gain insights into the international IEEE community and how to leverage global student resources.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">The Future of <span className="text-ieee-blue underline decoration-blue-200 decoration-4 underline-offset-8">IEEE Leadership</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                LINK CAMP 2025 is more than just a workshop—it's a transformative weekend designed to empower student members with the tools they need to lead their local student branches and transition into high-impact careers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-extrabold text-ieee-blue">300+</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Attendees</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <p className="text-3xl font-extrabold text-ieee-blue">15+</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Expert Speakers</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-ieee-blue group-hover:bg-ieee-blue group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/linkcamp/800/800" 
                alt="Students Networking" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ieee-blue/40 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-ieee-blue">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900">Catalyst For Growth</h4>
              </div>
              <p className="text-sm text-slate-500">Transforming how students engage with professional networks and technical communities.</p>
            </div>

            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

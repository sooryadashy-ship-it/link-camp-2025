
import React from 'react';
import { EVENT_NAME, ORGANIZER, VENUE, DATES } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ieee-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Abstract IEEE Blue Gradients */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              {ORGANIZER} Presents
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.1]">
              Elevate Your <br />
              <span className="text-blue-400">Potential.</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Experience the 2025 edition of LINK CAMP — the flagship gathering for student leaders, 
              tech enthusiasts, and innovators across IEEE networking circles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#register" 
                onClick={(e) => scrollToSection(e, 'register')}
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-slate-100 transition-all text-center shadow-lg hover:shadow-white/10"
              >
                Secure Your Spot
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center backdrop-blur-md"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="relative z-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6">
              <div className="space-y-1">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">When</p>
                <p className="text-white text-xl font-semibold">{DATES}</p>
              </div>
              <div className="space-y-1">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Where</p>
                <p className="text-white text-xl font-semibold leading-snug">{VENUE}</p>
              </div>
              <div className="pt-4 flex items-center text-slate-400 space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium">Last 50 seats remaining</span>
              </div>
            </div>
            {/* Geometric accents */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-2xl rotate-12 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ieee-blue/20 rounded-full -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] text-white uppercase font-bold tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

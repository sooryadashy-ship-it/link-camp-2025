
import React from 'react';

const Registration: React.FC = () => {
  const inclusions = [
    "Full event access for 3 days",
    "Workshop certification (IEEE)",
    "Delegate kit & resources",
    "Meals & refreshments",
    "Cultural night entry",
    "Accommodation (Optional)"
  ];

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" strokeWidth="1" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Ready to <span className="text-blue-400">Join Us?</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Registrations are open to all IEEE student members and graduating college students. 
              Limited seats are available to ensure high-quality peer-to-peer interaction.
            </p>

            <div className="space-y-4">
              <p className="text-white font-bold uppercase tracking-widest text-sm">What's Included</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <a 
                href="https://google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-ieee-blue text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 group"
              >
                Start Registration
                <svg className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="mt-4 text-xs text-slate-500 font-medium">Early bird ends on July 15, 2025.</p>
            </div>
          </div>

          <div className="lg:w-1/2 bg-blue-600 relative p-12 lg:p-20 flex items-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%), linear-gradient(225deg, #000 25%, transparent 25%), linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(315deg, #000 25%, transparent 25%)', backgroundPosition: '10px 0, 10px 0, 0 0, 0 0', backgroundSize: '20px 20px', backgroundRepeat: 'repeat' }}></div>
            
            <div className="relative z-10 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl space-y-8">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-1">Standard Pass</h3>
                  <p className="text-blue-100 text-sm font-medium">For IEEE Members</p>
                </div>
                
                <div className="text-center py-4">
                  <span className="text-white text-5xl font-black">₹1,999</span>
                  <span className="text-blue-100 text-lg ml-2">/ person</span>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-center text-sm text-white/80">
                    <span>Base Amount</span>
                    <span>₹1,695</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-white/80">
                    <span>Tax & Fees</span>
                    <span>₹304</span>
                  </div>
                  <div className="h-px bg-white/20"></div>
                  <div className="flex justify-between items-center text-lg font-bold text-white">
                    <span>Total Pay</span>
                    <span>₹1,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

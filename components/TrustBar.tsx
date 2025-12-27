import React from 'react';

const TrustBar: React.FC = () => {
  const partners = [
    { name: 'Apex Bank', logo: '🏦' },
    { name: 'MedCore Health', logo: '🏥' },
    { name: 'TechNexus', logo: '💻' },
    { name: 'Global Logistics', logo: '🚛' },
    { name: 'Stellar Towers', logo: '🏙️' },
    { name: 'Horizon Bio', logo: '🧪' },
    { name: 'Prime Estate', logo: '🏘️' },
    { name: 'Secure Finance', logo: '🛡️' },
  ];

  // Double the partners array to create a seamless infinite loop
  const displayPartners = [...partners, ...partners];

  return (
    <div className="bg-slate-100 py-10 sm:py-14 border-y border-slate-200/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8 sm:gap-12 relative z-10">
        <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] text-center">
          Trusted by Leaders in Every Industry
        </p>
        
        {/* Marquee Container */}
        <div className="w-full relative mask-fade overflow-hidden">
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] transition-all">
            {displayPartners.map((p, i) => (
              <div 
                key={`${p.name}-${i}`} 
                className="flex items-center gap-3 sm:gap-4 px-8 sm:px-14 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
              >
                <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500">
                  {p.logo}
                </span>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
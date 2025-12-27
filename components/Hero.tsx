"use client";
import React from 'react';

interface HeroProps {
  onStart?: () => void;
  onViewCapabilities?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewCapabilities }) => {
  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-purifik-dark pt-8 sm:pt-12 lg:pt-32 pb-10 sm:pb-12 lg:pb-24">
      {/* Background Architectural Grid & Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        <div className="absolute top-[-10%] right-[-10%] w-[80%] lg:w-[60%] h-[70%] bg-purifik-green/10 blur-[100px] lg:blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] lg:w-[50%] h-[60%] bg-purifik-blue/10 blur-[100px] lg:blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-5 lg:mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
              <span className="w-2 h-2 bg-purifik-green rounded-full animate-pulse"></span>
              <span className="text-[9px] lg:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">System Status: Operations Active</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] lg:leading-[0.95] tracking-tighter mb-4 sm:mb-5 lg:mb-6">
              Premium Facility <br className="hidden sm:block"/>
              <span className="text-purifik-green italic">Workforce</span> <br className="hidden sm:block"/>
              Architects.
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              We deploy elite facility teams and specialized management for healthcare, 
              industrial, and corporate headquarters. Precision-driven hygiene for mission-critical environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={onStart}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 sm:py-5 bg-purifik-green text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-purifik-green/20"
              >
                <span className="relative z-10">Generate Operational Blueprint</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <button 
                onClick={onViewCapabilities}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:py-5 border-2 border-white/10 text-white text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 hover:border-white/20 transition-all active:scale-95"
              >
                Review Capabilities Framework
              </button>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-6 sm:gap-12 border-t border-white/5 pt-6 sm:pt-8 lg:pt-10">
              <div className="text-left">
                <p className="text-xl lg:text-2xl font-black text-white leading-none mb-1">99.4%</p>
                <p className="text-[8px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Safety Compliance</p>
              </div>
              <div className="w-px h-10 bg-white/5 hidden sm:block"></div>
              <div className="text-left">
                <p className="text-xl lg:text-2xl font-black text-white leading-none mb-1">1,200+</p>
                <p className="text-[8px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Specialists Deployed</p>
              </div>
              <div className="w-px h-10 bg-white/5 hidden sm:block"></div>
              <div className="text-left">
                <p className="text-xl lg:text-2xl font-black text-white leading-none mb-1">ISO-45001</p>
                <p className="text-[8px] lg:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Certified Protocols</p>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative z-10 p-4">
              <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 shadow-3xl overflow-hidden group">
                {/* Decorative Terminal UI */}
                <div className="flex gap-1.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="h-32 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
                    <div className="w-full px-8 py-4">
                       <div className="flex justify-between items-center mb-4">
                         <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                         <div className="h-2 w-8 bg-purifik-green/40 rounded-full"></div>
                       </div>
                       <div className="space-y-3">
                         <div className="h-2 w-full bg-white/5 rounded-full"></div>
                         <div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
                         <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-purifik-green/20 flex items-center justify-center text-purifik-green text-xs mb-3">✓</div>
                      <div className="h-2 w-16 bg-white/10 rounded-full mb-2"></div>
                      <div className="h-1.5 w-10 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-8 h-8 rounded-lg bg-purifik-blue/20 flex items-center justify-center text-purifik-blue text-xs mb-3">⛨</div>
                      <div className="h-2 w-16 bg-white/10 rounded-full mb-2"></div>
                      <div className="h-1.5 w-10 bg-white/5 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-6 bg-purifik-green/10 rounded-2xl border border-purifik-green/20">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-[10px] font-black text-purifik-green uppercase tracking-widest">Real-time Dashboard</p>
                      <div className="w-2 h-2 bg-purifik-green rounded-full animate-ping"></div>
                    </div>
                    <div className="h-24 flex items-end gap-1.5">
                      {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-purifik-green/20 rounded-t-sm group-hover:bg-purifik-green/40 transition-all duration-700" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purifik-green/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purifik-blue/20 blur-[80px] rounded-full"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
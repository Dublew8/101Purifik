"use client";
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const services = [
    { name: 'Corporate & Office Cleaning', id: '/corporate-office-cleaning' },
    { name: 'Healthcare & Hospital Cleaning', id: '/healthcare-hospital-cleaning' },
    { name: 'Industrial & Factory Cleaning', id: '/industrial-factory-cleaning' },
    { name: 'Post-Construction Cleaning', id: '/post-construction-cleaning' },
    { name: 'Outsourced Staff Management', id: '/outsourced-cleaning-staff-management' },
    { name: 'Event & Facility Support Cleaning', id: '/event-facility-support-cleaning' }
  ];

  const handleNav = (id: string) => {
    onNavigate?.(id);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const handleMobileAboutClick = () => {
    if (isMobileServicesOpen) {
      // Second click: Navigate to About page
      handleNav('about-us');
    } else {
      // First click: Open dropdown
      setIsMobileServicesOpen(true);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] h-20 bg-purifik-dark/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group active:scale-95 transition-transform shrink-0"
          >
            <div className="w-10 h-10 bg-purifik-green rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(46,139,87,0.3)]">
              P
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="text-lg font-black text-white tracking-tighter uppercase whitespace-nowrap">
                Purifik<span className="text-slate-500 font-medium">Clean</span>
              </span>
              <span className="text-[8px] font-black text-purifik-green uppercase tracking-[0.4em] mt-1 whitespace-nowrap">
                Managed Systems
              </span>
            </div>
          </button>

          {/* TABLET & DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 h-full">
            <nav className="flex items-center gap-4 lg:gap-7 h-full">
              <button 
                onClick={() => handleNav('home')} 
                className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] transition-colors whitespace-nowrap py-4 ${currentPage === 'home' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Home
              </button>
              
              {/* CONSOLIDATED ABOUT DROPDOWN */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button 
                  onClick={() => handleNav('about-us')}
                  className={`flex items-center gap-1.5 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] transition-colors whitespace-nowrap py-4 ${currentPage === 'about-us' || currentPage === 'capabilities' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  About
                  <svg className={`w-3 h-3 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180 text-purifik-green' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Content */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 transition-all duration-300 ${isAboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-3xl overflow-hidden p-2 mt-1">
                    <button 
                      onClick={() => handleNav('capabilities')} 
                      className="w-full text-left px-4 py-3 hover:bg-white/5 rounded-xl text-[9px] font-black text-white uppercase tracking-wider transition-all flex items-center justify-between group/cap"
                    >
                      Capabilities Framework
                      <span className="opacity-0 group-hover/cap:opacity-100 transition-opacity text-purifik-green">→</span>
                    </button>
                    <div className="h-px bg-white/5 my-1 mx-2" />
                    <p className="px-4 py-2 text-[7px] font-black text-slate-600 uppercase tracking-[0.3em]">Sector Expertise</p>
                    {services.map((s) => (
                      <button 
                        key={s.id} 
                        onClick={() => handleNav(s.id)} 
                        className="w-full text-left px-4 py-2.5 hover:bg-white/5 rounded-xl text-[9px] font-black text-slate-400 hover:text-white uppercase tracking-wider transition-all"
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleNav('faq')} 
                className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] transition-colors whitespace-nowrap py-4 ${currentPage === 'faq' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNav('rate-staff')} 
                className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] transition-colors whitespace-nowrap py-4 ${currentPage === 'rate-staff' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Rate Staff
              </button>
              <button 
                onClick={() => handleNav('admin')} 
                className={`text-[10px] lg:text-[11px] font-black uppercase tracking-[0.25em] transition-colors whitespace-nowrap py-4 ${currentPage === 'admin' ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Admin
              </button>
            </nav>

            {/* PRIMARY HEADER CTA */}
            <button 
              onClick={() => handleNav('quote')}
              className="bg-purifik-green text-white px-5 lg:px-8 py-3 rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] hover:bg-green-600 transition-all shadow-xl shadow-purifik-green/20 active:scale-95 whitespace-nowrap"
            >
              Request Quote
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors flex flex-col items-end gap-1.5"
            aria-label="Toggle Navigation"
          >
            <span className="w-8 h-0.5 bg-current rounded-full"></span>
            <span className="w-5 h-0.5 bg-current rounded-full"></span>
            <span className="w-7 h-0.5 bg-current rounded-full"></span>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-purifik-dark border-l border-white/10 shadow-3xl transition-transform duration-500 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-white/5">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purifik-green rounded-lg flex items-center justify-center text-white font-black text-sm">P</div>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Purifik Hub</span>
             </div>
             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-white transition-all">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
          <div className="flex-grow overflow-y-auto px-6 py-8">
            <nav className="flex flex-col">
              <button onClick={() => handleNav('home')} className="w-full text-left py-4 text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5">Home</button>
              <div className="border-b border-white/5">
                <button 
                  onClick={handleMobileAboutClick} 
                  className="w-full text-left py-4 text-2xl font-black text-white uppercase tracking-tighter flex items-center justify-between group"
                >
                  About
                  <svg className={`w-6 h-6 transition-transform ${isMobileServicesOpen ? 'rotate-180 text-purifik-green' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[600px] pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-1 pl-4 mt-2">
                    <button onClick={() => handleNav('capabilities')} className="text-left py-3 text-[10px] font-black text-white uppercase tracking-widest active:text-purifik-green">• Capabilities Framework</button>
                    {services.map(s => (
                      <button key={s.id} onClick={() => handleNav(s.id)} className="text-left py-2 text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white">• {s.name}</button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => handleNav('faq')} className="w-full text-left py-4 text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5">FAQ</button>
              <button onClick={() => handleNav('rate-staff')} className="w-full text-left py-4 text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5">Rate Staff</button>
              <button onClick={() => handleNav('terms')} className="w-full text-left py-4 text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5">Compliance</button>
            </nav>
          </div>
          <div className="p-6 bg-slate-900 border-t border-white/10 flex flex-col gap-4">
            <button onClick={() => handleNav('quote')} className="w-full py-5 bg-purifik-green text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98] transition-all">Request Corporate Quote</button>
            <div className="text-center">
               <p className="text-[8px] font-black text-slate-700 uppercase tracking-widest leading-relaxed">© 2025 Purifik Clean Global</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 w-full shrink-0" />
    </>
  );
};

export default Navbar;
import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const services = [
    { name: 'Corporate & Office Cleaning', link: '/corporate-office-cleaning' },
    { name: 'Healthcare & Hospital Cleaning', link: '/healthcare-hospital-cleaning' },
    { name: 'Industrial & Factory Cleaning', link: '/industrial-factory-cleaning' },
    { name: 'Post-Construction Cleaning', link: '/post-construction-cleaning' },
    { name: 'Outsourced Staff Management', link: '/outsourced-cleaning-staff-management' },
    { name: 'Event & Facility Support', link: '/event-facility-support-cleaning' }
  ];

  const socials = [
    { 
      id: 'FB', 
      path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
    },
    { 
      id: 'LI', 
      path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-.7 0-1.5.4-1.9 1v-1h-2.5v8h2.5v-4.3c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1v4.3h2.5M8.3 18.5v-8H5.8v8h2.5M7 6.5A1.3 1.3 0 1 0 7 9a1.3 1.3 0 0 0 0-2.5z"
    },
    { 
      id: 'TW', 
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
    },
    { 
      id: 'IG', 
      path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
    }
  ];

  return (
    <footer className="bg-purifik-dark text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 lg:gap-x-12 mb-16">
          
          {/* Brand & Social Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="h-10 mb-6 flex items-center">
              <img src="/logo.png" alt="Purifik Clean Logo" className="h-full w-auto object-contain brightness-110" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6 font-medium">
              Elite facility management and workforce solutions. Elevating corporate hygiene standards with precision-driven protocols.
            </p>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-slate-300">Connect</h4>
              <div className="flex space-x-3">
                {socials.map((social) => (
                  <button key={social.id} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:border-purifik-green hover:text-purifik-green hover:bg-purifik-green/5 transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.path} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-200">Quick Links</h4>
            <ul className="space-y-3 text-slate-500 text-xs font-bold">
              <li><button onClick={() => onNavigate?.('home')} className="hover:text-purifik-green transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate?.('about-us')} className="hover:text-purifik-green transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate?.('quote')} className="hover:text-purifik-green transition-colors">Get a Quote</button></li>
              <li><button onClick={() => onNavigate?.('capabilities')} className="hover:text-purifik-green transition-colors">Capabilities</button></li>
              <li><button onClick={() => onNavigate?.('faq')} className="hover:text-purifik-green transition-colors">FAQ Hub</button></li>
              <li><button onClick={() => onNavigate?.('terms')} className="hover:text-purifik-green transition-colors">Compliance</button></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-200">Our Services</h4>
            <ul className="space-y-3 text-slate-500 text-xs font-bold">
              {services.map((s, idx) => (
                <li key={idx}>
                  <button onClick={() => onNavigate?.(s.link)} className="hover:text-purifik-green transition-colors text-left leading-tight">
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-slate-200">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-[10px]">📞</div>
                <div>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Phone Line</p>
                  <p className="text-[11px] font-black text-slate-300">(+234) 905 546 0960</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-[10px]">📍</div>
                <div>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-[11px] font-black text-slate-300">Nigeria Hub</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center shrink-0 border border-white/5 text-[10px]">🕒</div>
                <div>
                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-0.5">Operating Hours</p>
                  <div className="text-[10px] font-bold text-slate-400 leading-normal space-y-0.5">
                    <p>Mon-Fri: 8:00 AM – 7:00 PM</p>
                    <p>Sat: 8:00 AM – 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.3em] text-center md:text-left">
            © {new Date().getFullYear()} Purifik Clean Global. Managed Solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 text-[9px] font-black uppercase tracking-widest">
            <button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate?.('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate?.('privacy')} className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
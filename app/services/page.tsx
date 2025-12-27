"use client";
import React from 'react';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

const serviceDetails = [
  {
    id: "CORP-01",
    category: "Corporate & Office Cleaning",
    tag: "Executive Grade",
    icon: "🏢",
    scope: "Precision facility maintenance and specialized janitorial services for corporate HQs and tech hubs.",
    schedule: "Nightly (22:00 - 05:00) + Day Porter Support",
    supervision: "Live GPS check-ins & Monthly KPI reviews.",
    color: "blue",
    link: "/corporate-office-cleaning"
  },
  {
    id: "MED-01",
    category: "Healthcare & Hospital Cleaning",
    tag: "Sterile Standard",
    icon: "🏥",
    scope: "Adherence to A/B/C lab maintenance and hospital wing sanitation via HIPAA/JCI protocols.",
    schedule: "24/7 Rotational Workforce Management",
    supervision: "Daily compliance logs & Microbiological audits.",
    color: "green",
    link: "/healthcare-hospital-cleaning"
  },
  {
    id: "IND-01",
    category: "Industrial & Factory Cleaning",
    tag: "Safety Critical",
    icon: "🏭",
    scope: "Heavy industrial debris removal, degreasing, and warehouse logistics rack maintenance.",
    schedule: "Off-peak Production Windows",
    supervision: "OSHA-30 Certified site managers.",
    color: "gray",
    link: "/industrial-factory-cleaning"
  },
  {
    id: "POST-01",
    category: "Post-Construction Cleaning",
    tag: "Final Detail",
    icon: "🏗️",
    scope: "Deep detail cleaning post-renovation or new builds. Dust removal, floor finishing, and exterior wash.",
    schedule: "One-off or Multi-phase Deployment",
    supervision: "Final handover inspection leads.",
    color: "blue",
    link: "/post-construction-cleaning"
  },
  {
    id: "MGT-01",
    category: "Outsourced Cleaning Staff Management",
    tag: "Managed Workforce",
    icon: "👥",
    scope: "Total workforce provisioning, including HR, safety training, and operational oversight for large sites.",
    schedule: "SLA-Driven Staffing Tiers",
    supervision: "Dedicated Workforce Strategy Leads.",
    color: "green",
    link: "/outsourced-cleaning-staff-management"
  },
  {
    id: "EVT-01",
    category: "Event & Facility Support Cleaning",
    tag: "Aesthetic Focus",
    icon: "🎫",
    scope: "High-visibility cleaning logistics for large scale events, conferences, and high-profile venues.",
    schedule: "Pre-Event / During / Post-Event Sweeps",
    supervision: "Real-time aesthetic response teams.",
    color: "gray",
    link: "/event-facility-support-cleaning"
  }
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-slate-950 min-h-screen pb-24 relative overflow-hidden text-white font-sans">
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section (Normalized padding) */}
        <header className="py-24 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-purifik-green rounded-full animate-pulse"></span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service Framework v2025.1</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Operational <br/>
            <span className="text-purifik-green italic">Capabilities</span> Overview.
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            Engineered for corporate excellence. Every square foot of your facility is managed under a strict protocol of Scope, 
            Schedule, and Supervision.
          </p>
        </header>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((s) => (
            <div 
              key={s.id} 
              className="group relative flex flex-col bg-slate-900 border border-white/5 rounded-[2.5rem] p-10 hover:border-purifik-green/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purifik-green/5"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-10">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-purifik-green/20 group-hover:border-purifik-green/30 transition-all duration-500">
                  {s.icon}
                </div>
                <div className="text-right">
                  <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{s.id}</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    s.color === 'green' ? 'bg-green-500/10 text-green-500' : 
                    s.color === 'blue' ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-500/10 text-slate-500'
                  }`}>
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Card Title & Scope */}
              <div className="flex-grow">
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight group-hover:text-purifik-green transition-colors">
                  {s.category}
                </h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">
                  {s.scope}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-12">
                <button 
                  onClick={() => onNavigate?.(s.link)}
                  className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-purifik-green hover:border-purifik-green hover:shadow-lg transition-all flex items-center justify-center gap-3 group/btn"
                >
                  Learn More / View Scope
                  <span className="text-xs group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-24 p-12 bg-white/5 border border-white/10 rounded-[3rem] flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Need a Custom Framework?</h3>
            <p className="text-slate-400 font-medium text-lg leading-relaxed">
              Our strategy lab can architect a custom workforce deployment plan for facilities with non-standard security or compliance requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button 
              onClick={() => onNavigate?.('quote')}
              className="px-10 py-5 bg-purifik-green text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-purifik-green/10"
            >
              Initialize Strategy Session
            </button>
            <button className="px-10 py-5 border-2 border-white/10 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all">
              Download Full Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
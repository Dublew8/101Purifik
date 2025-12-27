"use client";
import React from 'react';

interface EventSupportPageProps {
  onNavigate?: (page: string) => void;
}

const eventScope = [
  { title: "Pre-Event Prep", icon: "✨", detail: "Comprehensive venue preparation including floor polishing and surface sanitation before guests arrive." },
  { title: "On-Site Support", icon: "🏃", detail: "Real-time rapid response teams to handle spills, restroom maintenance, and waste during the event." },
  { title: "Post-Event Clean-up", icon: "🧹", detail: "Complete site restoration and debris removal to return the venue to its original state." },
  { title: "Restroom & Waste", icon: "🚻", detail: "Continuous monitoring of high-traffic zones and strategic waste bin rotation." },
  { title: "Ceremonial Detail", icon: "💎", detail: "High-aesthetic focus for sensitive areas like VIP lounges, stages, and gala halls." }
];

export default function EventSupportPage({ onNavigate }: EventSupportPageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-900">
      {/* Hero Section (Normalized vertical space) */}
      <section className="bg-slate-950 py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <button 
            onClick={() => onNavigate?.('services')} 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 hover:text-white transition-colors"
          >
            ← Back to Capabilities
          </button>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
            Event & Facility <br/>
            <span className="text-purifik-blue italic">Support</span> Cleaning.
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed mx-auto lg:mx-0">
            Reliable cleaning support before, during, and after events. Engineered for high-visibility venues and high-profile gatherings.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Event Logistics</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">Short-Term Strategic Deployment</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                We provide short-term and event-based cleaning services for conferences, ceremonies, corporate events, and large gatherings. 
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Service Identifier</h4>
                    <p className="text-sm font-black text-slate-900">PC-SRV-EVT-01</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Classification</h4>
                    <p className="text-sm font-black text-slate-900">Event-Based Aesthetic Care</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4">Aesthetic Protocol</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Service Coverage</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {eventScope.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-purifik-blue/20 transition-all hover:shadow-xl group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="font-black text-slate-900 text-sm mb-3 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purifik-blue/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Secure Your Event's <br/><span className="text-purifik-blue">Aesthetic Standard.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="px-12 py-5 bg-purifik-blue text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-purifik-blue/20"
              >
                Book Event Cleaning Support
              </button>
              <button 
                className="px-12 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                View Support Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
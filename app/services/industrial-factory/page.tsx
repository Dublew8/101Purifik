"use client";
import React from 'react';

interface IndustrialCleaningPageProps {
  onNavigate?: (page: string) => void;
}

const industrialScope = [
  { title: "Production Areas", icon: "⚙️", detail: "Specialized floor degreasing and cleaning around sensitive manufacturing equipment." },
  { title: "Storage & Warehousing", icon: "📦", detail: "High-level dusting of racking systems and heavy-duty floor scrubbing." },
  { title: "Equipment Maintenance", icon: "🛠️", detail: "Surface-level cleaning of industrial machinery to support preventative maintenance." },
  { title: "Staff Welfare Areas", icon: "🚻", detail: "Intensive sanitation of locker rooms, canteens, and break areas." },
  { title: "Shift-Based Cleaning", icon: "🕒", detail: "24/7 rotational cleaning schedules that align with factory production windows." }
];

export default function IndustrialCleaningPage({ onNavigate }: IndustrialCleaningPageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section (Normalized spacing) */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate?.('services')} 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 hover:text-white transition-colors"
          >
            ← Back to Capabilities
          </button>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            Industrial & <br/>
            <span className="text-slate-500 italic">Factory</span> Cleaning.
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            Structured cleaning solutions for heavy-duty operational environments where safety and compliance are mission-critical.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Operations Summary</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">Heavy-Duty Operational Support</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Purifik Clean provides specialized cleaning services for factories, warehouses, and industrial facilities. 
                In environments where machinery and logistics drive the business, our cleanliness protocols support safety, 
                regulatory compliance, and overall operational efficiency.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium italic">
                We bridge the gap between heavy industrial activity and high-standard hygiene, ensuring that production lines remain clear and workers remain safe.
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Service Identifier</h4>
                    <p className="text-sm font-black text-slate-900">PC-SRV-IND-01</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Classification</h4>
                    <p className="text-sm font-black text-slate-900">Industrial & Safety-Critical Care</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Safety Standard</h4>
                    <p className="text-sm font-black text-slate-900">OSHA-30 / ISO-45001 Compliant</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Matrix */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Service Matrix</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Operational Scope</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industrialScope.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-slate-400 transition-all hover:shadow-xl group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="font-black text-slate-900 text-sm mb-3 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Control */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="w-full aspect-video bg-slate-900 rounded-[3rem] overflow-hidden group border border-slate-800">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-2">Operational View</p>
                      <p className="text-2xl font-black text-slate-400">Integrated Oversight</p>
                    </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Strategic Integration</h3>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                 Operational <br/>
                 <span className="text-slate-300 italic">Control & Alignment.</span>
               </h2>
               <p className="text-slate-500 font-medium leading-relaxed mb-8">
                 Industrial cleaning is not a standalone task; it is a critical component of your production workflow. 
                 Our team works alongside facility managers to ensure cleaning aligns with safety regulations and operational workflows, 
                 minimizing downtime and maximizing site safety.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">Optimize Your Industrial <br/><span className="text-slate-500">Hygiene Workflow.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="px-12 py-5 bg-slate-700 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-600 transition-all shadow-xl shadow-slate-900/50"
              >
                Request Industrial Cleaning Quote
              </button>
              <button 
                className="px-12 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Facility Workflow Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
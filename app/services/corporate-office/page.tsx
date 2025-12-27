"use client";
import React from 'react';

interface CorporateCleaningPageProps {
  onNavigate?: (page: string) => void;
}

const coverage = [
  { title: "Workstations", icon: "💻", detail: "Ergonomic workspace sanitation and electronics-safe dusting protocols." },
  { title: "Meeting Rooms", icon: "🤝", detail: "High-frequency disinfection of conference tables, AV gear, and seating." },
  { title: "Executive Suites", icon: "🖋️", detail: "Premium detail cleaning for leadership offices and private lounges." },
  { title: "Restrooms", icon: "🧼", detail: "Continuous hygiene monitoring and high-grade antibacterial maintenance." },
  { title: "Common Areas", icon: "☕", detail: "Lobby, canteen, and kitchen area cleaning with specialized debris management." }
];

export default function CorporateCleaningPage({ onNavigate }: CorporateCleaningPageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section (Padding normalized) */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate?.('services')} 
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-purifik-green mb-8 hover:text-white transition-colors"
          >
            ← Back to Capabilities
          </button>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            Corporate & <br/>
            <span className="text-purifik-green italic">Office</span> Cleaning.
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            Maintaining professional, hygienic workspaces that support productivity and corporate wellness through managed workforce excellence.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Operations Summary</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">Professional Workspace Integrity</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Purifik Clean provides scheduled and managed cleaning services for corporate offices, commercial buildings, and administrative facilities. 
                Our services are structured to maintain cleanliness, hygiene, and a professional appearance without disrupting daily operations.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium italic">
                Strategic deployments focus on high-traffic areas and sensitive zones where hygiene directly impacts employee satisfaction and health compliance.
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Service Identifier</h4>
                    <p className="text-sm font-black text-slate-900">PC-SRV-CORP-01</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Classification</h4>
                    <p className="text-sm font-black text-slate-900">Executive Grade Facility Care</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Standard Frequency</h4>
                    <p className="text-sm font-black text-slate-900">Daily / Weekly / Custom SLA</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4">Coverage Scope</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Facility Matrix</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coverage.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-purifik-blue/20 transition-all hover:shadow-xl group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="font-black text-slate-900 text-sm mb-3 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Approach */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black shrink-0">01</div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Trained Personnel</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Specialized office-grade staff vetted for security and trained in ergonomic facility care.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black shrink-0">02</div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Managed Supervision</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Dedicated site leads ensuring every shift meets the agreed Service Level Agreement (SLA).</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black shrink-0">03</div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-2">Performance Tracking</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Real-time auditing via our Personnel Registry to maintain 99%+ quality scores.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
               <h3 className="text-[10px] font-black text-purifik-green uppercase tracking-[0.4em] mb-4">Operational Approach</h3>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                 Systems Driven <br/>
                 Hygiene <span className="text-slate-300 italic">Management.</span>
               </h2>
               <p className="text-slate-500 font-medium leading-relaxed mb-8">
                 Our approach moves beyond basic cleaning to a data-backed facility management model. We deploy trained cleaning personnel managed by supervisors, supported by internal quality control and performance tracking.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purifik-green/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">Elevate Your Facility <br/><span className="text-purifik-green">Hygiene Standards.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="px-10 py-5 bg-purifik-green text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-purifik-green/20"
              >
                Request Corporate Quote
              </button>
              <button 
                className="px-10 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 hover:border-white/20 transition-all"
              >
                Schedule Facility Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";
import React from 'react';

interface OutsourcedStaffPageProps {
  onNavigate?: (page: string) => void;
}

const managementAreas = [
  { title: "Recruitment & Vetting", icon: "🔍", detail: "Comprehensive background checks, security clearances, and behavioral assessment protocols." },
  { title: "Training & Deployment", icon: "🎓", detail: "4-week academy-led training focusing on high-stakes facility maintenance and safety." },
  { title: "Payroll & Welfare", icon: "💳", detail: "End-to-end salary management, benefits administration, and staff well-being programs." },
  { title: "Supervision & Ops", icon: "👮", detail: "Permanent on-site leadership and rapid replacement logistics for zero-downtime service." },
  { title: "Performance Monitoring", icon: "📈", detail: "Real-time auditing via Personnel Codes (PC-XXX-###) and monthly KPI reporting." }
];

export default function OutsourcedStaffPage({ onNavigate }: OutsourcedStaffPageProps) {
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
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-purifik-green mb-8 hover:text-white transition-colors"
          >
            ← Back to Capabilities
          </button>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.95]">
            Outsourced <br/>
            <span className="text-purifik-green italic">Staff Management.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            We recruit, manage, and pay your cleaning workforce. A total managed ecosystem designed to eliminate HR friction and operational risk.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Workforce Partnership</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">Integrated Human Capital Support</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Purifik Clean acts as a strategic workforce partner, providing trained cleaning staff to organizations while managing every aspect of the employee lifecycle. 
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Service Identifier</h4>
                    <p className="text-sm font-black text-slate-900">PC-SRV-MGT-01</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Management Tier</h4>
                    <p className="text-sm font-black text-slate-900">Full Operational Lifecycle</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4">The Managed Ecosystem</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">What We Handle</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {managementAreas.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-purifik-green/20 transition-all hover:shadow-xl group">
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
        <div className="bg-slate-950 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purifik-green/10 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">Streamline Your Facility <br/><span className="text-purifik-green">Workforce Strategy.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="px-12 py-5 bg-purifik-green text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-purifik-green/20"
              >
                Discuss Workforce Outsourcing
              </button>
              <button 
                className="px-12 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Download Managed Staffing PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
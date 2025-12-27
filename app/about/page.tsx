"use client";
import React from 'react';

interface AboutUsPageProps {
  onNavigate?: (page: string) => void;
}

const serviceSummary = [
  "Corporate and office cleaning services",
  "Healthcare and hospital cleaning",
  "Industrial and factory cleaning",
  "Post-construction cleaning",
  "Outsourced cleaning staff management",
  "Event and facility support cleaning"
];

const pillars = [
  { title: "Hygiene & Safety", icon: "🛡️", detail: "Rigorous sanitation standards tailored to high-traffic and sensitive environments." },
  { title: "Accountability", icon: "📋", detail: "Personnel performance is monitored through our confidential audit systems." },
  { title: "Supervision", icon: "👮", detail: "Managed workforce model with dedicated site leaders for zero operational friction." },
  { title: "Compliance", icon: "⚖️", detail: "Strict adherence to regulatory, environmental, and sector-specific protocols." }
];

export default function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-slate-900">
      {/* Optimized Hero Section */}
      <section className="bg-slate-950 py-24 relative overflow-hidden text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purifik-green/10 text-purifik-green text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Corporate Integrity
          </span>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.95]">
            About <br/>
            <span className="text-purifik-green italic">Purifik Clean.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed mx-auto lg:mx-0">
            Structured cleaning and workforce solutions for modern organizations. 
            We provide the infrastructure for corporate excellence.
          </p>
        </div>
      </section>

      {/* Strategic Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Strategic Overview</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">Reliable Facility Support <br/>for Elite Institutions.</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Purifik Clean is a professional cleaning and workforce management company delivering reliable facility support services to corporate and institutional clients. 
                We specialize in structured cleaning operations backed by trained personnel, supervision, and internal quality control systems.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
                Our model allows organizations to maintain high hygiene and operational standards without the burden of recruitment, payroll management, or daily supervision.
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 self-center">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">Our Commitment</h3>
               <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                 We are committed to professionalism, consistency, and long-term partnerships. 
                 Our goal is to help organizations maintain clean, safe, and well-managed facilities through reliable service delivery.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4">Core Capabilities</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceSummary.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 flex items-center gap-4 group hover:border-purifik-blue transition-all">
                <div className="w-2 h-2 bg-purifik-blue rounded-full group-hover:scale-150 transition-transform"></div>
                <p className="text-sm font-bold text-slate-800 tracking-tight">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Model */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full aspect-square bg-slate-900 rounded-[3rem] overflow-hidden group shadow-2xl border border-slate-800">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                    <p className="text-4xl font-black text-white mb-2">0%</p>
                    <p className="text-[10px] font-black text-purifik-green uppercase tracking-[0.3em]">Operational Risk</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-black text-purifik-green uppercase tracking-[0.4em] mb-4">Strategic HR</h3>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
                Our Managed <br/>
                <span className="text-slate-300 italic">Workforce Model.</span>
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                We recruit, vet, train, deploy, and manage professional cleaning staff on behalf of our clients. 
                All staff members operate under defined procedures and are monitored through internal performance and quality control systems.
              </p>
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl shrink-0">🤝</div>
                <p className="text-sm font-bold text-slate-700">Clients benefit from a dependable workforce without HR overhead or operational risk.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Operational Pillars</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Quality, Compliance & Accountability</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all">
                <div className="text-3xl mb-6">{pillar.icon}</div>
                <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{pillar.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Hub */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl font-black tracking-tighter mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">📍</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Base of Operations</p>
                    <p className="text-sm font-bold">Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">💬</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone / WhatsApp</p>
                    <p className="text-sm font-bold">+234 905 546 0960</p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">📧</div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Corporate Email</p>
                    <p className="text-sm font-bold">purifikclean.info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-950 p-12 rounded-[3rem] text-white">
              <h2 className="text-3xl font-black tracking-tighter mb-8 leading-tight">Ready to Architect <br/><span className="text-purifik-green">Your Facility?</span></h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate?.('quote')}
                  className="w-full sm:w-auto px-8 py-5 bg-purifik-green text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl active:scale-95"
                >
                  Request Corporate Quote
                </button>
                <button 
                  onClick={() => onNavigate?.('capabilities')}
                  className="w-full sm:w-auto px-8 py-5 bg-transparent border-2 border-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95"
                >
                  Explore Capabilities
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
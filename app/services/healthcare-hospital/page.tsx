"use client";
import React from 'react';

interface HealthcareCleaningPageProps {
  onNavigate?: (page: string) => void;
}

const focusAreas = [
  { title: "Patient Rooms & Wards", icon: "🛏️", detail: "Sterile surface maintenance and high-touch point disinfection protocols." },
  { title: "Operating & Treatment", icon: "🩺", detail: "Specialized clinical sanitation for surgical suites and diagnostic areas." },
  { title: "Waiting Rooms", icon: "🛋️", detail: "High-frequency cleaning of public areas to minimize cross-contamination." },
  { title: "Restrooms & Sanitation", icon: "🚽", detail: "Rigorous biological de-greasing and continuous germicidal maintenance." },
  { title: "Waste Handling Support", icon: "☣️", detail: "Safe collection and disposal of medical waste following biohazard protocols." }
];

export default function HealthcareCleaningPage({ onNavigate }: HealthcareCleaningPageProps) {
  return (
    <div className="bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section (Standardized layout) */}
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
            Healthcare & <br/>
            <span className="text-purifik-green italic">Hospital</span> Cleaning.
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            Supporting hygiene, safety, and infection control in healthcare environments through medical-grade operational protocols.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 block">Operations Summary</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tighter mb-8">Critical Environment Sanitization</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium mb-6">
                Purifik Clean delivers cleaning services designed for hospitals, clinics, laboratories, and healthcare facilities where hygiene standards are critical. 
                Our operations focus on sanitation, safety, and controlled cleaning procedures that minimize infection risks.
              </p>
              <p className="text-slate-500 leading-relaxed font-medium italic">
                Our deployments are managed by staff specialized in medical-grade environments, ensuring that sterile boundaries are maintained and safety protocols are strictly followed.
              </p>
            </div>
            <div className="lg:col-span-4 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
               <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Service Identifier</h4>
                    <p className="text-sm font-black text-slate-900">PC-SRV-MED-01</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Classification</h4>
                    <p className="text-sm font-black text-slate-900">Medical & Sterile Facility Care</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">Compliance Standard</h4>
                    <p className="text-sm font-black text-slate-900">JCI / HIPAA / Clinical Grade</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h3 className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4">Operational Matrix</h3>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Key Focus Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-purifik-blue/20 transition-all hover:shadow-xl group">
                <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="font-black text-slate-900 text-sm mb-3 tracking-tight">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="w-full aspect-square bg-purifik-blue/5 rounded-full blur-3xl absolute inset-0"></div>
               <div className="relative z-10 p-12 bg-slate-50 rounded-[3rem] border border-slate-200">
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm shrink-0">🛡️</div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1">Infection Control</h4>
                        <p className="text-sm text-slate-500 font-medium">Strict adherence to clinical hygiene protocols and specialized chemical usage for pathogen elimination.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm shrink-0">🔒</div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1">Confidentiality Standards</h4>
                        <p className="text-sm text-slate-500 font-medium">All personnel are HIPAA-trained and vetted for high-security healthcare environments.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm shrink-0">📋</div>
                      <div>
                        <h4 className="font-black text-slate-900 mb-1">Safety Procedures</h4>
                        <p className="text-sm text-slate-500 font-medium">Operational safety protocols designed to minimize disruptions to medical staff and patient care.</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div>
               <h3 className="text-[10px] font-black text-purifik-green uppercase tracking-[0.4em] mb-4">Integrity & Standards</h3>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
                 Compliance & <br/>
                 <span className="text-slate-300 italic">Safety First.</span>
               </h2>
               <p className="text-slate-500 font-medium leading-relaxed mb-8">
                 Healthcare cleaning is a matter of public safety. Staff are trained on hygiene protocols, safety procedures, and confidentiality standards suitable for the most demanding medical environments.
               </p>
               <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest">HIPAA Compliant</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest">JCI Standard</span>
                  <span className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest">EPA Approved</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-purifik-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-10">Secure Your Facility's <br/><span className="text-purifik-green">Hygiene Integrity.</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="px-12 py-5 bg-white text-purifik-blue rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-2xl"
              >
                Request Healthcare Cleaning Quote
              </button>
              <button 
                className="px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Download Clinical Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
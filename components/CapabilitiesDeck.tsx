import React from 'react';

interface CapabilitiesDeckProps {
  onQuoteRequest: () => void;
}

const CapabilitiesDeck: React.FC<CapabilitiesDeckProps> = ({ onQuoteRequest }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="bg-purifik-dark pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2E8B57_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purifik-green/10 text-purifik-green text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Enterprise Framework
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
            Operational <br/>
            Excellence by <span className="text-purifik-green italic">Design.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg font-medium leading-relaxed">
            Beyond cleaning, we provide a managed workforce ecosystem. Our protocols are engineered 
            for facilities where compliance, safety, and precision are non-negotiable.
          </p>
        </div>
      </section>

      {/* Workforce & Training */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Workforce Recruitment</h2>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-6">The Purifik Academy</h3>
            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
              We don't just hire; we curate. Every Purifik specialist undergoes a rigorous 4-week 
              induction program focusing on sector-specific needs.
            </p>
            <ul className="space-y-4">
              {[
                "Vetted background & security clearance",
                "OSHA-10 & Safety Standard certification",
                "Proprietary High-Traffic protocol training",
                "Executive behavioral etiquette coaching"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <div className="w-5 h-5 bg-purifik-green/10 text-purifik-green rounded-full flex items-center justify-center text-[10px]">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
            <div className="aspect-video bg-purifik-dark rounded-2xl flex items-center justify-center text-white font-black text-xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
              <span className="relative z-10 text-xs tracking-widest uppercase">Training Simulation: Level 04</span>
            </div>
          </div>
        </div>
      </section>

      {/* Supervision & Quality */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Supervision Protocol</h2>
            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">The Oversight Hierarchy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                lvl: "Site Lead", 
                desc: "Permanent on-site presence responsible for hourly deployment and immediate QC interventions.",
                icon: "👔"
              },
              { 
                lvl: "Regional Lead", 
                desc: "Weekly audits using ISO-compliant scoring systems to ensure baseline standards are exceeded.",
                icon: "🏢"
              },
              { 
                lvl: "Operations Director", 
                desc: "High-level strategic oversight and direct liaison for facility management stakeholders.",
                icon: "📊"
              }
            ].map((box, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">{box.icon}</div>
                <h4 className="text-lg font-black text-slate-900 mb-2">{box.lvl}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring System */}
      <section className="py-24 bg-purifik-dark text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <h2 className="text-[10px] font-black text-purifik-green uppercase tracking-[0.3em] mb-4">Performance Intelligence</h2>
            <h3 className="text-3xl font-black tracking-tighter mb-6">Staff Code Identification</h3>
            <p className="text-slate-400 font-medium mb-8 leading-relaxed">
              Our proprietary registry assigns every team member a unique Personnel Code (PC-XXX-###). 
              This allows clients to log anonymous audits that route directly to our central management portal.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Example Identifier</p>
                <p className="text-xl font-black text-purifik-green tracking-widest">PC-NYC-402</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Current Score</p>
                <p className="text-xl font-black">4.9/5.0</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="w-full aspect-square bg-gradient-to-br from-purifik-green/20 to-purifik-blue/20 rounded-full blur-[100px] absolute inset-0"></div>
             <div className="relative z-10 bg-slate-900 p-8 rounded-3xl border border-white/10 shadow-3xl">
                <div className="space-y-4">
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purifik-green w-[94%]"></div>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purifik-green w-[88%]"></div>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-purifik-green w-[97%]"></div>
                   </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                   <div className="text-center">
                      <p className="text-2xl font-black">2.4m</p>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">SQ FT Managed</p>
                   </div>
                   <div className="text-center">
                      <p className="text-2xl font-black">0</p>
                      <p className="text-[9px] text-slate-500 uppercase tracking-widest font-black">Safety Incidents</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Industries & Compliance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <h3 className="text-2xl font-black tracking-tighter mb-8 text-slate-900">Industries Served</h3>
               <div className="grid grid-cols-2 gap-4">
                  {[
                    "Banking & Finance",
                    "Healthcare & Biotech",
                    "Industrial Logistics",
                    "Corporate HQ",
                    "Educational Campus",
                    "Data Centers"
                  ].map((ind, i) => (
                    <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-700">
                      {ind}
                    </div>
                  ))}
               </div>
            </div>
            <div>
               <h3 className="text-2xl font-black tracking-tighter mb-8 text-slate-900">Compliance Standards</h3>
               <div className="flex flex-wrap gap-4">
                  {[
                    "ISO-45001",
                    "OSHA-30",
                    "HIPAA SECURE",
                    "JCI STANDARDS",
                    "LEED CERTIFIED"
                  ].map((cert, i) => (
                    <div key={i} className="px-5 py-3 border-2 border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {cert}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purifik-green py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter">
            Ready to Architect <br/>Your Facility?
          </h2>
          <button 
            onClick={onQuoteRequest}
            className="bg-purifik-dark text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all shadow-2xl"
          >
            Generate Operational Blueprint
          </button>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesDeck;

"use client";
import React, { useState } from 'react';

const QuoteGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: 'Banking & Finance',
    location: '',
    services: [] as string[],
    preferredSchedule: 'Daily',
    description: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const availableServices = [
    "Corporate Cleaning",
    "Industrial Maintenance",
    "Medical Sanitation",
    "Workforce Staffing",
    "Facade Cleaning"
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purifik-blue/5 text-purifik-blue text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-4">Purifik Strategy Lab</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter">Enterprise Proposal Request</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">Define your facility scope for an AI-optimized operational blueprint.</p>
        </div>

        <div className="bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-14 border border-slate-100 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
            {/* Corporate Profile */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">1. Corporate Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <input 
                  required
                  placeholder="Company Name"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
                <input 
                  required
                  placeholder="Contact Person"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                />
                <input 
                  required
                  type="email"
                  placeholder="Corporate Email"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  placeholder="Phone (Optional)"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            {/* Logistics */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">2. Facility Logistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <select 
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base appearance-none"
                  value={formData.industry}
                  onChange={(e) => setFormData({...formData, industry: e.target.value})}
                >
                  <option>Banking & Finance</option>
                  <option>Healthcare & Biotech</option>
                  <option>Industrial & Logistics</option>
                  <option>Educational Campus</option>
                </select>
                <input 
                  required
                  placeholder="Primary Location (City/Region)"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
            </div>

            {/* Service Scope */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">3. Service Selection</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {availableServices.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold transition-all border ${
                      formData.services.includes(service)
                        ? 'bg-purifik-blue text-white border-purifik-blue shadow-lg shadow-purifik-blue/20'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-purifik-blue'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">4. Project Context & Special Requirements</h3>
              <textarea 
                placeholder="Describe your facility's specific challenges, required certifications (e.g. ISO, HIPAA), or unique staffing needs..."
                className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purifik-blue font-medium transition-all text-sm sm:text-base min-h-[120px] resize-none"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={loading || formData.services.length === 0}
              className="w-full bg-purifik-blue text-white font-black py-4 sm:py-5 rounded-2xl shadow-xl shadow-purifik-blue/20 hover:bg-[#0a3a63] transition-all disabled:opacity-50 uppercase tracking-widest text-xs sm:text-sm active:scale-[0.98]"
            >
              {loading ? 'Analyzing Requirements...' : 'Initialize Facility Strategy'}
            </button>
          </form>

          {result && (
            <div className="mt-8 sm:mt-12 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 border-b pb-6 gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">Blueprint Summary</h3>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Ref: {Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-3xl sm:text-4xl font-black text-purifik-green">${result.estimatedMonthlyCost.toLocaleString()}</p>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest">Est. Monthly Managed Service</p>
                  </div>
               </div>
               <div className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-purifik-blue mb-2">Operational Strategy</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{result.cleaningBluePrint}</p>
                    </div>
                    <div className="bg-purifik-green/5 p-5 sm:p-6 rounded-2xl border border-purifik-green/10">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-purifik-green mb-2">Compliance & Risk</h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">{result.riskAssessment}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.complianceCertifications.map((cert: string, i: number) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md text-[9px] font-black uppercase tracking-widest">{cert}</span>
                    ))}
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteGenerator;

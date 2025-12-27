
import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: "1.0",
      title: "Scope of Services",
      content: "Purifik Clean (the 'Company') provides managed facility workforce solutions, including but not limited to corporate hygiene maintenance, industrial sanitation, and specialized healthcare environmental services. Specific deliverables, frequency, and site-specific protocols are governed by the individual Service Level Agreement (SLA) or Proposal Blueprint accepted by the Client."
    },
    {
      id: "2.0",
      title: "Client Responsibilities",
      content: "The Client shall provide necessary site access, including security clearances and physical keys/badges for Company personnel. The Client is responsible for ensuring the facility meets basic safety standards for workforce deployment and must disclose any known hazardous materials or conditions prior to the commencement of services."
    },
    {
      id: "3.0",
      title: "Workforce Deployment Terms",
      content: "All personnel deployed by the Company remain employees or contractors of Purifik Clean. The Client agrees not to solicit, hire, or engage in independent contractual relationships with any Company personnel during the term of service and for a period of twelve (12) months following termination, unless a specific 'Buy-out' fee is negotiated."
    },
    {
      id: "4.0",
      title: "Service Limitations",
      content: "While Purifik Clean adheres to ISO and industry-standard protocols, our services do not constitute a guarantee of a 'pathogen-free' environment. The Company is not responsible for property degradation resulting from standard wear-and-tear or pre-existing structural issues. Specialized hazardous waste removal requires specific addenda to the primary agreement."
    },
    {
      id: "5.0",
      title: "Liability Boundaries",
      content: "Company liability for any single incident is limited to the total value of one (1) month of service fees under the current agreement. The Company maintains comprehensive General Liability and Workers' Compensation insurance. The Client shall indemnify the Company against claims arising from Client's negligence or failure to provide a safe working environment."
    },
    {
      id: "6.0",
      title: "Termination Conditions",
      content: "Either party may terminate the agreement with thirty (30) days written notice. Immediate termination is permitted in cases of material breach of safety protocols, non-payment exceeding fifteen (15) days, or ethical violations. All outstanding invoices become due immediately upon notice of termination."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 border-b border-slate-100 pb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purifik-green mb-4 block">
            Legal Framework v2025.01
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Master Terms <br/>of <span className="text-slate-400">Service.</span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            These terms govern the professional relationship between Purifik Clean Global and its corporate clients. 
            By engaging our workforce solutions, you acknowledge and agree to the protocols outlined below.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} className="relative pl-0 md:pl-12">
              <div className="hidden md:block absolute left-0 top-1 text-[10px] font-black text-purifik-green tracking-widest">
                {section.id}
              </div>
              <h2 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                <span className="md:hidden mr-2">{section.id}</span>
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-24 p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Questions regarding compliance?</h3>
          <p className="text-xs text-slate-500 font-medium mb-6">
            For specific legal enquiries or custom MSA negotiations, please contact our Legal & Compliance department at 
            <span className="text-purifik-green ml-1">compliance@purifikclean.com</span>
          </p>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400">
               ISO 45001 Verified
             </div>
             <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-400">
               GDPR Compliant
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;

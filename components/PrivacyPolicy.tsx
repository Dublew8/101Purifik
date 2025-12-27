
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Data Collection and Acquisition",
      content: "Purifik Clean collects information necessary to provide managed facility solutions. This includes corporate entity names, contact personnel details, facility logistics, and operational requirements submitted via our Strategy Lab. We also collect technical data such as IP addresses and browser types to optimize our digital interface performance."
    },
    {
      title: "Storage and Security Protocols",
      content: "All client and user data is housed on secure, encrypted servers. We utilize industry-standard Transport Layer Security (TLS) for data in transit and AES-256 encryption for data at rest. Access to sensitive facility data is restricted to authorized Purifik executive personnel under strict multi-factor authentication (MFA) protocols."
    },
    {
      title: "Personnel Audit Confidentiality",
      content: "Our 'Staff Rating' system and Personnel Codes (PC-XXX-###) are proprietary tools designed for internal quality control and workforce optimization. All submissions made via the Performance Audit portal are strictly confidential. This data is used solely for internal training, rewards, and corrective actions and is never disclosed to unauthorized third parties or made public."
    },
    {
      title: "Third-Party Service Integration",
      content: "To enhance our service delivery, we utilize third-party partners. We use Google Analytics to analyze site traffic and user behavior to improve our user experience. Additionally, we may display Google Reviews and other public testimonials to demonstrate our service history. These third parties have their own privacy policies governing the data they collect independently."
    },
    {
      title: "Data Retention and Deletion",
      content: "We retain corporate data only as long as necessary to fulfill the purposes for which it was collected or to comply with legal, regulatory, or internal policy requirements. Clients may request a summary of their stored data or request formal deletion by contacting our Data Protection Officer."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16 border-b border-slate-100 pb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purifik-green mb-4 block">
            Privacy Framework v2025.01
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Privacy <br/>& <span className="text-slate-400">Data Policy.</span>
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            At Purifik Clean, we recognize that facility data is sensitive. This policy outlines our 
            stringent protocols for protecting the information entrusted to us by our corporate partners.
          </p>
        </header>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-lg font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                <span className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[10px] text-slate-400">0{idx + 1}</span>
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-20 p-8 bg-purifik-dark rounded-[2.5rem] text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-4 tracking-tight">Compliance Commitment</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 max-w-xl">
              Purifik Clean operates in full alignment with global data protection standards, including GDPR and CCPA, where applicable to our corporate service delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-300">
                SSL Secured
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-300">
                Encrypted Vault
              </span>
              <span className="px-4 py-2 bg-purifik-green/20 border border-purifik-green/30 rounded-xl text-[9px] font-black uppercase tracking-widest text-purifik-green">
                GDPR Compliant
              </span>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purifik-green/10 blur-[80px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

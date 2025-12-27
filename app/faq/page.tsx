"use client";
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <h3 className={`text-base sm:text-lg font-black tracking-tight transition-colors ${isOpen ? 'text-purifik-green' : 'text-slate-900 group-hover:text-purifik-green'}`}>
          {question}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-purifik-green text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
        role="region"
      >
        <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Purifik Clean manage outsourced cleaning staff?",
      answer: "We operate a fully managed model. We recruit, vet, train, supervise, and handle payroll for all deployed staff. This ensures quality control and zero operational friction for our clients, who receive consistent, reliable service without the HR overhead."
    },
    {
      question: "What industries do you serve?",
      answer: "Our expertise is tailored for high-stakes environments including Banking & Finance, Healthcare & Hospitals, Corporate Offices, Industrial & Logistics Sites, Residential Estates, and high-profile Event Venues."
    },
    {
      question: "Can I request a custom cleaning schedule?",
      answer: "Absolutely. We architect custom frameworks based on your facility's operational hours. Whether you require nightly deep cleans (22:00 - 05:00), day-porter support, or specific rotational shifts, our strategy team tailors the SLA to your needs."
    },
    {
      question: "How do client staff ratings work?",
      answer: "Every staff member is assigned a unique Personnel Code (e.g., PC-LAG-101). Clients can use this code in our Performance Audit hub to leave confidential ratings and observations. This data is routed directly to our operations team for performance optimization."
    },
    {
      question: "Are your staff trained on compliance and hygiene standards?",
      answer: "Yes. All staff undergo a rigorous induction at the Purifik Academy. Training includes OSHA safety protocols, HIPAA-compliant healthcare sanitation, and corporate etiquette. We maintain ISO-45001 standards across all deployments."
    },
    {
      question: "How can I request a quote?",
      answer: "Simply use our 'Request Corporate Quote' form. By providing your facility size, industry, and requirements, our AI-assisted strategy tool generates a preliminary blueprint, followed by a detailed proposal from our operations team."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purifik-green/10 text-purifik-green text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            Frequently Asked <br/>
            <span className="text-purifik-green italic">Questions.</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Everything you need to know about Purifik Clean’s corporate services and managed workforce ecosystems.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 sm:p-12 shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purifik-green/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-8 leading-tight">
              Still have questions about our <br/>
              <span className="text-purifik-blue">Managed Framework?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => onNavigate?.('quote')}
                className="w-full sm:w-auto px-10 py-5 bg-purifik-green text-white rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-xl shadow-purifik-green/20 active:scale-95"
              >
                Request Corporate Quote
              </button>
              <button 
                onClick={() => onNavigate?.('quote')}
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
              >
                Talk to Operations Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
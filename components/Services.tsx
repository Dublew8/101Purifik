import React from 'react';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Corporate & Office Cleaning',
      desc: 'Precision cleaning and facility management for high-stakes corporate environments and headquarters.',
      icon: '🏢',
      tag: 'Tier 1',
      link: '/corporate-office-cleaning'
    },
    {
      title: 'Healthcare & Hospital Cleaning',
      desc: 'Sterile environment maintenance adhering to strict medical grade sanitation and HIPAA protocols.',
      icon: '🏥',
      tag: 'Clinical',
      link: '/healthcare-hospital-cleaning'
    },
    {
      title: 'Industrial & Factory Cleaning',
      desc: 'Heavy-duty operational cleaning for manufacturing plants, warehouses, and logistics centers.',
      icon: '🏭',
      tag: 'Industrial',
      link: '/industrial-factory-cleaning'
    },
    {
      title: 'Post-Construction Cleaning',
      desc: 'Comprehensive site debris removal and final detail cleaning for large-scale development projects.',
      icon: '🏗️',
      tag: 'Project',
      link: '/post-construction-cleaning'
    },
    {
      title: 'Outsourced Cleaning Staff Management',
      desc: 'End-to-end management of specialized facility staff, including training, payroll, and supervision.',
      icon: '👥',
      tag: 'Workforce',
      link: '/outsourced-cleaning-staff-management'
    },
    {
      title: 'Event & Facility Support Cleaning',
      desc: 'Strategic cleaning logistics for venues, large-scale conferences, and high-profile corporate events.',
      icon: '🎫',
      tag: 'Support',
      link: '/event-facility-support-cleaning'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-purifik-blue uppercase tracking-[0.4em] mb-4 inline-block">Service Framework v2.0</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Strategic <span className="text-purifik-green italic">Corporate</span> Offerings.
            </h2>
            <p className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed">
              Engineered for efficiency. Our services are deployed using a data-driven approach to facility hygiene and workforce logistics.
            </p>
          </div>
          <button 
            onClick={() => onNavigate?.('services')}
            className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-all active:scale-95"
          >
            View Full Service Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-purifik-blue/20 transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 group-hover:bg-purifik-blue/5 transition-all">
                  {service.icon}
                </div>
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-purifik-blue transition-colors border border-slate-100 px-2 py-1 rounded-md">
                  {service.tag}
                </span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-purifik-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 sm:pt-8 border-t border-slate-50">
                <button 
                  onClick={() => onNavigate?.(service.link)}
                  className="w-full py-4 bg-slate-50 text-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-purifik-blue hover:text-white transition-all flex items-center justify-center gap-2 group/btn active:scale-95"
                >
                  Learn More
                  <span className="text-xs group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
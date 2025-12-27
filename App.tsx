import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustBar from './components/TrustBar';
import QuoteGenerator from './components/QuoteGenerator';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import CapabilitiesDeck from './components/CapabilitiesDeck';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import GoogleReviews from './components/GoogleReviews';
import FAQPage from './app/faq/page';

// Service Detail Pages
import CorporateCleaningPage from './app/services/corporate-office/page';
import HealthcareCleaningPage from './app/services/healthcare-hospital/page';
import IndustrialCleaningPage from './app/services/industrial-factory/page';
import PostConstructionPage from './app/services/post-construction/page';
import OutsourcedStaffPage from './app/services/outsourced-staff/page';
import EventSupportPage from './app/services/event-support/page';
import ServicesPage from './app/services/page';
import AboutUsPage from './app/about/page';

const WhyPartnerWithUs = () => {
  const points = [
    "Reduced HR & Operational Costs",
    "Fully Vetted, Trained & Supervised Staff",
    "Seamless Scalability & Rapid Deployment",
    "Real-time Performance Monitoring",
    "Industry-specific Compliance Standards",
  ];

  return (
    <section className="bg-purifik-dark py-16 sm:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black mb-10 sm:mb-16 tracking-tighter text-center md:text-left">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-12">
          {points.map((point, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purifik-green/20 text-purifik-green border border-purifik-green/30 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold group-hover:bg-purifik-green group-hover:text-white transition-all shrink-0">✓</div>
              <span className="text-slate-300 font-bold text-sm sm:text-base tracking-tight">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesServed = () => {
  const industries = [
    { name: 'Banks & Financial Institutions', icon: '🏦' },
    { name: 'Hospitals & Healthcare Facilities', icon: '🏥' },
    { name: 'Corporate Offices', icon: '🏢' },
    { name: 'Factories & Industrial Sites', icon: '🏭' },
    { name: 'Residential Estates', icon: '🏠' },
    { name: 'Events & Venues', icon: '🎫' },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white overflow-hidden relative">
       {/* Background Accent */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 inline-block">Sector Specific Deployment</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none">
            Industries We <span className="text-purifik-blue italic">Serve.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Our operational logic is tailored to the unique security, compliance, and hygiene requirements of your industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="flex flex-col items-center text-center group p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-purifik-blue/20 hover:bg-white transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-sm border border-slate-100 rounded-2xl sm:rounded-3xl flex items-center justify-center text-2xl sm:text-3xl mb-6 sm:mb-8 group-hover:scale-110 group-hover:shadow-lg group-hover:text-purifik-blue transition-all duration-500">
                {ind.icon}
              </div>
              <p className="text-[10px] sm:text-xs font-black text-slate-800 uppercase tracking-widest leading-tight group-hover:text-purifik-blue transition-colors">
                {ind.name}
              </p>
              <div className="mt-4 w-6 h-1 bg-slate-200 group-hover:w-16 group-hover:bg-purifik-blue transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          <div className="flex gap-4 sm:gap-8 items-start p-6 sm:p-10 bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-purifik-green/20 hover:bg-white transition-all duration-500 group">
             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purifik-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform">🛡️</div>
             <div>
               <h4 className="font-black text-slate-900 mb-2 sm:mb-3 text-base sm:text-lg tracking-tight">On-Site Supervision</h4>
               <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">Dedicated operations lead for continuous site management, providing real-time oversight and intervention.</p>
             </div>
          </div>
          <div className="flex gap-4 sm:gap-8 items-start p-6 sm:p-10 bg-slate-50 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-purifik-green/20 hover:bg-white transition-all duration-500 group">
             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purifik-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform">📝</div>
             <div>
               <h4 className="font-black text-slate-900 mb-2 sm:mb-3 text-base sm:text-lg tracking-tight">Certified Methods</h4>
               <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">Compliance-focused workflows strictly tailored to sector regulations, including HIPAA, OSHA, and ISO standards.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExcellenceSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Our Protocol</h2>
          <h3 className="text-2xl sm:text-3xl font-black mb-10 tracking-tighter">How We Work</h3>
          <div className="space-y-8 sm:space-y-10">
            <div className="flex gap-5 sm:gap-6 items-start">
               <div className="text-2xl sm:text-3xl bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">🎓</div>
               <div>
                 <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1">Rigorous Training</h4>
                 <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">Our staff are rigorously trained on the latest protocols and high-tech equipment for elite environments.</p>
               </div>
            </div>
            <div className="flex gap-5 sm:gap-6 items-start">
               <div className="text-2xl sm:text-3xl bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 shrink-0">📊</div>
               <div>
                 <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1">Real-time Performance</h4>
                 <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">We monitor and report on site quality in real-time, providing total transparency to facility managers.</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Client Insights</h2>
          <h3 className="text-2xl sm:text-3xl font-black mb-10 tracking-tighter">Excellence Driven by Data</h3>
          <div className="space-y-4 sm:space-y-6">
            <div className="p-6 sm:p-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-4 sm:gap-5 hover:shadow-md transition-all">
              <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 sm:w-12 h-12 rounded-full border-2 border-slate-50 shadow-sm shrink-0" alt="User" />
              <div>
                <p className="text-[10px] text-yellow-500 font-black mb-2 tracking-widest">★★★★★</p>
                <p className="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">"Our facility team is incredibly attentive and detailed in their safety approach. The audit process is seamless."</p>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-sm border border-slate-100 flex items-start gap-4 sm:gap-5 hover:shadow-md transition-all">
              <img src="https://i.pravatar.cc/150?u=2" className="w-10 h-10 sm:w-12 h-12 rounded-full border-2 border-slate-50 shadow-sm shrink-0" alt="User" />
              <div>
                <p className="text-[10px] text-yellow-500 font-black mb-2 tracking-widest">★★★★★</p>
                <p className="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">"The transparency of reporting is exactly what our compliance team needed for our medical facility oversight."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero 
              onStart={() => setCurrentPage('quote')} 
              onViewCapabilities={() => setCurrentPage('capabilities')} 
            />
            <TrustBar />
            <Services onNavigate={setCurrentPage} />
            <WhyPartnerWithUs />
            <IndustriesServed />
            <ExcellenceSection />
            <GoogleReviews />
            <section className="bg-purifik-green py-20 sm:py-24 text-center">
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 sm:mb-10 tracking-tighter leading-tight">Ready for a Flawless Facility?</h2>
                <button 
                  onClick={() => setCurrentPage('quote')}
                  className="w-full sm:w-auto bg-white text-purifik-green px-12 py-5 rounded-xl font-black text-[10px] sm:text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-2xl active:scale-95"
                >
                  Optimize Workforce Deployment
                </button>
              </div>
            </section>
          </>
        );
      case 'capabilities':
        return <CapabilitiesDeck onQuoteRequest={() => setCurrentPage('quote')} />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'about-us':
        return <AboutUsPage onNavigate={setCurrentPage} />;
      case 'faq':
        return <FAQPage onNavigate={setCurrentPage} />;
      case '/corporate-office-cleaning':
        return <CorporateCleaningPage onNavigate={setCurrentPage} />;
      case '/healthcare-hospital-cleaning':
        return <HealthcareCleaningPage onNavigate={setCurrentPage} />;
      case '/industrial-factory-cleaning':
        return <IndustrialCleaningPage onNavigate={setCurrentPage} />;
      case '/post-construction-cleaning':
        return <PostConstructionPage onNavigate={setCurrentPage} />;
      case '/outsourced-cleaning-staff-management':
        return <OutsourcedStaffPage onNavigate={setCurrentPage} />;
      case '/event-facility-support-cleaning':
        return <EventSupportPage onNavigate={setCurrentPage} />;
      case 'quote': return <QuoteGenerator />;
      case 'rate-staff': return <RateStaffPage />;
      case 'admin': return <Dashboard />;
      case 'terms': return <TermsOfService />;
      case 'privacy': return <PrivacyPolicy />;
      default: return <Hero onStart={() => setCurrentPage('quote')} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

// --- SUB-PAGES ---

const RateStaffPage = () => {
  const [formData, setFormData] = useState({ staffCode: '', rating: 0, comment: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1000);
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center p-8 sm:p-14 bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl max-w-md border border-slate-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purifik-green/10 text-purifik-green rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 text-2xl sm:text-3xl">✓</div>
          <h2 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 tracking-tighter">Audit Transmitted</h2>
          <p className="text-slate-500 mb-6 sm:mb-8 font-medium text-sm">Personnel record updated. System registry refreshed.</p>
          <button onClick={() => setStatus('idle')} className="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-[10px]">Initiate Performance Review</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16 bg-slate-50 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-purifik-dark p-6 sm:p-12 rounded-t-[1.5rem] sm:rounded-t-[2rem] text-white">
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">Personnel Performance Audit</h1>
          <p className="text-slate-400 text-[10px] font-bold mt-2 uppercase tracking-widest">Confidential Reporting Hub</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-14 rounded-b-[1.5rem] sm:rounded-b-[2rem] shadow-xl space-y-8 sm:space-y-12 border border-slate-100">
          <div className="space-y-3">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Personnel Identifier</label>
            <input 
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 sm:px-6 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-green font-bold text-slate-900 transition-all text-sm sm:text-base"
              placeholder="PC-LAG-042"
              value={formData.staffCode}
              onChange={(e) => setFormData({...formData, staffCode: e.target.value.toUpperCase()})}
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Quality Score</label>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({...formData, rating: star})}
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl text-lg sm:text-xl flex items-center justify-center transition-all ${
                    formData.rating >= star ? 'bg-purifik-green text-white scale-110 shadow-lg' : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Qualitative Notes</label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 sm:px-6 sm:py-4 outline-none focus:ring-2 focus:ring-purifik-green font-medium h-32 transition-all text-sm sm:text-base"
              placeholder="Describe performance observations..."
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
            />
          </div>
          <button 
            type="submit"
            disabled={!formData.staffCode || !formData.rating}
            className="w-full bg-purifik-dark text-white font-black py-4 sm:py-6 rounded-xl shadow-xl hover:bg-black transition-all text-[10px] uppercase tracking-[0.2em] disabled:opacity-50 active:scale-95"
          >
            Finalize Audit Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
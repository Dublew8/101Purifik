import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Testimonials />
      
      <section className="bg-slate-900 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-4 inline-block">Direct Action</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Scale your facility operations <br/><span className="text-blue-500">without the friction.</span></h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/quote"
              className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/20"
            >
              Generate Operational Blueprint
            </Link>
            <button className="bg-transparent text-white border-2 border-slate-700 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Consult Strategic Advisor
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
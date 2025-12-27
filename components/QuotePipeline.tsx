
"use client";
import React, { useState, useMemo } from 'react';

interface Quote {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  submittedAt: string;
  aiEstimatedCost: number;
  cleaningBluePrint: string;
  riskAssessment: string;
  services: string;
}

interface QuotePipelineProps {
  initialQuotes: Quote[];
}

const QuotePipeline: React.FC<QuotePipelineProps> = ({ initialQuotes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All Sectors');
  const [sortBy, setSortBy] = useState<'date' | 'cost'>('date');
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);

  const industries = useMemo(() => {
    const sets = new Set(initialQuotes.map(q => q.industry));
    return ['All Sectors', ...Array.from(sets)];
  }, [initialQuotes]);

  const filteredQuotes = useMemo(() => {
    return initialQuotes
      .filter(q => {
        const matchesSearch = q.companyName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            q.industry.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = industryFilter === 'All Sectors' || q.industry === industryFilter;
        return matchesSearch && matchesIndustry;
      })
      .sort((a, b) => {
        if (sortBy === 'date') {
          return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
        }
        return b.aiEstimatedCost - a.aiEstimatedCost;
      });
  }, [initialQuotes, searchTerm, industryFilter, sortBy]);

  return (
    <div className="flex flex-col h-full bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl relative">
      
      {/* Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purifik-blue mb-1 block">Proposal Strategy Analysis</span>
                <h3 className="text-2xl font-black tracking-tighter text-white">{selectedQuote.companyName}</h3>
              </div>
              <button 
                onClick={() => setSelectedQuote(null)}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto scrollbar-hide space-y-10">
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-800">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Industry Sector</p>
                  <p className="text-sm font-bold text-white">{selectedQuote.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Facility Location</p>
                  <p className="text-sm font-bold text-white">{selectedQuote.location}</p>
                </div>
              </div>

              <section>
                <h4 className="text-[11px] font-black text-purifik-green uppercase tracking-[0.2em] mb-4">Operational Blueprint</h4>
                <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800/60 leading-relaxed text-sm text-slate-300 font-medium">
                  {selectedQuote.cleaningBluePrint}
                </div>
              </section>

              <section>
                <h4 className="text-[11px] font-black text-red-400 uppercase tracking-[0.2em] mb-4">Risk Assessment & Compliance</h4>
                <div className="p-6 bg-red-500/[0.03] rounded-2xl border border-red-500/10 leading-relaxed text-sm text-slate-400 font-medium italic">
                  {selectedQuote.riskAssessment}
                </div>
              </section>

              <section>
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Requested Service Scope</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedQuote.services.split(', ').map((s, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-[10px] font-black uppercase tracking-widest border border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="p-8 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div>
                <p className="text-2xl font-black text-[#2E8B57]">${selectedQuote.aiEstimatedCost.toLocaleString()}</p>
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Target Monthly Contract Value</p>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedQuote(null)}
                  className="px-6 py-2.5 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-all"
                >
                  Close
                </button>
                <button className="px-6 py-2.5 bg-purifik-blue text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-purifik-blue/20">
                  Approve Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 border-b border-slate-800 bg-slate-900/50 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Proposal Pipeline</h2>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">Operational Intelligence</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setSortBy('date')}
              className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${sortBy === 'date' ? 'bg-purifik-blue text-white' : 'bg-slate-800 text-slate-500 hover:text-white'}`}
            >
              Recent
            </button>
            <button 
              onClick={() => setSortBy('cost')}
              className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${sortBy === 'cost' ? 'bg-purifik-blue text-white' : 'bg-slate-800 text-slate-500 hover:text-white'}`}
            >
              Value
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="relative">
            <input 
              type="text"
              placeholder="Filter by Entity..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:ring-2 focus:ring-purifik-blue transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 text-xs">🔍</span>
          </div>
          
          <select 
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white outline-none focus:ring-2 focus:ring-purifik-blue transition-all cursor-pointer appearance-none"
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-6 space-y-4 overflow-y-auto scrollbar-hide max-h-[600px]">
        {filteredQuotes.length > 0 ? filteredQuotes.map((q) => (
          <div 
            key={q.id} 
            onClick={() => setSelectedQuote(q)}
            className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800 hover:border-[#0F4C81] transition-all cursor-pointer group animate-in fade-in slide-in-from-right-4 duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-black uppercase text-[#0F4C81] tracking-widest">{q.industry}</span>
              <span className="text-[10px] text-slate-600 font-bold">
                {new Date(q.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </span>
            </div>
            <h4 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">{q.companyName}</h4>
            <p className="text-xs text-slate-500 mb-4 line-clamp-1">{q.location}</p>
            <div className="flex justify-between items-center pt-4 border-t border-slate-800">
              <p className="text-lg font-black text-[#2E8B57]">
                ${(q.aiEstimatedCost || 0).toLocaleString()}
                <span className="text-[10px] text-slate-600 ml-1 font-bold">/MO</span>
              </p>
              <button className="text-[10px] font-black uppercase text-slate-500 group-hover:text-white transition-colors flex items-center gap-1">
                Strategy <span className="text-xs">→</span>
              </button>
            </div>
          </div>
        )) : (
          <div className="py-20 text-center">
            <div className="text-3xl mb-4 grayscale opacity-50">📂</div>
            <p className="text-slate-600 text-sm font-medium italic">No proposals match your current filters.</p>
            <button 
              onClick={() => {setSearchTerm(''); setIndustryFilter('All Sectors');}}
              className="mt-4 text-[10px] font-black uppercase tracking-widest text-purifik-blue hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuotePipeline;

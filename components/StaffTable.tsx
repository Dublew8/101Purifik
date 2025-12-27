
"use client";
import React, { useState, useMemo } from 'react';

interface StaffRating {
  id: string;
  score: number;
  comment: string | null;
  createdAt: string;
  clientEmail: string | null;
}

interface StaffStat {
  code: string;
  avg: string;
  count: number;
  ratings: StaffRating[];
}

interface StaffTableProps {
  initialStats: StaffStat[];
}

const StaffTable: React.FC<StaffTableProps> = ({ initialStats }) => {
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState<'code' | 'avg' | 'count'>('avg');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedStaff, setSelectedStaff] = useState<StaffStat | null>(null);

  const filteredAndSortedStats = useMemo(() => {
    let result = [...initialStats].filter(s => 
      s.code.toLowerCase().includes(search.toLowerCase())
    );

    result.sort((a, b) => {
      let valA: any = a[sortKey];
      let valB: any = b[sortKey];

      if (sortKey === 'avg') {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [initialStats, search, sortKey, sortOrder]);

  const toggleSort = (key: 'code' | 'avg' | 'count') => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (sortKey !== field) return <span className="ml-1 opacity-20">⇅</span>;
    return sortOrder === 'asc' ? <span className="ml-1">↑</span> : <span className="ml-1">↓</span>;
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Detail Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purifik-blue mb-1 block">Personnel Audit Deep-Dive</span>
                <h3 className="text-2xl font-black tracking-tighter text-white flex items-center gap-3">
                  {selectedStaff.code}
                  {parseFloat(selectedStaff.avg) < 3.5 && parseFloat(selectedStaff.avg) > 0 && (
                    <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[9px] font-black uppercase tracking-widest border border-red-500/20 rounded-full animate-pulse">
                      Flagged: Quality Alert
                    </span>
                  )}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedStaff(null)}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8 max-h-[60vh] overflow-y-auto scrollbar-hide space-y-6">
              {selectedStaff.ratings.length > 0 ? (
                selectedStaff.ratings.map((r) => (
                  <div key={r.id} className={`p-6 bg-slate-800/40 rounded-2xl border ${r.score < 3 ? 'border-red-500/30' : 'border-slate-800/60'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className={`text-xs ${r.score >= star ? 'text-yellow-500' : 'text-slate-700'}`}>★</span>
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {new Date(r.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium italic leading-relaxed">
                      "{r.comment || "Protocol executed according to standards. No qualitative notes logged."}"
                    </p>
                    {r.clientEmail && (
                      <div className="mt-4 pt-4 border-t border-slate-800 flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase text-slate-600 tracking-widest">Auditor:</span>
                        <span className="text-[9px] text-slate-500 font-bold">{r.clientEmail}</span>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="py-20 text-center">
                  <p className="text-slate-500 font-medium italic">No performance logs recorded for this identifier.</p>
                </div>
              )}
            </div>

            <div className="p-8 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
              <div className="flex gap-4">
                <div>
                  <p className={`text-xl font-black ${parseFloat(selectedStaff.avg) < 3.5 && parseFloat(selectedStaff.avg) > 0 ? 'text-red-500' : 'text-white'}`}>
                    {selectedStaff.avg}
                  </p>
                  <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Composite Score</p>
                </div>
                <div className="w-px h-8 bg-slate-800 mt-1"></div>
                <div>
                  <p className="text-xl font-black text-white">{selectedStaff.count}</p>
                  <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Total Audits</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStaff(null)}
                className="px-6 py-2.5 bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 transition-all"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table Section */}
      <div className="p-8 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/50">
        <div>
          <h2 className="text-lg font-bold">Confidential Staff Registry</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">Personnel Performance Audit Log</p>
        </div>
        <div className="relative w-full sm:w-64">
          <input 
            type="text"
            placeholder="Search Identifier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:ring-2 focus:ring-purifik-blue transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs">🔍</div>
        </div>
      </div>
      
      <div className="overflow-x-auto flex-grow">
        <table className="w-full text-left text-sm border-collapse">
          <thead className="sticky top-0 bg-slate-800 text-slate-400 uppercase text-[10px] font-black tracking-[0.2em] z-10 shadow-sm">
            <tr>
              <th 
                className="px-8 py-4 cursor-pointer hover:text-white transition-colors"
                onClick={() => toggleSort('code')}
              >
                Personnel Code <SortIcon field="code" />
              </th>
              <th 
                className="px-8 py-4 text-center cursor-pointer hover:text-white transition-colors"
                onClick={() => toggleSort('avg')}
              >
                Score Index <SortIcon field="avg" />
              </th>
              <th 
                className="px-8 py-4 text-center cursor-pointer hover:text-white transition-colors"
                onClick={() => toggleSort('count')}
              >
                Audit Volume <SortIcon field="count" />
              </th>
              <th className="px-8 py-4 text-right pr-12">Performance Data</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {filteredAndSortedStats.map((s) => (
              <tr 
                key={s.code} 
                onClick={() => setSelectedStaff(s)}
                className={`hover:bg-slate-800/40 transition-all group cursor-pointer active:scale-[0.995] ${parseFloat(s.avg) < 3.5 && parseFloat(s.avg) > 0 ? 'bg-red-500/[0.03]' : ''}`}
              >
                <td className="px-8 py-6 font-bold text-[#0F4C81] group-hover:text-blue-400 transition-colors flex items-center gap-3">
                  {s.code}
                  {parseFloat(s.avg) < 3.5 && parseFloat(s.avg) > 0 && (
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_red]" title="Quality Alert"></span>
                  )}
                </td>
                <td className="px-8 py-6 text-center">
                   <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black ${parseFloat(s.avg) >= 4.5 ? 'bg-green-500/20 text-green-400' : parseFloat(s.avg) >= 3.5 ? 'bg-blue-500/20 text-blue-400' : parseFloat(s.avg) > 0 ? 'bg-red-500/20 text-red-400' : 'bg-slate-800 text-slate-500'}`}>
                     {parseFloat(s.avg) > 0 ? `${s.avg} / 5.0` : 'PENDING'}
                   </span>
                </td>
                <td className="px-8 py-6 text-center text-slate-400 font-medium">
                  {s.count} Audits
                </td>
                <td className="px-8 py-6 text-right pr-12">
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-white transition-colors flex items-center gap-2 ml-auto">
                    View Audit History <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </button>
                </td>
              </tr>
            ))}
            {filteredAndSortedStats.length === 0 && (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center text-slate-600 font-medium italic">
                  {search ? `No personnel found matching "${search}"` : 'Registry is currently empty.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffTable;

import React from 'react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { SiteStatus, StaffMember } from '../types';

const Dashboard: React.FC = () => {
  const data = [
    { name: 'Mon', completion: 94 },
    { name: 'Tue', completion: 98 },
    { name: 'Wed', completion: 85 },
    { name: 'Thu', completion: 99 },
    { name: 'Fri', completion: 92 },
    { name: 'Sat', completion: 100 },
    { name: 'Sun', completion: 97 },
  ];

  const sites: SiteStatus[] = [
    { name: 'Tower A - Main Office', cleaningProgress: 88, staffOnSite: 12, lastService: 'Today 08:00 AM', issues: 0, sector: 'Banking' },
    { name: 'South Warehouse', cleaningProgress: 45, staffOnSite: 6, lastService: 'Yesterday', issues: 2, sector: 'Industrial' },
    { name: 'Medical Wing B', cleaningProgress: 100, staffOnSite: 4, lastService: 'Today 10:15 AM', issues: 0, sector: 'Healthcare' },
  ];

  const staff: StaffMember[] = [
    { id: 'PF-001', name: 'Jonathan Aris', role: 'Team Lead', qualityScore: 9.8, attendance: 100, lastSafetyAudit: 'Dec 12', status: 'Active' },
    { id: 'PF-004', name: 'Mia Wong', role: 'Specialist', qualityScore: 9.5, attendance: 98, lastSafetyAudit: 'Dec 10', status: 'Active' },
    { id: 'PF-009', name: 'David Smith', role: 'Technician', qualityScore: 8.9, attendance: 92, lastSafetyAudit: 'Dec 08', status: 'Training' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto min-h-screen bg-slate-50/50 pt-24 pb-12 lg:pt-8">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-none">Enterprise Intelligence</h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Global Workforce & Facility Performance Monitoring.</p>
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="hidden sm:flex -space-x-2 mr-4">
             {[1,2,3].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/150?u=${i}`} alt="Auditor" />)}
             <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-600">+22</div>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95">
            Authorize Workforce Deployment
          </button>
        </div>
      </header>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm lg:col-span-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Quality Index Baseline</h3>
            <select className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-100 border-none rounded-xl px-4 py-2 outline-none cursor-pointer focus:ring-2 focus:ring-blue-500/20">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-48 sm:h-64 lg:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontWeight: 800, fontSize: '12px'}}
                />
                <Area type="monotone" dataKey="completion" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorComp)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-center border border-white/5">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Safety Rating</p>
            <p className="text-4xl font-black text-green-400">99.4%</p>
            <div className="mt-4 flex items-center gap-2 text-[9px] text-slate-300 font-black uppercase tracking-widest">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              ISO 45001 Verified
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-200 flex flex-col justify-center shadow-sm">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Active Incidents</p>
            <p className="text-4xl font-black text-slate-900">02</p>
            <p className="text-[9px] text-red-500 mt-2 font-black uppercase tracking-widest">Action Required (Whse)</p>
          </div>
        </div>
      </div>

      {/* Detail Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="font-black text-slate-800 tracking-tight">Staff Performance Rankings</h3>
            <button className="text-blue-600 text-[9px] font-black uppercase tracking-[0.2em] hover:underline">Access Directory</button>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full text-left min-w-[500px]">
              <thead className="bg-slate-50/50 text-slate-500 text-[9px] font-black uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-4">Personnel</th>
                  <th className="px-6 py-4 text-center">Quality</th>
                  <th className="px-6 py-4 text-center">Safety</th>
                  <th className="px-6 py-4 text-right pr-8">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {staff.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-100 rounded-xl flex items-center justify-center text-[10px] font-black text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                          {s.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-900 mb-0.5">{s.name}</p>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{s.id} • {s.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-xs font-black text-blue-600">{s.qualityScore}</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{s.lastSafetyAudit}</span>
                    </td>
                    <td className="px-6 py-5 text-right pr-8">
                       <span className={`px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${s.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                         {s.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
           <h3 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.3em] px-2 mb-2">Facility Monitoring</h3>
           {sites.map((site, i) => (
             <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center justify-between group hover:border-blue-400 transition-all cursor-pointer shadow-sm hover:shadow-xl active:scale-[0.99]">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl bg-slate-50 group-hover:bg-blue-50 transition-all shrink-0 border border-slate-100`}>
                    {site.sector === 'Banking' ? '🏦' : site.sector === 'Healthcare' ? '🏥' : '🏭'}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">{site.name}</h4>
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">{site.sector} • {site.lastService}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-slate-900">{site.cleaningProgress}%</p>
                  <div className="w-16 sm:w-24 bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-500 h-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{width: `${site.cleaningProgress}%`}}></div>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
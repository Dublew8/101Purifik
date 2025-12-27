
import React from 'react';
import { prisma } from '../../lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import AddStaffButton from '../../components/AddStaffButton';
import StaffTable from '../../components/StaffTable';
import QuotePipeline from '../../components/QuotePipeline';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/auth/signin');
  }
  
  // Fetch Quote Requests with all strategic data
  const quotes = await prisma.quoteRequest.findMany({
    orderBy: { submittedAt: 'desc' },
  });

  // Fetch and aggregate Staff Performance with full rating details
  const staffMembers = await prisma.staff.findMany({
    include: { 
      ratings: {
        orderBy: { createdAt: 'desc' }
      } 
    }
  });

  const staffStats = staffMembers.map(staff => {
    const count = staff.ratings.length;
    const avgVal = count > 0 
      ? staff.ratings.reduce((acc, r) => acc + r.score, 0) / count 
      : 0;
    
    return {
      code: staff.code,
      avg: avgVal.toFixed(1),
      count,
      ratings: staff.ratings.map(r => ({
        id: r.id,
        score: r.score,
        comment: r.comment,
        createdAt: r.createdAt.toISOString(),
        clientEmail: r.clientEmail
      }))
    };
  });

  const serializedQuotes = quotes.map(q => ({
    id: q.id,
    companyName: q.companyName,
    industry: q.industry,
    location: q.location,
    submittedAt: q.submittedAt.toISOString(),
    aiEstimatedCost: q.aiEstimatedCost || 0,
    cleaningBluePrint: q.cleaningBluePrint || "Strategy pending generation...",
    riskAssessment: q.riskAssessment || "Risk evaluation required.",
    services: q.services || ""
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-8 pt-24 pb-20">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-900">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tighter">Executive Dashboard</h1>
            <p className="text-slate-500 font-medium text-sm sm:text-base">Authorized Lead: {session?.user?.name || 'Systems Admin'}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full md:w-auto">
             <AddStaffButton />
             <div className="flex gap-2 sm:ml-2">
               <div className="flex-1 sm:flex-none px-4 py-2.5 bg-[#0F4C81]/20 text-[#0F4C81] border border-[#0F4C81]/30 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-center whitespace-nowrap">
                 System: Active
               </div>
               <div className="flex-1 sm:flex-none px-4 py-2.5 bg-[#2E8B57]/20 text-[#2E8B57] border border-[#2E8B57]/30 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 whitespace-nowrap">
                 <span className="w-1.5 h-1.5 bg-[#2E8B57] rounded-full animate-pulse"></span>
                 Secure
               </div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-7 xl:col-span-8 bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[600px] lg:h-[750px]">
            <StaffTable initialStats={staffStats} />
          </div>

          <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-[600px] lg:h-[750px]">
            <QuotePipeline initialQuotes={serializedQuotes} />
          </div>
        </div>
      </div>
    </div>
  );
}

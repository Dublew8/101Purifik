import React from 'react';

const reviews = [
  {
    firstName: "Marcus",
    rating: 5,
    text: "The team at Purifik Clean is truly top-tier. Their specialized lab sanitation is impeccable. The attention to detail is unmatched in the industry.",
    date: "2 days ago"
  },
  {
    firstName: "Elena",
    rating: 5,
    text: "Reliable, professional, and very thorough. We've seen a significant improvement in our facility's hygiene score since they took over operations.",
    date: "1 week ago"
  },
  {
    firstName: "Julian",
    rating: 5,
    text: "Excellent customer service and highly trained staff. They handle our complex banking facility with ease and total discretion.",
    date: "3 weeks ago"
  }
];

const GoogleReviews: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              {/* Google G Logo */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Verified Google Business Profile</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight">
              A Reputation for <br/>
              <span className="text-purifik-blue italic">Verified</span> Excellence.
            </h2>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
             <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-slate-900">4.9</span>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">(142 Reviews)</span>
             </div>
             <button className="bg-slate-50 border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 hover:border-purifik-blue transition-all flex items-center gap-3 group">
               Submit Verified Feedback
               <span className="group-hover:translate-x-1 transition-transform">→</span>
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-purifik-blue/10 transition-all duration-500 relative group"
            >
              <div className="absolute top-8 right-8 grayscale opacity-10 group-hover:opacity-30 transition-opacity">
                 <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                 </svg>
              </div>
              
              <div>
                <div className="flex items-center gap-1 text-yellow-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic mb-8">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purifik-blue/10 flex items-center justify-center text-purifik-blue font-black text-xs">
                    {review.firstName[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">{review.firstName}</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-[6px] text-white">✓</span>
                      </div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Verified</p>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] flex items-center justify-center gap-2">
             <span className="w-8 h-px bg-slate-200"></span>
             Powered by Google My Business 
             <span className="w-8 h-px bg-slate-200"></span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
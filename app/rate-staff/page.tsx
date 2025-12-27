"use client";
import React, { useState } from 'react';

export default function RateStaffPage() {
  const [formData, setFormData] = useState({
    staffCode: '',
    rating: 0,
    comment: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.staffCode.match(/^PC-[A-Z]{3}-\d{3}$/)) {
      alert("Invalid Staff Code format. (Example: PC-NYC-101)");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-12 bg-white rounded-3xl shadow-xl max-w-md border border-slate-100">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
          <h2 className="text-2xl font-bold mb-4">Feedback Received</h2>
          <p className="text-slate-500 mb-8">Thank you for helping us maintain the Purifik standard. Your feedback has been logged in our secure performance registry.</p>
          <button onClick={() => window.location.href = '/'} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold">Return to Command Center</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-blue-600 p-8 rounded-t-3xl text-white">
          <h1 className="text-2xl font-black uppercase tracking-tighter">Performance Audit</h1>
          <p className="mt-2 text-blue-100 text-sm font-medium">This is <span className="underline">NOT</span> a public review system. Feedback is confidential and routed directly to facility management.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-b-3xl shadow-xl space-y-8 border border-slate-100">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Personnel Code</label>
            <input 
              required
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 font-bold"
              placeholder="PC-XXX-###"
              value={formData.staffCode}
              onChange={(e) => setFormData({...formData, staffCode: e.target.value.toUpperCase()})}
            />
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Service Rating</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({...formData, rating: star})}
                  className={`w-12 h-12 rounded-xl text-xl flex items-center justify-center transition-all ${
                    formData.rating >= star ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Observations (Optional)</label>
            <textarea 
              className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 h-32"
              placeholder="Detail specific achievements or areas for improvement..."
              value={formData.comment}
              onChange={(e) => setFormData({...formData, comment: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            disabled={loading || formData.rating === 0}
            className="w-full bg-slate-900 text-white font-black py-4 rounded-xl shadow-lg hover:bg-black transition-all disabled:opacity-50"
          >
            {loading ? 'Transmitting Data...' : 'Transmit Performance Metrics'}
          </button>
        </form>
      </div>
    </div>
  );
}
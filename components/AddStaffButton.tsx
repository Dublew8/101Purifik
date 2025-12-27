
"use client";
import React, { useState } from 'react';

const AddStaffButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [newCode, setNewCode] = useState<string | null>(null);

  const handleCreate = async () => {
    const region = prompt("Enter 3-letter Region Code (e.g. NYC, LON, LAG):") || "HQ";
    if (region.length < 2) return;

    setLoading(true);
    setNewCode(null);
    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ region: region.substring(0, 3) }),
      });
      const data = await res.json();
      if (data.code) {
        setNewCode(data.code);
        // Delay reload to let user see the generated code
        setTimeout(() => window.location.reload(), 2500);
      } else {
        alert(data.error || "Error generating code.");
      }
    } catch (err) {
      alert("Request failed. Database connectivity or authorization error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button 
        onClick={handleCreate}
        disabled={loading}
        className="bg-purifik-green text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-purifik-green/20 disabled:opacity-50 flex items-center gap-2"
      >
        {loading ? (
          <>
            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Syncing Registry...
          </>
        ) : 'Register New Personnel'}
      </button>
      {newCode && (
        <div className="bg-purifik-green/10 text-purifik-green px-4 py-2 rounded-lg text-[10px] font-black uppercase border border-purifik-green/20 animate-in fade-in zoom-in duration-300">
          Generated Identifier: {newCode}
        </div>
      )}
    </div>
  );
};

export default AddStaffButton;

"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function SignIn() {
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    
    const result = await signIn("credentials", {
      username: target.username.value,
      password: target.password.value,
      redirect: true,
      callbackUrl: "/admin",
    });
    
    if (result?.error) setError("Invalid Credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">P</div>
          <h1 className="text-white text-2xl font-black">Admin Access</h1>
          <p className="text-slate-500 text-sm mt-2">Purifik Facility Intelligence Hub</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Username</label>
            <input name="username" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Password</label>
            <input name="password" type="password" required className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          {error && <p className="text-red-500 text-xs text-center font-bold">{error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20">
            Authenticate Administrative Access
          </button>
        </form>
      </div>
    </div>
  );
}
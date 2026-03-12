import React from 'react';

export const Badge = ({ text, color }: { text: string; color: string }) => (
  <span className={`px-3 py-1 rounded-full text-[0.65rem] font-black uppercase tracking-wider ${color}`}>
    {text}
  </span>
);

export const ServiceCard = ({ icon, bg, role, title, resp, skills }: any) => (
  <div className="mit-card group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6`} style={{ background: bg }}>
      {icon}
    </div>
    <div className="font-mono text-[0.6rem] text-slate-400 font-bold uppercase tracking-widest mb-2">{role}</div>
    <h3 className="font-syne text-lg font-bold mb-3 group-hover:text-[#1a5cff] transition-colors">{title}</h3>
    <p className="text-xs text-slate-500 leading-relaxed mb-6">{resp}</p>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((s: string) => (
        <span key={s} className="bg-slate-100 text-slate-500 text-[0.55rem] font-bold px-2 py-0.5 rounded uppercase">{s}</span>
      ))}
    </div>
  </div>
);

export const CaseStudyCard = ({ num, industry, title, body, results }: any) => (
  <div className="mit-card flex flex-col h-full border-l-4 border-l-[#1a5cff]">
    <div className="flex justify-between items-center mb-6">
      <span className="font-mono text-3xl font-black text-slate-100">{num}</span>
      <span className="text-[0.6rem] font-bold text-slate-400 uppercase tracking-widest">{industry}</span>
    </div>
    <h3 className="font-syne text-md font-bold mb-4 leading-tight">{title}</h3>
    <p className="text-xs text-slate-600 mb-6 flex-grow leading-relaxed">{body}</p>
    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
      {results.map((r: string) => (
        <span key={r} className="text-[0.65rem] font-bold text-emerald-600 flex items-center gap-1">✅ {r}</span>
      ))}
    </div>
  </div>
);
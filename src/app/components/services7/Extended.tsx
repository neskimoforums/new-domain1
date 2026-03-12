import React from 'react';

// Benefit Card Component
export const BenefitCard = ({ icon, title, desc }: any) => (
  <div className="flex gap-5 p-6 bg-white border border-[#e2ddd6] rounded-2xl">
    <div className="text-3xl bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-syne font-bold text-lg mb-2">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// Future Trend Card
export const FutureCard = ({ icon, title, desc }: any) => (
  <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
    <div className="text-3xl mb-4">{icon}</div>
    <h4 className="font-syne font-bold text-white mb-3">{title}</h4>
    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

// FAQ Item with State
export const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
  <div className="border-b border-[#e2ddd6]">
    <button 
      onClick={onClick}
      className="w-full py-6 flex justify-between items-center text-left hover:text-[#1a5cff] transition-colors"
    >
      <span className="font-syne font-bold text-sm md:text-md pr-4">{question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▾</span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
      <p className="text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
        {answer}
      </p>
    </div>
  </div>
);
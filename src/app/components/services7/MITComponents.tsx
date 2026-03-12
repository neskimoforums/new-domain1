import React from 'react';

// 1. Badge Component
export const Badge = ({ text, color }: { text: string; color: string }) => (
  <span className={`px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider ${color}`}>
    {text}
  </span>
);

// 2. Stat Item Component
export const StatItem = ({ count, label }: { count: string; label: string }) => (
  <div className="flex flex-col">
    <span className="font-syne text-4xl font-extrabold text-[#1a5cff]">{count}</span>
    <span className="text-[0.7rem] font-bold text-[#6b7280] uppercase tracking-tighter max-w-[140px]">
      {label}
    </span>
  </div>
);

// 3. Service Card Component
interface ServiceProps {
  icon: string;
  role: string;
  title: string;
  description: string;
  skills: string[];
  iconBg: string;
}

export const ServiceCard = ({ icon, role, title, description, skills, iconBg }: ServiceProps) => (
  <div className="bg-white border border-[#e2ddd6] p-8 rounded-2xl hover:border-[#1a5cff] transition-all group shadow-sm hover:shadow-xl hover:-translate-y-1">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-6 ${iconBg}`}>
      {icon}
    </div>
    <div className="font-mono text-[0.6rem] text-[#6b7280] uppercase tracking-widest mb-2 font-bold">
      {role}
    </div>
    <h3 className="font-syne text-xl font-bold mb-4 group-hover:text-[#1a5cff] transition-colors">
      {title}
    </h3>
    <p className="text-[#374151] text-sm leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-[#f3f4f6] text-[#4b5563] text-[0.6rem] font-black px-2 py-1 rounded uppercase">
          {skill}
        </span>
      ))}
    </div>
  </div>
);
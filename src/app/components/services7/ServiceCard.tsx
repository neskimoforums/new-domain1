interface ServiceProps {
    icon: string;
    bgColor: string;
    role: string;
    title: string;
    desc: string;
    bullets: string[];
    skills: string[];
  }
  
  export default function ServiceCard({ icon, bgColor, role, title, desc, bullets, skills }: ServiceProps) {
    return (
      <div className="bg-white border border-border rounded-xl p-7 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 group">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl mb-4" style={{ backgroundColor: bgColor }}>
          {icon}
        </div>
        <div className="font-mono text-[0.7rem] text-muted uppercase tracking-widest mb-1">{role}</div>
        <h3 className="font-syne font-bold text-lg mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-[0.88rem] text-slate-600 mb-4 leading-relaxed">{desc}</p>
        
        <ul className="space-y-2 mb-6">
          {bullets.map((b, i) => (
            <li key={i} className="text-[0.85rem] text-slate-500 pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-accent before:font-bold">
              {b}
            </li>
          ))}
        </ul>
  
        <div className="flex flex-wrap gap-1.5">
          {skills.map((s, i) => (
            <span key={i} className="bg-indigo-50 text-accent text-[0.7rem] font-semibold px-2.5 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }
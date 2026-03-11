'use client';
import type { Service } from '../../data/cybersecurity';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      id={service.id}
      className="group relative overflow-hidden rounded-2xl border border-cyan-300/15 bg-[var(--card)] p-8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-cyan-300/35 hover:shadow-[0_20px_60px_rgba(0,229,255,0.1)]"
    > 
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
 
      <div className="relative z-10">
        <div 
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="mb-3 text-[11px] tracking-[3px] text-cyan-300"
        >
          // {service.num}
        </div>

        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${service.iconClassName}`}
        >
          {service.icon}
        </div>

        <h3 
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-xl font-bold text-white mb-3"
        >
          {service.title}
        </h3>
        
        <p className="text-[14px] leading-[1.7] text-[var(--muted)] mb-5">
          {service.def}
        </p>

        <div className="space-y-4">
          <div className="role-section">
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] uppercase tracking-[3px] text-[var(--accent3)] mb-1.5"
            >
              ▸ Role
            </div>
            <p className="text-[13px] leading-[1.6] text-[var(--text)]">{service.role}</p>
          </div>

          <div className="role-section">
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] uppercase tracking-[3px] text-[var(--accent2)] mb-1.5"
            >
              ▸ Responsibility
            </div>
            <p className="text-[13px] leading-[1.6] text-[var(--text)]">{service.resp}</p>
          </div>

          <div className="role-section">
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] uppercase tracking-[3px] text-[var(--accent)] mb-2"
            >
              ▸ Common Solutions Include
            </div>
            <ul className="space-y-1">
              {service.solutions.map((item) => (
                <li key={item} className="relative pl-4 text-[13px] leading-[1.5] text-[var(--muted)]">
                  <span className="absolute left-0 font-bold text-cyan-300">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="role-section">
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="text-[10px] uppercase tracking-[3px] text-amber-300 mb-2"
            >
              ▸ Helps Organizations
            </div>
            <ul className="space-y-1">
              {service.bullets.map((item) => (
                <li key={item} className="relative pl-4 text-[13px] leading-[1.5] text-[var(--muted)]">
                  <span className="absolute left-0 font-bold text-cyan-300">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
 
        <div className="mt-5 rounded-md border-l-4 border-lime-300 bg-lime-300/5 px-4 py-3 text-[12px] italic leading-[1.6] text-lime-300">
          {service.note}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {service.skills.map((skill) => (
            <span
              key={skill}
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-0.5 text-[11px] text-cyan-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
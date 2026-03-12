import type { CaseStudy } from '../../data/cybersecurity';

type CaseStudyCardProps = {
  item: CaseStudy;
};
export function CaseStudyCard({ item }: CaseStudyCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-lime-300/10 bg-card p-7 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(163,255,87,0.08)]">
    
      <div 
        className="absolute left-0 top-0 h-full w-[4px]" 
        style={{ 
          background: 'linear-gradient(180deg, #05df72 , var(--accent))' 
        }} 
      />

      <div className="pl-2"> 
        <div 
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="mb-2 text-[12px] font-bold  uppercase tracking-[0.3em] text-green-400 "
        >
          CASE {item.num}
        </div>

        <h3 
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-lg font-bold text-white mb-1"
        >
          {item.company}
        </h3>
        
        <p 
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[12px] text-[var(--muted)] mb-4"
        >
          {item.sector}
        </p>

        <div className="space-y-4">
          <div>
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--accent3)]"
            >
              Challenge
            </div>
            <p className="text-[13px] leading-6 text-[var(--muted)]">{item.challenge}</p>
          </div>

          <div>
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[var(--accent2)]"
            >
              Solution
            </div>
            <p className="text-[13px] leading-6 text-[var(--muted)]">{item.solution}</p>
          </div>

          <div>
            <div 
              style={{ fontFamily: "'DM Mono', monospace" }}
              className="mb-1 text-[12px] uppercase tracking-[0.2em] font-bold text-green-400"
            >
              Result
            </div>
            <div 
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-[22px] font-extrabold text-green-500"
            >
              {item.resultVal}
            </div>
            <p className="text-[13px] leading-6 text-[var(--muted)]">{item.result}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
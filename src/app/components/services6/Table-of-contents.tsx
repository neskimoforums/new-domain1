import { tocItems } from '../../data/cybersecurity';
import { SectionHeading } from './Heading';

export function TableOfContents() {
  return (
    <section className="relative z-10 pb-16">
      <div className="container-shell">
        <SectionHeading 
          tag="Navigation" 
          title="Table of" 
          highlight="Contents" 
        />
         
        <div className="grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(260px,1fr))] mt-6">
          {tocItems.map(([href, label], index) => (
            <a
              key={href}
              href={`#${href}`}
              style={{ transition: 'all 0.2s' }}
              className="group flex items-center gap-[10px] rounded-[10px] border border-cyan-300/15 bg-cyan-300/[0.04] px-[18px] py-[12px] text-[13px] text-[var(--muted)] hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] hover:text-cyan-300"
            >
              <span 
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="min-w-[24px] text-[11px] text-cyan-300"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
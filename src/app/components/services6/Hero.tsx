import { stats } from '../../data/cybersecurity';

export function HeroSection() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:pt-28 ">
      <div className="container-shell">
        <p className="font-mono-custom mb-5 text-xs uppercase tracking-[0.4em] text-cyan-300">
          // Complete Security Reference · 2025–2026
        </p>
        <h1 className="font-syne max-w-4xl text-4xl font-extrabold leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-cyan-300 to-lime-300 bg-clip-text text-transparent">
            Cybersecurity
          </span>
          <br />
          Services Guide
        </h1>
        <p className="text-muted mt-6 max-w-3xl text-base leading-8 sm:text-lg">
          Cyber threats are increasing every year, and organizations across the world are facing sophisticated cyberattacks targeting data, infrastructure, and digital assets. Businesses today rely heavily on digital systems, cloud infrastructure, mobile devices, and online applications — making cybersecurity one of the most critical investments for modern organizations. This guide explains the <strong className="">top 20 cybersecurity services that businesses use to protect their systems, data, and users from cyber threats.</strong>.
        </p>

        <div className="mt-10 grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((item: any) => (
            <div key={item.label} className="bg-card rounded-2xl border border-cyan-300/15 py-4 text-center">
              <div className="font-syne text-2xl font-extrabold text-cyan-300 md:text-3xl">{item.value}</div>
              <div
                style={{ fontFamily: "'DM Mono', monospace" }}
                className="font-mono text-(--muted) mt-1 text-[11px] tracking-[0.1em] ">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="opacity-0 animate-fade-up"
          style={{
            animationDelay: '1s',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: 'var(--muted, #94a3b8)',
            fontFamily: "'DM Mono', monospace",
            marginTop: 40
          }}
        >
          <span className="animate-bob inline-flex items-center gap-4" style={{ animationDelay: '2s' }}>
            <span className="font-bold text-sm">↓</span>
            <span className=" text-sm">Scroll to explore all 20 services</span>
          </span>
        </div>

      </div>
    </section>
  );
}
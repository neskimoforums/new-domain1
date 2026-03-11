type FooterLink = [string, string];

const serviceLinks: FooterLink[] = [
  ['#svc-1', 'Network Security'],
  ['#svc-3', 'Cloud Security'],
  ['#svc-7', 'SOC Services'],
  ['#svc-9', 'Penetration Testing'],
  ['#svc-10', 'Managed Security'],
];

const resourceLinks: FooterLink[] = [
  ['#stats', 'Industry Statistics'],
  ['#case-studies', 'Case Studies'],
  ['#faq', 'FAQ'],
  ['#', 'Security Glossary'],
  ['#', 'Compliance Guide'],
];

const complianceLinks: FooterLink[] = [
  ['#', 'GDPR Compliance'],
  ['#', 'HIPAA Security'],
  ['#', 'PCI DSS Guide'],
  ['#', 'ISO 27001'],
  ['#', 'NIST Framework'],
];

export function FooterSection() {
  return (
    <footer className="border-t border-cyan-300/10 bg-[var(--bg2)] py-16">
      <div className="container-shell">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="font-syne text-2xl font-bold text-[var(--accent)]">
              ⚡ CyberGuide
            </div>

            <p className="text-muted mt-4 text-sm leading-5.5">
            Authoritative cybersecurity intelligence for business leaders, security professionals, and IT teams worldwide. Expert-reviewed, continuously updated.
            </p>
          </div>

          <FooterList title="Services" links={serviceLinks} />

          <FooterList title="Resources" links={resourceLinks} />

          <FooterList title="Standards & Compliance" links={complianceLinks} />

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cyan-300/10 pt-6 lg:justify-between">

          <p className="font-mono text-xs text-muted">
          © 2026 CyberGuide. All rights reserved. Content reviewed by certified security professionals (CISSP, CEH, CISM).
          </p>

          <div className="flex flex-wrap gap-2">

            <span className="font-mono rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] text-muted">
              CISSP Reviewed
            </span>

            <span className="font-mono-custom rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] text-muted">
              E-E-A-T Compliant
            </span>

            <span className="font-mono-custom rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] text-muted">
              AEO Optimized
            </span>

            <span className="font-mono-custom rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1 text-[11px] text-muted">
              GEO Ready
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterList({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="font-syne text-lg font-bold text-white">
        {title}
      </h4>

      <ul className="mt-4 space-y-2">
        {links.map(([href, label]) => (
          <li key={label}>
            <a
              href={href}
              className="text-muted text-sm transition hover:text-[var(--accent)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
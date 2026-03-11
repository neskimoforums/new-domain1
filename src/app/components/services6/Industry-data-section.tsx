'use client';
import {
  countryDemand,
  globalUsers,
  industryDemand,
} from '../../data/cybersecurity';
import { SectionHeading } from './Heading';

function TableCard({
  title,
  subtitle,
  headers,
  rows,
}: {
  title: string;
  subtitle: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-[20px] border border-cyan-300/15 bg-[var(--card)]">
      {/* Header */}
      <div className="border-b border-cyan-300/15 bg-cyan-300/[0.04] px-8 py-6">
        <h3 style={{ fontFamily: "'Syne', sans-serif" }} className="text-xl font-bold text-white">
          {title}
        </h3>
        <p style={{ fontFamily: "'DM Mono', monospace" }} className="mt-1 text-[13px] text-[var(--muted)]">
          {subtitle}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-cyan-300/[0.06] border-b border-cyan-300/15">
              {headers.map((header) => (
                <th
                  key={header}
                  style={{ fontFamily: "'DM Mono', monospace" }}
                  className="whitespace-nowrap px-6 py-[14px] text-left text-[14px] uppercase tracking-[1px] text-cyan-300"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="transition-colors hover:bg-cyan-300/[0.03]">
                {row.map((cell, cellIndex) => {
                  // Logic to match original specific styles
                  const isYear = cellIndex === 0 && (cell.startsWith('202') || cell.length === 4);
                  const isValue = cell.includes('$') || cell.includes('%');
                  const isTrendUp = cell.includes('↑') || cell.includes('Rising') || cell.includes('Strong');
                  const isTrendDown = cell.includes('shortage') || cell.includes('↓');

                  return (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className={`border-b border-cyan-300/[0.06] px-6 py-[14px] text-sm text-[var(--text)] ${
                        rowIndex === rows.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <span
                        style={{
                          fontFamily: isYear || isValue || isTrendUp || isTrendDown ? "'DM Mono', monospace" : 'inherit',
                          color: isYear ? 'var(--accent)' : 
                                 isTrendUp ? 'var(--accent3)' : 
                                 isTrendDown ? 'var(--accent2)' : 'inherit',
                          fontWeight: isYear || isValue ? 500 : 400
                        }}
                      >
                        {cell}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function IndustryDataSection() {
  return (
    <section id="stats" className="relative z-10 py-14 md:py-20">
      <div className="container-shell">
        <SectionHeading
          tag="Market Intelligence"
          title="5-Year Industry"
          highlight="Data"
          lead="Evidence-based market statistics covering industry demand, geographic adoption, and global user growth."
        />

        <div className="grid grid-cols-1 gap-12 mt-12">
          <TableCard
            title="📈 Global Industry Demand — Last 5 Years"
            subtitle="Cybersecurity market size in USD billions (2021–2025)"
            headers={['Year', 'Market Size (USD B)', 'YoY Growth', 'Key Driver', 'Trend']}
            rows={industryDemand}
          />

          <TableCard
            title="🌍 Country-Level Demand — Last 5 Years"
            subtitle="Top 8 countries by cybersecurity spend (cumulative 2021–2025, USD B)"
            headers={['Country', '2021', '2022', '2023', '2024', '2025 (est.)']}
            rows={countryDemand}
          />

          <TableCard
            title="👥 Global Cybersecurity Users & Professionals — Last 5 Years"
            subtitle="Security professionals, enterprise adopters, and SMB users worldwide"
            headers={['Year', 'Security Professionals', 'Enterprise Orgs', 'SMB Adopters', 'Workforce Gap']}
            rows={globalUsers}
          />
        </div>
      </div>
    </section>
  );
}
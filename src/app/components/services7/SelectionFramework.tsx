export default function SelectionFramework() {
  const criteria = [
    { name: "Industry Experience", look: "10+ years, sector-specific case studies, certified engineers", red: "No references, new company with no track record", weight: "⭐⭐⭐⭐⭐" },
    { name: "Security Capabilities", look: "SOC 2 Type II, ISO 27001, 24/7 SOC monitoring", red: "No security certifications, reactive security", weight: "⭐⭐⭐⭐⭐" },
    { name: "SLA Terms", look: "99.9%+ uptime, defined RTO/RPO, financial penalties", red: "Vague SLAs, no financial accountability", weight: "⭐⭐⭐⭐⭐" },
    { name: "Support Availability", look: "24/7/365, multiple channels, local presence", red: "Business-hours only, single contact point", weight: "⭐⭐⭐⭐" },
    { name: "Scalability", look: "Modular services, elastic pricing, growth roadmaps", red: "Rigid contracts, no growth pathway", weight: "⭐⭐⭐⭐" },
    { name: "Tool Stack & Reporting", look: "Modern RMM/PSA tools, transparent dashboards", red: "No reporting, opaque operations", weight: "⭐⭐⭐" },
    { name: "Pricing Transparency", look: "Clear per-user/device pricing, no hidden fees", red: "Confusing tiers, surprise charges", weight: "⭐⭐⭐" }
  ];

  return (
    <section className="reveal max-w-7xl mx-auto py-17 md:px-0 px-4 border-t border-gray-300 ">
      <div className="max-w-7xl">
      <span  style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-blue-600 text-sm uppercase tracking-wider font-semibold">Selection  Framework</span>
      <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-[34px] max-w-7xl font-extrabold mt-2 mb-4 tracking-tight text-gray-900">How to Choose a Managed IT Service Provider</h2>
      <p className="text-gray-700 mb-10 max-w-2xl text-lg">Selecting the right MSP is critical for long-term success. Evaluate providers across these key criteria:</p>



      <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr style={{ fontFamily: "'Syne', sans-serif" }} className="bg-slate-950">
              <th className="p-5 text-sm font-bold text-white tracking-wider">Criteria</th>
              <th className="p-5 text-sm font-bold text-white tracking-wider">What to Look For</th>
              <th className="p-5 text-sm font-bold text-white tracking-wider">Red Flags</th>
              <th className="p-5 text-sm font-bold text-white tracking-wider text-center">Weight</th>
            </tr>
          </thead>
          <tbody className="text-sm  ">
            {criteria.map((item, i) => (
              <tr
                key={i}
                className={`${i % 2 !== 0 ? 'bg-gray-100' : 'bg-white'} border-b border-gray-200`}
              >
                <td className="p-5 border-t border-gray-300 font-bold text-gray-800 whitespace-nowrap">{item.name}</td>
                <td className="p-5 border-t border-gray-300 text-gray-700 leading-relaxed">{item.look}</td>
                <td className="p-5 border-t border-gray-300 text-gray-700 ">{item.red}</td>
                <td className="p-5 border-t border-gray-300 text-center whitespace-nowrap">{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </section>
  );
}
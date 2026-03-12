import React from 'react';

const ManagedITIntro = () => {
  return (
    <section className="py-16 border-b max-w-7xl mx-auto md:px-0 px-4  border-gray-300" id="intro">
      {/* SECTION LABEL */}
      <div
        className="text-[#1a5cff] font-bold text-[0.72rem] uppercase tracking-[0.1em] mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        What Are Managed IT Services?
      </div>

      {/* SECTION TITLE */}
      <h2
        className="font-[800] text-gray-900 mb-4 tracking-[-0.025em]"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          lineHeight: "1.15"
        }}
      >
        The Foundation of Modern IT Management
      </h2>

      {/* INTRO TEXT BLOCK */}
      <div className="text-[#374151] max-w-[680px] text-[1rem] leading-relaxed space-y-2 mb-4">
        <p>
          Managed IT services refer to outsourced technology services where a third-party provider is responsible for managing and maintaining an organization's IT infrastructure and systems.
        </p>
        <p>
          Instead of hiring a large internal IT team, companies partner with managed service providers (MSPs) that handle tasks such as:
        </p>
      </div>

      {/* MAIN BULLET LIST */}
      <ul className="max-w-[680px] mb-4 space-y-1.5">
        {[
          "IT infrastructure management",
          "Cybersecurity monitoring",
          "Cloud infrastructure support",
          "Technical help desk services",
          "Data backup and recovery",
          "System monitoring and maintenance"
        ].map((item, idx) => (
          <li
            key={idx}
            className="relative pl-4 text-[0.85rem] text-[#4b5563] before:content-['›'] before:absolute before:left-0 before:text-[#1a5cff] before:font-bold"
          >
            {item}
          </li>
        ))}
      </ul>

      <p className="text-[#374151] max-w-[680px] text-[1rem] leading-relaxed mb-7">
        Managed IT services typically operate under a <strong className="font-bold">subscription-based model</strong>, allowing businesses to receive continuous support and proactive monitoring. This comprehensive guide explains the <strong className="font-bold">most important types of managed IT services that businesses use to improve efficiency, security, and productivity.</strong>
      </p>

      {/* INTRO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-start">

        {/* CORE RESPONSIBILITIES CARD */}
        <div className="relative bg-white border border-gray-200 rounded-[12px] p-7 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#1a5cff] before:to-[#00d4aa]">
          <h3
            className="text-[1.15rem] font-bold text-gray-900 tracking-[-0.02em] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Core MSP Responsibilities
          </h3>
          <ul className="space-y-2">
            {[
              "IT infrastructure management and monitoring",
              "Cybersecurity monitoring and threat response",
              "Cloud infrastructure support and optimization",
              "Technical help desk and user support services",
              "Data backup and disaster recovery",
              "System updates, patching, and maintenance",
              "Compliance and regulatory management"
            ].map((item, idx) => (
              <li
                key={idx}
                className="relative pl-4 text-[0.85rem] text-[#4b5563] before:content-['›'] before:absolute before:left-0 before:text-[#1a5cff] before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPARISON TABLE CARD */}
        <div className="relative bg-white border border-gray-200 rounded-[12px] p-7 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#1a5cff] before:to-[#00d4aa]">
          <h3
            className="text-[1.15rem] font-bold text-gray-900 tracking-[-0.02em] mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            MSP vs. Traditional IT Support
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.8rem] text-left border-collapse">
              <thead className='bg-[#0a0f1e]'>
                <tr className="border-b border-gray-100 ">
                  <th className="font-bold p-3 rounded-tl-lg pl-6 text-white">Factor</th>
                  <th className="py-3 font-bold text-white">MSP</th>
                  <th className="py-3 rounded-tr-lg font-bold text-white">Traditional IT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {[
                  { factor: "Approach", msp: "Proactive", trad: "Reactive" },
                  { factor: "Monitoring", msp: "24/7", trad: "Business hours" },
                  { factor: "Cost model", msp: "Predictable", trad: "Variable" },
                  { factor: "Scalability", msp: "High", trad: "Limited" },
                  { factor: "Expertise", msp: "Multi-domain", trad: "Generalist" },
                ].map((row, idx) => (
                  <tr key={idx} className='hover:bg-gray-100 transition-colors'>
                    <td className="py-2.5 text-gray-600 pl-6">{row.factor}</td>
                    <td className="py-2.5 font-bold text-gray-700">{row.msp}</td>
                    <td className="py-2.5 text-gray-500">{row.trad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagedITIntro;
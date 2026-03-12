import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      number: "01",
      industry: "Healthcare · New York, USA",
      title: "Regional Hospital Eliminates HIPAA Compliance Risk",
      body: "A 450-bed hospital faced repeated audit failures and $2.1M in pending fines. After deploying a managed compliance and security MSP, they achieved full HIPAA compliance within 4 months, implemented 24/7 threat monitoring, and eliminated all pending violations.",
      results: ["✅ 100% HIPAA Compliant", "⬇ 78% security incidents", "💰 $2.1M fines avoided"]
    },
    {
      number: "02",
      industry: "Finance · London, UK",
      title: "Mid-Size Bank Achieves 99.99% Uptime with NOC Partnership",
      body: "A UK challenger bank was experiencing 14 hours of monthly downtime, costing £340,000 per incident. A managed network and infrastructure MSP implemented proactive monitoring, reducing downtime to under 2 minutes per month within 90 days.",
      results: ["🔝 99.99% uptime", "⬇ 98% downtime reduction", "💷 £2.8M saved annually"]
    },
    {
      number: "03",
      industry: "Retail · Sydney, Australia",
      title: "E-Commerce Platform Scales Cloud Infrastructure for Peak Season",
      body: "An Australian retailer's site crashed every Black Friday due to traffic spikes. Managed cloud services implemented auto-scaling on AWS, cutting page load times by 60% and handling 8x normal traffic during peak season without a single outage.",
      results: ["🚀 8x traffic capacity", "⚡ 60% faster load time", "📈 $4.2M revenue protected"]
    },
    {
      number: "04",
      industry: "Manufacturing · Munich, Germany",
      title: "Factory OT/IT Integration Secured Against Industrial Cyber Threats",
      body: "A German auto-parts manufacturer faced targeted OT cyberattacks on factory floor systems. A managed security provider deployed industrial SIEM, network segmentation, and 24/7 SOC monitoring, preventing three major breach attempts within the first quarter.",
      results: ["🛡️ 3 breaches prevented", "🏭 Zero production loss", "🔒 ISO 27001 certified"]
    },
    {
      number: "05",
      industry: "Education · Toronto, Canada",
      title: "University Deploys Hybrid Cloud for 45,000 Students",
      body: "A large Canadian university needed to support remote learning for 45,000 students. Managed cloud and collaboration services deployed Microsoft 365, implemented secure VPN access, and provided 24/7 help desk support, achieving 99.9% platform availability.",
      results: ["🎓 45,000 students served", "📡 99.9% availability", "⬇ 45% IT support tickets"]
    },
    {
      number: "06",
      industry: "Legal · Chicago, USA",
      title: "Law Firm Protects Privileged Client Data After Ransomware Attack",
      body: "A 200-attorney law firm suffered a ransomware attack that encrypted 80% of files. After engaging a managed backup and recovery MSP, the firm restored operations within 4 hours from immutable backups. A subsequent security overhaul prevented all future attacks.",
      results: ["⏱ 4-hr full recovery", "💼 Zero data loss", "🔐 SOC 2 Type II compliant"]
    },
    {
      number: "07",
      industry: "Logistics · Singapore",
      title: "Supply Chain Giant Unifies IT Across 12 Countries",
      body: "A regional logistics company with operations in 12 countries struggled with fragmented IT systems causing critical delivery delays. Managed network and infrastructure services unified all systems under a single SD-WAN platform, reducing IT costs by 34%.",
      results: ["🌏 12 countries unified", "💰 34% cost reduction", "📦 22% delivery speed up"]
    },
    {
      number: "08",
      industry: "Hospitality · Dubai, UAE",
      title: "Hotel Chain Achieves PCI DSS Compliance Across 38 Properties",
      body: "A luxury hotel group processing 2M+ card transactions annually failed PCI DSS audits at 14 properties. A managed compliance MSP remediated all gaps across 38 hotels in 6 months, enabling continued card payment processing and avoiding $8M in potential penalties.",
      results: ["🏨 38 hotels compliant", "💳 PCI DSS Level 1", "💰 $8M penalties avoided"]
    },
    {
      number: "09",
      industry: "Technology Startup · Bangalore, India",
      title: "SaaS Startup Scales from 50 to 500 Employees with Zero IT Hires",
      body: "A fast-growing Indian SaaS startup needed to scale IT infrastructure as headcount grew 10x in 18 months. A fully managed IT partner handled cloud infrastructure, endpoint management, and help desk — enabling the startup to avoid hiring an internal IT team, saving ₹3.2 Cr annually.",
      results: ["📈 10x growth supported", "👥 0 IT hires needed", "💰 ₹3.2 Cr saved"]
    },
    {
      number: "10",
      industry: "Government · Wellington, NZ",
      title: "City Council Modernizes Legacy Systems Without Service Disruption",
      body: "A New Zealand city council ran on 15-year-old legacy infrastructure affecting 340,000 citizens' digital services. A managed IT transformation MSP migrated all systems to hybrid cloud over 12 months, improving citizen service response times by 65% without a single service interruption.",
      results: ["🏛 340K citizens served", "⚡ 65% faster response", "✅ Zero service disruption"]
    }
  ];

  return (
    <section className="reveal max-w-7xl mx-auto md:px-0 px-4   py-17 border-t border-gray-300" id="cases">
      <div className="max-w-7xl mx-auto">
        {/* Section Headers */}
        <div 
        
          className="text-[0.72rem] font-bold text-blue-600 uppercase tracking-wider mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Real-World Outcomes
        </div>
        
        <h2 
          className="font-extrabold tracking-tight text-gray-900 mb-12"
          style={{ 
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: "1.15"
          }}
        >
          10 Managed IT Services Case Studies
        </h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cases.map((item, i) => (
            <div 
              key={i} 
              className={`p-7  hover:-translate-y-0.75  rounded-2xl border border-gray-300 shadow-sm transition-all duration-300 hover:shadow-md bg-white relative overflow-hidden flex flex-col h-full
                `}
            >
              {/* Floating Case Number */}
              <div 
                className="absolute top-4 right-4 text-4xl font-black text-blue-400 opacity-20 pointer-events-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.number}
              </div>
              
              <div 
                className="text-[12px] font-semibold text-blue-600 uppercase tracking-normal mb-3 font-mono"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item.industry}
              </div>
              
              <h3 
                className="text-[15px] font-bold text-gray-900 mb-4 pr-0 leading-snug"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {item.title}
              </h3>
              
              <p className="text-gray-700 text-[0.9rem] leading-relaxed mb-8 flex-grow">
                {item.body}
              </p>
              
              {/* Result Pills */}
              <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-gray-200/50">
                {item.results.map((result, idx) => (
                  <span 
                    key={idx} 
                    className="bg-green-200 px-3 py-1.5 rounded-2xl text-[0.7rem] font-bold text-gray-700 shadow-xs"
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
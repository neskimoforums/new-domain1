import React from 'react';

const ServiceCatalog = () => {
  const services = [
    {
      icon: "🌐",
      iconBg: "#dbeafe",
      role: "Network Engineer / NOC Team",
      title: "Managed Network Services",
      description: "Maintains and optimizes organization-wide network infrastructure to ensure stable, high-performing, and secure connectivity across all digital systems.",
      bullets: ["Network monitoring and maintenance", "Router & switch configuration", "Firewall management & VPN setup", "Performance optimization & troubleshooting"],
      skills: ["Cisco/Juniper", "SDN", "VPN", "SNMP"]
    },
    {
      icon: "☁️",
      iconBg: "#d1fae5",
      role: "Cloud Architect / DevOps",
      title: "Managed Cloud Services",
      description: "Deploys, maintains, and optimizes cloud environments on AWS, Azure, and Google Cloud to ensure performance, security, and cost efficiency.",
      bullets: ["Cloud migration and deployment", "Cloud infrastructure management", "Cloud security monitoring", "Cloud cost optimization"],
      skills: ["AWS", "Azure", "GCP", "Terraform"]
    },
    {
      icon: "🔐",
      iconBg: "#fee2e2",
      role: "Security Analyst / SOC Team",
      title: "Managed Security Services",
      description: "Protects organizations from ransomware, phishing, malware, and data breaches through 24/7 monitoring and rapid threat response.",
      bullets: ["Firewall monitoring & endpoint protection", "Intrusion detection systems", "Vulnerability scanning", "Threat detection and response"],
      skills: ["SIEM", "EDR", "Zero Trust", "SOAR"]
    },
    {
      icon: "🎧",
      iconBg: "#fef3c7",
      role: "Help Desk Technician / L1-L3",
      title: "Managed Help Desk Services",
      description: "Provides immediate technical support for employees and customers experiencing IT issues, improving productivity and reducing downtime.",
      bullets: ["Remote technical support & ticket management", "User account & password management", "Software troubleshooting", "Hardware support"],
      skills: ["ITIL", "ServiceNow", "Zendesk", "RDP"]
    },
    {
      icon: "💾",
      iconBg: "#ede9fe",
      role: "Backup Administrator / DR Specialist",
      title: "Managed Data Backup & Recovery",
      description: "Ensures business data is securely backed up and restorable quickly after cyberattacks, hardware failures, or natural disasters.",
      bullets: ["Automated data backups", "Offsite backup storage", "Disaster recovery planning", "Data restoration services"],
      skills: ["Veeam", "Acronis", "RTO/RPO", "BCP"]
    },
    {
      icon: "🖥️",
      iconBg: "#ecfdf5",
      role: "Infrastructure Engineer",
      title: "Managed Infrastructure Services",
      description: "Manages physical and virtual components including servers, storage, operating systems, and virtualization platforms.",
      bullets: ["Server monitoring & maintenance", "Virtualization management", "Storage management", "Infrastructure optimization"],
      skills: ["VMware", "Hyper-V", "SAN/NAS", "Linux"]
    },
    {
      icon: "📱",
      iconBg: "#fff7ed",
      role: "Endpoint Manager / MDM Specialist",
      title: "Managed Endpoint Services",
      description: "Protects and maintains laptops, desktops, tablets, and mobile devices — critical for remote and hybrid work environments.",
      bullets: ["Endpoint security monitoring", "Device configuration & management", "Patch management", "Device encryption"],
      skills: ["Intune", "Jamf", "CrowdStrike", "MDM"]
    },
    {
      icon: "⚙️",
      iconBg: "#fdf4ff",
      role: "Application Manager / DevOps",
      title: "Managed Application Services",
      description: "Ensures business applications run efficiently and securely without requiring dedicated internal specialists.",
      bullets: ["Application monitoring & performance optimization", "Software updates and patching", "Application security management", "Application troubleshooting"],
      skills: ["APM", "Dynatrace", "New Relic", "CI/CD"]
    },
    {
      icon: "📋",
      iconBg: "#f0fdf4",
      role: "Compliance Officer / GRC Analyst",
      title: "Managed IT Compliance Services",
      description: "Helps businesses meet GDPR, HIPAA, PCI DSS, and ISO 27001 requirements to avoid legal penalties and reputational damage.",
      bullets: ["Compliance audits & risk assessments", "Policy implementation", "Security documentation", "Regulatory reporting"],
      skills: ["GDPR", "HIPAA", "PCI DSS", "ISO 27001"]
    },
    {
      icon: "🧭",
      iconBg: "#eff6ff",
      role: "IT Consultant / CTO-as-a-Service",
      title: "Managed IT Consulting Services",
      description: "Evaluates existing systems and recommends improvements to enhance efficiency, security, and technology alignment with business goals.",
      bullets: ["IT infrastructure planning", "Technology roadmaps", "Digital transformation strategies", "Cloud migration planning"],
      skills: ["TOGAF", "ITIL v4", "Agile", "ROI Analysis"]
    },
    {
      icon: "🔄",
      iconBg: "#fef9c3",
      role: "Patch Manager / Vulnerability Analyst",
      title: "Managed Patch Management",
      description: "Ensures all systems receive regular security updates and patches to prevent exploitation of known vulnerabilities.",
      bullets: ["Automated patch deployment", "Vulnerability monitoring", "Software update testing", "Patch reporting"],
      skills: ["WSUS", "Qualys", "Tenable", "CVE"]
    },
    {
      icon: "🗄️",
      iconBg: "#fce7f3",
      role: "Database Administrator (DBA)",
      title: "Managed Database Services",
      description: "Keeps databases secure, optimized, and highly available for storing customer data, financial records, and operational information.",
      bullets: ["Database monitoring & performance tuning", "Database backup and recovery", "Database security management", "Query optimization"],
      skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"]
    },
    {
      icon: "📧",
      iconBg: "#e0f2fe",
      role: "Email Administrator / Security Analyst",
      title: "Managed Email Services",
      description: "Provides secure and reliable email infrastructure while protecting against phishing, spam, and data exfiltration threats.",
      bullets: ["Email hosting & spam filtering", "Phishing protection", "Email encryption", "Email archiving"],
      skills: ["M365", "Google Workspace", "Proofpoint", "DMARC"]
    },
    {
      icon: "🤝",
      iconBg: "#f0fdfa",
      role: "Collaboration Platform Admin",
      title: "Managed Collaboration Services",
      description: "Supports messaging, video conferencing, and document sharing platforms to enable effective teamwork regardless of location.",
      bullets: ["Collaboration platform management", "Video conferencing support", "Document sharing systems", "Productivity tool administration"],
      skills: ["Teams", "Slack", "SharePoint", "Zoom"]
    },
    {
      icon: "📊",
      iconBg: "#fdf2f8",
      role: "IT Operations Analyst / NOC",
      title: "Managed IT Monitoring Services",
      description: "Tracks health and performance of all IT infrastructure in real time to identify issues early and prevent costly downtime.",
      bullets: ["24/7 system monitoring", "Performance analytics & automated alerts", "Issue detection and reporting", "SLA performance tracking"],
      skills: ["Zabbix", "Nagios", "Datadog", "PagerDuty"]
    }
  ];

  return (
    <section className="py-16 border-b max-w-7xl mx-auto md:px-0 px-4  border-gray-300" id="services">
      {/* SECTION LABEL */}
      <div 
        className="text-[#094bf0] font-bold text-[0.72rem] uppercase tracking-[0.1em] mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        Service Catalog
      </div>

      {/* SECTION TITLE */}
      <h2 
        className="font-extrabold text-gray-900 mb-4 tracking-tight"
        style={{ 
          fontFamily: "'Syne', sans-serif", 
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          lineHeight: "1.15" 
        }}
      >
        15 Types of Managed IT Services
      </h2>
      <p className="text-[#374151] max-w-[540px] text-[0.95rem] mb-9">
        Each service type below follows the Role → Responsibility → Skills framework for clarity and AEO compliance.
      </p>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-5 mt-9">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group bg-white border border-gray-200 rounded-[14px] p-7 cursor-default transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_16px_40px_rgba(26,92,255,0.1)] shadow-lg-[#1a5cff] hover:border-[#1a5cff]/30 animate-[card-in_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 50}ms`, opacity: 0 }}
          >
            {/* ICON */}
            <div 
              className="w-11 h-11 rounded-[10px] flex items-center justify-center text-[1.3rem] mb-4"
              style={{ backgroundColor: service.iconBg }}
            >
              {service.icon}
            </div>

            {/* ROLE */}
            <div 
              className="text-[#6b7280] text-[0.7rem] uppercase tracking-[0.08em] mb-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Role: {service.role}
            </div>

            {/* TITLE */}
            <h3 
              className="text-[1.15rem] font-bold text-gray-900 tracking-[-0.02em] mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {service.title}
            </h3>

            {/* RESPONSIBILITY */}
            <p className="text-[0.88rem] text-[#374151] leading-[1.6] mb-3">
              {service.description}
            </p>

            {/* BULLETS */}
            <ul className="space-y-1.5 mb-3">
              {service.bullets.map((bullet, i) => (
                <li key={i} className="relative pl-4 text-[0.85rem] text-[#4b5563] before:content-['›'] before:absolute before:left-0 before:text-[#1a5cff] before:font-bold">
                  {bullet}
                </li>
              ))}
            </ul>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {service.skills.map((skill, i) => (
                <span key={i} className="bg-[#f3f4f6] text-[#1a5cff] px-2.5 py-0.5 rounded-full text-[0.72rem] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes card-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ServiceCatalog;
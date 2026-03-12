"use client";
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What are managed IT services?", a: "Managed IT services are outsourced technology services where a provider manages an organization's IT systems, infrastructure, and security. A third-party Managed Service Provider (MSP) takes full responsibility for monitoring, maintaining, and securing technology under a subscription-based model — proactively preventing problems before they impact operations." },
    { q: "How do managed IT services differ from traditional IT support?", a: "Traditional IT support (Break/Fix) is reactive — you call when something breaks, and they fix it for an hourly fee. Managed IT is proactive — the provider monitors systems 24/7 to prevent issues from occurring in the first place, all for a predictable monthly fee." },
    { q: "What are the common types of managed IT services?", a: "Common types include Managed Security (cybersecurity), Managed Network (infrastructure), Managed Cloud (hosting/storage), Managed Backup (disaster recovery), Help Desk (technical support), and Managed Compliance." },
    { q: "How much do managed IT services cost?", a: "Costs typically range from $100 to $250 per user per month, or $150 to $500 per server per month. Pricing depends on the complexity of the environment, the level of support required, and the specific services included in the SLA." },
    { q: "Are managed IT services suitable for small businesses?", a: "Yes. Managed IT allows small businesses to access enterprise-level technology and expertise without the high cost of hiring a full-time, in-house IT team. It provides predictable budgeting and professional-grade security that most small businesses cannot achieve alone." },
    { q: "How do MSPs handle cybersecurity?", a: "MSPs implement multi-layered security, including firewalls, endpoint protection (EDR), multi-factor authentication (MFA), security awareness training, and 24/7 Security Operations Center (SOC) monitoring to detect and mitigate threats in real-time." },
    { q: "What is an SLA in managed IT services?", a: "A Service Level Agreement (SLA) is a contract that defines the expected level of service, including response times, uptime guarantees, and the provider's responsibilities. It ensures accountability and sets clear expectations for the partnership." },
    { q: "Can an MSP help with regulatory compliance?", a: "Yes. Specialized MSPs help organizations meet requirements for regulations like HIPAA (healthcare), PCI DSS (payments), GDPR (privacy), and SOC 2 through continuous monitoring, auditing, and documentation." },
    { q: "What happens if my systems go down?", a: "Under a managed service model, the MSP’s monitoring system alerts them immediately (often before you notice). They begin remote remediation instantly. If a disaster occurs, they execute the Backup and Disaster Recovery (BDR) plan to restore operations within the agreed-upon RTO." },
    { q: "Do I lose control over my IT if I use an MSP?", a: "No. You retain ownership and decision-making authority. The MSP acts as an extension of your team, providing expert guidance and handling the day-to-day 'heavy lifting,' while you focus on strategic business goals." },
    { q: "How do I transition to a managed IT provider?", a: "The transition (onboarding) typically involves an initial audit, infrastructure stabilization, implementation of monitoring tools, and a formal handoff. A professional MSP will manage this process over 30–90 days to ensure zero disruption to your operations." },
    { q: "What is the role of a vCIO in managed IT?", a: "A virtual Chief Information Officer (vCIO) provides high-level strategic consulting. They help with IT budgeting, technology roadmapping, and ensuring your technology investments align with your long-term business objectives." },
    { q: "Are cloud services part of managed IT?", a: "Usually, yes. Most MSPs manage cloud environments (AWS, Azure, Google Cloud) and SaaS applications (Microsoft 365, Google Workspace), handling migrations, security, and optimization within the cloud." },
    { q: "How do I measure the ROI of managed IT?", a: "ROI is measured by calculating the cost of avoided downtime, the reduction in security breach risks, improved employee productivity due to faster systems/support, and the savings compared to hiring full-time internal IT staff." },
    { q: "Can an MSP work with my existing internal IT team?", a: "Yes. This is called 'Co-managed IT.' The MSP handles routine tasks (monitoring, patching, help desk), while your internal team focuses on business-specific projects and proprietary applications." }
  ];

  return (
    <section id="faq" className="reveal opacity-0 translate-y-10 transition-all duration-700">
      <span className="text-blue-600 font-mono text-sm uppercase tracking-widest font-bold">Expert Answers</span>
      <h2 className="text-4xl font-extrabold mt-2 mb-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg font-bold text-left text-gray-900">{faq.q}</span>
              <span className={`text-blue-600 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>▾</span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
              <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white border-t border-gray-100">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
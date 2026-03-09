"use client";
import React, { useState } from 'react';
import { Ticket, Cloud, Shield, ExternalLink, Sparkles } from 'lucide-react';

interface ToolCategory {
  id: number;
  icon: React.ReactNode;
  title: string;
  tools: string[];
  gradient: string;
  hoverGradient: string;
  iconColor: string;
  accentColor: string;
}

const ToolsTechnologies = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories: ToolCategory[] = [
    {
      id: 1,
      icon: <Ticket className="w-6 h-6" />,
      title: 'Ticketing & Management',
      tools: [
        'ServiceNow, Zendesk, Freshdesk',
        'Jira Service Management',
        'ManageEngine ServiceDesk Plus',
        'SolarWinds Service Desk'
      ],
      gradient: 'from-blue-50 to-blue-100',
      hoverGradient: 'from-blue-100 to-blue-200',
      iconColor: 'text-blue-600',
      accentColor: 'bg-blue-500'
    },
    {
      id: 2,
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & Infrastructure',
      tools: [
        'Microsoft 365, Azure, Exchange Online',
        'AWS (EC2, S3, RDS, Lambda)',
        'Google Workspace, Google Cloud',
        'VMware vSphere, Hyper-V'
      ],
      gradient: 'from-purple-50 to-purple-100',
      hoverGradient: 'from-purple-100 to-purple-200',
      iconColor: 'text-purple-600',
      accentColor: 'bg-purple-500'
    },
    {
      id: 3,
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Networking',
      tools: [
        'Cisco AnyConnect, OpenVPN, FortiClient',
        'Palo Alto, Fortinet, Cisco ASA',
        'Active Directory, Azure AD',
        'Wireshark, SolarWinds NPM'
      ],
      gradient: 'from-green-50 to-green-100',
      hoverGradient: 'from-green-100 to-green-200',
      iconColor: 'text-green-600',
      accentColor: 'bg-green-500'
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-50 rounded-full blur-3xl opacity-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-gray-600">Enterprise-Grade Tools</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Tools & Technologies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry-leading platforms and solutions we expertly manage
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group relative bg-gradient-to-br ${category.gradient} p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Icon Badge */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm mb-6 ${category.iconColor} transition-transform duration-300 group-hover:scale-105`}>
                {category.icon}
              </div>

              {/* Category Title */}
              <h3 className={`text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center justify-between`}>
                {category.title}
                <ExternalLink className={`w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </h3>

              {/* Tools List */}
              <ul className="space-y-3">
                {category.tools.map((tool, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 transition-all duration-200"
                  >
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${category.accentColor} flex-shrink-0`} />
                    <span className="text-sm md:text-base leading-relaxed">
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Subtle Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${category.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '50+', label: 'Platforms Supported' },
            { number: '99.9%', label: 'Uptime SLA' },
            { number: '24/7', label: 'Expert Coverage' },
            { number: '500+', label: 'Integrations' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don&spos;t see your preferred tool? We adapt to your tech stack.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Discuss Your Requirements
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
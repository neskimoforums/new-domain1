"use client";
import React, { useState } from 'react';
import { Headphones, Shield, Cloud, Lock, ArrowRight, CheckCircle } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconGradient: string;
  delay: string;
}

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: 'Outsourced Tier-1 Help Desk Services',
      description: 'First-line technical support handling password resets, software installations, basic troubleshooting, and user account management with 15-minute average response time.',
      features: [
        '24/7 multi-channel support',
        'Ticket management & tracking',
        'Remote desktop assistance',
        'Hardware/software configuration'
      ],
      gradient: 'from-blue-600 to-blue-800',
      iconGradient: 'from-blue-400 to-blue-600',
      delay: 'delay-100'
    },
    {
      id: 2,
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Remote Tier-2 Technical Support',
      description: 'Advanced troubleshooting for complex issues including server management, network diagnostics, application errors, and infrastructure optimization.',
      features: [
        'Server administration',
        'Network infrastructure support',
        'Database maintenance',
        'Performance optimization'
      ],
      gradient: 'from-purple-600 to-purple-800',
      iconGradient: 'from-purple-400 to-purple-600',
      delay: 'delay-200'
    },
    {
      id: 3,
      icon: <Cloud className="w-8 h-8 text-white" />,
      title: 'Microsoft 365 & Cloud Support',
      description: 'Complete Microsoft 365 administration, Azure cloud management, migration services, and ongoing optimization for maximum productivity.',
      features: [
        'Exchange Online management',
        'SharePoint & Teams setup',
        'Azure infrastructure support',
        'Cloud migration services'
      ],
      gradient: 'from-green-600 to-green-800',
      iconGradient: 'from-green-400 to-green-600',
      delay: 'delay-300'
    },
    {
      id: 4,
      icon: <Lock className="w-8 h-8 text-white" />,
      title: 'VPN & Network Support',
      description: 'Secure VPN configuration, network security management, firewall administration, and connectivity solutions for distributed teams.',
      features: [
        'VPN setup & management',
        'Firewall configuration',
        'Network security audits',
        'Remote access solutions'
      ],
      gradient: 'from-red-600 to-red-800',
      iconGradient: 'from-red-400 to-red-600',
      delay: 'delay-[400ms]'
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services We Offer
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive IT support solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${service.delay}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.iconGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative p-6">
                {/* Icon with animated background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2 text-sm text-gray-700 transform transition-all duration-300"
                      style={{
                        transitionDelay: hoveredCard === service.id ? `${idx * 50}ms` : '0ms'
                      }}
                    >
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        hoveredCard === service.id ? 'text-green-500' : 'text-gray-400'
                      } transition-colors duration-300`} />
                      <span className="group-hover:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="pt-4 border-t border-gray-100">
                  <a 
                    href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 group-hover:text-blue-600 transition-colors"
                  >
                    Learn More
                    <ArrowRight className={`w-4 h-4 transform ${
                      hoveredCard === service.id ? 'translate-x-1' : ''
                    } transition-transform duration-300`} />
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-8 rounded-2xl shadow-md">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600">
                We create tailored IT support packages for your unique business needs
              </p>
            </div>
            <a 
              href="#contact"
              className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
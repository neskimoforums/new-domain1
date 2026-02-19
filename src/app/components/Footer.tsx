"use client";
import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Help Desk Support', href: '/services/tier-1-help-desk-services-usa' },
    { name: 'Help Desk Support', href: '/services/tier-2-help-desk-services-usa' },
    { name: 'MicroSoft Support', href: '/services/microsoft-365-support-services-usa' },
    { name: 'Cloud Support', href: '/services/cloud-support-services-usa' },
    { name: 'Network Support', href: '/services/network-support-services-usa' }
  ];

  const resources = [
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Whitepapers', href: '#whitepapers' },
    { name: 'Documentation', href: '#documentation' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'Cookie Policy', href: '#cookies' }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <a
             href='https://www.gladiusesport.com/'
             className="text-white text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IT Support Pro
            </a>
            <p className="text-sm mb-4 text-gray-400">
              Leading provider of outsourced Tier-1 & Tier-2 IT support services for US businesses since 2015.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group"
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+13322199100" className="hover:text-blue-400 transition-colors">
                  +1 (332) 219-9100
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:support@itsupportpro.com" className="hover:text-blue-400 transition-colors break-all">
                  support@itsupportpro.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                <span>
                  123 Tech Avenue<br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>24/7/365 Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-sm text-gray-400">
              © {currentYear} IT Support Pro. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-800 rounded-lg p-4 mt-4">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <span className="font-semibold text-gray-400">Disclaimer:</span> We are an independent third-party service provider. All product names, logos, and brands are property of their respective owners. We are not authorized, endorsed, or affiliated with Microsoft, Cisco, or any other manufacturers or vendors mentioned on this site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
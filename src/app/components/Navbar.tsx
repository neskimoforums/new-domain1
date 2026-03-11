"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Cloud, Server, Lock, Headphones } from "lucide-react";
// import { Link } from "lucide-react";
import Link from "next/link";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
};

export const services: ServiceItem[] = [
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Help Desk Support",
    description: "Tier-1 technical support",
    href: "/services/tier-1-help-desk-services-usa",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    title: "Help Desk Support",
    description: "Tier-2 technical support",
    href: "/services/tier-2-help-desk-services-usa",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Microsoft 365 Admin",
    description: "Complete M365 management",
    href: "/services/microsoft-365-support-services-usa",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Cloud Infrastructure",
    description: "AWS, Azure, GCP support",
    href: "/services/cloud-support-services-usa",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "VPN & Security",
    description: "Secure network implementation",
    href: "/services/network-support-services-usa",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Cybersecurity Consulting",
    description: "Cybersecurity consulting services",
    href: "/services/cybersecurity-consulting-services",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-2 text-center text-sm">
        <span className="text-yellow-800 flex items-center justify-center gap-2">
          <span className="text-lg">⚠️</span>
          <span>
            Disclaimer: We are an independent third-party service provider and not an authorized or affiliated
            organization with Microsoft, Cisco, or any other mentioned vendors.
          </span>
        </span>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
          }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            < Link href="/">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  IT Support Pro
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">

                <button
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                  type="button"
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {services.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-blue-50 transition-colors group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="mt-1 text-blue-600 group-hover:text-blue-700">{service.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-600">{service.title}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="#why-us" className="hover:text-blue-600 transition-colors">
                Why Us
              </Link>
              <Link href="#case-studies" className="hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link href="#faq" className="hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="space-y-2 mt-4">
                <div className="font-semibold text-gray-900 px-3 py-2">Services</div>

                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="text-blue-600">{service.icon}</div>
                    <div className="text-sm">{service.title}</div>
                  </Link>
                ))}

                <Link href="#why-us" className="block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                  Why Us
                </Link>
                <Link href="#case-studies" className="block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                  Case Studies
                </Link>
                <Link href="#faq" className="block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors">
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center mt-4"
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

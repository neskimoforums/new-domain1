"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Navbar from "../../components/services2/Navbar"
import Hero from "../../components/services2/Hero"
import WhatWeDo from '@/app/components/services2/WhatWeDo'
import Services from "../../components/services2/Services"
import Tools from "../../components/services2/Tools"
import MarketAnalysis from "../../components/services2/MarketAnalysis"
import TechTable from '@/app/components/services2/TechTable';
import Industries from '@/app/components/services2/Industries';
import CaseStudiesSection from '@/app/components/services1/CaseStudies';
import CaseStudies from '@/app/components/services2/CaseStudies';
import Testimonials from '@/app/components/services2/Testimonials';
import FAQ from '@/app/components/services2/FAQ';
import CTA from '@/app/components/services2/CTA';
import TierTwoSchema from '@/app/components/services2/TierTwoSchema';
import { ChevronDown } from 'lucide-react';
import { services } from '@/app/components/Navbar';
import FloatingCall from '@/app/components/FloatingCall';

const page = () => {
  type Industry = {
    name: string;
    variant: "purple" | "blue" | "pink" | "indigo";
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false); 
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
  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
  ];

  const industries: Industry[] = [
    { name: "Healthcare", variant: "purple" },
    { name: "Finance & Banking", variant: "blue" },
    { name: "E-commerce", variant: "pink" },
    { name: "Manufacturing", variant: "indigo" },
    { name: "Education", variant: "purple" },
    { name: "Technology", variant: "blue" },
    { name: "Retail", variant: "pink" },
    { name: "Telecommunications", variant: "indigo" },
    { name: "Logistics", variant: "purple" },
    { name: "Government", variant: "blue" },
  ];

  function tileClasses(variant: Industry["variant"]) {
    switch (variant) {
      case "purple":
        return "from-purple-500 to-purple-600";
      case "blue":
        return "from-blue-500 to-blue-600";
      case "pink":
        return "from-pink-500 to-pink-600";
      case "indigo":
        return "from-indigo-500 to-indigo-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  }

  return (
    <>
      {/* --- SEO & META SECTION --- */}
      <title>Tier 2 Help Desk Services USA | Advanced IT Support for Businesses</title>
      <meta name="description" content="GladiuseSport provides Tier 2 help desk services in the USA, delivering advanced technical support, root-cause analysis, and issue escalation resolution for business IT environments." />
      <meta name="keywords" content="Tier 2 Help Desk Services USA, Level 2 IT Support, Advanced IT Help Desk, IT Escalation Support USA, Business IT Support Services, Managed Help Desk" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/tier-2-help-desk-services-usa/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Advanced Tier 2 Help Desk Support for US Organizations" />
      <meta property="og:description" content="Resolve complex technical issues with GladiuseSport’s Tier 2 help desk services, offering in-depth troubleshooting and expert-level IT support for US businesses." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/tier-2-help-desk-services-usa/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/tier-2-help-desk-services.webp" />
      <meta property="og:image:alt" content="Tier 2 Help Desk and Advanced IT Support Services USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags - All 8 Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/tier-2-help-desk-services-usa/" />
      <meta name="twitter:title" content="Expert Tier 2 IT Help Desk Support Across the USA" />
      <meta name="twitter:description" content="Access professional Tier 2 help desk support from GladiuseSport, specializing in advanced troubleshooting and escalation handling for business IT systems." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/tier-2-help-desk-services.webp" />
      <meta name="twitter:image:alt" content="Tier 2 IT Help Desk Services USA" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- END SEO SECTION --- */}

      <TierTwoSchema />

      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>

      <main className='bg-blue-50'>
        {/* Disclaimer bar */}
        <div className="border-b-2 border-yellow-200 bg-yellow-50 py-2 px-4">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Disclaimer:</strong> We are an independent third-party
              service provider and not authorized or affiliated with any specific
              vendor or manufacturer.
            </p>
          </div>
        </div>

        {/* Main Nav - backdrop-blur works best when background is slightly transparent (bg-white/90) */}
        {/* Header */}
        <header
          className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
            }`}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" >
                <div className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                    TierTwo Support
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {/* Services Dropdown */}
                <div ref={servicesRef} className="relative">

                  <button
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition-colors"
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

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={'transition text-gray-700 hover:text-blue-600'}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>

              </div>
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
                type="button"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-2 mt-4">
                  <div className="font-semibold text-gray-900 px-3 py-2">Services</div>

                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="text-blue-600">{service.icon}</div>
                      <div className="text-sm">{service.title}</div>
                    </Link>
                  ))}
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={'block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors'}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </header>
        <Hero />
        <section className="bg-white/80 border-t border-b border-blue-100 py-4 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Published:</span>
              <span className="text-slate-600">January 20, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-700">Last Updated:</span>
              <span className="text-slate-600">January 24, 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">Rating:</span>
              <div className="flex gap-1">
                <span className="text-yellow-400">★★★★★</span>
              </div>
              <span className="text-slate-600">(4.9/5 from 312 reviews)</span>
            </div>
          </div>
        </section>
        <WhatWeDo />
        <Services />
        <TechTable />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <CTA />
        <FloatingCall />
      </main>
    </>
  )
}

export default page
"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Role from "../../components/services1/Role"
import Services from "../../components/services1/Service"
import Tools from "../../components/services1/Tools"
import Industries from "../../components/services1/Industry"
import MarketDemand from "../../components/services1/MarketDemandSection"
import CaseStudy from "../../components/services1/CaseStudies"
import Testimonials from "../../components/services1/Testimonials"
import WhyChooseUs from "../../components/services1/WhyChooseUS"
import FAQ from "../../components/services1/FAQ"
import CallToAction from "../../components/services1/CallAction"
import TierOneSchema from '@/app/components/services1/TierOneSchema';
import { ChevronDown } from 'lucide-react';
import { services } from '@/app/components/Navbar';
import FloatingCall from '@/app/components/FloatingCall';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    // { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
    { href: '#disclaimer', label: 'Disclaimer', special: true }
  ];

  return (
    <>
      {/*  SEO SECTION START --- */}
      <title>Tier 1 Help Desk Services USA | Fast Level 1 IT Support</title>
      {/* General Meta Tags */}
      <meta name="description" content="GladiuseSport offers Tier 1 help desk services in the USA, providing fast first-level IT support, issue resolution, and user assistance for small and medium-sized businesses." />
      <meta name="keywords" content="Tier 1 Help Desk Services USA, Level 1 IT Support, IT Help Desk USA, First Line IT Support, Business Help Desk Services, Managed IT Support" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/tier-1-help-desk-services-usa/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Tier 1 Help Desk Support Services for US Businesses" />
      <meta property="og:description" content="Ensure quick response and efficient issue handling with GladiuseSport’s Tier 1 help desk services, designed to support end users and minimize downtime across US organizations." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/tier-1-help-desk-services-usa/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/tier-1-help-desk-services.webp" />
      <meta property="og:image:alt" content="Tier 1 Help Desk and First-Level IT Support Services USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/*Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/tier-1-help-desk-services-usa/" />
      <meta name="twitter:title" content="Fast Tier 1 Help Desk Support for US Companies" />
      <meta name="twitter:description" content="Get responsive Tier 1 help desk support from GladiuseSport, delivering reliable first-contact IT assistance and user support for businesses across the USA." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/tier-1-help-desk-services.webp" />
      <meta name="twitter:image:alt" content="Tier 1 IT Help Desk Services USA" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />


      <TierOneSchema />

      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
        }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" >
              <div className="text-2xl font-bold">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TechSupport Pro
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">

                <button
                  onClick={() => setIsServicesOpen((v) => !v)}
                  className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors"
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
                  className={`transition ${link.special
                    ? 'text-red-600 hover:text-red-700 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
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

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
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

      {/* Disclaimer Section */}
      <div id="disclaimer" className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> We are an independent third-party service provider and are not an authorized organization affiliated with any specific manufacturers or vendors. All product names, logos, and brands are property of their respective owners.
          </p>
        </div>
      </div>

      {/* Hero Section  */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            {/* Rating Badge */}
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                ★★★★★ 4.9/5
              </span>
              <span className="text-white text-sm">(2,847 reviews)</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Outsourced Tier-1 Help Desk Services for US Businesses
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technical support solutions delivered by certified professionals.
              We handle frontline IT issues so your team can focus on strategic initiatives.
              Available 24/7/365 with industry-leading response times and multilingual support
              across all major platforms and technologies.
            </p>

            {/* Metadata Tags */}
            <div className="flex flex-wrap gap-2 justify-center text-sm  text-gray-500 mb-8">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Published: January 10, 2026
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Last Updated: January 14, 2026
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                Expert Reviewed ✓
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
      </section>
      {/* Hero section end  */}
      <Role />
      <Services />
      <Tools />
      <Industries />
      <MarketDemand />
      <CaseStudy />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <CallToAction />
      <FloatingCall />
    </>
  );
}
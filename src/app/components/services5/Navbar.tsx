import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Cloud } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { services } from '../Navbar';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const navLinks = [

    { href: '#why-us', label: 'Why Us' },
    { href: '#industries', label: 'Industries' },
    { href: '#services', label: 'Services' },
    { href: '#case', label: 'Case Studies' },
    { href: '#faqs', label: 'FAQ' },
  ];

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


      {/* Main Nav - backdrop-blur works best when background is slightly transparent (bg-white/90) */}
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
          }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl flex items-center gap-2 font-bold text-gray-900"
            >
              <Cloud className="w-10 h-10 fill-black text-black" />
              Microsoft 365 Support
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
                href="/#contact"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
              > Get Started
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
};

export default Navbar;
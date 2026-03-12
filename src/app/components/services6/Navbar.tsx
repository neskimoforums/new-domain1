"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "../Navbar";


const links = [
  { href: '#services', label: 'Services' },
  { href: '#stats', label: 'Industry Data' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

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

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-[60] border-b border-cyan-300/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
 
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[20px] text-cyan-400">⚡</span>
          <span
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-[18px] font-[800] leading-none text-cyan-400 tracking-[-0.5px]"
          >
            CyberGuide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-[calc(100%+1.5rem)] left-0 w-80 rounded-xl border border-white/10 bg-slate-900 p-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex flex-col rounded-lg px-4 py-3 hover:bg-white/5 transition-colors group"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="font-semibold text-slate-100 group-hover:text-cyan-300">{service.title}</span>
                    <span className="text-xs text-slate-500">{service.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>


          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono-custom text-[13px] tracking-[2px] text-slate-400 transition hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="rounded-lg bg-blue-500 px-6 py-2 text-white hover:bg-blue-700 transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-cyan-300 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-x-0  z-50 h-screen bg-slate-950 transition-transform duration-300 animate-in fade-in slide-in-from-top-2 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="space-y-2 mt-4">
          <div className="font-semibold px-3 py-2">Services</div>

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

          <div className="flex flex-col px-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1.5 md:text-sm text-[13px] hover:bg-blue-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-1 inline-flex items-center justify-center h-14 rounded-xl py-2 bg-cyan-500 text-lg font-bold text-slate-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
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
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-cyan-400">⚡</span>
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tight">
            CyberGuide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* Services Dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-cyan-300"
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
            href="#contact"
            className="rounded-full bg-cyan-500 px-6 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
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
        className={`fixed inset-x-0 top-[80px] z-50 h-screen bg-slate-950 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-slate-200 border-b border-white/5 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 flex h-14 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-slate-950"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
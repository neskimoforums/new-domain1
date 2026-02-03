"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "../Navbar";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

type NavItem = { href: string; label: string };

const NAV_ITEMS: readonly NavItem[] = [
  { href: "#services", label: "Services" },
  { href: "#why-choose-us", label: "Why Us" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#faq", label: "FAQ" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
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
   { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#faq', label: 'FAQ' },
    { href: '#disclaimer', label: 'Disclaimer', special: true }
  ];

  // Close mobile menu when switching to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Disclaimer */}
      <div className="border-b border-yellow-200 bg-yellow-50 px-4 py-2">
        <p className="text-center text-sm text-yellow-800">
          <strong>Disclaimer:</strong> We are an independent third-party service
          provider and not an authorized Microsoft partner or official Microsoft
          organization.
        </p>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
          }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              MS365 Cloud Support
            </Link>

            {/* Desktop */}
            <div className="hidden items-center space-x-6 md:flex">
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

              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 transition hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                className="rounded-lg bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile button */}
            {/* <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button> */}
           <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button> 
          </div>

          {/* Mobile menu */}
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
                <div className="flex flex-col">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    href="/#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

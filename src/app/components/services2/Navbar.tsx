"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { services } from "../Navbar";
import { X } from "lucide-react";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#case-study", label: "Case Studies" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
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

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                TechSupport Pro
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden items-center space-x-8 md:flex">
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


              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 transition hover:text-purple-600"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#contact"
                className="rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
              >
                Contact Us
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

            {/* Mobile button */}
            {/* <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            > */}
              {/* Hamburger / Close */}
              {/* <svg
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
          {/* </div> */}

          {/* Mobile menu (overlay + panel) */}
          <div
            className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"
              }`}
          >
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"
                }`}
            />

            {/* Slide-down panel */}
            <div
              className={`fixed left-0 right-0 top-[calc(4rem+0px)] z-50 origin-top bg-white shadow-lg transition-all duration-200 ${open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0"
                }`}
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-3 py-2 text-gray-800 transition hover:bg-gray-100"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-2 text-white transition hover:bg-purple-700"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            </div>
        </nav>
      </header >
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as z from "zod";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { services } from "../components/Navbar";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import ContactUsPageSchema from "../schemas/contactUsSchema";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is too short" }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const stats = [
  { target: 500, label: "Clients Worldwide" },
  { target: 1200, label: "Events Managed" },
  { target: 98, label: "% Satisfaction Rate" },
  { target: 24, label: "Hr Response Time" },
];

export default function ContactUsClient() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const serviceValue = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        reset();
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    const animateCount = (el: HTMLSpanElement) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const timer = window.setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = `${Math.floor(current)}${target < 100 ? "" : "+"}`;
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target as HTMLSpanElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    <>

      <title>Contact Gladius eSport | Managed IT Services Support & Business Inquiries</title>

      <meta name="description" content="Contact Gladius eSport for Managed IT Services, cybersecurity solutions, cloud management, and technical support. Reach our team for service inquiries, partnerships, and IT assistance." />

      <meta name="keywords" content="Gladius eSport Contact, Managed IT Services Support, IT Support Contact, Cybersecurity Services Contact, Cloud Services Support, Business IT Support, Gladius eSport" />

      <meta name="author" content="Gladius eSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/contact-us/" />

      <meta property="og:title" content="Contact Gladius eSport | IT Services & Support Team" />
      <meta property="og:description" content="Get in touch with Gladius eSport for Managed IT Services, cybersecurity protection, and cloud infrastructure support." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/contact-us/" />
      <meta property="og:site_name" content="Gladius eSport" />
      <meta property="og:type" content="website" />

      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/contact-us.webp" />
      <meta property="og:image:alt" content="Contact Gladius eSport IT Support" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:updated_time" content="2026-03-14T00:00:00+00:00" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/contact-us/" />
      <meta name="twitter:title" content="Need IT Support? Contact Gladius eSport" />
      <meta name="twitter:description" content="Reach the Gladius eSport team for Managed IT Services, cybersecurity, and cloud infrastructure support." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/contact-us.webp" />
      <meta name="twitter:image:alt" content="Gladius eSport IT Support Contact" />
      <meta name="twitter:site" content="@gladiusesport" />
      <meta name="twitter:creator" content="@gladiusesport" />


      <ContactUsPageSchema />

      <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          className="pointer-events-none fixed inset-0 z-[1]"
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
          }}
        />

        <div className="orb-float-1 pointer-events-none fixed left-[-150px] top-[-150px] z-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="orb-float-2 pointer-events-none fixed bottom-[-100px] right-[-100px] z-0 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="orb-float-3 pointer-events-none fixed left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[120px]" />

        <header className="relative z-50 flex h-20 items-center justify-between border-b border-cyan-300/10 bg-[#05080f]/85 px-6 backdrop-blur-xl md:px-12">
          <a
            href="/"
            className="font-heading md:text-2xl font-black tracking-[0.15em] text-white"
          >
            GLADIUS<span className="text-cyan-400">.</span>ESPORT
          </a>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <a
              href="/#"
              className="ml-8 text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:text-cyan-400"
            >
              Home
            </a>

            <div ref={servicesRef} className="relative ml-8">
              <button
                onClick={() => setIsServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:text-cyan-400"
                aria-expanded={isServicesOpen}
                type="button"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-2xl">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="group flex flex-col rounded-lg px-4 py-3 transition-colors hover:bg-blue-50"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600">
                        {service.title}
                      </span>
                      <span className="text-xs text-gray-600">
                        {service.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="ml-8 text-sm font-semibold uppercase tracking-[0.15em] text-white/60 transition hover:text-cyan-400"
            >
              About
            </a>
            <a
              href="#"
              className="ml-8 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-400"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute left-0 top-full w-full border-t border-cyan-300/10 bg-[#05080f]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isMobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
              }`}
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-5">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:bg-white/10 hover:text-cyan-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="rounded-lg border border-white/10 bg-white/5">
                  <button
                    type="button"
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-3 text-left text-sm font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:text-cyan-400"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${isServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 px-2 pb-2">
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            href={service.href}
                            className="flex items-start gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-cyan-400/10"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            <div className="text-cyan-400">{service.icon}</div>
                            <div>
                              <div className="text-sm font-medium text-white">
                                {service.title}
                              </div>
                              <div className="mt-0.5 text-xs text-white/55">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/80 transition hover:bg-white/10 hover:text-cyan-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>

                <a
                  href="#"
                  className="block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-400 transition hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="relative z-[5] px-8 pb-8 pt-20 text-center">
          <div className="font-tech mb-4 inline-block border border-cyan-400/30 bg-cyan-400/5 px-5 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-400">
            ▸ Initiate Communication Protocol
          </div>

          <h1 className="font-heading text-5xl font-black uppercase leading-none text-white md:text-7xl">
            Get In{" "}
            <span className="relative text-cyan-400 after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[3px] after:bg-cyan-400 after:shadow-[0_0_16px_#00f5ff] after:content-['']">
              Touch
            </span>
          </h1>

          <p className="font-body mt-5 text-lg tracking-[0.05em] text-white/45">
            Let&apos;s build something legendary together.
            <br />
            Fill out the form and our team will respond within 24 hours.
          </p>

          <div className="mx-auto mt-8 h-[2px] w-[120px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </section>

        <div className="relative z-[5] mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-20 pt-8 md:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
          <div>
            <h2 className="font-heading mb-3 text-[1.6rem] font-bold text-white">
              Ready to <span className="text-cyan-400">Level Up?</span>
            </h2>

            <p className="font-body mb-8 text-[1.05rem] leading-8 text-white/45">
              Whether you&apos;re launching a tournament, building an esports brand, or need
              professional gaming solutions — we&apos;re your squad.
            </p>

            <div className="mb-4 flex items-start gap-4 border border-cyan-400/15 border-l-[3px] border-l-cyan-400 bg-cyan-400/5 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-400">
                📍
              </div>
              <div>
                <div className="font-tech mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                  Location
                </div>
                <div className="font-body text-[0.95rem] font-semibold text-white/80">
                  Global HQ — Online &amp; On-site
                </div>
              </div>
            </div>

            <div className="mb-4 flex items-start gap-4 border border-cyan-400/15 border-l-[3px] border-l-cyan-400 bg-cyan-400/5 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-400">
                ✉️
              </div>
              <div>
                <div className="font-tech mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                  Email
                </div>
                <a
                  href="mailto:support@techsupportpro.com"
                  className="font-body text-[0.95rem] font-semibold text-white/80">
                  support@techsupportpro.com
                </a>
              </div>
            </div>

            <div className="mb-4 flex items-start gap-4 border border-cyan-400/15 border-l-[3px] border-l-cyan-400 bg-cyan-400/5 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-400">
                📞
              </div>
              <div>
                <div className="font-tech mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                  Phone
                </div>
                <a
                  href="tel:+16465364302" className="font-body text-[0.95rem] font-semibold text-white/80">
                  +1 (646) 536-4302
                </a>
              </div>
            </div>

            <div className="mb-4 flex items-start gap-4 border border-cyan-400/15 border-l-[3px] border-l-cyan-400 bg-cyan-400/5 px-5 py-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-cyan-400/30 bg-cyan-400/10 text-xl text-cyan-400">
                ⏱️
              </div>
              <div>
                <div className="font-tech mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                  Response Time
                </div>
                <div className="font-body text-[0.95rem] font-semibold text-white/80">
                  Within 24 Hours
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#" title="Twitter/X" className="flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/5 text-white/60 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">
                𝕏
              </a>
              <a href="#" title="Discord" className="flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/5 text-white/60 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">
                ⚡
              </a>
              <a href="#" title="Instagram" className="flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/5 text-white/60 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">
                📷
              </a>
              <a href="#" title="LinkedIn" className="flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/5 text-white/60 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">
                in
              </a>
              <a href="#" title="YouTube" className="flex h-11 w-11 items-center justify-center border border-cyan-400/25 bg-cyan-400/5 text-white/60 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">
                ▶
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 border border-cyan-400/15 bg-cyan-400/5 px-5 py-4">
              <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-cyan-400 shadow-[0_0_12px_#00f5ff] animate-pulse" />
              <span className="font-tech text-xs tracking-[0.1em] text-white/50">
                TEAM ONLINE — READY TO ASSIST
                <span className="blink-cursor" />
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden border border-cyan-400/15 bg-[#0a0e1a]/90 p-6 md:p-10">
            <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-cyan-400" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-pink-500" />

            <div className="font-heading mb-7 flex items-center gap-3 text-[1.15rem] font-bold tracking-[0.1em] text-white">
              <span className="h-[2px] w-7 bg-cyan-400 shadow-[0_0_10px_#00f5ff]" />
              Send Your Message
            </div>

            {status !== "success" ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className={`font-body w-full border bg-cyan-400/5 px-3 py-2 text-base font-medium text-[#e0e0e0] outline-none transition placeholder:italic placeholder:text-white/50 focus:border-cyan-400 focus:bg-cyan-400/10 ${errors.name ? "border-pink-500" : "border-cyan-400/20"
                        }`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-pink-400">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                      Email ID
                    </label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`font-body w-full border bg-cyan-400/5 px-3 py-2 text-base font-medium text-[#e0e0e0] outline-none transition placeholder:italic placeholder:text-white/50 focus:border-cyan-400 focus:bg-cyan-400/10 ${errors.email ? "border-pink-500" : "border-cyan-400/20"
                        }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-pink-400">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 890"
                      className={`font-body w-full border bg-cyan-400/5 px-3 py-2 text-base font-medium text-[#e0e0e0] outline-none transition placeholder:italic placeholder:text-white/50 focus:border-cyan-400 focus:bg-cyan-400/10 ${errors.phone ? "border-pink-500" : "border-cyan-400/20"
                        }`}
                    />
                    {errors.phone && <p className="mt-1 text-sm text-pink-400">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                      Company Name
                    </label>
                    <input
                      {...register("company")}
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="font-body w-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-base font-medium text-[#e0e0e0] outline-none transition placeholder:italic placeholder:text-white/50 focus:border-cyan-400 focus:bg-cyan-400/10"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      {...register("service")}
                      id="service"
                      value={serviceValue || ""}
                      className={`font-body w-full appearance-none border bg-cyan-400/5 px-3 py-2 pr-10 text-base font-medium text-[#e0e0e0] outline-none transition focus:border-cyan-400 focus:bg-cyan-400/10 ${errors.service ? "border-pink-500" : "border-cyan-400/20"
                        }`}
                    >
                      <option value="" disabled className="bg-[#0a0e1a] text-[#e0e0e0]">
                        — Select a Service —
                      </option>
                      <option value="helpDeskTier1" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Help Desk Tier 1
                      </option>
                      <option value="helpDeskTier2" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Help Desk Tier 2
                      </option>
                      <option value="service3" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Microsoft 365 Admin
                      </option>
                      <option value="cloudSecurity" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Cloud Security
                      </option>
                      <option value="networkSecurity" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        VPN & Security
                      </option>
                      <option value="CyberSecurity" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Cyber Security Consulting
                      </option>
                      <option value="managedItServices" className="bg-[#0a0e1a] text-[#e0e0e0]">
                        Managed IT Services
                      </option>
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.65rem] text-cyan-400">
                      ▼
                    </span>
                  </div>
                  {errors.service && <p className="mt-1 text-sm text-pink-400">{errors.service.message}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="font-tech mb-2 block text-[0.7rem] uppercase tracking-[0.2em] text-cyan-400">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="Describe your project, goals, or questions..."
                    className={`font-body min-h-24   w-full resize-y border bg-cyan-400/5 px-3 py-2 text-base font-medium leading-7 text-[#e0e0e0] outline-none transition placeholder:italic placeholder:text-white/50 focus:border-cyan-400 focus:bg-cyan-400/10 ${errors.message ? "border-pink-500" : "border-cyan-400/20"
                      }`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-pink-400">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-heading mt-2 w-full bg-cyan-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#05080f] transition hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                  }}
                >
                  {status === "submitting" ? "TRANSMITTING..." : "⚡  TRANSMIT MESSAGE"}
                </button>

                {status === "error" && (
                  <div className="font-body mt-4 border border-pink-500/40 bg-pink-500/10 px-3 py-2 text-pink-100">
                    Something went wrong. Please check your SMTP settings.
                  </div>
                )}
              </form>
            ) : (
              <div className="block px-4 py-12 text-center">
                <div className="mb-4 text-5xl text-cyan-400">✓</div>
                <h3 className="font-heading mb-2 text-xl text-white">Message Transmitted!</h3>
                <p className="font-body text-[0.95rem] text-white/45">
                  Your mission briefing has been received.
                  <br />
                  Expect a response within 24 hours, warrior.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-[5] mx-auto grid max-w-[1200px] grid-cols-2 gap-[1px] bg-cyan-400/10 px-6 pb-12 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={item.label} className="bg-[var(--bg)] px-6 py-6 text-center">
              <span
                ref={(el) => {
                  statRefs.current[index] = el;
                }}
                data-target={item.target}
                className="font-heading mb-1 block text-[2rem] font-black text-cyan-400"
              >
                0
              </span>
              <span className="font-body text-[0.8rem] uppercase tracking-[0.15em] text-white/40">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
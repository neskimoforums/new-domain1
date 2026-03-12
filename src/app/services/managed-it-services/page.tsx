"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
    Shield,
    Cloud,
    Activity,
    ChevronDown,
} from 'lucide-react';
import SelectionFramework from '@/app/components/services7/SelectionFramework';
import CaseStudies from '@/app/components/services7/CaseStudies';
import Benefits from '@/app/components/services7/Benefits';
import IndustryAnalytics from '@/app/components/services7/IndustryAnalytics';
import ServiceCatalog from '@/app/components/services7/Services';
import ManagedITIntro from '@/app/components/services7/Intro';
import Conclusion from '@/app/components/services7/Conclusion';
import Link from 'next/link';
import { services } from '@/app/components/Navbar';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import FloatingCall from '@/app/components/FloatingCall';


export default function ManagedITGuide() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [counts, setCounts] = useState({ market: 0, cagr: 0, smb: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);

    const [isScrolled, setIsScrolled] = useState(false);

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



    // Scroll Progress Logic
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Stats Counter Animation
    useEffect(() => {
        const target = { market: 490, cagr: 13, smb: 60 };
        const duration = 2000;
        const startTime = Date.now();

        const updateCounts = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts({
                market: Math.floor(progress * target.market),
                cagr: Math.floor(progress * target.cagr),
                smb: Math.floor(progress * target.smb)
            });

            if (progress < 1) requestAnimationFrame(updateCounts);
        };

        requestAnimationFrame(updateCounts);
    }, []);

    const links = [
        { href: '#services', label: 'Services' },
        { href: '#demand', label: 'Trends' },
        { href: '#cases', label: 'Case Studies' },
        { href: '#faq', label: 'FAQ' },
    ];


    return (
        <>

            {/* --- SEO SECTION START --- */}
            <title>Managed IT Services: Complete Guide 2025 | Types, Benefits & Solutions</title>
            <meta name="description" content="Comprehensive guide to managed IT services covering types, benefits, and solutions for modern businesses. Expert insights on network, cloud, security, and more." />
            <meta name="keywords" content="managed IT services, MSP, managed service provider, cloud services, cybersecurity, IT support, network monitoring, infrastructure management" />
            <meta name="author" content="GladiuseSport" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.gladiusesport.com/services/managed-it-services/" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Managed IT Services: Complete Business Guide 2025" />
            <meta property="og:description" content="Expert guide covering all types of managed IT services, strategic benefits, real-world case studies, and 2025 industry trends." />
            <meta property="og:url" content="https://www.gladiusesport.com/services/managed-it-services/" />
            <meta property="og:site_name" content="GladiuseSport" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.gladiusesport.com/assets/img/managed-it-services.webp" />
            <meta property="og:image:alt" content="Complete Guide to Managed IT Services and Solutions" />
            <meta property="og:image:type" content="image/webp" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:updated_time" content="2025-06-10T00:00:00+00:00" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://www.gladiusesport.com/services/managed-it-services/" />
            <meta name="twitter:title" content="The Definitive Guide to Managed IT Services in 2025" />
            <meta name="twitter:description" content="Explore types of MSP services, from Cloud-Native infrastructure to AI-driven monitoring. Expert insights for modern organizations." />
            <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/managed-it-services.webp" />
            <meta name="twitter:image:alt" content="Managed IT Services and MSP Solutions Guide" />
            <meta name="twitter:site" content="@GladiuseSport" />
            <meta name="twitter:creator" content="@GladiuseSport" />
            {/* --- SEO SECTION END --- */}

            <div className="min-h-screen bg-[#f5f3ee] text-[#0a0f1e] font-sans selection:bg-blue-100">
                {/* Noise Overlay */}
                <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")` }}>
                </div>

                {/* Progress Bar */}
                <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 to-emerald-400 z-[10000] transition-all duration-100"
                    style={{ width: `${scrollProgress}%` }}>
                </div>



                {/* Nav */}
                <header
                    className={`sticky top-0 z-[100] transition-all duration-300 border-b ${isScrolled
                        ? "bg-[#f5f3ee]/95 backdrop-blur-md shadow-md border-[#e2ddd6]"
                        : "bg-[#f5f3ee] border-transparent"
                        }`}
                >
                    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                        {/* Logo */}
                        <a
                            href="/"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                            className="font-extrabold text-xl tracking-tighter flex items-center gap-2"
                        >
                            <span className="text-blue-600">IT</span>Guide 2025
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-8 md:flex">
                            {/* Services Dropdown */}
                            <div ref={servicesRef} className="relative">
                                <button
                                    onClick={() => setIsServicesOpen((v) => !v)}
                                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                                    aria-expanded={isServicesOpen}
                                    type="button"
                                >
                                    Services
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isServicesOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                                        {services.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                href={service.href}
                                                className="flex flex-col rounded-lg px-4 py-3 hover:bg-blue-50 transition-colors group"
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

                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="font-mono-custom text-[13px] tracking-[2px] text-gray-600 transition hover:text-blue-600"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* CTA Button */}
                            <Link
                                href="/#contact"
                                className="rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition-all transform hover:scale-105 font-medium"
                            >
                                Contact Us
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen((v) => !v)}
                            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                            aria-label="Toggle menu"
                            type="button"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu - Logic synced with First Header */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 bg-[#f5f3ee] animate-in fade-in slide-in-from-top-2 duration-200 pb-8">
                            <div className="space-y-2 mt-4 px-6">
                                <div className="font-bold text-gray-900 px-3 py-2 border-b border-gray-200 mb-2">
                                    Services
                                </div>

                                {services.map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.href}
                                        className="flex items-center gap-3 px-3 py-3 hover:bg-blue-50 rounded-lg transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="text-blue-600">{service.icon}</div>
                                        <div className="text-sm font-medium text-gray-800">{service.title}</div>
                                    </Link>
                                ))}

                                <div className="pt-4 flex flex-col gap-2">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/#contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="mt-4 flex items-center justify-center h-12 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 active:scale-95 transition-all"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </header>

                <main className="max-w-full mx-auto px-0">
                    {/* Hero Section */}
                    <section className="max-w-7xl mx-auto md:px-0 px-4 md:py-17 py-10 relative overflow-hidden">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase tracking-wider">📘 Expert Guide</span>
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase tracking-wider">✅ E-E-A-T Verified</span>
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase tracking-wider">🔥 Updated 2025</span>
                        </div>

                        <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-8">
                            Managed <span className="text-blue-600 relative">IT Services<span className="absolute bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full"></span></span>:<br />
                            Complete Guide for<br />Modern Businesses
                        </h1>

                        <p className="max-w-160 text-lg text-gray-700 leading-relaxed mb-10">
                            In today's digital world, businesses rely heavily on technology to operate efficiently. From cloud computing and cybersecurity to network infrastructure and employee devices, IT systems have become the backbone of modern organizations. However, managing complex IT environments internally can be costly, time-consuming, and technically challenging. This is where <strong>Managed IT Services</strong>  play an important role — allowing businesses to outsource IT operations to specialized service providers who monitor, maintain, and secure their technology infrastructure, ensuring systems run smoothly while protecting organizations from cybersecurity threats.</p>

                        <div className="flex flex-wrap gap-12">
                            <div>
                                <div className="text-3xl font-black text-blue-600 tracking-tighter">{counts.market}</div>
                                <div className="text-[0.75rem] font-bold text-gray-500 uppercase tracking-widest">Billion USD market by 2028</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-blue-600 tracking-tighter">{counts.cagr}%</div>
                                <div className="text-[0.75rem] font-bold text-gray-500 uppercase tracking-widest">% CAGR globally</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-blue-600 tracking-tighter">{counts.smb}%</div>
                                <div className="text-[0.75rem] font-bold text-gray-500 uppercase tracking-widest">% SMBs use MSPs</div>
                            </div>
                        </div>
                    </section>

                    {/* Meta Bar */}
                    <div className="w-full min-w-full bg-[#0a0f1e] text-gray-400 py-4 md:px-0 px-4  flex flex-wrap items-center justify-center text-[0.8rem] font-mono">
                        <div className="flex flex-wrap md:gap-16 gap:6 items-center justify-center">
                            <div>
                                📅 <strong className="text-emerald-400">Published:</strong> Jan 15, 2025
                            </div>
                            <div>
                                🔄 <strong className="text-emerald-400">Last Updated:</strong> June 10, 2025
                            </div>
                            <div>
                                ✍️ <strong className="text-emerald-400">Reviewed by:</strong> IT Industry Experts
                            </div>


                            <div>
                                <span className="text-yellow-400 tracking-widest">★★★★★</span>{" "}
                                <strong>4.9/5</strong> (2,847 reviews)
                            </div>
                            <div>
                                ⏱️ <strong>Read time:</strong> ~18 min
                            </div>
                        </div>
                    </div>

                    {/* Intro Section */}
                    <ManagedITIntro />


                    {/* Services Grid */}

                    <ServiceCatalog />


                    {/* Industry Demand Section */}
                    <IndustryAnalytics />

                    {/* Benefits */}

                    <Benefits />

                    {/* Case Studies */}

                    <CaseStudies />

                    <SelectionFramework />

                    {/* Future Insights */}
                    <section className="py-20 w-full bg-[#0a0f1e] md:px-8 px-6 text-white mb-20">
                        <div className="max-w-7xl mx-auto">
                            <div style={{ fontFamily: "'Syne', sans-serif" }} className="text-emerald-400 font-bold uppercase tracking-widest text-[0.72rem] mb-2">
                                What's Next
                            </div>
                            <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-3xl md:text-4xl font-black mb-6">
                                The Future of Managed IT Services
                            </h2>
                            <p className='pb-12 max-w-xl text-gray-400 text-[0.95rem] leading-relaxed'>
                                The MSP industry is being reshaped by AI, automation, and new security architectures. Organizations that adopt these trends early will gain decisive competitive advantages.
                            </p>

                            {/* Responsive Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: "🤖", title: "AI-Driven IT Monitoring", desc: "Machine learning models predict and auto-remediate IT issues before they impact users, reducing MTTR by up to 80%." },
                                    { icon: "⚡", title: "Cybersecurity Automation", desc: "SOAR platforms automate threat detection, containment, and response, enabling 24/7 security without growth." },
                                    { icon: "☁️", title: "Cloud-Native Infrastructure", desc: "Kubernetes-native and serverless MSP services eliminate traditional server management entirely, reducing overhead." },
                                    { icon: "🏠", title: "Remote Workforce Support", desc: "Permanent hybrid work models drive demand for advanced remote endpoint management and secure access tools." },
                                    { icon: "🔒", title: "Zero Trust Architecture", desc: "'Never trust, always verify' security models become the new baseline, replacing perimeter-based network security." },
                                    { icon: "🌐", title: "Edge Computing MSP", desc: "Managing IoT and edge infrastructure at scale becomes a major MSP growth segment, particularly in healthcare." }
                                ].map((f, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group">
                                        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                                        <h4 className="font-bold text-[1rem] mb-2">{f.title}</h4>
                                        <p className="text-[0.85rem] text-gray-400 leading-relaxed">{f.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="pb-17 max-w-7xl border-b border-gray-300 mx-auto md:px-0 px-4">

                        <span className="text-blue-600 font-mono text-sm uppercase tracking-widest font-bold">Expert answers</span>

                        <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-3xl font-black mb-12">Frequently Asked Questions (15 Total)</h2>
                        <div className="max-w-7xl space-y-4">
                            {[
                                { q: "What are managed IT services?", a: "Managed IT services are outsourced technology services where a provider manages an organization's IT systems, infrastructure, and security. A third-party Managed Service Provider (MSP) takes full responsibility for monitoring, maintaining, and securing technology under a subscription-based model — proactively preventing problems before they impact operations." },
                                { q: "How do managed IT services differ from traditional IT support?", a: "Traditional IT support (Break/Fix) is reactive — you call when something breaks, and they fix it for an hourly fee. Managed IT is proactive — the provider monitors systems 24/7 to prevent issues from occurring in the first place, all for a predictable monthly fee." },
                                { q: "What are the common types of managed IT services?", a: "Common types include Managed Security (cybersecurity), Managed Network (infrastructure), Managed Cloud (hosting/storage), Managed Backup (disaster recovery), Help Desk (technical support), and Managed Compliance." },
                                { q: "How much do managed IT services cost?", a: "Costs typically range from $100 to $250 per user per month, or $150 to $500 per server per month. Pricing depends on the complexity of the environment, the level of support required, and the specific services included in the SLA." },
                                { q: "Are managed IT services suitable for small businesses?", a: "Yes. Managed IT allows small businesses to access enterprise-level technology and expertise without the high cost of hiring a full-time, in-house IT team. It provides predictable budgeting and professional-grade security that most small businesses cannot achieve alone." },
                                { q: "How do MSPs handle cybersecurity?", a: "MSPs implement multi-layered security, including firewalls, endpoint protection (EDR), multi-factor authentication (MFA), security awareness training, and 24/7 Security Operations Center (SOC) monitoring to detect and mitigate threats in real-time." },
                                { q: "What is an SLA in managed IT services?", a: "A Service Level Agreement (SLA) is a contract that defines the expected level of service, including response times, uptime guarantees, and the provider's responsibilities. It ensures accountability and sets clear expectations for the partnership." },
                                { q: "Can an MSP help with regulatory compliance?", a: "Yes. Specialized MSPs help organizations meet requirements for regulations like HIPAA (healthcare), PCI DSS (payments), GDPR (privacy), and SOC 2 through continuous monitoring, auditing, and documentation." },
                                { q: "What happens if my systems go down?", a: "Under a managed service model, the MSP’s monitoring system alerts them immediately (often before you notice). They begin remote remediation instantly. If a disaster occurs, they execute the Backup and Disaster Recovery (BDR) plan to restore operations within the agreed-upon RTO." },
                                { q: "Do I lose control over my IT if I use an MSP?", a: "No. You retain ownership and decision-making authority. The MSP acts as an extension of your team, providing expert guidance and handling the day-to-day 'heavy lifting,' while you focus on strategic business goals." },
                                { q: "How do I transition to a managed IT provider?", a: "The transition (onboarding) typically involves an initial audit, infrastructure stabilization, implementation of monitoring tools, and a formal handoff. A professional MSP will manage this process over 30–90 days to ensure zero disruption to your operations." },
                                { q: "What is the role of a vCIO in managed IT?", a: "A virtual Chief Information Officer (vCIO) provides high-level strategic consulting. They help with IT budgeting, technology roadmapping, and ensuring your technology investments align with your long-term business objectives." },
                                { q: "Are cloud services part of managed IT?", a: "Usually, yes. Most MSPs manage cloud environments (AWS, Azure, Google Cloud) and SaaS applications (Microsoft 365, Google Workspace), handling migrations, security, and optimization within the cloud." },
                                { q: "How do I measure the ROI of managed IT?", a: "ROI is measured by calculating the cost of avoided downtime, the reduction in security breach risks, improved employee productivity due to faster systems/support, and the savings compared to hiring full-time internal IT staff." },
                                { q: "Can an MSP work with my existing internal IT team?", a: "Yes. This is called 'Co-managed IT.' The MSP handles routine tasks (monitoring, patching, help desk), while your internal team focuses on business-specific projects and proprietary applications." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white border border-[#cbc9c6] rounded-xl overflow-hidden shadow-sm grid-cols-2">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        style={{ fontFamily: "'Syne', sans-serif" }}
                                        className="w-full text-left p-6 font-bold flex justify-between items-center hover:bg-gray-50 transition-colors"
                                    >
                                        {faq.q}
                                        <div className='w-6 h-6 flex rounded-xl justify-center bg-blue-100 items-center'>
                                            <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                        </div>
                                    </button>
                                    <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-40 border-t border-gray-300' : 'max-h-0'}`}>
                                        <div className="p-6 text-sm text-gray-600 leading-relaxed bg-gray-50/50">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Conclusion />

                    {/* Footer */}
                    <footer className="bg-[#0a0f1e] text-gray-400 py-16 px-6">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
                            <div className="col-span-1.5">
                                <div className="text-white font-black text-xl tracking-tighter mb-6">
                                    <span className="text-blue-600">IT</span>Guide 2025
                                </div>
                                <p className="text-[0.82rem] leading-relaxed mb-6">
                                    The definitive resource for managed IT services strategy, implementation, and market trends. Empowering modern businesses since 2015.
                                </p>
                                <div className="flex gap-4">
                                    <div className="bg-white/5 p-2 rounded hover:text-blue-400 cursor-pointer transition-colors"><Activity size={18} /></div>
                                    <div className="bg-white/5 p-2 rounded hover:text-blue-400 cursor-pointer transition-colors"><Shield size={18} /></div>
                                    <div className="bg-white/5 p-2 rounded hover:text-blue-400 cursor-pointer transition-colors"><Cloud size={18} /></div>
                                </div>
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h5>
                                <ul className="text-[0.8rem] space-y-3">
                                    <li><a href="#" className="hover:text-blue-400">Cybersecurity</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Cloud Strategy</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Network Design</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Compliance Audit</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Resources</h5>
                                <ul className="text-[0.8rem] space-y-3">
                                    <li><a href="#" className="hover:text-blue-400">White Papers</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Market Reports</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Pricing Calculator</a></li>
                                    <li><a href="#" className="hover:text-blue-400">Case Studies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-7xl mx-auto pt-8 flex flex-wrap justify-between items-center gap-6 text-[0.75rem]">
                            <p>© 2025 IT Knowledge Hub. All Rights Reserved.</p>
                            <div className="flex gap-3">
                                <span className="bg-white/5 px-3 py-1 rounded text-[0.65rem] font-mono">ISO 27001</span>
                                <span className="bg-white/5 px-3 py-1 rounded text-[0.65rem] font-mono">GDPR COMPLIANT</span>
                            </div>
                        </div>
                    </footer>

                    <FloatingCall />
                </main>
            </div>
        </>
    );
}; 
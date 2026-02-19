"use client";
import WhatWeDo from "./components/WhatWeDo";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Tools from "./components/Tools";
import Industry from "./components/Industry";
import MarketAnalysis from "./components/MarketDemand";
import ClientReview from "./components/ClientReview"
import FAQ from "./components/Faq";
import Navbar from "./components/Navbar";
import HomeSchema from "./components/HomeSchema";
import FloatingCall from "./components/FloatingCall";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Show popup after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Close when clicking outside the box
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // TypeScript now understands 'contains' belongs to an HTML element
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);


  return (
    <>
      {/* --- SEO & META SECTION --- */}
      <title>IT Support Services USA | Managed IT Solutions for Small & Medium Businesses</title>
      <meta name="description" content="GladiuseSport delivers dependable IT support and managed technology services to small and medium-sized businesses across the USA, helping teams stay secure, productive, and scalable." />
      <meta name="keywords" content="IT Support USA, Managed IT Services USA, Business IT Solutions, Small Business IT Support, Medium Business IT Services, IT Helpdesk, Cloud & Cybersecurity" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Smart IT Support Solutions Built for US Small & Medium Companies" />
      <meta property="og:description" content="From daily IT assistance to long-term infrastructure management, GladiuseSport helps US businesses reduce downtime, improve security, and simplify technology operations." />
      <meta property="og:url" content="https://www.gladiusesport.com/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/gladiusesport.webp" />
      <meta property="og:image:alt" content="Business IT Support and Managed Services in the USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/" />
      <meta name="twitter:title" content="Reliable IT Support That Keeps US Businesses Running" />
      <meta name="twitter:description" content="Explore flexible IT support services from GladiuseSport, designed to protect systems, streamline workflows, and support business growth across the United States." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/gladiusesport.webp" />
      <meta name="twitter:image:alt" content="Managed IT Services for US Businesses" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- END SEO SECTION --- */}

      <HomeSchema />
      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>

      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <Tools />
      <Industry />
      <MarketAnalysis />
      <ClientReview />
      <FAQ />
      <FloatingCall />

      {/* --- LIVE POPUP MODAL --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-5 backdrop-blur-[1px]">
          <div
            ref={popupRef}
            className="relative w-full max-w-[320px] overflow-hidden rounded-[15px] border-2 border-[#00b347] bg-gradient-to-br from-black via-[#1a1a1a] to-[#0d0d0d] p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
          >

            {/* Background Decorations */}
            <div className="animate-floats absolute -right-[10%] -top-[50%] h-[200px] w-[200px] rounded-full bg-white/10"></div>
            <div className="animate-float-reverse absolute -left-[5%] -bottom-[30%] h-[150px] w-[150px] rounded-full bg-white/15"></div>

            <div className="relative z-10">
              <div className="animate-pulse-custom mx-auto mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-[0_0_30px_rgba(255,0,0,0.7)]">
                <span className="animate-pulse text-2xl text-white">●</span>
              </div>

              <h2 className="mb-3 text-[22px] font-bold tracking-tight text-[#00b347]">We're Live!</h2>
              <p className="mb-[18px] text-sm font-light text-white/90">Get instant support now</p>

              <a
                href="tel:+918920624649"
                className="mb-[15px] inline-block rounded-lg bg-[#00b347] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,179,71,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                📞 +91 (892) 062-4649
              </a>

              <button
                onClick={() => window.location.href = 'tel:+918920624649'}
                className="my-3 w-full rounded-lg bg-red-600 py-[11px] text-[13px] font-semibold text-white shadow-[0_6px_15px_rgba(255,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                CALL NOW
              </button>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-2 w-full rounded-lg border-2 border-[#00b347] bg-transparent py-2 text-[12px] font-semibold text-[#00b347] transition-all duration-300 hover:-translate-y-1 hover:bg-[#00b347]/10"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

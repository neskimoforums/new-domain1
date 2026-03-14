"use client";
import React from 'react'
import Navbar from "../../components/services4/Navbar"
import Hero from "../../components/services4/Hero"
import OverView from "../../components/services4/OverView"
import Services from "../../components/services4/Service"
import Tools from "../../components/services4/Tools"
import Industry from "../../components/services4/Industries"
import Analysis from "../../components/services4/DemandAnalysis"
import CaseStudies from '../../components/services4/CaseStudies'
import WhyChooseUs from "../../components/services4/WhyChooseUs"
import Testimonials from "../../components/services4/Testimonials"
import FAQ from "../../components/services4/FAQ"
import Contact from "../../components/services4/Contact"
import Disclaimer from "../../components/services4/Disclaimer"
import { Building2, Hospital, University, GraduationCap, ShoppingCart, Cog, } from "lucide-react";
import NetworkSupportSchema from '@/app/components/services4/NetworkSupportSchema'
import FloatingCall from '@/app/components/FloatingCall';


const page = () => {


  type Org = {
    name: string;
    icon: React.ReactNode;
  };

  const ORGS: readonly Org[] = [
    { name: "TechCorp", icon: <Building2 className="h-12 w-12" aria-hidden="true" /> },
    { name: "HealthPlus", icon: <Hospital className="h-12 w-12" aria-hidden="true" /> },
    { name: "FinanceFirst", icon: <University className="h-12 w-12" aria-hidden="true" /> },
    { name: "EduGlobal", icon: <GraduationCap className="h-12 w-12" aria-hidden="true" /> },
    { name: "RetailHub", icon: <ShoppingCart className="h-12 w-12" aria-hidden="true" /> },
    { name: "ManuTech", icon: <Cog className="h-12 w-12" aria-hidden="true" /> },
  ] as const;
  return (
    <>
      {/* --- SEO & META SECTION --- */}
      <title>Network Support Services USA | VPN Troubleshooting & Secure Access Support</title>
      <meta name="description" content="GladiuseSport provides cloud support services in the USA, specializing in VPN troubleshooting, secure remote access, cloud connectivity issues, and user access resolution for businesses." />
      <meta name="keywords" content="Cloud Support Services USA, VPN Troubleshooting Services, Cloud Access Support, Remote Access Issues, Business VPN Support, Cloud Connectivity Solutions" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/network-support-services-usa/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Cloud & VPN Troubleshooting Support for US Businesses" />
      <meta property="og:description" content="Resolve VPN, cloud access, and remote connectivity problems with GladiuseSport’s cloud support services, helping US businesses maintain secure and uninterrupted access." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/network-support-services-usa/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/network-support-services-usa.webp" />
      <meta property="og:image:alt" content="Cloud Support and VPN Troubleshooting Services USA" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-01-01T00:00:00+00:00" />

      {/* Twitter Card Meta Tags - All 8 Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/network-support-services-usa/" />
      <meta name="twitter:title" content="VPN & Cloud Access Support Services in the USA" />
      <meta name="twitter:description" content="Get expert cloud support from GladiuseSport for VPN errors, remote access failures, and secure cloud connectivity across business environments in the USA." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/network-support-services-usa.webp" />
      <meta name="twitter:image:alt" content="VPN Troubleshooting and Cloud Support Services USA" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />
      {/* --- END SEO SECTION --- */}

      <NetworkSupportSchema />

      {/* background divs from the script */}
      <div className="animated-bg"></div>
      <div className="texture-overlay"></div>
      <Navbar />
      <Hero />
      <OverView />
      <Services />
      <Tools />
      <Industry />
      <Analysis />
      <CaseStudies />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-4xl font-bold text-gray-800">
            Trusted By Leading Organizations
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Join 500+ companies worldwide who trust us for their network security
          </p>

          <div className="grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-4 lg:grid-cols-6">
            {ORGS.map((org) => (
              <div key={org.name} className="text-center">
                <div className="mx-auto flex justify-center text-gray-400">
                  {org.icon}
                </div>
                <p className="mt-2 text-sm text-gray-600">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Disclaimer />
      <FloatingCall />
    </>
  )
}

export default page
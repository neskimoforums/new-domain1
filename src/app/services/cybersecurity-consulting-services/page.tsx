import { AnimatedBackground } from '../../components/services6/Animated-background';
import { MetaBar } from '../../components/services6/Meta-bar';
import { Navbar } from '../../components/services6/Navbar';
import { HeroSection } from '../../components/services6/Hero';
import { TableOfContents } from '../../components/services6/Table-of-contents';
import { ServicesSection } from '../../components/services6/Services';
import { IndustryDataSection } from '../../components/services6/Industry-data-section';
import { CaseStudiesSection } from '../../components/services6/Case-studies';
import { ConclusionSection } from '../../components/services6/Conclusion-section';
import { FaqSection } from '../../components/services6/Faq';
import { FooterSection } from '../../components/services6/Footer';
import FloatingCall from '@/app/components/FloatingCall';


function Page() {
  return (
    <>
      {/* --- SEO SECTION START --- */}
      <title>Cybersecurity Services: Complete Guide to 20 Essential Security Solutions</title>
      <meta name="description" content="Comprehensive guide to 20 essential cybersecurity services every business needs. Expert-reviewed coverage of network security, cloud security, and more." />
      <meta name="keywords" content="cybersecurity services, network security, cloud security, endpoint protection, managed security services, penetration testing" />
      <meta name="author" content="GladiuseSport" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/cybersecurity-consulting-services/" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Cybersecurity Services: Complete Business Guide" />
      <meta property="og:description" content="20 essential cybersecurity services explained with roles, responsibilities, and skills." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/cybersecurity-consulting-services/" />
      <meta property="og:site_name" content="GladiuseSport" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/cybersecurity-services.webp" />
      <meta property="og:image:alt" content="Complete Guide to 20 Essential Cybersecurity Services" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:updated_time" content="2026-03-11T00:00:00+00:00" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/cybersecurity-consulting-services/" />
      <meta name="twitter:title" content="20 Essential Cybersecurity Services for Businesses" />
      <meta name="twitter:description" content="Explore the definitive guide to cybersecurity services—from Network Security to SOC operations. Expert insights for modern organizations." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/cybersecurity-consulting-services.webp" />
      <meta name="twitter:image:alt" content="Managed Cybersecurity Services Guide" />
      <meta name="twitter:site" content="@GladiuseSport" />
      <meta name="twitter:creator" content="@GladiuseSport" />


      <main className="relative min-h-screen overflow-hidden bg-[#060b14] text-[#e2eaf6]">
        <AnimatedBackground />
        <MetaBar />
        <Navbar />
        <HeroSection />
        <TableOfContents />
        <ServicesSection />
        <IndustryDataSection />
        <CaseStudiesSection />
        <ConclusionSection />
        <FaqSection />
        <FooterSection />
        <FloatingCall />
      </main>
    </>
  );
}

export default Page
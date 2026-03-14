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
import CybersecuritySchema from '@/app/components/services6/CybersecuritySchema';


function Page() {
  return (
    <>
      {/* Meta Tags  */}
      <title>Cybersecurity Consulting Services | Network & Data Protection Experts</title>

      <meta name="description" content="Professional cybersecurity consulting services to protect your business from cyber threats, ransomware, and data breaches. Secure networks, applications, and cloud systems with expert security solutions." />

      <meta name="keywords" content="Cybersecurity Consulting Services, Cyber Security Consulting, Network Security Services, IT Security Consulting, Data Protection Services, Cyber Risk Assessment, Security Compliance Consulting" />

      <meta name="author" content="Gladius eSports" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.gladiusesport.com/services/cybersecurity-consulting-services" />

      {/* Open Graph Meta Tags  */}
      <meta property="og:title" content="Cybersecurity Consulting Services for Business Protection" />
      <meta property="og:description" content="Expert cybersecurity consulting to secure networks, applications, and cloud infrastructure against cyber threats and data breaches." />
      <meta property="og:url" content="https://www.gladiusesport.com/services/cybersecurity-consulting-services" />
      <meta property="og:site_name" content="Gladius eSports" />
      <meta property="og:type" content="website" />

      <meta property="og:image" content="https://www.gladiusesport.com/assets/img/cybersecurity-consulting-services.webp" />
      <meta property="og:image:alt" content="Cybersecurity Consulting Services and Data Protection" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="og:updated_time" content="2026-03-14T00:00:00+00:00" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.gladiusesport.com/services/cybersecurity-consulting-services" />
      <meta name="twitter:title" content="Cybersecurity Consulting Experts for Business Security" />
      <meta name="twitter:description" content="Protect your organization from cyber attacks with professional cybersecurity consulting, risk assessment, and security strategy services." />
      <meta name="twitter:image" content="https://www.gladiusesport.com/assets/img/cybersecurity-consulting-services.webp" />
      <meta name="twitter:image:alt" content="Cybersecurity Protection and Consulting Services" />
      <meta name="twitter:site" content="@gladiusesport" />
      <meta name="twitter:creator" content="@gladiusesport" />

      {/* --- END SEO SECTION --- */}

      <CybersecuritySchema />

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
      {/* <FooterSection /> */}
      <FloatingCall />
    </main >
    </>
  );
}

export default Page
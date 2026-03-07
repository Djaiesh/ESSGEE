import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OriginSection from "@/components/OriginSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SectorsSection from "@/components/SectorsSection";
import ProofSection from "@/components/ProofSection";
import ImpactSection from "@/components/ImpactSection";
import InsightsSection from "@/components/InsightsSection";

import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ESSGEE Projects",
  "description": "Independent project management consulting specialising in risk-led governance for complex infrastructure.",
  "url": "https://essgeeprojects.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perth",
    "addressRegion": "WA",
    "addressCountry": "AU"
  },
  "founder": {
    "@type": "Person",
    "name": "Satya Gady",
    "jobTitle": "Principal & Director"
  },
  "areaServed": "Australia",
  "serviceType": ["Project Management Consulting", "Risk Governance", "Contract Administration", "Cost & Schedule Control"]
};

const Index = () => (
  <>
    <Helmet>
      <title>ESSGEE Projects</title>
      <meta name="description" content="ESSGEE Projects provides independent project management consulting to government and private-sector clients. 30+ years, AUD 2.7B+ portfolio. Principal-led delivery." />
      <meta property="og:title" content="ESSGEE Projects | Protecting Capital. Delivering Certainty." />
      <meta property="og:description" content="Independent project management consulting specialising in risk-led governance for complex infrastructure." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://essgeeprojects.com.au" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <OriginSection />
      <CapabilitiesSection />
      <SectorsSection />
      <ProofSection />
      <ImpactSection />
      <InsightsSection />

    </main>
    <Footer />
  </>
);

export default Index;

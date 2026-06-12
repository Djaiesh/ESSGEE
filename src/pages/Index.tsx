import Hero from "@/components/Hero";
import OriginSection from "@/components/OriginSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import SectorsSection from "@/components/SectorsSection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import { site } from "@/data/siteContent";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ESSGEE Projects",
  "description": "ESSGEE Projects is an integrated strategy, development and delivery advisory practice supporting organisations across Australia, India and the Asia-Pacific region.",
  "url": site.url,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "addressCountry": "AU"
  },
  "founder": {
    "@type": "Person",
    "name": "Satya Gady",
    "jobTitle": "Founder & Principal Consultant"
  },
  "areaServed": ["Australia", "India", "Asia-Pacific"],
  "telephone": site.phoneDisplay,
  "email": site.email,
  "serviceType": ["Strategic Advisory", "Governance", "PMO/PfMO", "Project Management", "Program Management", "Portfolio Management", "Delivery Leadership"],
  "sameAs": ["https://www.linkedin.com/in/satya-gady"]
};

const Index = () => (
  <>
    <Seo title="ESSGEE" description="ESSGEE Projects is an integrated strategy, development and delivery advisory practice. Bridging Strategy, Governance and Delivery across Australia, India and the Asia-Pacific region." />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <main>
      <Hero />
      <OriginSection />
      <CapabilitiesSection />
      <SectorsSection />
      <InsightsSection />
    </main>
    <Footer />
  </>
);

export default Index;

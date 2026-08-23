import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { sectors, site } from "@/data/siteContent";
import { Download } from "lucide-react";
import transportImg from "@/assets/sector-transport-new.png";
import urbanImg from "@/assets/sector-construction.png";
import socialImg from "@/assets/sector-property.png";
import waterImg from "@/assets/sector-energy.png";
import resourcesImg from "@/assets/sector-resources-new.png";
import defenceImg from "@/assets/sector-government.png";
import ParallaxBackground from "@/components/ParallaxBackground";

const sectorImages: Record<string, string> = {
  infrastructure: transportImg,
  construction: urbanImg,
  "property-development": socialImg,
  "energy-utilities": waterImg,
  "industrial-resources": resourcesImg,
  government: defenceImg,
};

const SectorsPage = () => (
  <>
    <Seo
      title="Sectors"
      path="/sectors"
      description="Advisory expertise across infrastructure, construction, property development, energy, industrial resources and government sectors — Australia and Asia-Pacific."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Sectors | ESSGEE Projects",
        description: "ESSGEE Projects brings advisory and delivery experience across infrastructure, construction, property, energy, industrial, resources and government sectors.",
        url: `${site.url}/sectors`
      }}
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={transportImg} alt="" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Sector Experience</p>
          <h1 className="text-hero text-white">Sectors</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Advisory and delivery experience across key sectors
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="relative overflow-hidden section-light section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 space-y-20 relative z-10">
          {sectors.map((sector, i) => (
            <SectionReveal key={sector.id}>
              <div id={sector.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                <div className={`rounded-xl overflow-hidden aspect-[16/10] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={sectorImages[sector.id]} alt={sector.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-h2 text-slate-navy mb-4">{sector.title}</h2>
                  <p className="text-body-lg text-slate-navy/70 leading-relaxed">{sector.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden section-dark section-padding bg-slate-navy">
        <ParallaxBackground variant="dark" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <SectionReveal>
            <h2 className="text-h2 text-white mb-6">Need Sector-Specific Advisory Support?</h2>
            <p className="text-body-lg text-white/70 mb-10">
              ESSGEE Projects brings practical experience across infrastructure, construction, energy, industrial and government environments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact#connect" className="btn-pop">Discuss Your Opportunity</Link>
              <a href={site.capabilityStatement} download="ESSGEE Capability Statement.pdf" className="btn-outline inline-flex items-center gap-2">
                <Download className="w-4 h-4" />Download Capability Statement
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SectorsPage;

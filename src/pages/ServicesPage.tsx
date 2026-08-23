import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { servicePillars, site } from "@/data/siteContent";
import { Lightbulb, ShieldCheck, Rocket, Briefcase, CheckCircle2 } from "lucide-react";
import capabilitiesHero from "@/assets/capabilities-hero.jpg";
import ParallaxBackground from "@/components/ParallaxBackground";

import strategyImg from "@/assets/strategy_realistic.png";
import governanceImg from "@/assets/governance.jpg";
import developmentImg from "@/assets/project_development.jpg";
import deliveryImg from "@/assets/project_delivery.jpg";

const pillarIcons: Record<string, any> = {
  strategy: Lightbulb,
  governance: ShieldCheck,
  "project-development": Briefcase,
  "project-delivery": Rocket,
};

const pillarColors: Record<string, { bg: string; text: string; border: string }> = {
  strategy: { bg: "bg-deep-azure/10", text: "text-deep-azure", border: "border-deep-azure/20" },
  governance: { bg: "bg-teal-accent/10", text: "text-teal-accent", border: "border-teal-accent/20" },
  "project-development": { bg: "bg-vivid-amber/10", text: "text-vivid-amber", border: "border-vivid-amber/20" },
  "project-delivery": { bg: "bg-deep-azure/10", text: "text-deep-azure", border: "border-deep-azure/20" },
};

const pillarImages: Record<string, string> = {
  strategy: strategyImg,
  governance: governanceImg,
  "project-development": developmentImg,
  "project-delivery": deliveryImg,
};

const ServicesPage = () => (
  <>
    <Seo
      title="Services"
      path="/services"
      description="PMO setup, governance frameworks, project delivery and strategic advisory across infrastructure, construction, energy and government sectors in Australia."
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "Service",
          provider: {
            "@type": "Organization",
            "@id": "https://www.essgee.pro/#organization",
            name: "ESSGEE Projects",
            url: site.url
          },
          name: "Strategy, Governance & Delivery Advisory Services",
          description: "ESSGEE Projects provides integrated advisory services across strategy, governance and delivery — supporting organisations in infrastructure, construction, property, energy and government sectors across Australia and Asia-Pacific.",
          url: `${site.url}/services`,
          areaServed: ["Australia", "India", "Asia-Pacific"],
          serviceType: ["Strategic Advisory", "Governance Advisory", "PMO/PfMO", "Project Management", "Program Management", "Portfolio Management", "Delivery Leadership"]
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What advisory services does ESSGEE Projects provide?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ESSGEE Projects provides four integrated service pillars: Strategy (business development, market entry, feasibility studies), Governance (PMO/PfMO establishment, governance frameworks, risk management), Project Development (tender management, bid coordination, procurement planning), and Project Delivery (project management, program management, portfolio management, operational leadership)."
              }
            },
            {
              "@type": "Question",
              name: "What is a PMO and how can ESSGEE Projects help establish one?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A Project Management Office (PMO) or Portfolio Management Office (PfMO) is a centralised function that standardises project governance, improves delivery performance and builds organisational capability. ESSGEE Projects helps organisations design, establish and enhance PMO and PfMO functions tailored to their size, sector and maturity level."
              }
            },
            {
              "@type": "Question",
              name: "Which sectors does ESSGEE Projects work in?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "ESSGEE Projects has experience across infrastructure, construction, property and development, energy and utilities, industrial and resources, and government and public sector organisations across Australia, India and the Asia-Pacific region."
              }
            },
            {
              "@type": "Question",
              name: "Is ESSGEE Projects principal-led?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every engagement at ESSGEE Projects is led directly by Satya Gady, Founder and Principal Consultant (MBA, MGPM, CMgr, CPPM, FIML). Clients receive direct access to senior expertise throughout the advisory process, without intermediaries."
              }
            },
            {
              "@type": "Question",
              name: "Does ESSGEE Projects work outside Sydney?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. While based in Sydney, NSW, ESSGEE Projects provides advisory services across Australia and has experience delivering projects in India and across the Asia-Pacific region."
              }
            }
          ]
        }
      ]}
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* @ts-ignore */}
        <img src={capabilitiesHero} alt="" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">What We Do</p>
          <h1 className="text-hero text-white">Our Services</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Integrated advisory across strategy, governance and delivery
          </p>
        </div>
      </section>

      {/* Service Pillars */}
      {servicePillars.map((pillar, idx) => {
        const Icon = pillarIcons[pillar.id];
        const colors = pillarColors[pillar.id];
        const isEven = idx % 2 === 0;

        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`relative overflow-visible ${isEven ? "section-light" : "section-cream"} section-padding scroll-mt-24`}
          >
            <ParallaxBackground variant="light" />
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Image Column (Sticky on Desktop) */}
                <div className={`lg:col-span-5 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:sticky lg:top-28 ${!isEven ? "lg:order-2" : ""}`}>
                  <SectionReveal className="w-full h-full">
                    <img src={pillarImages[pillar.id]} alt={pillar.title} className="w-full h-full object-cover" loading="lazy" />
                  </SectionReveal>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 ${!isEven ? "lg:order-1" : ""}`}>
                  <SectionReveal>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${colors.text}`} strokeWidth={1.5} />
                      </div>
                      <h2 className="text-h2 text-slate-navy">{pillar.title}</h2>
                    </div>
                    <p className="text-body-lg text-slate-navy/70 mb-8 leading-relaxed">
                      {pillar.summary}
                    </p>

                    {/* Simple list for Strategy & Governance */}
                    {pillar.items && (
                      <div className="grid sm:grid-cols-2 gap-3.5">
                        {pillar.items.map((item) => (
                          <div key={item} className="flex items-start gap-3 p-3.5 rounded-lg border border-border/40 bg-white/60 hover:border-slate-navy/20 transition-all duration-300 hover:shadow-sm">
                            <CheckCircle2 className={`w-4.5 h-4.5 ${colors.text} shrink-0 mt-0.5`} strokeWidth={2} />
                            <span className="text-slate-navy/80 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Sub-groups for Delivery */}
                    {pillar.subGroups && (
                      <div className="space-y-8">
                        {pillar.subGroups.map((group) => (
                          <div key={group.title}>
                            <h3 className="text-lg font-display font-bold text-slate-navy mb-4 border-l-4 border-vivid-amber pl-3">
                              {group.title}
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-3.5">
                              {group.items.map((item) => (
                                <div key={item} className="flex items-start gap-3 p-3.5 rounded-lg border border-border/40 bg-white/60 hover:border-slate-navy/20 transition-all duration-300 hover:shadow-sm">
                                  <CheckCircle2 className={`w-4.5 h-4.5 ${colors.text} shrink-0 mt-0.5`} strokeWidth={2} />
                                  <span className="text-slate-navy/80 text-sm font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </SectionReveal>
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-dark section-padding bg-slate-navy">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <SectionReveal>
            <h2 className="text-h2 text-white mb-6">Need Strategic, Governance or Delivery Support?</h2>
            <p className="text-body-lg text-white/70 mb-10">
              ESSGEE Projects provides practical advisory support tailored to your organisation's needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact#connect" className="btn-pop">Discuss Your Opportunity</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ServicesPage;

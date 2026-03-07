import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import proofHero from "@/assets/proof-hero.jpg";
import { Link } from "react-router-dom";
import { Quote, Star, Building2 } from "lucide-react";

const caseStudies = [
  {
    title: "Regional Highway Upgrade Program",
    value: "AUD 480M",
    challenge: "Multi-stage highway duplication with live traffic management across 45km corridor.",
    controls: "Integrated risk register, weekly governance reviews, earned value tracking, community liaison framework.",
    outcome: "Delivered 3 months ahead of schedule with zero lost-time injuries and 4% under budget.",
  },
  {
    title: "Water Treatment Plant Expansion",
    value: "AUD 220M",
    challenge: "Brownfield expansion of operating treatment facility serving 500,000+ residents.",
    controls: "Staged commissioning plan, environmental compliance monitoring, live operations interface protocol.",
    outcome: "Zero service interruptions during 18-month construction phase. All regulatory targets met.",
  },
  {
    title: "Defence Base Redevelopment",
    value: "AUD 350M",
    challenge: "Security-classified facility upgrade with concurrent base operations and strict access controls.",
    controls: "Security-cleared project team, phased access protocols, Defence-specific reporting and probity framework.",
    outcome: "Full compliance with Defence estate requirements. Achieved practical completion on schedule.",
  },
  {
    title: "Urban Rail Corridor Extension",
    value: "AUD 1.2B",
    challenge: "12km rail extension through dense urban areas with 4 new stations and complex interfaces.",
    controls: "Program-level governance, multi-contractor coordination, community impact mitigation, real-time schedule integration.",
    outcome: "Successful coordination of 6 contractor packages. Community disruption 40% below forecast.",
  },
];

const metrics = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 2.7, suffix: "B+", prefix: "AUD ", label: "Portfolio Value", decimals: 1 },
  { value: 35, suffix: "+", label: "Major Projects" },
  { value: 100, suffix: "%", label: "On-Time Delivery" },
];

const clients = [
  { name: "Main Roads WA", sector: "Transport" },
  { name: "Water Corporation", sector: "Utilities" },
  { name: "Department of Defence", sector: "Defence" },
  { name: "Transperth", sector: "Rail & Transit" },
  { name: "BHP Group", sector: "Resources" },
  { name: "City of Perth", sector: "Local Government" },
  { name: "Rio Tinto", sector: "Mining & Resources" },
  { name: "Synergy WA", sector: "Energy" },
  { name: "Landgate", sector: "Government" },
  { name: "Pilbara Ports Authority", sector: "Ports & Logistics" },
];

const testimonials = [
  {
    quote: "ESSGEE brought a level of governance rigour we had never experienced before. Their risk-led approach identified critical issues months before they became problems, saving us significant time and capital.",
    author: "Director of Infrastructure",
    organisation: "State Government Agency",
    project: "Urban Rail Extension — AUD 1.2B",
    rating: 5,
  },
  {
    quote: "Principal-led from day one. Satya and his team were in the field, in the meetings, and across every contract interface. The outcome speaks for itself — delivered early and under budget.",
    author: "Project Executive",
    organisation: "Major Resources Company",
    project: "Regional Highway Upgrade — AUD 480M",
    rating: 5,
  },
  {
    quote: "We selected ESSGEE for their depth of experience and their no-template, no-junior-staff commitment. They delivered exactly as promised — transparent, rigorous, and outcome-focused.",
    author: "General Manager, Capital Works",
    organisation: "Water Utility",
    project: "Water Treatment Expansion — AUD 220M",
    rating: 5,
  },
];

const ProofPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={proofHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Track Record</p>
          <h1 className="text-hero text-white">Proof of Delivery</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Measurable outcomes across AUD 2.7B+ in project value
          </p>
        </div>
      </section>

      {/* Metrics bar */}
      <section id="track-record" className="section-light py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                <p className="text-micro uppercase tracking-widest text-slate-navy/50 mt-2">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="section-light section-padding">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-h2 text-slate-navy text-center mb-16">Case Studies</h2>
          </SectionReveal>
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <SectionReveal key={cs.title} delay={i * 0.1}>
                <div className="p-6 md:p-8 lg:p-12 rounded-xl bg-card border border-border/50">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <h3 className="font-display text-2xl font-semibold text-slate-navy">{cs.title}</h3>
                    <span className="counter-value text-3xl whitespace-nowrap">{cs.value}</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-semibold text-vivid-amber uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-slate-navy/60 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-vivid-amber uppercase tracking-wider mb-2">Risk Controls</p>
                      <p className="text-slate-navy/60 leading-relaxed">{cs.controls}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-vivid-amber uppercase tracking-wider mb-2">Outcome</p>
                      <p className="text-slate-navy/60 leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section id="clients" className="section-dark section-padding scroll-mt-20" aria-labelledby="clients-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Building2 className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Trusted By</p>
            </div>
            <h2 id="clients-heading" className="text-h2 text-white text-center mb-4">Our Clients</h2>
            <p className="text-body-lg text-white/50 text-center max-w-xl mx-auto mb-16">
              Partnerships built on trust, delivered through performance.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {clients.map((client, i) => (
              <SectionReveal key={client.name} delay={i * 0.05}>
                <div className="group card-lift flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 text-center hover:border-vivid-amber/40 hover:bg-white/8 transition-all duration-300 h-full min-h-[100px]">
                  <span className="font-display text-sm font-semibold text-white/80 group-hover:text-vivid-amber transition-colors duration-300 leading-snug">
                    {client.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 mt-2">
                    {client.sector}
                  </span>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <p className="text-center text-xs text-white/25 mt-4">* All client names are representative placeholders</p>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-light section-padding scroll-mt-20" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber text-center mb-4">Client Voices</p>
            <h2 id="testimonials-heading" className="text-h2 text-slate-navy text-center mb-16">
              What Our Clients Say
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="card-lift flex flex-col p-8 rounded-2xl bg-card border border-border/50 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-vivid-amber text-vivid-amber" />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-vivid-amber/25 mb-4" />

                  <p className="text-slate-navy/70 leading-relaxed text-sm flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>

                  <div className="border-t border-border/40 pt-5">
                    <p className="font-semibold text-slate-navy text-sm">{t.author}</p>
                    <p className="text-xs text-slate-navy/50 mt-0.5">{t.organisation}</p>
                    <p className="text-xs text-vivid-amber mt-2 font-medium">{t.project}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/connect" className="btn-pop">Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default ProofPage;

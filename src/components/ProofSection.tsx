import SectionReveal from "./SectionReveal";
import { Link } from "react-router-dom";
import proofImg from "@/assets/proof-hero.jpg";

const caseStudies = [
  {
    title: "Regional Highway Upgrade Program",
    value: "AUD 480M",
    outcome: "Delivered 3 months ahead of schedule with zero lost-time injuries.",
  },
  {
    title: "Water Treatment Plant Expansion",
    value: "AUD 220M",
    outcome: "Zero service interruptions during 18-month construction phase.",
  },
  {
    title: "Defence Base Redevelopment",
    value: "AUD 350M",
    outcome: "Full compliance with Defence estate requirements. On schedule.",
  },
  {
    title: "Urban Rail Corridor Extension",
    value: "AUD 1.2B",
    outcome: "Community disruption 40% below forecast across 6 packages.",
  },
];

const ProofSection = () => (
  <section id="proof" className="section-light section-padding" aria-labelledby="proof-heading">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <SectionReveal>
          <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">Track Record</p>
          <h2 id="proof-heading" className="text-h2 text-slate-navy mb-6">
            Proof of Delivery
          </h2>
          <p className="text-body-lg text-slate-navy/70 mb-8">
            Our track record speaks through measurable outcomes — projects delivered on time, under budget, and with zero safety incidents across a AUD 2.7B+ portfolio.
          </p>
          <Link to="/proof" className="btn-cta">View All Case Studies</Link>
        </SectionReveal>
        <SectionReveal delay={0.15}>
          <div className="rounded-xl overflow-hidden aspect-[16/10]">
            <img src={proofImg} alt="Construction project site" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </SectionReveal>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {caseStudies.map((cs, i) => (
          <SectionReveal key={cs.title} delay={i * 0.08}>
            <Link to="/proof#case-studies" className="card-lift block p-8 rounded-xl bg-card border border-border/50 h-full group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-slate-navy pr-4 group-hover:text-vivid-amber transition-colors">
                  {cs.title}
                </h3>
                <span className="counter-value text-2xl whitespace-nowrap">{cs.value}</span>
              </div>
              <p className="text-sm text-slate-navy/60 leading-relaxed">{cs.outcome}</p>
            </Link>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProofSection;

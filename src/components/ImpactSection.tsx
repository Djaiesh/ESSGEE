import SectionReveal from "./SectionReveal";
import AnimatedCounter from "./AnimatedCounter";
import { Link } from "react-router-dom";

const metrics = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 2.7, suffix: "B+", prefix: "AUD ", label: "Portfolio Value", decimals: 1 },
  { value: 35, suffix: "+", label: "Major Projects" },
  { value: 100, suffix: "%", label: "Principal-Led" },
  { value: 0, suffix: "", label: "Lost Time Injuries", display: "Zero" },
  { value: 12, suffix: "+", label: "Sector Categories" },
];

const ImpactSection = () => (
  <section id="impact" className="section-light section-padding" aria-labelledby="impact-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4 text-center">By the Numbers</p>
        <h2 id="impact-heading" className="text-h2 text-slate-navy text-center mb-16">
          Measurable Impact
        </h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((m, i) => (
          <SectionReveal key={m.label} delay={i * 0.08}>
            <div className="text-center p-8 rounded-lg bg-card border border-border/50">
              {'display' in m && m.display ? (
                <span className="counter-value">{m.display}</span>
              ) : (
                <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              )}
              <p className="text-micro uppercase tracking-widest text-slate-navy/50 mt-3">{m.label}</p>
            </div>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="text-center mt-12">
        <Link to="/connect" className="btn-cta">Discuss Your Project</Link>
      </SectionReveal>
    </div>
  </section>
);

export default ImpactSection;

import { useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";
import { Shield, Target, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";

const differentiators = [
  {
    icon: Shield,
    title: "Risk-Led Governance",
    description: "Every engagement begins with a structured risk assessment framework that identifies and mitigates threats before they materialise.",
  },
  {
    icon: Target,
    title: "Independent Assurance",
    description: "We provide unbiased, principal-led oversight that protects your capital investment and schedule certainty.",
  },
  {
    icon: Eye,
    title: "Executive Transparency",
    description: "Board-ready reporting with clear risk registers, earned-value metrics, and governance dashboards for informed decision-making.",
  },
];

const OriginSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Staggered text reveal for origin content
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".origin-reveal",
    stagger: 0.15,
    y: 30,
  });

  // Stagger reveal for the image wrapper
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".origin-img-reveal",
    stagger: 0,
    y: 40,
  });

  // Stagger for differentiators
  useScrollAnimation({
    triggerRef: cardsRef,
    childrenSelector: ".origin-card-reveal",
    stagger: 0.15,
    y: 40,
  });

  // Parallax for the background image inside the wrapper
  useParallax({
    triggerRef: sectionRef,
    targetRef: imgRef,
    yPercent: 15,
    scale: 1.15,
  });

  return (
    <section ref={sectionRef} id="origin" className="section-light section-padding scroll-mt-20 overflow-hidden" aria-labelledby="origin-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="origin-reveal text-micro uppercase tracking-[0.15em] text-deep-azure mb-4">Our Origin</p>
            <h2 id="origin-heading" className="origin-reveal text-h2 text-slate-navy mb-6">
              Three Decades of Protecting Complex Projects
            </h2>
            <p className="origin-reveal text-body-lg text-slate-navy/70 mb-8">
              Founded by Satya Gady, ESSGEE Projects emerged from a career spanning 30+ years across Australia's most demanding infrastructure and resource sectors. Our philosophy is simple: risk identified early is risk controlled — protecting both capital and community outcomes.
            </p>
            <p className="origin-reveal text-body-lg text-slate-navy/60">
              We operate as an extension of your leadership team, applying structured governance to every phase — from feasibility through commissioning. No templates. No junior resourcing. Principal-led, every time.
            </p>
          </div>

          {/* Image */}
          <div ref={imgWrapperRef} className="origin-img-reveal relative rounded-lg overflow-hidden aspect-[4/3]">
            <img
              ref={imgRef}
              src={aboutBg}
              alt="Executive boardroom representing strategic project oversight"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/40 to-transparent" />
          </div>
        </div>

        {/* Differentiators */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mt-24">
          {differentiators.map((d, i) => (
            <div key={d.title} className="origin-card-reveal card-lift p-8 rounded-lg bg-card border border-border/50">
              <d.icon className="w-10 h-10 text-deep-azure mb-5" strokeWidth={1.5} />
              <h3 className="text-h3 text-slate-navy mb-3">{d.title}</h3>
              <p className="text-slate-navy/60 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;

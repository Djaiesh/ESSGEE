import { useRef, useEffect } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 2.7, suffix: "B+", prefix: "AUD ", label: "Portfolio Value", decimals: 1 },
  { value: 35, suffix: "+", label: "Major Projects" },
  { value: 100, suffix: "%", label: "Principal-Led" },
  { value: 0, suffix: "", label: "Lost Time Injuries", display: "Zero" },
  { value: 12, suffix: "+", label: "Sector Categories" },
];

const ImpactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Stagger reveal for the heading
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".impact-heading",
    stagger: 0.1,
    y: 30,
  });

  // Scale burst for metrics
  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".impact-card");
      
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          ease: "back.out(1.5)", // The "burst" feel
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="impact" className="section-dark section-padding bg-slate-navy" aria-labelledby="impact-heading">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="impact-heading text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">By the Numbers</p>
          <h2 id="impact-heading" className="impact-heading text-h2 text-white">
            Measurable Impact
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div key={m.label} className="impact-card text-center p-8 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
              {'display' in m && m.display ? (
                <span className="counter-value !text-white">{m.display}</span>
              ) : (
                <div className="text-white">
                  <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </div>
              )}
              <p className="text-micro uppercase tracking-widest text-white/50 mt-3">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/connect" className="btn-cta">Discuss Your Project</Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

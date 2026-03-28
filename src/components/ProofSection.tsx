import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import proofImg from "@/assets/proof-hero.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

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

const ProofSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // Text Reveal
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".proof-text",
    stagger: 0.1,
    y: 30,
  });

  // Parallax for image
  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Timeline Scroll Storytelling
  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".timeline-card");

      // 1. Draw the line down as the user scrolls
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // 2. Animate cards in as they come into view
      cards.forEach((card: any, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? 50 : -50, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="proof" className="section-light section-padding overflow-hidden" aria-labelledby="proof-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="proof-text text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">Track Record</p>
            <h2 id="proof-heading" className="proof-text text-h2 text-slate-navy mb-6">
              Proof of Delivery
            </h2>
            <p className="proof-text text-body-lg text-slate-navy/70 mb-8">
              Our track record speaks through measurable outcomes — projects delivered on time, under budget, and with zero safety incidents across a AUD 2.7B+ portfolio.
            </p>
            <div className="proof-text">
              <Link to="/proof" className="btn-cta">View All Case Studies</Link>
            </div>
          </div>
          <div className="proof-text rounded-xl overflow-hidden aspect-[16/10] relative">
            <img ref={imgRef} src={proofImg} alt="Construction project site" className="w-full h-full object-cover scale-[1.15]" loading="lazy" />
          </div>
        </div>

        {/* Timeline Storytelling */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto py-10 my-20">
          {/* Central Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-slate-navy/10 transform md:-translate-x-1/2">
            <div ref={lineRef} className="w-full h-full bg-vivid-amber origin-top scale-y-0 shadow-[0_0_15px_rgba(240,74,0,0.8)]" />
          </div>

          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.title} className={`relative flex items-center md:justify-between w-full ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                
                {/* Connector Dot */}
                <div className="absolute left-[30px] md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-vivid-amber transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(240,74,0,0.5)]" />

                {/* Card */}
                <div className={`timeline-card w-[85%] md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="card-lift p-8 rounded-xl bg-card border border-border/50 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(51,71,91,0.15)] hover:-translate-y-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                      <h3 className="font-display text-xl font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors">
                        {cs.title}
                      </h3>
                      <span className="font-display font-bold text-2xl text-deep-azure whitespace-nowrap">{cs.value}</span>
                    </div>
                    <p className="text-slate-navy/60 leading-relaxed text-left">{cs.outcome}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

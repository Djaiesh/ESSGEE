import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import capImg from "@/assets/cap-hero.png";
import { Lightbulb, ShieldCheck, Rocket, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MagneticButton } from "./MagneticButton";
import { homeServiceCards } from "@/data/siteContent";
import ParallaxBackground from "./ParallaxBackground";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, any> = {
  strategy: Lightbulb,
  governance: ShieldCheck,
  "project-development": Briefcase,
  "project-delivery": Rocket,
};

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".cap-text",
    stagger: 0.1,
    y: 30,
  });

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".cap-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: {
            each: 0.1,
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative section-cream section-padding overflow-hidden" aria-labelledby="cap-heading">
      {/* 3D Parallax Scrolling Background */}
      <ParallaxBackground variant="light" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img ref={imgRef} src={capImg} alt="Professional advisory and project governance" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="cap-text text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">What We Do</p>
            <h2 id="cap-heading" className="cap-text text-h2 text-slate-navy mb-6">
              Our Services
            </h2>
            <p className="cap-text text-body-lg text-slate-navy/70 mb-8">
              ESSGEE Projects provides integrated advisory services across strategy, governance and delivery — helping organisations navigate complexity and achieve sustainable outcomes.
            </p>
            <div className="cap-text">
              <MagneticButton>
                <Link to="/services" className="btn-cta">Explore All Services</Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServiceCards.map((card) => {
            const Icon = iconMap[card.id];
            return (
              <Link key={card.id} to={card.href} className="cap-card group flex flex-col gap-4 p-8 rounded-xl bg-card border border-border/50 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,74,0,0.15)] hover:border-vivid-amber/30 hover:-translate-y-1">
                <Icon
                  className="w-10 h-10 text-vivid-amber shrink-0 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-2xl font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-slate-navy/60 leading-relaxed">{card.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

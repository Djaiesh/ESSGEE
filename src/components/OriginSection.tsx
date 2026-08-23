import { useRef } from "react";
import aboutBg from "@/assets/about_realistic.png";
import { Link } from "react-router-dom";
import { Layers, Compass, Leaf, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import { whyEssgee } from "@/data/siteContent";
import ParallaxBackground from "./ParallaxBackground";

const iconMap = [Layers, Compass, Leaf, BarChart3];

const OriginSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".about-reveal",
    stagger: 0.15,
    y: 30,
  });

  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".about-img-reveal",
    stagger: 0,
    y: 40,
  });

  useScrollAnimation({
    triggerRef: cardsRef,
    childrenSelector: ".about-card-reveal",
    stagger: 0.15,
    y: 40,
  });

  useParallax({
    triggerRef: sectionRef,
    targetRef: imgRef,
    yPercent: 15,
    scale: 1.15,
  });

  return (
    <section ref={sectionRef} id="about" className="relative section-light section-padding scroll-mt-24 overflow-hidden" aria-labelledby="about-heading">
      {/* 3D Parallax Scrolling Background */}
      <ParallaxBackground variant="light" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="about-reveal text-micro uppercase tracking-[0.15em] text-deep-azure mb-4">Who We Are</p>
            <h2 id="about-heading" className="about-reveal text-h2 text-slate-navy mb-6">
              Bridging Strategy, Governance and Delivery
            </h2>
            <p className="about-reveal text-body-lg text-slate-navy/70 mb-8">
              ESSGEE Projects supports organisations throughout the business and project lifecycle, helping bridge the gap between strategic intent and successful delivery.
            </p>
            <p className="about-reveal text-body-lg text-slate-navy/60">
              By combining commercial insight, governance excellence and practical delivery experience, we assist clients in establishing direction, strengthening capability and achieving sustainable outcomes.
            </p>
            <div className="about-reveal mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-cta">Learn More About Us</Link>
              <Link to="/services" className="btn-outline border-slate-navy/30 text-slate-navy hover:bg-slate-navy hover:text-white transition-colors">Explore Our Services</Link>
            </div>
          </div>

          {/* Image */}
          <div ref={imgWrapperRef} className="about-img-reveal relative rounded-lg overflow-hidden aspect-[4/3]">
            <img
              ref={imgRef}
              src={aboutBg}
              alt="Strategic advisory and project governance"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/40 to-transparent" />
          </div>
        </div>

        {/* Why ESSGEE Projects */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {whyEssgee.map((d, i) => {
            const Icon = iconMap[i];
            return (
              <div key={d.title} className="about-card-reveal card-lift p-8 rounded-lg bg-card border border-border/50">
                <Icon className="w-10 h-10 text-deep-azure mb-5" strokeWidth={1.5} />
                <h3 className="text-h3 text-slate-navy mb-3">{d.title}</h3>
                <p className="text-slate-navy/60 leading-relaxed">{d.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OriginSection;

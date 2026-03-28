import { useRef } from "react";
import GlassCarousel from "./GlassCarousel";
import { Link } from "react-router-dom";
import transportImg from "@/assets/sector-transport.jpg";
import waterImg from "@/assets/sector-water.jpg";
import resourcesImg from "@/assets/sector-resources.jpg";
import socialImg from "@/assets/sector-social.jpg";
import defenceImg from "@/assets/sector-defence.jpg";
import railImg from "@/assets/sector-rail.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sectors = [
  { title: "Transport & Roads", image: transportImg, href: "/sectors#transport" },
  { title: "Water & Utilities", image: waterImg, href: "/sectors#water" },
  { title: "Resources & Energy", image: resourcesImg, href: "/sectors#resources" },
  { title: "Social Infrastructure", image: socialImg, href: "/sectors#social" },
  { title: "Defence", image: defenceImg, href: "/sectors#defence" },
  { title: "Urban Rail", image: railImg, href: "/sectors#urban-rail" },
];

const SectorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".sectors-reveal",
    stagger: 0.1,
    y: 30,
  });

  useScrollAnimation({
    triggerRef: carouselRef,
    childrenSelector: ".carousel-reveal",
    stagger: 0.2,
    y: 40,
  });

  return (
    <section ref={sectionRef} id="sectors" className="section-dark section-padding bg-slate-navy overflow-hidden" aria-labelledby="sectors-heading">
      <div className="container mx-auto px-6">
        
        <div className="sectors-reveal">
          <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4 text-center">Sector Experience</p>
          <h2 id="sectors-heading" className="text-h2 text-white text-center mb-16">
            Where We Operate
          </h2>
        </div>

        <div ref={carouselRef} className="carousel-reveal">
          <GlassCarousel>
            {sectors.map((sector) => (
              <Link key={sector.title} to={sector.href} className="group block relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white group-hover:text-vivid-amber transition-colors duration-500">
                    {sector.title}
                  </h3>
                </div>
              </Link>
            ))}
          </GlassCarousel>
        </div>

        <div className="sectors-reveal text-center mt-12">
          <Link to="/sectors" className="btn-outline border-white/30 text-white hover:bg-white hover:text-slate-navy transition-colors">
            View All Sectors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;

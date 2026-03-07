import SectionReveal from "./SectionReveal";
import GlassCarousel from "./GlassCarousel";
import { Link } from "react-router-dom";
import transportImg from "@/assets/sector-transport.jpg";
import waterImg from "@/assets/sector-water.jpg";
import resourcesImg from "@/assets/sector-resources.jpg";
import socialImg from "@/assets/sector-social.jpg";
import defenceImg from "@/assets/sector-defence.jpg";
import railImg from "@/assets/sector-rail.jpg";

const sectors = [
  { title: "Transport & Roads", image: transportImg, href: "/sectors#transport" },
  { title: "Water & Utilities", image: waterImg, href: "/sectors#water" },
  { title: "Resources & Energy", image: resourcesImg, href: "/sectors#resources" },
  { title: "Social Infrastructure", image: socialImg, href: "/sectors#social" },
  { title: "Defence", image: defenceImg, href: "/sectors#defence" },
  { title: "Urban Rail", image: railImg, href: "/sectors#urban-rail" },
];

const SectorsSection = () => (
  <section id="sectors" className="section-dark section-padding" aria-labelledby="sectors-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4 text-center">Sector Experience</p>
        <h2 id="sectors-heading" className="text-h2 text-white text-center mb-16">
          Where We Operate
        </h2>
      </SectionReveal>

      <SectionReveal>
        <GlassCarousel>
          {sectors.map((sector) => (
            <Link key={sector.title} to={sector.href} className="group block relative rounded-xl overflow-hidden aspect-[16/10]">
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/90 via-slate-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-vivid-amber transition-colors duration-300">
                  {sector.title}
                </h3>
              </div>
            </Link>
          ))}
        </GlassCarousel>
      </SectionReveal>

      <SectionReveal className="text-center mt-12">
        <Link to="/sectors" className="btn-outline">View All Sectors</Link>
      </SectionReveal>
    </div>
  </section>
);

export default SectorsSection;

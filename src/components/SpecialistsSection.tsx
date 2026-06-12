import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { specialists } from "@/data/siteContent";
import ParallaxBackground from "./ParallaxBackground";

const UserAvatarPlaceholder = () => (
  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-navy to-slate-navy/80 border-2 border-teal-accent/30 flex items-center justify-center overflow-hidden shrink-0 shadow-md group-hover:border-vivid-amber transition-all duration-500">
    <svg className="w-10 h-10 text-white/35 mt-2 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
  </div>
);

const SpecialistsSection = () => (
  <section className="relative overflow-hidden section-cream section-padding scroll-mt-24" aria-labelledby="specialists-heading">
    <ParallaxBackground variant="light" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Our Team</p>
        <h2 id="specialists-heading" className="text-h2 text-slate-navy mb-5">Specialists. Not Generalists.</h2>
        <p className="text-body-lg text-slate-navy/65 mb-12">Deep discipline expertise across the full project lifecycle - deployed where it matters most.</p>
      </SectionReveal>
      
      <div className="grid md:grid-cols-2 gap-6">
        {specialists.map((specialist, index) => (
          <SectionReveal key={specialist.name} delay={index * 0.06}>
            <motion.article 
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-xl border border-slate-navy/5 bg-white shadow-md hover:shadow-2xl border-l-4 border-l-deep-azure hover:border-l-vivid-amber transition-all duration-500 group h-full"
            >
              <UserAvatarPlaceholder />
              <div>
                <h3 className="text-xl font-display font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors duration-300">{specialist.name}</h3>
                <p className="mb-3 mt-1 font-semibold text-teal-accent text-xs uppercase tracking-wider">{specialist.role}</p>
                <p className="text-sm leading-relaxed text-slate-navy/60">{specialist.description}</p>
              </div>
            </motion.article>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialistsSection;

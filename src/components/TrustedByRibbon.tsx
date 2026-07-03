import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const companies = [
  "Leighton Contractors",
  "UGL",
  "Downer",
  "Transgrid",
  "Ausgrid",
  "Western Power",
  "Origin Energy",
  "AWS",
  "Whittens",
  "M+W Group",
];

const TrustedByRibbon = () => {
  const ribbonRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation({ triggerRef: ribbonRef, childrenSelector: ".trusted-reveal", stagger: 0.05, y: 15 });

  return (
    <section ref={ribbonRef} className="py-12 bg-white border-t border-slate-navy/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="trusted-reveal text-center text-sm font-semibold text-slate-navy/50 uppercase tracking-widest mb-8">
          Experience includes projects with organisations such as
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16 md:gap-y-8 max-w-5xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className="trusted-reveal">
              <span className="text-xl md:text-2xl font-display font-bold text-slate-navy/30 hover:text-slate-navy/80 transition-colors duration-300 cursor-default">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByRibbon;

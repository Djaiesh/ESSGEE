import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { insights } from "@/data/siteContent";
import ParallaxBackground from "./ParallaxBackground";

const InsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({ triggerRef: sectionRef, childrenSelector: ".insights-text", stagger: 0.1, y: 20 });
  useScrollAnimation({ triggerRef: gridRef, childrenSelector: ".insights-card", stagger: 0.08, y: 25 });

  return (
    <section ref={sectionRef} id="insights" className="relative section-light section-padding overflow-hidden" aria-labelledby="insights-heading">
      {/* 3D Parallax Scrolling Background */}
      <ParallaxBackground variant="light" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="insights-text text-micro uppercase tracking-[0.15em] text-teal-accent mb-4">Knowledge</p>
          <h2 id="insights-heading" className="insights-text text-h2 text-slate-navy">Insights</h2>
          <p className="insights-text mt-4 text-body-lg text-slate-navy/60">Perspectives on strategy, governance, project delivery and sustainable outcomes.</p>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {insights.slice(0, 3).map((article) => (
            <article key={article.title} className="insights-card card-lift group p-8 rounded-xl h-full flex flex-col">
              <span className="text-micro uppercase tracking-widest text-teal-accent mb-3">{article.category}</span>
              <h3 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-deep-azure transition-colors">{article.title}</h3>
              <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <span className="text-micro text-slate-navy/40">{article.date}</span>
                <ArrowRight className="w-5 h-5 text-teal-accent transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
        <div className="insights-text text-center mt-12">
          <Link to="/insights" className="btn-cta">View All Insights</Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

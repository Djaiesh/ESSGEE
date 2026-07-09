import { useRef } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { insightArticles } from "@/data/insightArticles";
import ParallaxBackground from "./ParallaxBackground";

const accentColors: Record<string, { text: string; bg: string; border: string }> = {
  azure: { text: "text-deep-azure", bg: "bg-deep-azure/10", border: "border-deep-azure/20" },
  teal: { text: "text-teal-accent", bg: "bg-teal-accent/10", border: "border-teal-accent/20" },
  amber: { text: "text-vivid-amber", bg: "bg-vivid-amber/10", border: "border-vivid-amber/20" },
};

const InsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollAnimation({ triggerRef: sectionRef, childrenSelector: ".insights-text", stagger: 0.1, y: 20 });
  useScrollAnimation({ triggerRef: gridRef, childrenSelector: ".insights-card", stagger: 0.08, y: 25 });

  return (
    <section ref={sectionRef} id="insights" className="relative section-light section-padding overflow-hidden" aria-labelledby="insights-heading">
      <ParallaxBackground variant="light" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="insights-text text-micro uppercase tracking-[0.15em] text-teal-accent mb-4">Knowledge</p>
          <h2 id="insights-heading" className="insights-text text-h2 text-slate-navy">Insights Series</h2>
          <p className="insights-text mt-4 text-body-lg text-slate-navy/60">A thought-leadership perspective on strategy, governance and delivery.</p>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {insightArticles.map((article) => {
            const colors = accentColors[article.accentColor];
            return (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="insights-card group block">
                <article className={`card-lift p-8 rounded-xl h-full flex flex-col border-t-4 ${colors.border}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${colors.bg} border ${colors.border}`}>
                      <BookOpen className={`w-3 h-3 ${colors.text}`} />
                      <span className={`text-[10px] font-bold tracking-widest ${colors.text}`}>ARTICLE {article.number}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-deep-azure transition-colors leading-tight">{article.title}</h3>
                  <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">{article.subtitle}</p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                    <span className="text-micro text-slate-navy/40">{article.readTime}</span>
                    <ArrowRight className={`w-5 h-5 ${colors.text} transition-transform group-hover:translate-x-1`} />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
        <div className="insights-text text-center mt-12">
          <Link to="/insights" className="btn-cta">Explore All Insights</Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;

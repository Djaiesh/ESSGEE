import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    title: "Why Risk Governance Fails on Mega-Projects",
    excerpt: "The patterns behind governance breakdowns and how structured frameworks prevent capital erosion on complex builds.",
    date: "February 2026",
    category: "Governance",
  },
  {
    title: "The Real Cost of Junior Resourcing in Project Controls",
    excerpt: "An analysis of how under-qualified project personnel contribute to schedule overruns and budget blowouts.",
    date: "January 2026",
    category: "Industry",
  },
  {
    title: "Earned Value Management: Beyond the Basics",
    excerpt: "Moving past CPI and SPI — advanced earned value techniques for executive decision-making.",
    date: "December 2025",
    category: "Technical",
  },
];

const InsightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Gentle heading reveal
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".insights-text",
    stagger: 0.1,
    y: 20,
  });

  // Floating, lighter card reveal
  useScrollAnimation({
    triggerRef: gridRef,
    childrenSelector: ".insights-card",
    stagger: 0.08,
    y: 25,
  });

  return (
    <section ref={sectionRef} id="insights" className="section-light section-padding" aria-labelledby="insights-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="insights-text text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">Knowledge</p>
          <h2 id="insights-heading" className="insights-text text-h2 text-slate-navy">
            Insights
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={article.title} className="insights-card">
              <article className="card-lift group p-8 rounded-xl bg-card border border-border/50 h-full flex flex-col transition-all duration-700 hover:shadow-[0_20px_50px_-15px_rgba(51,71,91,0.1)] hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-navy/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <span className="text-micro uppercase tracking-widest text-vivid-amber mb-3">{article.category}</span>
                <h3 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-vivid-amber transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <span className="text-micro text-slate-navy/40">{article.date}</span>
                  <ArrowRight className="w-5 h-5 text-vivid-amber opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2" />
                </div>
              </article>
            </div>
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

import SectionReveal from "./SectionReveal";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const InsightsSection = () => (
  <section id="insights" className="section-light section-padding" aria-labelledby="insights-heading">
    <div className="container mx-auto px-6">
      <SectionReveal>
        <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4 text-center">Knowledge</p>
        <h2 id="insights-heading" className="text-h2 text-slate-navy text-center mb-16">
          Insights
        </h2>
      </SectionReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <SectionReveal key={article.title} delay={i * 0.1}>
            <article className="card-lift group p-8 rounded-lg bg-card border border-border/50 h-full flex flex-col">
              <span className="text-micro uppercase tracking-widest text-vivid-amber mb-3">{article.category}</span>
              <h3 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-vivid-amber transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <span className="text-micro text-slate-navy/40">{article.date}</span>
                <ArrowRight className="w-4 h-4 text-vivid-amber opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </article>
          </SectionReveal>
        ))}
      </div>

      <SectionReveal className="text-center mt-12">
        <Link to="/insights" className="btn-cta">View All Insights</Link>
      </SectionReveal>
    </div>
  </section>
);

export default InsightsSection;

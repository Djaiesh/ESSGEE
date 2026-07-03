import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/siteContent";
import insightsHero from "@/assets/insights_realistic.png";
import ParallaxBackground from "@/components/ParallaxBackground";

const InsightsPage = () => (
  <>
    <Seo title="Insights" path="/insights" description="Perspectives on strategy, governance, PMO/PfMO, project delivery, sustainability and leadership from ESSGEE Projects." />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={insightsHero} alt="" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Knowledge</p>
          <h1 className="text-hero text-white mb-6">Insights</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            Perspectives on strategy, governance, project delivery and sustainable outcomes.
          </p>
        </div>
      </section>

      {/* Grid of articles */}
      <section className="relative overflow-hidden section-light section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {insights.map((article, index) => (
            <SectionReveal key={article.title} delay={index * 0.06}>
              <article className="card-lift group p-8 rounded-xl h-full flex flex-col">
                <div className="flex gap-3 mb-4 text-micro">
                  <span className="uppercase text-teal-accent">{article.category}</span>
                  <span className="text-slate-navy/35">&middot;</span>
                  <span className="text-slate-navy/45">{article.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-deep-azure transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex justify-between mt-6 pt-4 border-t border-border/50">
                  <span className="text-micro text-slate-navy/40">{article.date}</span>
                  <ArrowRight className="w-4 h-4 text-teal-accent" />
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default InsightsPage;

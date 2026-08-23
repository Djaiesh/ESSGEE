import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { ArrowRight, BookOpen } from "lucide-react";
import { insightArticles } from "@/data/insightArticles";
import insightsHero from "@/assets/insights_realistic.png";
import ParallaxBackground from "@/components/ParallaxBackground";
import { site } from "@/data/siteContent";
import { Link } from "react-router-dom";

const accentColors: Record<string, { text: string; bg: string; border: string }> = {
  azure: { text: "text-deep-azure", bg: "bg-deep-azure/10", border: "border-deep-azure/20" },
  teal: { text: "text-teal-accent", bg: "bg-teal-accent/10", border: "border-teal-accent/20" },
  amber: { text: "text-vivid-amber", bg: "bg-vivid-amber/10", border: "border-vivid-amber/20" },
};

const InsightsPage = () => (
  <>
    <Seo
      title="Insights"
      path="/insights"
      description="Expert perspectives on strategy, governance, PMO, project management and sustainable delivery from ESSGEE Projects — Australia's advisory insights series."
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Insights Series | ESSGEE Projects",
        description: "Perspectives on strategy, governance, project delivery and sustainable outcomes.",
        url: `${site.url}/insights`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: insightArticles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${site.url}/insights/${a.slug}`,
            name: a.title
          }))
        }
      }}
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* @ts-ignore */}
        <img src={insightsHero} alt="" className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4">Knowledge</p>
          <h1 className="text-hero text-white mb-6">Insights Series</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            A thought-leadership perspective on strategy, governance and delivery.
          </p>
        </div>
      </section>

      {/* Series intro */}
      <section className="relative overflow-hidden section-dark py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">
              The ESSGEE Insights Arc
            </p>
            <p className="text-xl md:text-2xl font-display text-white/80 leading-relaxed italic">
              "Strategy sets direction, governance builds confidence, and systems turn both into dependable delivery."
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <span className="px-4 py-2 rounded-full bg-deep-azure/10 border border-deep-azure/20 text-xs font-semibold text-deep-azure uppercase tracking-wider">
                01 · Governance
              </span>
              <ArrowRight className="w-4 h-4 text-white/20 self-center" />
              <span className="px-4 py-2 rounded-full bg-teal-accent/10 border border-teal-accent/20 text-xs font-semibold text-teal-accent uppercase tracking-wider">
                02 · Sustainability
              </span>
              <ArrowRight className="w-4 h-4 text-white/20 self-center" />
              <span className="px-4 py-2 rounded-full bg-vivid-amber/10 border border-vivid-amber/20 text-xs font-semibold text-vivid-amber uppercase tracking-wider">
                03 · Systems
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Featured articles */}
      <section className="relative overflow-hidden section-light section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-deep-azure mb-4 text-center">
              Featured Articles
            </p>
            <h2 className="text-h2 text-slate-navy text-center mb-16">
              Explore the Series
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {insightArticles.map((article, index) => {
              const colors = accentColors[article.accentColor];
              return (
                <SectionReveal key={article.slug} delay={index * 0.1}>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="group block h-full"
                  >
                    <article
                      className={`card-lift p-8 rounded-2xl h-full flex flex-col border-t-4 ${colors.border} hover:border-opacity-100 transition-all duration-300`}
                    >
                      {/* Article number badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} border ${colors.border}`}
                        >
                          <BookOpen className={`w-3.5 h-3.5 ${colors.text}`} />
                          <span className={`text-[10px] font-bold tracking-widest ${colors.text}`}>
                            ARTICLE {article.number}
                          </span>
                        </div>
                        <span className="text-micro text-slate-navy/40">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-slate-navy mb-4 group-hover:text-deep-azure transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-sm text-slate-navy/60 leading-relaxed flex-1 mb-6">
                        {article.subtitle}
                      </p>

                      {/* Key topics */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.sections.slice(0, 3).map((s) => (
                          <span
                            key={s.number}
                            className="text-[10px] px-2.5 py-1 rounded-md bg-slate-navy/5 text-slate-navy/50 font-medium"
                          >
                            {s.title}
                          </span>
                        ))}
                      </div>

                      {/* Read CTA */}
                      <div className="flex items-center justify-between pt-5 border-t border-border/50">
                        <span className="text-sm font-semibold text-slate-navy/50 group-hover:text-deep-azure transition-colors">
                          Read Article
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 ${colors.text} group-hover:translate-x-1 transition-transform duration-300`}
                        />
                      </div>
                    </article>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding bg-slate-navy">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <SectionReveal>
            <h2 className="text-h2 text-white mb-6">
              Want to Discuss These Ideas?
            </h2>
            <p className="text-body-lg text-white/70 mb-10">
              ESSGEE Projects provides practical advisory support tailored to your organisation's needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact#connect" className="btn-pop">
                Discuss Your Opportunity
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default InsightsPage;

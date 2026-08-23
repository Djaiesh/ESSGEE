import { useParams, Link } from "react-router-dom";
import { insightArticles } from "@/data/insightArticles";
import type { InsightArticle, ArticleSection } from "@/data/insightArticles";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import ParallaxBackground from "@/components/ParallaxBackground";
import { site } from "@/data/siteContent";
import { ArrowLeft, ArrowRight, BookOpen, Mail, Globe, MapPin } from "lucide-react";

/* ── Accent color utilities ─────────────────────────── */
const accentMap = {
  azure: {
    text: "text-deep-azure",
    bg: "bg-deep-azure/10",
    border: "border-deep-azure/30",
    accent: "text-deep-azure",
    statBg: "bg-deep-azure/5",
    statBorder: "border-deep-azure/20",
  },
  teal: {
    text: "text-teal-accent",
    bg: "bg-teal-accent/10",
    border: "border-teal-accent/30",
    accent: "text-teal-accent",
    statBg: "bg-teal-accent/5",
    statBorder: "border-teal-accent/20",
  },
  amber: {
    text: "text-vivid-amber",
    bg: "bg-vivid-amber/10",
    border: "border-vivid-amber/30",
    accent: "text-vivid-amber",
    statBg: "bg-vivid-amber/5",
    statBorder: "border-vivid-amber/20",
  },
};

/* ── Section renderer ─────────────────────────── */
const RenderSection = ({
  section,
  index,
  colors,
}: {
  section: ArticleSection;
  index: number;
  colors: (typeof accentMap)["azure"];
}) => {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`relative overflow-hidden ${isEven ? "section-light" : "section-cream"} py-16 md:py-24`}
    >
      <ParallaxBackground variant="light" />
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <SectionReveal>
          {/* Section number & label */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`text-xs font-bold tracking-widest ${colors.text} ${colors.bg} px-3 py-1.5 rounded-md`}
            >
              {section.label
                ? `${section.number} · ${section.label}`
                : section.number}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-h2 text-slate-navy mb-6">{section.title}</h2>

          {/* Intro paragraph(s) */}
          {section.intro && (
            <div className="text-body-lg text-slate-navy/70 leading-relaxed mb-8 space-y-4">
              {section.intro.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {/* Points */}
          {section.points && section.points.length > 0 && (
            <div className="grid gap-5 mb-8">
              {section.points.map((point, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border ${colors.border} bg-white/60 hover:shadow-md transition-shadow duration-300`}
                >
                  <h3 className={`font-display font-bold text-lg ${colors.text} mb-2`}>
                    {point.title}
                  </h3>
                  <p className="text-slate-navy/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Maturity levels */}
          {section.maturityLevels && section.maturityLevels.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-navy/40">
                  Growing Maturity →
                </span>
              </div>
              <div className="space-y-4">
                {section.maturityLevels.map((level, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center shrink-0 font-display font-bold text-sm ${colors.text} group-hover:scale-110 transition-transform duration-300`}
                    >
                      {level.code}
                    </div>
                    <div className="flex-1 pb-4 border-b border-border/30">
                      <h4 className="font-display font-bold text-slate-navy mb-1">
                        {level.name}
                      </h4>
                      <p className="text-sm text-slate-navy/60 leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quadrants */}
          {section.quadrants && section.quadrants.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {section.quadrants.map((q, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border ${colors.border} bg-white/60 hover:shadow-md transition-shadow duration-300 text-center`}
                >
                  <h4 className={`font-display font-bold ${colors.text} mb-2`}>
                    {q.title}
                  </h4>
                  <p className="text-sm text-slate-navy/60 leading-relaxed">
                    {q.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Stats */}
          {section.stats && section.stats.length > 0 && (
            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {section.stats.map((stat, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl ${colors.statBg} border ${colors.statBorder} text-center`}
                >
                  <p className={`text-3xl md:text-4xl font-display font-bold ${colors.text} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-navy/70 leading-relaxed mb-2">
                    {stat.description}
                  </p>
                  <p className="text-xs text-slate-navy/40 italic">
                    {stat.source}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Callout items */}
          {section.calloutItems && section.calloutItems.length > 0 && (
            <div className={`border-l-4 ${colors.border} pl-6 my-8 space-y-3`}>
              {section.calloutItems.map((item, i) => (
                <p
                  key={i}
                  className="text-lg font-display text-slate-navy/80 italic leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* Callout */}
          {section.callout && (
            <blockquote
              className={`border-l-4 ${colors.border} ${colors.bg} rounded-r-xl p-6 my-8`}
            >
              <p className="text-lg md:text-xl font-display text-slate-navy/80 italic leading-relaxed">
                {section.callout}
              </p>
            </blockquote>
          )}

          {/* Series arc */}
          {section.seriesArc && section.seriesArc.length > 0 && (
            <div className="my-8 space-y-3">
              {section.seriesArc.map((arc, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-4 rounded-lg border ${colors.border} bg-white/60`}
                >
                  <span
                    className={`text-xs font-bold ${colors.text} ${colors.bg} px-2.5 py-1 rounded`}
                  >
                    {arc.number}
                  </span>
                  <span className="text-sm font-medium text-slate-navy/70">
                    {arc.title}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Contact */}
          {section.contact && section.contact.length > 0 && (
            <div className={`p-6 rounded-xl ${colors.bg} border ${colors.border} my-8`}>
              {section.contact.map((c, i) => (
                <p key={i} className="text-sm text-slate-navy/60 mb-1">
                  <span className="font-semibold text-slate-navy/80">{c.label}:</span>{" "}
                  {c.detail}
                </p>
              ))}
            </div>
          )}

          {/* Closing note */}
          {section.closingNote && (
            <p className="text-body-lg text-slate-navy/70 leading-relaxed mt-6">
              {section.closingNote}
            </p>
          )}

          {/* Footnote */}
          {section.footnote && (
            <p className="text-xs text-slate-navy/40 mt-6 pt-4 border-t border-border/30 leading-relaxed">
              {section.footnote}
            </p>
          )}
        </SectionReveal>
      </div>
    </section>
  );
};

/* ── Main article page ────────────────────────────── */
const InsightArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = insightArticles.find((a) => a.slug === slug);
  const currentIndex = insightArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? insightArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < insightArticles.length - 1
      ? insightArticles[currentIndex + 1]
      : null;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-navy">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Article Not Found
          </h1>
          <Link
            to="/insights"
            className="text-teal-accent hover:text-white transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const colors = accentMap[article.accentColor];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.subtitle,
    author: {
      "@type": "Person",
      "@id": "https://www.essgee.pro/founder#person",
      name: article.author,
      jobTitle: article.authorRole || "Founder & Principal Consultant",
      url: `${site.url}/founder`,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.essgee.pro/#organization",
      name: "ESSGEE Projects",
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}${site.socialImage}` },
    },
    url: `${site.url}/insights/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: `${site.url}/insights/${article.slug}`,
    image: `${site.url}${site.socialImage}`,
    articleSection: "Insights",
    keywords: article.keywords,
  };

  return (
    <>
      <Seo
        title={article.title}
        path={`/insights/${article.slug}`}
        description={article.subtitle}
        type="article"
        publishedTime={article.datePublished}
        articleAuthor={article.author}
        jsonLd={articleJsonLd}
      />
      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-navy">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-navy via-slate-navy/95 to-slate-navy" />
          <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
            <SectionReveal>
              {/* Series label */}
              <p className={`text-micro uppercase tracking-[0.25em] ${colors.text} mb-4`}>
                {article.seriesLabel}
              </p>

              {/* Article number */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} mb-8`}
              >
                <BookOpen className={`w-4 h-4 ${colors.text}`} />
                <span className={`text-xs font-bold tracking-widest ${colors.text}`}>
                  ARTICLE {article.number} · {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-hero text-white mb-6">{article.title}</h1>

              {/* Subtitle */}
              <p className="text-body-lg text-white/70 max-w-3xl mx-auto mb-8">
                {article.subtitle}
              </p>

              {/* Author info */}
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm font-semibold text-white/90">
                  {article.author}
                </p>
                <p className="text-xs text-white/50">{article.credentials}</p>
                {article.authorRole && (
                  <p className="text-xs text-white/40">{article.authorRole}</p>
                )}
              </div>

              {/* Cover stats */}
              {article.coverStats && article.coverStats.length > 0 && (
                <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/10">
                  {article.coverStats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className={`text-2xl font-display font-bold ${colors.text}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tagline */}
              {article.tagline && (
                <p className="text-xs text-white/30 mt-8 italic">
                  {article.tagline}
                </p>
              )}
            </SectionReveal>
          </div>
        </section>

        {/* ── Content sections ──────────────────────── */}
        {article.sections.map((section, index) => (
          <RenderSection
            key={section.number + section.title}
            section={section}
            index={index}
            colors={colors}
          />
        ))}

        {/* ── References ──────────────────────────── */}
        <section className="section-dark py-16 border-t border-white/5">
          <div className="container mx-auto px-6 max-w-4xl">
            <SectionReveal>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-8">
                References & Further Reading
              </p>
              <div className="space-y-4">
                {article.references.map((ref) => (
                  <div
                    key={ref.number}
                    className="flex items-start gap-4 text-sm"
                  >
                    <span className={`text-xs font-bold ${colors.text} ${colors.bg} px-2 py-1 rounded shrink-0`}>
                      {ref.number}
                    </span>
                    <p className="text-white/50 leading-relaxed">{ref.text}</p>
                  </div>
                ))}
              </div>

              {/* Further reading */}
              {article.furtherReading && article.furtherReading.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/30 mb-3 font-semibold uppercase tracking-wider">
                    Further Reading
                  </p>
                  {article.furtherReading.map((fr, i) => (
                    <p key={i} className="text-sm text-white/40 leading-relaxed">
                      {fr}
                    </p>
                  ))}
                </div>
              )}

              {/* Disclaimer */}
              {article.disclaimer && (
                <p className="mt-6 text-xs text-white/25 italic leading-relaxed">
                  {article.disclaimer}
                </p>
              )}
            </SectionReveal>
          </div>
        </section>

        {/* ── Article navigation ──────────────────── */}
        <section className="section-dark py-12 border-t border-white/10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              {prevArticle ? (
                <Link
                  to={`/insights/${prevArticle.slug}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">
                      Previous Article
                    </p>
                    <p className="text-sm font-medium">{prevArticle.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  to={`/insights/${nextArticle.slug}`}
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group text-right sm:ml-auto"
                >
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider">
                      Next Article
                    </p>
                    <p className="text-sm font-medium">{nextArticle.title}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className="section-dark py-16 bg-slate-navy border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <SectionReveal>
              <h2 className="text-h2 text-white mb-6">
                Ready to Put These Ideas Into Practice?
              </h2>
              <p className="text-body-lg text-white/70 mb-10">
                ESSGEE Projects helps organisations bridge strategy, governance
                and delivery to achieve sustainable outcomes.
              </p>
              <Link to="/contact#connect" className="btn-pop">
                Discuss Your Opportunity
              </Link>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InsightArticlePage;

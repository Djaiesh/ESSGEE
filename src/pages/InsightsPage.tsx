import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Why Risk Governance Fails on Mega-Projects",
    excerpt: "The patterns behind governance breakdowns and how structured frameworks prevent capital erosion on complex builds.",
    date: "February 2026",
    category: "Governance",
    readTime: "8 min read",
  },
  {
    title: "The Real Cost of Junior Resourcing in Project Controls",
    excerpt: "An analysis of how under-qualified project personnel contribute to schedule overruns and budget blowouts.",
    date: "January 2026",
    category: "Industry",
    readTime: "6 min read",
  },
  {
    title: "Earned Value Management: Beyond the Basics",
    excerpt: "Moving past CPI and SPI — advanced earned value techniques for executive decision-making on infrastructure programs.",
    date: "December 2025",
    category: "Technical",
    readTime: "10 min read",
  },
  {
    title: "Contract Risk in Alliance Models",
    excerpt: "How alliancing frameworks distribute risk and why independent oversight remains essential for government sponsors.",
    date: "November 2025",
    category: "Contracts",
    readTime: "7 min read",
  },
  {
    title: "Lessons from a Billion-Dollar Rail Program",
    excerpt: "Key governance lessons from managing one of Australia's largest urban rail extension programs.",
    date: "October 2025",
    category: "Case Study",
    readTime: "12 min read",
  },
  {
    title: "The Principal's Role in Project Governance",
    excerpt: "Why senior-led project management consulting delivers fundamentally different outcomes from team-based resourcing models.",
    date: "September 2025",
    category: "Leadership",
    readTime: "5 min read",
  },
];

const InsightsPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero — 30% Slate Navy */}
      <section className="section-dark py-32 md:py-40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Knowledge</p>
          <h1 className="text-hero text-white mb-6">Insights</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
            Perspectives on risk, governance, and project delivery from 30+ years of experience.
          </p>
        </div>
      </section>

      {/* Articles — 60% Main Space */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <SectionReveal key={article.title} delay={i * 0.08}>
                <article className="card-lift group p-8 rounded-xl bg-card border border-border/50 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-micro uppercase tracking-widest text-deep-azure">{article.category}</span>
                    <span className="text-micro text-slate-navy/30">·</span>
                    <span className="text-micro text-slate-navy/40">{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-slate-navy mb-3 group-hover:text-deep-azure transition-colors duration-300">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-navy/60 leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                    <span className="text-micro text-slate-navy/40">{article.date}</span>
                    <ArrowRight className="w-4 h-4 text-deep-azure opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default InsightsPage;

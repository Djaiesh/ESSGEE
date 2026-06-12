import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { approach, values } from "@/data/siteContent";
import { Download, Search, ClipboardCheck, Compass, Cog, RefreshCw, Heart, Handshake, Wrench, Leaf } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import ParallaxBackground from "@/components/ParallaxBackground";

const approachIcons = [Search, ClipboardCheck, Compass, Cog, RefreshCw];
const valueIcons = [Heart, Handshake, Wrench, Leaf];

const AboutPage = () => (
  <>
    <Seo title="About" path="/about" description="ESSGEE Projects was established to help organisations bridge the gap between strategy, governance and delivery. Learn about our story, purpose, approach and values." />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={aboutBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">About Us</p>
          <h1 className="text-hero text-white">About ESSGEE Projects</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Bridging Strategy, Governance and Delivery
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative overflow-hidden section-light section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-deep-azure mb-4 text-center">Our Story</p>
            <h2 className="text-h2 text-slate-navy text-center mb-8">Why ESSGEE Projects Exists</h2>
            <div className="space-y-6 text-body-lg text-slate-navy/70 leading-relaxed">
              <p>ESSGEE Projects was established to help organisations bridge the gap between strategy, governance and delivery.</p>
              <p>Many organisations identify opportunities and develop ambitious plans, yet struggle to convert those plans into sustainable outcomes. Effective delivery requires more than intent. It requires structured governance, capable systems, disciplined planning and practical execution.</p>
              <p>ESSGEE Projects supports organisations in navigating this journey by aligning strategy, governance and delivery to achieve measurable and sustainable results.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="relative overflow-hidden section-dark py-20">
        <ParallaxBackground variant="dark" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Our Purpose</p>
            <h2 className="text-h2 text-white mb-8">Our Mission</h2>
            <p className="text-2xl md:text-3xl font-display text-white/80 leading-relaxed italic">
              "To help organisations navigate complexity, realise opportunities and achieve sustainable business and project outcomes."
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden section-cream section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-deep-azure mb-4 text-center">Our Approach</p>
            <h2 className="text-h2 text-slate-navy text-center mb-16">How We Work</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {approach.map((item, i) => {
              const Icon = approachIcons[i];
              return (
                <SectionReveal key={item.step} delay={i * 0.08}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-deep-azure/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-deep-azure/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-deep-azure" strokeWidth={1.5} />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-vivid-amber mb-2">Step {i + 1}</div>
                    <h3 className="text-xl font-display font-semibold text-slate-navy mb-3">{item.step}</h3>
                    <p className="text-sm text-slate-navy/60 leading-relaxed">{item.description}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative overflow-hidden section-light section-padding">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <p className="text-micro uppercase tracking-[0.2em] text-teal-accent mb-4 text-center">Our Values</p>
            <h2 className="text-h2 text-slate-navy text-center mb-16">What Guides Us</h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <SectionReveal key={value.title} delay={i * 0.08}>
                  <div className="card-lift p-8 rounded-xl bg-white border border-border/50 h-full group hover:border-teal-accent/30">
                    <Icon className="w-10 h-10 text-teal-accent mb-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <h3 className="text-xl font-display font-semibold text-slate-navy mb-3 group-hover:text-teal-accent transition-colors duration-300">{value.title}</h3>
                    <p className="text-slate-navy/60 leading-relaxed">{value.description}</p>
                  </div>
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
            <h2 className="text-h2 text-white mb-6">Ready to Bridge Strategy and Delivery?</h2>
            <p className="text-body-lg text-white/70 mb-10">
              ESSGEE Projects helps organisations navigate complexity and achieve sustainable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact#connect" className="btn-pop">Discuss Your Opportunity</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;

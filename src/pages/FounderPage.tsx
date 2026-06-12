import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { Linkedin, Mail, Award, Download } from "lucide-react";
import satyaImg from "@/assets/satya.jpeg";
import { leadershipDetails, site } from "@/data/siteContent";
import connectHero from "@/assets/connect-hero.jpg";
import SpecialistsSection from "@/components/SpecialistsSection";
import ParallaxBackground from "@/components/ParallaxBackground";

const FounderPage = () => (
  <>
    <Seo
      title="Founder"
      path="/founder"
      description="Satya Gady, MBA, MGPM — Founder & Principal Consultant at ESSGEE Projects. Over 30 years of experience across infrastructure, construction, property, energy and major projects."
    />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={connectHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">Leadership</p>
          <h1 className="text-hero text-white">Our Founder</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Experience-backed leadership driving sustainable outcomes
          </p>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="relative overflow-hidden section-light pt-20 pb-20" aria-labelledby="founder-heading">
        <ParallaxBackground variant="light" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Award className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Our Founder</p>
            </div>
            <h2 id="founder-heading" className="text-h2 text-slate-navy text-center mb-14">
              {leadershipDetails.name}, {leadershipDetails.postnominals}
            </h2>
          </SectionReveal>

          <SectionReveal>
            <div className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-border/50 shadow-[0_12px_48px_-12px_hsla(210,28%,28%,0.14)]">
              {/* LEFT: Photo */}
              <div className="lg:col-span-2 relative h-[350px] sm:h-[450px] lg:h-auto lg:min-h-[580px] overflow-hidden bg-[#fafafc] border-b lg:border-b-0 lg:border-r border-border/10">
                <img
                  src={satyaImg}
                  alt={`${leadershipDetails.name} - ${leadershipDetails.title}`}
                  className="w-full h-full object-cover object-[center_12%] scale-[1.03]"
                />
              </div>

              {/* RIGHT: Bio & Credentials */}
              <div className="lg:col-span-3 bg-white p-7 md:p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="font-display text-3xl font-bold text-slate-navy leading-tight mb-1">
                  {leadershipDetails.name}
                </h3>
                <p className="text-vivid-amber font-semibold text-sm uppercase tracking-widest mb-2">
                  {leadershipDetails.title}
                </p>
                <p className="text-deep-azure font-semibold text-sm mb-6">
                  {leadershipDetails.badges}
                </p>

                <p className="text-slate-navy/75 leading-relaxed mb-4">{leadershipDetails.bio}</p>
                <p className="text-slate-navy/65 leading-relaxed mb-4">{leadershipDetails.bioExtended}</p>
                <p className="text-slate-navy/65 leading-relaxed mb-8">{leadershipDetails.bioMission}</p>

                {/* Qualifications */}
                <div className="mb-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/40 mb-3">
                    Qualifications & Professional Standing
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leadershipDetails.credentials.map(c => (
                      <span key={c} className="text-xs px-3.5 py-1.5 rounded-sm border border-teal-accent/25 bg-teal-accent/5 text-teal-accent font-medium tracking-wide">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capability Statement */}
                <div className="mb-8 pt-6 border-t border-border/40">
                  <a
                    href={site.capabilityStatement}
                    download="ESSGEE Capability Statement.pdf"
                    className="btn-pop inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" strokeWidth={2.5} />
                    Download Capability Statement
                  </a>
                </div>

                {/* Contact links */}
                <div className="flex flex-wrap gap-6 pt-6 border-t border-border/40">
                  <a
                    href={`mailto:${leadershipDetails.email}`}
                    className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    {leadershipDetails.email}
                  </a>
                  <a
                    href={leadershipDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Team Details */}
      <SpecialistsSection />

      {/* CTA */}
      <section className="relative overflow-hidden section-dark section-padding bg-slate-navy">
        <ParallaxBackground variant="dark" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <SectionReveal>
            <h2 className="text-h2 text-white mb-6">Work With Us</h2>
            <p className="text-body-lg text-white/70 mb-10">
              Whether you are pursuing growth, strengthening governance or delivering a major initiative, ESSGEE Projects can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact#connect" className="btn-pop">Discuss Your Opportunity</Link>
              <Link to="/services" className="btn-outline">View Our Services</Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default FounderPage;

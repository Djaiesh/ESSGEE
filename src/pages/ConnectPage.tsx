import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import connectHero from "@/assets/connect-hero.jpg";
import SectionReveal from "@/components/SectionReveal";
import { Linkedin, Mail, Award, Users } from "lucide-react";

const leadership = [
  {
    name: "Satya Gady",
    title: "Principal & Director",
    email: "satya@essgeeprojects.com.au",
    linkedin: "https://linkedin.com",
    bio: "30+ years of principal-led project delivery across infrastructure, defence, and resources. Satya founded ESSGEE on the belief that governance and risk management are the cornerstones of successful project outcomes.",
    credentials: ["PMP Certified", "CPEng", "MAIPM", "B.Eng (Civil)"],
  },
];

const team = [
  {
    name: "Jordan Kaur",
    title: "Risk & Governance Manager",
    expertise: "Integrated risk registers, governance frameworks, programme assurance.",
  },
  {
    name: "Daniel Cho",
    title: "Cost & Schedule Lead",
    expertise: "Earned Value Management, cost forecasting, P6 scheduling, contract variations.",
  },
  {
    name: "Priya Nair",
    title: "Contract Administrator",
    expertise: "NEC3/4, AS4000 contracts, dispute avoidance, procurement advisory.",
  },
  {
    name: "Tom Walsh",
    title: "Stakeholder & Community Advisor",
    expertise: "Community engagement, communications strategy, government liaison.",
  },
];

const ConnectPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={connectHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-hero text-white">Let's Talk</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Begin a confidential discussion about your next infrastructure challenge
          </p>
        </div>
      </section>


      {/* Leadership */}
      <section id="leadership" className="section-light section-padding scroll-mt-20" aria-labelledby="leadership-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Award className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Our Leadership</p>
            </div>
            <h2 id="leadership-heading" className="text-h2 text-slate-navy text-center mb-14">
              Principal-Led. Every Engagement.
            </h2>
          </SectionReveal>

          {leadership.map((person) => (
            <SectionReveal key={person.name}>
              <div className="grid lg:grid-cols-5 rounded-2xl overflow-hidden border border-border/50 shadow-[0_12px_48px_-12px_hsla(210,28%,28%,0.14)]">

                {/* ── LEFT: Photo placeholder ── */}
                <div
                  className="lg:col-span-2 relative min-h-[280px] lg:min-h-[540px] flex flex-col items-center justify-center gap-4"
                  style={{ background: "linear-gradient(155deg, hsl(210,28%,20%) 0%, hsl(210,28%,30%) 100%)" }}
                >
                  {/* Corner accents */}
                  <span className="absolute top-5 left-5 w-7 h-7 border-t-2 border-l-2 border-vivid-amber/40 rounded-tl-sm" />
                  <span className="absolute top-5 right-5 w-7 h-7 border-t-2 border-r-2 border-vivid-amber/40 rounded-tr-sm" />
                  <span className="absolute bottom-5 left-5 w-7 h-7 border-b-2 border-l-2 border-vivid-amber/40 rounded-bl-sm" />
                  <span className="absolute bottom-5 right-5 w-7 h-7 border-b-2 border-r-2 border-vivid-amber/40 rounded-br-sm" />

                  {/* Monogram circle */}
                  <div className="w-36 h-36 rounded-full border-[3px] border-vivid-amber/25 bg-white/5 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold" style={{ color: "hsl(19,100%,47%)" }}>
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">Photo Placeholder</p>

                  {/* Bottom amber accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: "linear-gradient(to right, transparent, hsl(19,100%,47%), transparent)" }} />
                </div>

                {/* ── RIGHT: Bio content ── */}
                <div className="lg:col-span-3 bg-white p-7 md:p-10 lg:p-14 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-bold text-slate-navy leading-tight mb-1">
                    {person.name}
                  </h3>
                  <p className="text-vivid-amber font-semibold text-sm uppercase tracking-widest mb-7">
                    {person.title}
                  </p>

                  <p className="text-slate-navy/65 leading-relaxed mb-5">{person.bio}</p>
                  <p className="text-sm text-slate-navy/50 leading-relaxed mb-8">
                    With a career spanning major public and private sector programs across transport, water,
                    resources, and defence, Satya's methodology is built on the principle that risk governance
                    must start before the first contract is signed. His direct involvement ensures clients receive
                    senior insight at every critical decision point — not a report from a junior analyst.
                  </p>

                  {/* Credentials */}
                  <div className="mb-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-navy/30 mb-3">
                      Qualifications &amp; Memberships
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {person.credentials.map(c => (
                        <span key={c} className="text-xs px-3 py-1.5 rounded-full border border-slate-navy/12 bg-slate-navy/5 text-slate-navy/65 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact links */}
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-border/40">
                    <a
                      href={`mailto:${person.email}`}
                      className="group flex items-center gap-2 text-sm text-slate-navy/50 hover:text-vivid-amber transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      {person.email}
                    </a>
                    <a
                      href={person.linkedin}
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
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-light section-padding scroll-mt-20" aria-labelledby="team-heading">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="flex items-center gap-3 justify-center mb-4">
              <Users className="w-5 h-5 text-vivid-amber" />
              <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Our Team</p>
            </div>
            <h2 id="team-heading" className="text-h2 text-slate-navy text-center mb-4">
              Specialists. Not Generalists.
            </h2>
            <p className="text-body-lg text-slate-navy/60 text-center max-w-2xl mx-auto mb-16">
              Our team brings deep discipline-specific expertise across the full project lifecycle.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.08}>
                <div className="card-lift p-6 rounded-xl border border-border/50 bg-card h-full hover:border-vivid-amber/40 hover:shadow-[0_8px_30px_-8px_hsla(19,100%,47%,0.12)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-navy to-slate-navy/70 flex items-center justify-center mb-4">
                    <span className="font-display text-lg font-bold text-vivid-amber">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-slate-navy mb-1">{member.name}</h3>
                  <p className="text-vivid-amber text-xs font-semibold uppercase tracking-wide mb-3">{member.title}</p>
                  <p className="text-sm text-slate-navy/55 leading-relaxed">{member.expertise}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Discussion — always last */}
      <ConnectSection />
    </main>
    <Footer />
  </>
);

export default ConnectPage;

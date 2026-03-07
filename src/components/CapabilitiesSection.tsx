import SectionReveal from "./SectionReveal";
import { Link } from "react-router-dom";
import capImg from "@/assets/capabilities-hero.jpg";
import {
  Briefcase, ClipboardCheck, BarChart3, Users, AlertTriangle,
  FileText, Settings, HardHat
} from "lucide-react";

const capabilities = [
  { icon: Briefcase, title: "Project Management", href: "/capabilities#project-management" },
  { icon: AlertTriangle, title: "Risk & Governance", href: "/capabilities#risk-governance" },
  { icon: ClipboardCheck, title: "Contract Administration", href: "/capabilities#contract-admin" },
  { icon: BarChart3, title: "Cost & Schedule Control", href: "/capabilities#cost-schedule" },
  { icon: Users, title: "Stakeholder Management", href: "/capabilities#stakeholder-management" },
  { icon: FileText, title: "Procurement Advisory", href: "/capabilities#procurement" },
  { icon: Settings, title: "Program Delivery", href: "/capabilities#program-delivery" },
  { icon: HardHat, title: "Construction Oversight", href: "/capabilities#construction-oversight" },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="section-light section-padding" aria-labelledby="cap-heading">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
        <SectionReveal delay={0.1}>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img src={capImg} alt="Professional project management team reviewing plans" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </SectionReveal>
        <SectionReveal>
          <p className="text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">What We Do</p>
          <h2 id="cap-heading" className="text-h2 text-slate-navy mb-6">
            Capabilities
          </h2>
          <p className="text-body-lg text-slate-navy/70 mb-8">
            Full-spectrum project management consulting, from feasibility through commissioning. Every engagement is principal-led — no junior resourcing, no templates.
          </p>
          <Link to="/capabilities" className="btn-cta">Explore All Services</Link>
        </SectionReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {capabilities.map((cap, i) => (
          <SectionReveal key={cap.title} delay={i * 0.05}>
            <Link to={cap.href} className="card-lift group flex items-center gap-4 p-5 rounded-lg bg-card border border-border/50 h-full">
              <cap.icon
                className="w-8 h-8 text-vivid-amber shrink-0 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-base font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors duration-300">
                {cap.title}
              </h3>
            </Link>
          </SectionReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;

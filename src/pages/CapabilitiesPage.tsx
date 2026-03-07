import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import capabilitiesHero from "@/assets/capabilities-hero.jpg";
import {
  Briefcase, ClipboardCheck, BarChart3, Users, AlertTriangle,
  FileText, Settings, HardHat
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  { id: "project-management", icon: Briefcase, title: "Project Management", description: "Full-lifecycle project delivery from initiation through close-out, ensuring scope, cost and schedule alignment.", detail: "We provide end-to-end project management services covering feasibility, planning, procurement, construction oversight and commissioning. Our approach is tailored to each project's complexity and risk profile, ensuring your investment is protected at every stage." },
  { id: "risk-governance", icon: AlertTriangle, title: "Risk & Governance", description: "Structured risk frameworks, governance reviews, and independent assurance for capital projects.", detail: "Our risk governance methodology is built on decades of experience across high-value infrastructure. We establish structured risk registers, conduct regular governance reviews, and provide independent assurance that gives boards and executives confidence in project outcomes." },
  { id: "contract-admin", icon: ClipboardCheck, title: "Contract Administration", description: "Expert contract management across AS2124, AS4000, NEC and GC21 frameworks.", detail: "We manage complex contractual arrangements across all major Australian contract frameworks. Our team ensures compliance, manages variations, resolves disputes, and protects your contractual position throughout the project lifecycle." },
  { id: "cost-schedule", icon: BarChart3, title: "Cost & Schedule Control", description: "Earned value management, forecasting, and schedule integrity reviews for complex programs.", detail: "Advanced earned value management, cost forecasting, and critical path analysis to keep your project on track. We provide executive-level reporting that gives clear visibility into project health and early warning of potential issues." },
  { id: "stakeholder-management", icon: Users, title: "Stakeholder Management", description: "Strategic stakeholder engagement and communication frameworks for multi-party projects.", detail: "Complex projects involve multiple stakeholders with competing priorities. We design and implement stakeholder engagement strategies that build trust, manage expectations, and maintain social licence throughout delivery." },
  { id: "procurement", icon: FileText, title: "Procurement Advisory", description: "Tender strategy, evaluation methodology and probity advisory for public and private procurement.", detail: "From market sounding through tender evaluation to contract award, we provide strategic procurement advice that delivers value for money and reduces risk. Our probity frameworks ensure defensible outcomes for government and private sector clients." },
  { id: "program-delivery", icon: Settings, title: "Program Delivery", description: "Multi-project program governance, interdependency management and benefits realisation.", detail: "Managing multiple related projects requires program-level governance, interdependency tracking, and benefits realisation frameworks. We bring structure and discipline to complex programs, ensuring strategic objectives are achieved." },
  { id: "construction-oversight", icon: HardHat, title: "Construction Oversight", description: "Site-level monitoring, quality assurance, and progress verification for active construction.", detail: "Our construction oversight services provide independent verification of progress, quality, and compliance on active construction sites. We protect your investment by ensuring work is delivered to specification and on schedule." },
];

const CapabilitiesPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero — 30% Slate Navy overlay */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={capabilitiesHero} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-navy/85" />
        <div className="relative z-10 text-center px-6">
          <p className="text-micro uppercase tracking-[0.2em] text-vivid-amber mb-4">What We Do</p>
          <h1 className="text-hero text-white">Our Capabilities</h1>
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto mt-4">
            Principal-led consulting across the full project lifecycle
          </p>
        </div>
      </section>

      {/* Capability details — 60% Main Space bg */}
      <section className="section-light section-padding">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {capabilities.map((cap, i) => (
              <SectionReveal key={cap.id}>
                <div id={cap.id} className="scroll-mt-24 grid lg:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-deep-azure/10 flex items-center justify-center">
                        <cap.icon className="w-7 h-7 text-deep-azure" strokeWidth={1.5} />
                      </div>
                      <h2 className="text-h3 text-slate-navy">{cap.title}</h2>
                    </div>
                    <p className="text-body-lg text-slate-navy/70 mb-4">{cap.description}</p>
                    <p className="text-slate-navy/60 leading-relaxed">{cap.detail}</p>
                    <Link to="/connect" className="btn-pop mt-8 inline-block">Discuss This Service</Link>
                  </div>
                  <div className={`rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-navy/5 to-deep-azure/10 flex items-center justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <cap.icon className="w-24 h-24 text-deep-azure/15" strokeWidth={0.8} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default CapabilitiesPage;

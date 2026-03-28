import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import capImg from "@/assets/capabilities-hero.jpg";
import {
  Briefcase, ClipboardCheck, BarChart3, Users, AlertTriangle,
  FileText, Settings, HardHat
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

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

const CapabilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Staggered reveal for text
  useScrollAnimation({
    triggerRef: sectionRef,
    childrenSelector: ".cap-text",
    stagger: 0.1,
    y: 30,
  });

  // Image reveal with a slight scale down
  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, scale: 1.1, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Mechanical precision grid stagger
  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".cap-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: {
            each: 0.05,
            grid: [2, 4],
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="section-cream section-padding" aria-labelledby="cap-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img ref={imgRef} src={capImg} alt="Professional project management team reviewing plans" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="cap-text text-micro uppercase tracking-[0.15em] text-vivid-amber mb-4">What We Do</p>
            <h2 id="cap-heading" className="cap-text text-h2 text-slate-navy mb-6">
              Capabilities
            </h2>
            <p className="cap-text text-body-lg text-slate-navy/70 mb-8">
              Full-spectrum project management consulting, from feasibility through commissioning. Every engagement is principal-led — no junior resourcing, no templates.
            </p>
            <div className="cap-text">
              <Link to="/capabilities" className="btn-cta">Explore All Services</Link>
            </div>
          </div>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => (
            <Link key={cap.title} to={cap.href} className="cap-card group flex items-center gap-4 p-5 rounded-lg bg-card border border-border/50 h-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,74,0,0.15)] hover:border-vivid-amber/30 hover:-translate-y-1">
              <cap.icon
                className="w-8 h-8 text-vivid-amber shrink-0 transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-base font-semibold text-slate-navy group-hover:text-vivid-amber transition-colors duration-300">
                {cap.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

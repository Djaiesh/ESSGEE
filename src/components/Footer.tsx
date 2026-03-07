import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Capabilities", to: "/capabilities" },
  { label: "Sectors", to: "/sectors" },
  { label: "Proof", to: "/proof" },
  { label: "Insights", to: "/insights" },
  { label: "Connect", to: "/connect" },
];

const contactItems = [
  { icon: Mail, label: "satya@essgeeprojects.com.au", href: "mailto:satya@essgeeprojects.com.au" },
  { icon: Phone, label: "+61 400 000 000", href: "tel:+61400000000" },
  { icon: MapPin, label: "Perth, Western Australia", href: null },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com", external: true },
];

const Footer = () => (
  <footer className="relative bg-slate-navy overflow-hidden" role="contentinfo">

    {/* Amber gradient top line */}
    <div
      className="h-px w-full"
      style={{ background: "linear-gradient(to right, transparent, hsl(19,100%,47%), transparent)" }}
    />

    {/* Ambient glow */}
    <div
      className="absolute -top-40 -left-40 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-[0.07]"
      style={{ background: "radial-gradient(circle, hsl(19,100%,47%) 0%, transparent 70%)" }}
    />
    <div
      className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(19,100%,47%) 0%, transparent 70%)" }}
    />

    <div className="container mx-auto px-4 sm:px-6 pt-12 pb-8 relative z-10">

      {/* ── Main grid ── */}
      <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 mb-10">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-5 flex flex-col gap-5">
          <Link to="/" className="inline-flex items-baseline gap-2 group w-fit">
            <span className="font-display text-3xl font-bold text-white tracking-tight group-hover:text-vivid-amber transition-colors duration-300">
              ESSGEE
            </span>
            {/* <span className="text-micro uppercase tracking-[0.2em] text-vivid-amber">Pty Ltd</span> */}
          </Link>

          <p className="text-sm text-white/40 leading-relaxed max-w-[18rem]">
            Independent project management consulting. Risk-led governance for complex infrastructure.
          </p>

          <button
            onClick={() => alert("Capability Statement download would start here.")}
            className="self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-vivid-amber/40 text-sm text-vivid-amber hover:bg-vivid-amber hover:text-white hover:border-vivid-amber hover:shadow-[0_0_20px_hsla(19,100%,47%,0.3)] transition-all duration-300"
          >
            Download Capability Statement
            <Download className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
            Navigation
          </p>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="group flex items-center gap-2 text-sm text-white/45 hover:text-vivid-amber transition-colors duration-200"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-vivid-amber transition-all duration-300 ease-out rounded-full" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-5">
            Contact
          </p>
          <ul className="flex flex-col gap-3.5">
            {contactItems.map(({ icon: Icon, label, href, external }) => {
              const inner = (
                <span className="flex items-center gap-3 group cursor-pointer">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 group-hover:bg-vivid-amber/10 group-hover:border-vivid-amber/40 transition-all duration-250">
                    <Icon className="w-3.5 h-3.5 text-vivid-amber" />
                  </span>
                  <span className="text-sm text-white/45 group-hover:text-white transition-colors duration-200 leading-snug">
                    {label}
                  </span>
                </span>
              );

              if (!href) return <li key={label}>{inner}</li>;
              if (external)
                return (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                  </li>
                );
              return <li key={label}><a href={href}>{inner}</a></li>;
            })}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} ESSGEE Pty Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xs text-white/20 hover:text-vivid-amber transition-colors duration-200">
            Privacy
          </Link>
          <Link to="/" className="text-xs text-white/20 hover:text-vivid-amber transition-colors duration-200">
            Terms
          </Link>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;

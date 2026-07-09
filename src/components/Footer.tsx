import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/essgee_logo.jpeg";
import { site } from "@/data/siteContent";

const navigation = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Sectors", "/sectors"],
  ["Founder", "/founder"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
];

const companies = [
  "Leighton Contractors",
  "UGL",
  "Downer",
  "Transgrid",
  "Ausgrid",
  "Western Power",
  "Origin Energy",
  "AWS",
  "Whittens",
  "M+W Group",
];

const Footer = () => (
  <footer className="section-dark border-t border-white/10" role="contentinfo">
    <div className="container mx-auto px-6 py-14">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4 lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-4">
            <img src={logo} alt="" className="h-20 w-20 rounded-lg object-cover border border-white/10 shadow-lg" />
            <div className="flex flex-col justify-center gap-1">
              <span className="font-display text-2xl font-bold tracking-widest text-vivid-amber leading-none">ESSGEE</span>
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-white leading-none uppercase">Projects</span>
            </div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">ESSGEE Projects supports organisations in transforming strategic intent into sustainable business and project outcomes through integrated advisory services spanning strategy, governance and delivery.</p>
          <p className="mt-3 text-sm font-semibold text-vivid-amber italic">Sustainability Through Strategy!</p>
          <a href={site.capabilityStatement} download="ESSGEE Capability Statement.pdf" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-accent hover:text-white transition-colors"><Download className="h-4 w-4" />Download Capability Statement</a>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">Navigation</p>
          <ul className="space-y-2">{navigation.map(([label, href]) => <li key={href}><Link to={href} className="text-sm text-white/55 transition-colors hover:text-teal-accent">{label}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/35">Contact</p>
          <ul className="space-y-3 text-sm text-white/55">
            <li><a className="flex gap-3 hover:text-white" href={`mailto:${site.email}`}><Mail className="h-4 w-4 text-teal-accent" />{site.email}</a></li>
            <li><a className="flex gap-3 hover:text-white" href={site.phoneHref}><Phone className="h-4 w-4 text-teal-accent" />{site.phoneDisplay}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-teal-accent" />{site.location}</li>
            <li><a className="flex gap-3 hover:text-white" href={site.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4 text-teal-accent" />LinkedIn</a></li>
          </ul>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-vivid-amber">Trusted By</p>
          <p className="text-xs text-white/50 mb-4 leading-relaxed">
            Experience includes projects with organisations such as:
          </p>
          <div className="flex flex-wrap gap-2">
            {companies.map((company, index) => (
              <span key={index} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 cursor-default">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/30">&copy; {new Date().getFullYear()} ESSGEE Projects. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;

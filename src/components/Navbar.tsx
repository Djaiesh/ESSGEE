import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subs?: SubItem[];
}

const NAV_LINKS: NavItem[] = [
  { label: "Origin", href: "/#origin" },
  {
    label: "Capabilities",
    href: "/capabilities",
    subs: [
      { label: "Project Management", href: "/capabilities#project-management" },
      { label: "Risk & Governance", href: "/capabilities#risk-governance" },
      { label: "Contract Administration", href: "/capabilities#contract-admin" },
      { label: "Cost & Schedule", href: "/capabilities#cost-schedule" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    subs: [
      { label: "Transport & Roads", href: "/sectors#transport" },
      { label: "Water & Utilities", href: "/sectors#water" },
      { label: "Resources & Energy", href: "/sectors#resources" },
      { label: "Defence", href: "/sectors#defence" },
    ],
  },
  {
    label: "Proof",
    href: "/proof",
    subs: [
      { label: "Case Studies", href: "/proof#case-studies" },
      { label: "Track Record", href: "/proof#track-record" },
      { label: "Clients", href: "/proof#clients" },
      { label: "Testimonials", href: "/proof#testimonials" },
    ],
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Connect",
    href: "/connect",
    subs: [
      { label: "Our Leadership", href: "/connect#leadership" },
      { label: "Our Team", href: "/connect#team" },
      { label: "Contact", href: "/connect#connect" },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const isHashLink = (href: string) => href.startsWith("/#") || href.startsWith("#");

  const renderLink = (href: string, children: React.ReactNode, className: string, onClick?: () => void) => {
    if (isHashLink(href)) {
      return (
        <a href={href} className={className} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : "glass-nav-transparent"
        }`}
      role="banner"
    >
      {/* 30% Slate Navy nav bar */}
      <nav className="container mx-auto flex items-center justify-between px-6 h-20" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 z-10" aria-label="ESSGEE home">
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            ESSGEE
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.subs && handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1">
                {renderLink(
                  link.href,
                  <>
                    {link.label}
                    {link.subs && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                  </>,
                  `flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide text-white/80 hover:text-vivid-amber hover:bg-white/10 transition-all duration-200`
                )}
              </div>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {link.subs && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-lg overflow-hidden border border-white/10"
                    style={{ background: "hsla(210, 28%, 28%, 0.95)", backdropFilter: "blur(16px)" }}
                  >
                    {link.subs.map((sub) => (
                      <div key={sub.label}>
                        {renderLink(
                          sub.href,
                          sub.label,
                          "block px-5 py-2.5 text-sm text-white/65 hover:text-vivid-amber hover:bg-white/8 transition-all duration-150 flex items-center gap-2 group/item",
                          () => setOpenDropdown(null)
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/connect" className="btn-pop">
            Confidential Discussion
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-10 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute inset-x-0 top-20 glass-nav border-t-0 max-h-[80vh] overflow-y-auto"
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="border-b border-white/5 last:border-b-0">
                  {link.subs ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-6 py-4 text-white text-lg font-medium"
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-white/5"
                          >
                            {link.subs.map((sub) => (
                              <div key={sub.label}>
                                {renderLink(
                                  sub.href,
                                  sub.label,
                                  "block px-10 py-3 text-white/60 text-base hover:text-deep-azure transition-colors",
                                  () => setMobileOpen(false)
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div>
                      {renderLink(
                        link.href,
                        link.label,
                        "block px-6 py-4 text-white text-lg font-medium",
                        () => setMobileOpen(false)
                      )}
                    </div>
                  )}
                </li>
              ))}
              <li className="px-6 py-4">
                <Link to="/connect" className="btn-pop block text-center" onClick={() => setMobileOpen(false)}>
                  Confidential Discussion
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


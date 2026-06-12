import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/essgee_logo.jpeg";

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
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    subs: [
      { label: "Strategy", href: "/services#strategy" },
      { label: "Governance", href: "/services#governance" },
      { label: "Delivery", href: "/services#delivery" },
    ],
  },
  {
    label: "Sectors",
    href: "/sectors",
    subs: [
      { label: "Infrastructure", href: "/sectors#infrastructure" },
      { label: "Construction", href: "/sectors#construction" },
      { label: "Property & Development", href: "/sectors#property-development" },
      { label: "Energy & Utilities", href: "/sectors#energy-utilities" },
      { label: "Industrial & Resources", href: "/sectors#industrial-resources" },
      { label: "Government & Public Sector", href: "/sectors#government" },
    ],
  },
  {
    label: "Founder",
    href: "/founder",
  },
  { label: "Insights", href: "/insights" },
  {
    label: "Contact",
    href: "/contact",
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

  const isHomePage = location.pathname === "/";
  const shouldBeSolid = !isHomePage || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldBeSolid ? "glass-nav" : "glass-nav-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 h-24" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3 z-10" aria-label="ESSGEE home">
          <img src={logo} alt="ESSGEE Projects" className="h-12 w-12 rounded-md object-cover border border-white/20 shadow-md" />
          <span className="text-lg md:text-xl font-bold tracking-[0.15em] font-display text-vivid-amber inline-block">ESSGEE PROJECTS</span>
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
                    <span className="nav-link-underline">{link.label}</span>
                    {link.subs && <ChevronDown className="w-3.5 h-3.5 mt-0.5" />}
                  </>,
                  `flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 hover:text-vivid-amber transition-colors duration-300 group`
                )}
              </div>

              {/* Desktop dropdown */}
              <AnimatePresence>
                {link.subs && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-lg overflow-hidden border border-white/10 border-t-vivid-amber shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                    style={{ background: "hsla(220, 14%, 13%, 0.97)", backdropFilter: "blur(20px)" }}
                  >
                    {link.subs.map((sub) => (
                      <div key={sub.label}>
                        {renderLink(
                          sub.href,
                          sub.label,
                          "block px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/60 hover:text-vivid-amber hover:bg-white/5 transition-all duration-150 flex items-center gap-2 group/item",
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

        {/* Mobile toggle */}
        <button
          className="lg:hidden z-10 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden absolute inset-x-0 top-24 glass-nav border-t border-t-white/10 max-h-[80vh] overflow-y-auto"
          >
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label} className="border-b border-white/5 last:border-b-0">
                  {link.subs ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full px-6 py-4 text-white text-base font-medium"
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
                                  "block px-10 py-3.5 text-white/60 text-sm hover:text-vivid-amber hover:bg-white/5 transition-colors",
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
                        "block px-6 py-4 text-white text-base font-medium",
                        () => setMobileOpen(false)
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

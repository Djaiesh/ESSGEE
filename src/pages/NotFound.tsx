import Seo from "@/components/Seo";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The requested ESSGEE Projects page could not be found. Return to our homepage or explore our services."
        noIndex
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-navy text-white px-6">
        <div className="text-center max-w-xl">
          {/* Fixed H1: was just "404" — a number, not a meaningful heading (Issue #7) */}
          <p className="text-8xl font-bold text-vivid-amber mb-4" aria-hidden="true">404</p>
          <h1 className="text-3xl font-display font-bold text-white mb-4">
            Page Not Found
          </h1>
          {/* Added H2 to fix "H2: Missing" issue (Issue #6) */}
          <h2 className="text-lg font-semibold text-white/60 mb-6">
            The page you are looking for doesn&apos;t exist or has been moved.
          </h2>
          <p className="text-white/50 mb-10 leading-relaxed">
            You may have followed an outdated link, or the page may have been removed.
            Explore the links below to find what you need.
          </p>

          {/* Internal outlinks — fixes "Pages Without Internal Outlinks" (Issue #10 — HIGH) */}
          <nav aria-label="Return navigation" className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="px-5 py-2.5 rounded-lg bg-vivid-amber text-slate-navy font-semibold text-sm hover:bg-vivid-amber/90 transition-colors"
            >
              Return to Home
            </Link>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white/70 text-sm hover:text-white hover:border-white/40 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/about"
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white/70 text-sm hover:text-white hover:border-white/40 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/insights"
              className="px-5 py-2.5 rounded-lg border border-white/20 text-white/70 text-sm hover:text-white hover:border-white/40 transition-colors"
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg border border-teal-accent/40 text-teal-accent text-sm hover:border-teal-accent hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NotFound;

import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import Index from "@/pages/Index";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import SectorsPage from "@/pages/SectorsPage";
import FounderPage from "@/pages/FounderPage";
import InsightsPage from "@/pages/InsightsPage";
import InsightArticlePage from "@/pages/InsightArticlePage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

interface HelmetContext {
  helmet?: {
    title: { toString(): string };
    meta: { toString(): string };
    link: { toString(): string };
    script: { toString(): string };
  };
}

/**
 * Renders each public route at build time. The browser still boots the same
 * React application, while crawlers receive meaningful HTML without requiring
 * client-side JavaScript.
 */
export const render = (url: string) => {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/sectors" element={<SectorsPage />} />
              <Route path="/founder" element={<FounderPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/insights/:slug" element={<InsightArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </StaticRouter>
      </TooltipProvider>
    </HelmetProvider>,
  );

  return { html, helmet: helmetContext.helmet };
};

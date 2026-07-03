import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import { Preloader } from "./components/Preloader";
import { ScrollProgress } from "./components/ScrollProgress";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ErrorBoundary from "./components/ErrorBoundary";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const FounderPage = lazy(() => import("./pages/FounderPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, filter: "blur(4px)" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const location = useLocation();
  const completePreloader = useCallback(() => setPreloaderComplete(true), []);

  useEffect(() => {
    if (!preloaderComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [preloaderComplete]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const suspenseFallback = (
    <div className="h-screen w-full flex items-center justify-center bg-slate-navy">
      <span className="text-vivid-amber font-display tracking-widest text-sm uppercase">Loading...</span>
    </div>
  );

  return (
    <>
      <ScrollToHash />
      <ScrollProgress />
      <CustomCursor />
      {!preloaderComplete && <Preloader onComplete={completePreloader} />}
      <Navbar />
      <SmoothScroll>
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Suspense fallback={suspenseFallback}><Index /></Suspense></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><Suspense fallback={suspenseFallback}><AboutPage /></Suspense></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Suspense fallback={suspenseFallback}><ServicesPage /></Suspense></PageWrapper>} />
              <Route path="/sectors" element={<PageWrapper><Suspense fallback={suspenseFallback}><SectorsPage /></Suspense></PageWrapper>} />
              <Route path="/founder" element={<PageWrapper><Suspense fallback={suspenseFallback}><FounderPage /></Suspense></PageWrapper>} />
              <Route path="/insights" element={<PageWrapper><Suspense fallback={suspenseFallback}><InsightsPage /></Suspense></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Suspense fallback={suspenseFallback}><ContactPage /></Suspense></PageWrapper>} />
              <Route path="*" element={<PageWrapper><Suspense fallback={suspenseFallback}><NotFound /></Suspense></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

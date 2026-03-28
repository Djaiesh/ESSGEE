import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmoothScroll from "./components/SmoothScroll";
import { Preloader } from "./components/Preloader";

const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const ProofPage = lazy(() => import("./pages/ProofPage"));

const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));

const queryClient = new QueryClient();

const AppContent = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active, by hiding body overflow.
    // Lenis is handling scroll, but it's safe to also restrict body.
    if (!preloaderComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [preloaderComplete]);

  return (
    <>
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}
      <SmoothScroll>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-background"><span className="text-fence-green font-display text-xl">Loading...</span></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/proof" element={<ProofPage />} />

            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
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

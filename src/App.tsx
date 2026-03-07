import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const CapabilitiesPage = lazy(() => import("./pages/CapabilitiesPage"));
const SectorsPage = lazy(() => import("./pages/SectorsPage"));
const ProofPage = lazy(() => import("./pages/ProofPage"));

const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

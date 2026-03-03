import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Academy from "./pages/Academy";
import ModulePage from "./pages/ModulePage";
import LessonPage from "./pages/LessonPage";
import Tools from "./pages/Tools";
import LotSizeCalculator from "./pages/LotSizeCalculator";
import MarginCalculator from "./pages/MarginCalculator";
import RiskCalculator from "./pages/RiskCalculator";
import GoldInsights from "./pages/GoldInsights";
import GoldPost from "./pages/GoldPost";
import StartTrading from "./pages/StartTrading";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/academy/module/:moduleId" element={<ModulePage />} />
              <Route path="/academy/module/:moduleId/lesson/:lessonId" element={<LessonPage />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/tools/lot-size-calculator" element={<LotSizeCalculator />} />
              <Route path="/tools/margin-calculator" element={<MarginCalculator />} />
              <Route path="/tools/risk-calculator" element={<RiskCalculator />} />
              <Route path="/gold-insights" element={<GoldInsights />} />
              <Route path="/gold-insights/:postId" element={<GoldPost />} />
              <Route path="/start-trading" element={<StartTrading />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

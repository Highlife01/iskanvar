import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CityQuestionOrDistrictPage from "./components/CityQuestionOrDistrictPage";
import CityOrQuestionPage from "./components/CityOrQuestionPage";
import ScrollToHash from "./components/ScrollToHash";

const DistrictQuestionPage = lazy(() => import("./pages/DistrictQuestionPage"));
const NeighborhoodQuestionPage = lazy(() => import("./pages/NeighborhoodQuestionPage"));
const AdaParselPage = lazy(() => import("./pages/AdaParselPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const FAQQuestionPage = lazy(() => import("./pages/FAQQuestionPage"));
const OfficialTerminologyPage = lazy(() => import("./pages/OfficialTerminologyPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const KVKKPage = lazy(() => import("./pages/KVKKPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const HRPage = lazy(() => import("./pages/HRPage"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Index />} />
              <Route path="/hizmetler" element={<ServicesPage />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/kvkk" element={<KVKKPage />} />
              <Route path="/kullanim-kosullari" element={<TermsPage />} />
              <Route path="/ik" element={<HRPage />} />

              {/* FAQ Question Pages (e.g., /iskan-sorulari/iskansiz-ev-alinir-mi) */}
              <Route path="/iskan-sorulari/:slug" element={<FAQQuestionPage />} />

              {/* Blog Routes */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Single-segment routes: Official Terminology OR City OR Question */}
              <Route path="/:slug" element={<CityOrQuestionPage />} />

              {/* City + Question OR District Page */}
              <Route path="/:citySlug/:secondSlug" element={<CityQuestionOrDistrictPage />} />

              {/* City + District + Question (e.g., /istanbul/kadikoy/binada-iskan-var-mi) */}
              <Route path="/:citySlug/:districtSlug/:questionSlug" element={<DistrictQuestionPage />} />

              {/* Neighborhood pages (e.g., /istanbul/kadikoy/moda/iskanli-mi) */}
              <Route path="/:citySlug/:districtSlug/:neighborhoodSlug/iskanli-mi" element={<NeighborhoodQuestionPage />} />

              {/* Ada/Parsel pages (e.g., /ada-parsel/1234/7/iskan-durumu) */}
              <Route path="/ada-parsel/:ada/:parsel/iskan-durumu" element={<AdaParselPage />} />

              {/* Official Terminology SEO Pages */}
              <Route path="/:slug-yapi-kullanma-izin-belgesi" element={<OfficialTerminologyPage />} />
              <Route path="/:slug-yapi-kullanma-izin-belgesi-sorgulama" element={<OfficialTerminologyPage />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

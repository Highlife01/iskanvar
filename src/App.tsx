import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuestionPage from "./pages/QuestionPage";
import CityQuestionPage from "./pages/CityQuestionPage";
import DistrictQuestionPage from "./pages/DistrictQuestionPage";
import NeighborhoodQuestionPage from "./pages/NeighborhoodQuestionPage";
import AdaParselPage from "./pages/AdaParselPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FAQQuestionPage from "./pages/FAQQuestionPage";
import OfficialTerminologyPage from "./pages/OfficialTerminologyPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import KVKKPage from "./pages/KVKKPage";
import TermsPage from "./pages/TermsPage";
import HRPage from "./pages/HRPage";
import CityPage from "./pages/CityPage";
import DistrictPage from "./pages/DistrictPage";
import CityQuestionOrDistrictPage from "./components/CityQuestionOrDistrictPage";
import CityOrQuestionPage from "./components/CityOrQuestionPage";
import ScrollToHash from "./components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToHash />
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

            {/* Single-segment routes: City OR Question (e.g., /istanbul, /kahramanmaras OR /iskan-nedir) */}
            <Route path="/:slug" element={<CityOrQuestionPage />} />

            {/* City + Question OR District Page (Disambiguation handled inside components or by ordering) */}
            {/* We will route to CityQuestionPage by default.
                Inside CityQuestionPage, we check if the second param is a QUESTION.
                If not, we assume it's a DISTRICT and render DistrictPage (or redirect).
                However, React Router matches top-down.
                Since we can't easily do conditional routing on same path pattern in JSX without a wrapper,
                We will use a Wrapper Component for the 2-segment path.
            */}
            <Route path="/:citySlug/:secondSlug" element={<CityQuestionOrDistrictPage />} />

            {/* City + District + Question (e.g., /istanbul/kadikoy/binada-iskan-var-mi) */}
            <Route path="/:citySlug/:districtSlug/:questionSlug" element={<DistrictQuestionPage />} />


            {/* Neighborhood pages (e.g., /istanbul/kadikoy/moda/iskanli-mi) */}
            <Route path="/:citySlug/:districtSlug/:neighborhoodSlug/iskanli-mi" element={<NeighborhoodQuestionPage />} />

            {/* Ada/Parsel pages (e.g., /ada-parsel/1234/7/iskan-durumu) */}
            <Route path="/ada-parsel/:ada/:parsel/iskan-durumu" element={<AdaParselPage />} />

            {/* Official Terminology SEO Pages (Faz 1) */}
            <Route path="/:slug-yapi-kullanma-izin-belgesi" element={<OfficialTerminologyPage />} />
            <Route path="/:slug-yapi-kullanma-izin-belgesi-sorgulama" element={<OfficialTerminologyPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

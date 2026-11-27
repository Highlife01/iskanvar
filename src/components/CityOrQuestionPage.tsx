import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { findCityBySlug, findQuestionBySlug } from '@/data/locations';
import NotFound from '@/pages/NotFound';

const CityPage = lazy(() => import('@/pages/CityPage'));
const QuestionPage = lazy(() => import('@/pages/QuestionPage'));
const OfficialTerminologyPage = lazy(() => import('@/pages/OfficialTerminologyPage'));

/**
 * Wrapper component to handle single-segment routes that could be:
 * - An official terminology page (e.g., /istanbul-yapi-kullanma-izin-belgesi or /istanbul-kadikoy-yapi-kullanma-izin-belgesi-sorgulama)
 * - A city page (e.g., /istanbul, /kahramanmaras)
 * - A question page (e.g., /iskan-nedir, /binada-iskan-var-mi)
 */
const CityOrQuestionPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const currentSlug = slug || '';

    // Check if it's an official terminology SEO route
    if (
        currentSlug.endsWith('-yapi-kullanma-izin-belgesi') ||
        currentSlug.endsWith('-yapi-kullanma-izin-belgesi-sorgulama')
    ) {
        return <OfficialTerminologyPage />;
    }

    // Check if it's a city (cities are more specific)
    const isCity = findCityBySlug(currentSlug);
    if (isCity) {
        return <CityPage />;
    }

    // Check if it's a question
    const isQuestion = findQuestionBySlug(currentSlug);
    if (isQuestion) {
        return <QuestionPage />;
    }

    return <NotFound />;
};

export default CityOrQuestionPage;

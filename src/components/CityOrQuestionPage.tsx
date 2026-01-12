import { useParams } from 'react-router-dom';
import { findCityBySlug, findQuestionBySlug } from '@/data/locations';
import CityPage from '@/pages/CityPage';
import QuestionPage from '@/pages/QuestionPage';
import NotFound from '@/pages/NotFound';

/**
 * Wrapper component to handle single-segment routes that could be either:
 * - A city page (e.g., /istanbul, /kahramanmaras)
 * - A question page (e.g., /iskan-nedir, /binada-iskan-var-mi)
 */
const CityOrQuestionPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // First check if it's a city (cities are more specific)
    const isCity = findCityBySlug(slug || '');
    if (isCity) {
        return <CityPage />;
    }

    // Then check if it's a question
    const isQuestion = findQuestionBySlug(slug || '');
    if (isQuestion) {
        return <QuestionPage />;
    }

    return <NotFound />;
};

export default CityOrQuestionPage;

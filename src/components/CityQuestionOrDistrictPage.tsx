import { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { findCityBySlug, findQuestionBySlug, findDistrictBySlug } from '@/data/locations';
import NotFound from '@/pages/NotFound';

const CityQuestionPage = lazy(() => import('@/pages/CityQuestionPage'));
const DistrictPage = lazy(() => import('@/pages/DistrictPage'));

const CityQuestionOrDistrictPage = () => {
    const { citySlug, secondSlug } = useParams<{ citySlug: string; secondSlug: string }>();

    // Check if it's a known city + question type (e.g. /istanbul/iskan-sorgulama)
    const isQuestion = findQuestionBySlug(secondSlug || '');
    if (isQuestion && findCityBySlug(citySlug || '')) {
        return <CityQuestionPage />;
    }

    // Also support reversed legacy URLs (e.g. /iskan-sorgulama/istanbul)
    if (findQuestionBySlug(citySlug || '') && findCityBySlug(secondSlug || '')) {
        return <CityQuestionPage />;
    }

    // Check if it's a district (e.g. /istanbul/kadikoy)
    const isDistrict = findDistrictBySlug(citySlug || '', secondSlug || '');
    if (isDistrict) {
        return <DistrictPage />;
    }

    return <NotFound />;
};

export default CityQuestionOrDistrictPage;

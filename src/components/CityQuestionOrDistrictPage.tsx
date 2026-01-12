import { useParams } from 'react-router-dom';
import { findQuestionBySlug, findDistrictBySlug } from '@/data/locations';
import CityQuestionPage from '@/pages/CityQuestionPage';
import DistrictPage from '@/pages/DistrictPage';
import NotFound from '@/pages/NotFound';

const CityQuestionOrDistrictPage = () => {
    const { citySlug, secondSlug } = useParams<{ citySlug: string; secondSlug: string }>();

    // Check if it's a known question type (e.g. /istanbul/iskan-sorgulama)
    const isQuestion = findQuestionBySlug(secondSlug || '');
    if (isQuestion) {
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

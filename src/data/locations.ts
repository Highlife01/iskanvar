import { allCities, City, District } from './all-locations';

export type { City, District };

export const cities: City[] = allCities;

// Question types for programmatic pages
import { questionTypes, QuestionType } from './questions';

export type { QuestionType };
export { questionTypes };

// Helper functions
export const findCityBySlug = (slug: string): City | undefined =>
  cities.find(city => city.slug === slug);

export const findDistrictBySlug = (citySlug: string, districtSlug: string): District | undefined => {
  const city = findCityBySlug(citySlug);
  return city?.districts.find(d => d.slug === districtSlug);
};

export const findQuestionBySlug = (slug: string): QuestionType | undefined =>
  questionTypes.find(q => q.slug === slug);

export const getAllCitySlugs = (): string[] =>
  cities.map(c => c.slug);

export const getAllDistrictSlugs = (citySlug: string): string[] => {
  const city = findCityBySlug(citySlug);
  return city?.districts.map(d => d.slug) || [];
};

export const getIskanQuestions = (): QuestionType[] =>
  questionTypes.filter(q => q.category === 'iskan');

export const getImarQuestions = (): QuestionType[] =>
  questionTypes.filter(q => q.category === 'imar');

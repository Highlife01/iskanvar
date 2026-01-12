import districtData from './programmatic-districts.json';

export interface ProgrammaticDistrict {
    slug_il: string;
    slug_ilce: string;
    il: string;
    ilce: string;
    url: string;
    title: string;
    h1: string;
    content: string;
}

// Type the imported JSON data
export const programmaticDistricts: ProgrammaticDistrict[] = districtData as ProgrammaticDistrict[];

/**
 * Find a programmatic district by city and district slugs
 */
export function findProgrammaticDistrict(
    citySlug: string,
    districtSlug: string
): ProgrammaticDistrict | undefined {
    return programmaticDistricts.find(
        (d) => d.slug_il === citySlug && d.slug_ilce === districtSlug
    );
}

/**
 * Get all programmatic districts for a city
 */
export function getProgrammaticDistrictsByCity(citySlug: string): ProgrammaticDistrict[] {
    return programmaticDistricts.filter((d) => d.slug_il === citySlug);
}

/**
 * Get all unique city slugs from programmatic districts
 */
export function getAllProgrammaticCitySlugs(): string[] {
    const slugs = new Set(programmaticDistricts.map((d) => d.slug_il));
    return Array.from(slugs);
}

import { Link } from 'react-router-dom';
import { cities } from '@/data/locations';

const CitiesGrid = () => {
    // Sort cities alphabetically by name
    const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name, 'tr'));

    // Divide cities into 8 columns for balanced display
    const columnsCount = 8;
    const citiesPerColumn = Math.ceil(sortedCities.length / columnsCount);
    const columns: typeof sortedCities[] = [];

    for (let i = 0; i < columnsCount; i++) {
        columns.push(sortedCities.slice(i * citiesPerColumn, (i + 1) * citiesPerColumn));
    }

    return (
        <section className="bg-slate-50/50 py-16 px-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-lg font-extrabold uppercase tracking-widest text-slate-700">
                        Hizmet Verdiğimiz İller
                    </h2>
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-1">
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className="space-y-1">
                            {column.map((city) => (
                                <Link
                                    key={city.slug}
                                    to={`/iskan-sorgulama/${city.slug}`}
                                    className="block text-sm text-slate-600 hover:text-primary transition-colors py-0.5 font-medium"
                                >
                                    {city.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-xs text-slate-500 text-center">
                        Türkiye genelinde <span className="font-bold text-primary">81 il</span> ve tüm ilçelerde iskan sorgulama hizmeti sunuyoruz.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CitiesGrid;

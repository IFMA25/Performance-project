import type { CountryData, CountryDataKey, SortOption } from '../types';
import { useState, useMemo, memo } from 'react';
import CountryTable from './CountryTable';

type MainProps = {
  data: CountryData[];
  year: number;
  search: string;
  selectedColumns: CountryDataKey[];
  sort: SortOption;
};

const Main = ({ data, year, search, selectedColumns, sort }: MainProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countryDataYear = useMemo(
    () =>
      data
        .filter(
          (item) =>
            item.year === year &&
            item.name.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
          switch (sort) {
            case 'population-asc': {
              const aPop =
                typeof a.population === 'number' ? a.population : Infinity;
              const bPop =
                typeof b.population === 'number' ? b.population : Infinity;
              return aPop - bPop;
            }
            case 'population-desc': {
              const aPop =
                typeof a.population === 'number' ? a.population : -Infinity;
              const bPop =
                typeof b.population === 'number' ? b.population : -Infinity;
              return bPop - aPop;
            }
            case 'name-asc':
              return a.name.localeCompare(b.name, 'en', {
                sensitivity: 'base',
              });
            case 'name-desc':
              return b.name.localeCompare(a.name, 'en', {
                sensitivity: 'base',
              });
            default:
              return 0;
          }
        }),
    [data, year, search, sort]
  );

  const toggleCountry = (name: string) => {
    setSelectedCountry((prev) => (prev === name ? null : name));
  };

  return (
    <main>
      <ul>
        {countryDataYear.map((item) => (
          <li
            key={item.name}
            className="country-item"
            onClick={() => toggleCountry(item.name)}
          >
            <p className="country-name">{item.name}</p>
            <div className="country-details">
              <p className="population">Population: {item.population}</p>
              <p className="iso-code">ISO Code: {item.iso_code}</p>
              <p className="year">Year: {item.year}</p>
            </div>
            {selectedCountry === item.name && (
              <div
                className="country-data"
                onClick={(e) => e.stopPropagation()}
              >
                <CountryTable
                  data={data}
                  countryName={item.name}
                  selectedColumns={selectedColumns}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default memo(Main);

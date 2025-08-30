import type { CountryData, CountryDataKey } from '../types';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { useState } from 'react';
import { START_PERIOD } from './Header';

type MainProps = {
  data: CountryData[];
  year: number;
  search: string;
  selectedColumns: CountryDataKey[];
};

const Main = ({ data, year, search, selectedColumns }: MainProps) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const countryDataYear = data.filter(
    (item) =>
      item.year === year &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCountry = (name: string) => {
    setSelectedCountry(selectedCountry === name ? null : name);
  };

  return (
    <main>
      <ul>
        {countryDataYear.map((item: CountryData) => (
          <li
            key={uuidv4()}
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
                <table>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Population</th>
                      <th>co2</th>
                      <th>co2_per_capita</th>
                      {selectedColumns.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      .filter(
                        (d) => d.name === item.name && d.year >= START_PERIOD
                      )
                      .map((d) => (
                        <tr key={d.year}>
                          <td>{d.year}</td>
                          <td>{d.population}</td>
                          <td>{d.co2}</td>
                          <td>{d.co2_per_capita}</td>
                          {selectedColumns.map((c) => (
                            <td key={c}>{d[c]}</td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;

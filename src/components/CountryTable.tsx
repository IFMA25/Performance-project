import type { CountryData, CountryDataKey } from '../types';
import { memo, useMemo } from 'react';
import { START_PERIOD } from './Header';

type CountryTableProps = {
  data: CountryData[];
  countryName: string;
  selectedColumns: CountryDataKey[];
};

const CountryTable = ({
  data,
  countryName,
  selectedColumns,
}: CountryTableProps) => {
  const rows = useMemo(
    () =>
      data
        .filter((d) => d.name === countryName && d.year >= START_PERIOD)
        .map((d) => (
          <tr key={`${d.name}-${d.year}`}>
            <td>{d.year}</td>
            <td>{d.population}</td>
            <td>{d.co2}</td>
            <td>{d.co2_per_capita}</td>
            {selectedColumns.map((c) => (
              <td key={c}>{d[c]}</td>
            ))}
          </tr>
        )),
    [data, countryName, selectedColumns]
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Population</th>
          <th>CO2</th>
          <th>CO2 per capita</th>
          {selectedColumns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default memo(CountryTable);

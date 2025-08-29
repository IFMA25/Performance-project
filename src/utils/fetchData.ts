import type { FetchData, CountryData } from '../types';

const API_URL =
  'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json';

export async function fetchDataCO2(): Promise<CountryData[] | undefined> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error fetch: ${response.status} ${response.statusText}`);
    }

    const rawData: FetchData = await response.json();

    const countryData: CountryData[] = Object.entries(rawData).flatMap(
      ([countryName, country]) =>
        country.data.map((entry) => ({
          name: countryName,
          iso_code: country.iso_code ?? 'N/A',
          year: entry.year,
          population: entry.population ?? 'N/A',
          co2: entry.co2,
          co2_per_capita: entry.co2_per_capita,
          cumulative_co2: entry.cumulative_co2,
          oil_co2: entry.oil_co2,
          share_global_co2: entry.share_global_co2,
          share_global_cumulative_co2: entry.share_global_cumulative_co2,
          temperature_change_from_co2: entry.temperature_change_from_co2,
        }))
    );

    return countryData;
  } catch (error) {
    console.error(error);
    return;
  }
}

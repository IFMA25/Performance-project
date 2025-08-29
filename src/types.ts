type DataItems = {
  year: number;
  population: number;
  co2: number;
  co2_per_capita: number;
  cumulative_co2: number;
  oil_co2: number;
  share_global_co2: number;
  share_global_cumulative_co2: number;
  temperature_change_from_co2: number;
};

type CO2Data = {
  iso_code?: string;
  data: DataItems[];
};

export type FetchData = Record<string, CO2Data>;

export type CountryData = {
  name: string;
  iso_code?: string;
  year: number;
  population: number;
  co2: number;
  co2_per_capita: number;
  cumulative_co2: number;
  oil_co2: number;
  share_global_co2: number;
  share_global_cumulative_co2: number;
  temperature_change_from_co2: number;
};

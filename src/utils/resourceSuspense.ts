import { fetchDataCO2 } from './fetchData';
import type { CountryData } from '../types';

export function createResource<T>(promise: Promise<T>) {
  let status = 'pending';
  let result: T;
  let error: Error;

  const suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      error = err;
    }
  );

  return {
    read() {
      if (status === 'pending') throw suspender;
      if (status === 'error') throw error;
      return result;
    },
  };
}

export const dataResource = createResource<CountryData[]>(fetchDataCO2());

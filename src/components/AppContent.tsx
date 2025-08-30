import { useCallback, useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import type { CountryDataKey, SortOption } from '../types';
import { dataResource } from '../utils/resourceSuspense';

const AppContent = () => {
  const data = dataResource.read();

  const [year, setYear] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [selectedColumns, setSelectedColumns] = useState<CountryDataKey[]>([]);
  const [sort, setSort] = useState<SortOption>('population-asc');

  useEffect(() => {
    if (data.length > 0) {
      setYear(Math.max(...data.map((d) => d.year)));
    }
  }, [data]);

  const handleYearChange = useCallback((y: number) => setYear(y), []);
  const handleSearch = useCallback((value: string) => setSearch(value), []);
  const handleAddColumns = useCallback(
    (columns: CountryDataKey[]) => setSelectedColumns(columns),
    []
  );
  const handleSort = useCallback((value: SortOption) => setSort(value), []);

  return (
    <>
      <Header
        data={data}
        year={year}
        onYearChange={handleYearChange}
        search={search}
        onSearch={handleSearch}
        onAddColumns={handleAddColumns}
        selectedColumns={selectedColumns}
        sort={sort}
        onSort={handleSort}
      />
      <Main
        data={data}
        year={year}
        search={search}
        selectedColumns={selectedColumns}
        sort={sort}
      />
    </>
  );
};

export default AppContent;

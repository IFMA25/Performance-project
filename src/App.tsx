import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { fetchDataCO2 } from './utils/fetchData';
import type { CountryData, CountryDataKey, SortOption } from './types';
import './App.css';

function App() {
  const [data, setData] = useState<CountryData[] | []>([]);
  const [year, setYear] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState<CountryDataKey[]>([]);
  const [sort, setSort] = useState<SortOption>('population-asc');

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchDataCO2();
        if (fetchedData) {
          setData(fetchedData);
          const maxYear = Math.max(...fetchedData.map((d) => d.year));
          setYear(maxYear);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleYearChange = useCallback((year: number) => setYear(year), []);
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
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <Main
          data={data}
          year={year}
          search={search}
          selectedColumns={selectedColumns}
          sort={sort}
        />
      )}
    </>
  );
}

export default App;

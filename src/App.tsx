import { useEffect, useState } from 'react';
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

  return (
    <>
      <Header
        data={data}
        year={year}
        onYearChange={setYear}
        search={search}
        onSearch={setSearch}
        onAddColumns={setSelectedColumns}
        selectedColumns={selectedColumns}
        sort={sort}
        onSort={setSort}
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

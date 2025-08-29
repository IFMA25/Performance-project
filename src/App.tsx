import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { fetchDataCO2 } from './utils/fetchData';
import type { CountryData } from './types';
import './App.css';

function App() {
  const [data, setData] = useState<CountryData[] | []>([]);
  const [year, setYear] = useState<number>(0);
  const [loading, setLoading] = useState(true);
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

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <Header data={data} year={year} onYearChange={setYear} />
      <Main data={data} year={year} />
    </>
  );
}

export default App;

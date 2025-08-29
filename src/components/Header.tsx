import type { CountryData } from '../types';

export const START_PERIOD = 2005;

type HeaderProps = {
  data: CountryData[];
  year: number;
  onYearChange: (year: number) => void;
};

const Header = ({ data, year, onYearChange }: HeaderProps) => {
  const years = Array.from(
    new Set(
      data.flatMap((item) => item.year).filter((year) => year >= START_PERIOD)
    )
  ).sort((a, b) => b - a);

  return (
    <header>
      <h1>React Performance</h1>
      <div className="container header_container">
        <input type="text" className="search" placeholder="Search country..." />
        <select
          name="year"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;

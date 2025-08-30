import { useState } from 'react';
import type { CountryData, CountryDataKey, SortOption } from '../types';
import Modal from './Modal';

export const START_PERIOD = 2005;

type HeaderProps = {
  data: CountryData[];
  year: number;
  onYearChange: (year: number) => void;
  search: string;
  onSearch: (value: string) => void;
  onAddColumns: (columns: CountryDataKey[]) => void;
  selectedColumns: CountryDataKey[];
  sort: SortOption;
  onSort: (value: SortOption) => void;
};

const Header = ({
  data,
  year,
  onYearChange,
  search,
  onSearch,
  onAddColumns,
  selectedColumns,
  sort,
  onSort,
}: HeaderProps) => {
  const years = Array.from(
    new Set(
      data.flatMap((item) => item.year).filter((year) => year >= START_PERIOD)
    )
  ).sort((a, b) => b - a);

  const [showModal, setShowModal] = useState(false);

  return (
    <header>
      <h1>React Performance</h1>
      <div className="container header_container">
        <input
          type="text"
          className="search"
          placeholder="Search country..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
        <select
          name="year"
          className="year-select"
          value={year}
          onChange={(e) => onYearChange(Number(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button
          className="btn-add"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add column
        </button>
        <div className="sort">
          <label>
            Sort by:
            <select
              value={sort}
              onChange={(e) => onSort(e.target.value as SortOption)}
            >
              <option value="population-asc">Population (Low to High)</option>
              <option value="population-desc">Population (High to Low)</option>
              <option value="name-asc">Country Name (A/Z)</option>
              <option value="name-desc">Country Name (Z/A)</option>
            </select>
          </label>
        </div>
      </div>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          onSubmit={(selectedColumns) => {
            onAddColumns(selectedColumns);
            setShowModal(false);
          }}
          initSelectedColumns={selectedColumns}
        />
      )}
    </header>
  );
};

export default Header;

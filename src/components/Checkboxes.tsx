import { memo, useMemo } from 'react';
import type { CountryDataKey } from '../types';

type CheckboxListProps = {
  columns: CountryDataKey[];
  selectedColumns: CountryDataKey[];
  onChange: (column: CountryDataKey, checked: boolean) => void;
};

const Checkboxes = ({
  columns,
  selectedColumns,
  onChange,
}: CheckboxListProps) => {
  const checkboxes = useMemo(
    () =>
      columns.map((columnName) => (
        <label key={columnName}>
          <input
            type="checkbox"
            value={columnName}
            checked={selectedColumns.includes(columnName)}
            onChange={(e) => onChange(columnName, e.target.checked)}
          />
          {columnName}
        </label>
      )),
    [columns, selectedColumns, onChange]
  );

  return <>{checkboxes}</>;
};

export default memo(Checkboxes);

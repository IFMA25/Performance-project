import { createPortal } from 'react-dom';
import OverlayModal from './OverlayModal';
import { useEffect, useState } from 'react';
import './style.css';
import type { CountryDataKey } from '../types';

export interface ModalProps {
  onClose: () => void;
  onSubmit: (selectedColumns: CountryDataKey[]) => void;
  initSelectedColumns: CountryDataKey[];
}

const COLUMN_NAMES: CountryDataKey[] = [
  'cumulative_co2',
  'oil_co2',
  'share_global_co2',
  'share_global_cumulative_co2',
  'temperature_change_from_co2',
];

const modal = document.getElementById('modal');
if (!modal) {
  throw new Error('Modal element not found');
}
const Modal = ({ onClose, onSubmit, initSelectedColumns }: ModalProps) => {
  const [selectedColumns, setSelectedColumns] =
    useState<CountryDataKey[]>(initSelectedColumns);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [onClose]);

  const handleCheckInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const column = COLUMN_NAMES.find((c) => c === value);
    if (!column) {
      return;
    }
    setSelectedColumns((prev) =>
      checked ? [...prev, column] : prev.filter((c) => c != column)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(selectedColumns);
    onClose();
  };
  return createPortal(
    <>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <h2>Choose column for country details</h2>
          <form onSubmit={handleSubmit}>
            {COLUMN_NAMES.map((columnName) => (
              <label key={columnName}>
                <input
                  type="checkbox"
                  value={columnName}
                  onChange={handleCheckInput}
                  checked={selectedColumns.includes(columnName)}
                />
                {columnName}
              </label>
            ))}
            <button className="btn-add-submit">Add columns</button>
          </form>
        </div>
      </div>
      <OverlayModal onClose={onClose} />
    </>,
    modal
  );
};

export default Modal;

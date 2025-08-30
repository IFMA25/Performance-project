import { Suspense } from 'react';
import AppContent from './components/AppContent';
import './App.css';

const App = () => {
  return (
    <>
      <h1>React Performance</h1>
      <Suspense fallback={<div className="spinner"></div>}>
        <AppContent />
      </Suspense>
    </>
  );
};
export default App;

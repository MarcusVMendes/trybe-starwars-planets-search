import React from 'react';
import Planets from './pages/Planets';
import PlanetProvider from './context/PlanetProvider';
import './App.css';

function App() {
  return (
    <PlanetProvider>
      <Planets />
    </PlanetProvider>
  );
}

export default App;

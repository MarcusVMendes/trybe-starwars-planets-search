import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Table from './components/Table';

import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <div>
      <PlanetProvider>
        <Inputs />
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;

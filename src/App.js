import React from 'react';
import Planets from './pages/Planets';
import PlanetProvider from './context/PlanetProvider';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <PlanetProvider>
      <Input />
      <Planets />
    </PlanetProvider>
  );
}

export default App;

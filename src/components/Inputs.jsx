import React, { useContext } from 'react';
import MusicContext from '../context/PlanetContext';

function Inputs() {
  const { filterByName, setFilterByName } = useContext(MusicContext);
  return (
    <div>
      <input
        type="text"
        name=""
        data-testid="name-filter"
        onChange={ (e) => setFilterByName(e.target.value) }
        value={ filterByName }
        placeholder="Digite sua busca aqui"
      />
    </div>
  );
}

export default Inputs;

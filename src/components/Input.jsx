import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Input() {
  const { filter, setFilter } = useContext(PlanetContext);
  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ (e) => setFilter({
        ...filter,
        filters: {
          filterByName: {
            name: e.target.value,
          },
        },
      }) }
    />
  );
}

export default Input;

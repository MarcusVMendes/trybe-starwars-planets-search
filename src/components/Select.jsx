import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Select() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setNumericFilterIsActive,
  } = useContext(PlanetContext);

  const { filterByNumericValues: { column, comparison, value } } = filterByNumericValues;

  function handleCLick() {
    setFilterByNumericValues({
      filterByNumericValues: {
        ...filterByNumericValues.filterByNumericValues,
      },
    });
    setNumericFilterIsActive(true);
  }

  return (
    <div>
      <form action="">

        <select
          data-testid="column-filter"
          onChange={ (e) => setFilterByNumericValues({
            filterByNumericValues: {
              ...filterByNumericValues.filterByNumericValues,
              column: e.target.value,
            } }) }
          value={ column }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          data-testid="comparison-filter"
          onChange={ (e) => setFilterByNumericValues({
            filterByNumericValues: {
              ...filterByNumericValues.filterByNumericValues,
              comparison: e.target.value,
            } }) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setFilterByNumericValues({
            filterByNumericValues: {
              ...filterByNumericValues.filterByNumericValues,
              value: e.target.value,
            } }) }
          value={ value }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleCLick }
        >
          Filter
        </button>
      </form>
    </div>

  );
}

export default Select;

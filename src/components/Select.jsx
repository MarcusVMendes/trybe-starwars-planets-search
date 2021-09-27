import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Select() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setNumericFilterIsActive,
    usedOption,
    setUsedOption,
  } = useContext(PlanetContext);

  const comparisonValues = [
    <>
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </>,
  ];

  const { filterByNumericValues: { column, comparison, value } } = filterByNumericValues;

  function removeOptions() {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return options.map((option) => {
      if (usedOption !== option) {
        return (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        );
      }
      return null;
    });
  }

  function handleCLick() {
    setFilterByNumericValues({
      filterByNumericValues: {
        ...filterByNumericValues.filterByNumericValues,
      } });
    setNumericFilterIsActive(true);
    setUsedOption(column);
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
          { removeOptions() }
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
          { comparisonValues }
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

/*
Estrutura dinamica da option sugerida no grupo de whatsapp da turma bem como
pelo Nikolai que me ajudou a compreender a estrutura esperada pelo projeto.
*/

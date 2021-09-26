import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const header = ['Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Film',
    'Population',
    'Created',
    'Edited',
    'Url',
  ];
  const {
    search,
    setSearch,
    column,
    setColumn,
    comparison,
    setComparison,
    number,
    setNumber,
    handleFilters,
    data,
  } = useContext(PlanetContext);
  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange={ (e) => {
            setSearch(e.target.value);
            handleFilters(e);
          } }
          value={ search }
          placeholder="Faça uma busca"
          name="name-filter"
        />

        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
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
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setNumber(e.target.value) }
          value={ number }
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick={ (e) => handleFilters(e) }
          name="button-filter"
        >
          Filtrar
        </button>
      </form>

      <table>
        <thead>
          <tr>
            {header.map((title, index) => (
              <th key={ index }>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            data.map((planet, index) => (
              <tr key={ index }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.films[0]}</td>
                <td>{planet.population}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;

import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    data,
    filter,
    filterByNumericValues,
    numericFilterIsActive,
  } = useContext(PlanetContext);

  if (!data) return <p>Carregando</p>;
  const { filters: { filterByName: { name } } } = filter;
  const { filterByNumericValues: { column, comparison, value } } = filterByNumericValues;
  const header = [
    'Planets',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  let filteredPlanetsByNumericValue = [];
  function filterConditions() {
    const biggerThen = (planet) => Number(planet[column]) > Number(value);
    const lessThan = (planet) => Number(planet[column]) < Number(value);
    const equalTo = (planet) => Number(planet[column]) === Number(value);

    if (comparison === 'maior que' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => biggerThen(planet));
      return filteredPlanetsByNumericValue;
    }

    if (comparison === 'menor que' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => lessThan(planet));
      return filteredPlanetsByNumericValue;
    }

    if (comparison === 'igual a' && numericFilterIsActive) {
      filteredPlanetsByNumericValue = data
        .filter((planet) => equalTo(planet));
      return filteredPlanetsByNumericValue;
    }
  }
  filterConditions();

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => (
            <th key={ item }>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          (value === 0 || value === null || value === undefined) && !numericFilterIsActive
            ? data
              .filter((planet) => (
                planet.name.toLowerCase()).includes(name.toLowerCase()))
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films[0]}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
            : filteredPlanetsByNumericValue
              .filter((planet) => (
                planet.name.toLowerCase()).includes(name.toLowerCase()))
              .map((planet) => (
                <tr key={ planet.diameter }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films[0]}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
        }
      </tbody>
    </table>
  );
}

export default Table;

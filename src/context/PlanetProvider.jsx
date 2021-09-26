import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    async function requestApi() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.forEach((result) => delete result.residents);

      setData(results);
      setFilteredData(results);
    }
    requestApi();
  }, []);

  function handleFilters({ target: { name, value } }) {
    if (name === 'name-filter') {
      setFilteredData(data.filter((planet) => planet.name.includes(value)));
    }
    if (name === 'button-filter') {
      // console.log(value);
    }
  }

  return (
    <div>
      <PlanetContext.Provider
        value={ {
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
          filteredData,
        } }
      >
        { children }
      </PlanetContext.Provider>
    </div>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

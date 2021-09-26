import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);
  useEffect(() => {
    async function requestApi() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.forEach((result) => delete result.residents);

      setData(results);
    }
    requestApi();
  }, []);

  function handleFilters({ target: { name, value } }) {
    if (name === 'name-filter') {
      // console.log(data);
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

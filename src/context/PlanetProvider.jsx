import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsState, planetSetState] = useState();

  useEffect(() => {
    async function requestApi() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.forEach((planet) => delete planet.residents);
      planetSetState(results);
      console.log(results);
    }
    requestApi();
  }, []);

  const filtersRecipe = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [filter, setFilter] = useState(filtersRecipe);
  const context = {
    data: planetsState,
    filter,
    setFilter,
  };

  return (
    <div>
      <PlanetContext.Provider value={ context }>
        { children }
      </PlanetContext.Provider>
    </div>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;

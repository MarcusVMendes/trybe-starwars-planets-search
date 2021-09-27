import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsState, planetSetState] = useState();
  const [numericFilterIsActive, setNumericFilterIsActive] = useState(false);
  const [usedOption, setUsedOption] = useState('');
  useEffect(() => {
    async function requestApi() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.forEach((planet) => delete planet.residents);

      planetSetState(results);
    }
    requestApi();
  }, []);

  const filterByNumericValuesRecipe = {
    filterByNumericValues:
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  };

  const filtersByNameRecipe = {
    filters: {
      filterByName: {
        name: '',
      },
    },
  };

  const [filter, setFilter] = useState(filtersByNameRecipe);

  const [
    filterByNumericValues,
    setFilterByNumericValues,
  ] = useState(filterByNumericValuesRecipe);

  const context = {
    data: planetsState,
    filter,
    setFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    numericFilterIsActive,
    setNumericFilterIsActive,
    usedOption,
    setUsedOption,
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

/*
Estrutura do Provider sugerida pelo NIkolai para lidar com filtros,
uma vez que a lógica que eu estava usando não estava passando no requisito 4.
*/

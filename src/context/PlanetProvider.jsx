import React, { useState, useEffect, useContext } from 'react';

function PlanetProvider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function requestApi() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await fetch(url).then((response) => response.json());
      results.forEach((result) => delete result.residents);
      
      setData(results);
    }
    requestApi();
  }, []);

  return (
    <div>
a
    </div>
  );
}

export default PlanetProvider;

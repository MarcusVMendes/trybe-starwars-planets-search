import React from 'react';

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
  return (

    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          onChange
          value=""
          placeholder
          name="name-filter"
        />

        <select
          data-testid="column-filter"
          onChange
          value
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select data-testid="comparison-filter" onChange value>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="number"
          data-testid="value-filter"
          onChange
          value
        />

        <button
          type="button"
          data-testid="button-filter"
          onClick
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
        <tbody />
      </table>
    </div>
  );
}

export default Table;

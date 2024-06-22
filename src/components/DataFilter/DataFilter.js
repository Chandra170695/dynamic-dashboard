import React from 'react';

const DataFilter = ({ options, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default DataFilter;
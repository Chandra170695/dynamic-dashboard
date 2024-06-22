import React from 'react';

const DataFilter = ({ options, onSelect }) => (
  <select className="select-dropdown"  onChange={(e) => onSelect(e.target.value)}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default DataFilter;
// components/Filter.js
import React, { useState } from 'react';
import '../styles/Filter.css';

const Filter = ({ onFilterChange, wines }) => {
  const [filters, setFilters] = useState({
    country: 'all',
    sort: 'name'
  });

  const countries = ['all', ...new Set(wines.map(wine => wine.country))];

  const handleCountryChange = (e) => {
    const newFilters = { ...filters, country: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (e) => {
    const newFilters = { ...filters, sort: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="country">Herkunftsland:</label>
        <select id="country" value={filters.country} onChange={handleCountryChange}>
          {countries.map(country => (
            <option key={country} value={country}>
              {country === 'all' ? 'All Countries' : country}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={filters.sort} onChange={handleSortChange}>
          <option value="name">Title (A-Z)</option>
          <option value="price">Price (Low to High)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
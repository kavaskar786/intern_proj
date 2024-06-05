// src/components/Filters.js
import React from 'react';

const Filters = ({ setFilters }) => {
  return (
    <div className="filter-container">
      <label>
        End Year:
        <input type="number" onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))} />
      </label>
      <label>
        Topics:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, topics: e.target.value.split(',') }))} />
      </label>
      <label>
        Sector:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, sector: e.target.value }))} />
      </label>
      <label>
        Region:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, region: e.target.value }))} />
      </label>
      <label>
        PEST:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, pest: e.target.value }))} />
      </label>
      <label>
        Source:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, source: e.target.value }))} />
      </label>
      <label>
        SWOT:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, swot: e.target.value }))} />
      </label>
      <label>
        Country:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, country: e.target.value }))} />
      </label>
      <label>
        City:
        <input type="text" onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))} />
      </label>
    </div>
  );
};

export default Filters;

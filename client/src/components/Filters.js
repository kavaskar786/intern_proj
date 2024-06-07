import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Filters = ({ setFilters, filters }) => {
  const [filterOptions, setFilterOptions] = useState({
    countries: [],
    topics: [],
    sectors: [],
    regions: [],
    pest: [],
    sources: [],
    swot: [],
    cities: [],
    end_years: [], // Added end_years to filter options
  });

  useEffect(() => {
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
    const fetchFilterOptions = async () => {
      const result = await axios('http://localhost:5000/api/filter-options');
      setFilterOptions(result.data);
    };
    fetchFilterOptions();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="filter">
        <label htmlFor="country">Country:</label>
        {console.log(filterOptions)}
        {console.log("kavaskar_country", filterOptions.countries)}
        <select name="country" value={filters.country} onChange={handleFilterChange}>
          {filterOptions.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="topic">Topic:</label>
        {console.log("kavaskar_topic", filterOptions.topics)}
        <select name="topic" value={filters.topic || ''} onChange={handleFilterChange}>
          <option value="">Select Topic</option>
          {filterOptions.topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="sector">Sector:</label>
        {console.log("kavaskar_sector", filterOptions.sectors)}
        <select name="sector" value={filters.sector || ''} onChange={handleFilterChange}>
          <option value="">Select Sector</option>
          {filterOptions.sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="region">Region:</label>
        {console.log("kavaskar_region", filterOptions.regions)}
        <select name="region" value={filters.region || ''} onChange={handleFilterChange}>
          <option value="">Select Region</option>
          {filterOptions.regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="pest">PEST:</label>
        {console.log("kavaskar_pest", filterOptions.pests)}
        <select name="pestle" value={filters.pestle || ''} onChange={handleFilterChange}>
          <option value="">Select PEST</option>
          {filterOptions.pest.map((pest) => (
            <option key={pest} value={pest}>
              {pest}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="source">Source:</label>
        {console.log("source", filterOptions.sources)}
        <select name="source" value={filters.source || ''} onChange={handleFilterChange}>
          <option value="">Select Source</option>
          {filterOptions.sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <label htmlFor="end_year">End Year:</label>
        {console.log("end_year", filterOptions.end_years)}
        <select name="end_year" value={filters.end_year || ''} onChange={handleFilterChange}>
          <option value="">Select End Year</option>
          {filterOptions.end_years.map((end_year) => (
            <option key={end_year} value={end_year}>
              {end_year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import D3Chart from './components/D3Chart';
import ChartJSChart from './components/ChartJSChart';
import PlotlyChart from './components/PlotlyChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Heatmap from './components/Heatmap';
import BubbleChart from './components/BubbleChart';
import './styles.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/api/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(d => {
    return Object.keys(filters).every(key => {
      if (Array.isArray(d[key])) {
        return filters[key]?.every(f => d[key].includes(f));
      }
      return d[key] === filters[key] || !filters[key];
    });
  });

  return (
    <div className="App">
      <h1>Interactive Dashboard</h1>
      <Filters setFilters={setFilters} />
      <div className="chart-container">
        <D3Chart data={filteredData} />
        <PlotlyChart data={filteredData} />
      </div>
    </div>
  );
};

export default App;

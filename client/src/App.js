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
import BoxPlot from './components/BoxPlot';
import ViolinPlot from './components/ViolinPlot';
import SunburstChart from './components/SunburstChart';
import Histogram from './components/Histogram';
import ScatterPlot3D from './components/ScatterPlot3D';
import SurfacePlot3D from './components/SurfacePlot3D';
import BubbleChart3D from './components/BubbleChart3D';
import LinePlot3D from './components/LinePlot3D';
import MeshPlot3D from './components/MeshPlot3D';
import ContourPlot3D from './components/ContourPlot3D';
import VolumePlot3D from './components/VolumePlot3D';
import Histogram3D from './components/Histogram3D';
import ScatterPlotColorScale3D from './components/ScatterPlotColorScale3D';
import BarPlot3D from './components/BarPlot3D';
import ParallelCoordinates3D from './components/ParallelCoordinates3D';
import BubbleChartSizeColor3D from './components/BubbleChartSizeColor3D';
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
        <ViolinPlot data={filteredData} />
        <SunburstChart data={filteredData} />
        <Histogram data={filteredData} />
        <BubbleChart3D data={filteredData} />
        <Histogram3D data={filteredData} />
        <ScatterPlotColorScale3D data={filteredData} />
      </div>
    </div>
  );
};

export default App;

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
import D3Chart from './components/D3Chart';
import PlotlyChart from './components/PlotlyChart';
import ViolinPlot from './components/ViolinPlot';
import SunburstChart from './components/SunburstChart';
import Histogram from './components/Histogram';
import BubbleChart3D from './components/BubbleChart3D';
import Histogram3D from './components/Histogram3D';
import ScatterPlotColorScale3D from './components/ScatterPlotColorScale3D';
import TreemapChart from './components/TreemapChart';
import DonutChart from './components/DonutChart';
import ScatterMatrix from './components/ScatterMatrix';
import CorrelationHeatmap from './components/CorrelationHeatmap';
import FunnelChart from './components/FunnelChart';
import GaugeChart from './components/GaugeChart';
import PolarAreaChart from './components/PolarAreaChart';
import SunburstChartSectorTopic from './components/SunburstChartSectorTopic';
import SankeyDiagram from './components/SankeyDiagram';
import ContourPlot from './components/ContourPlot';
import BubbleMap from './components/BubbleMap';
import MarimekkoChart from './components/MarimekkoChart';
import PolarScatterPlot from './components/PolarScatterPlot';
import ParallelCategories from './components/ParallelCategories';
import DotPlot from './components/DotPlot';
import DensityHeatmap from './components/DensityHeatmap';
import DumbbellPlot from './components/DumbbellPlot';
import PieChart from './components/PieChart';
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
      <div className="sidebar">
        <h2>Filters</h2>
        <Filters setFilters={setFilters} />
      </div>
      <h1>Interactive Dashboard</h1>
      <div className="chart-container">
        
        <PlotlyChart data={filteredData} />
        <BubbleChart data={filteredData} />
        <PieChart data={filteredData} />
        <ViolinPlot data={filteredData} />
        <SunburstChart data={filteredData} />
        <Histogram data={filteredData} />
        <BubbleChart3D data={filteredData} />
        <Histogram3D data={filteredData} />
        <ScatterPlotColorScale3D data={filteredData} />
        <TreemapChart data={filteredData} />
        <DonutChart data={filteredData} />
        <ScatterMatrix data={filteredData} />
        <CorrelationHeatmap data={filteredData} />
        <FunnelChart data={filteredData} />
        <GaugeChart data={filteredData} />
        <PolarAreaChart data={filteredData} />
        <SunburstChartSectorTopic data={filteredData} />
        <SankeyDiagram data={filteredData} />
        <ContourPlot data={filteredData} />
        <BubbleMap data={filteredData} />
        <MarimekkoChart data={filteredData} />
        <PolarScatterPlot data={filteredData} />
        <ParallelCategories data={filteredData} />
        <DotPlot data={filteredData} />
        <DensityHeatmap data={filteredData} />
        <DumbbellPlot data={filteredData} />
      </div>
    </div>
  );
};

export default App;

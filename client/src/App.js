import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filters from './components/Filters';
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
  const [filters, setFilters] = useState({ country: 'India' });
  const [loading, setLoading] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios('http://localhost:5000/api/data');
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const filteredData = data.filter(d => {
    return Object.keys(filters).every(key => {
      if (Array.isArray(d[key])) {
        return filters[key]?.every(f => d[key].includes(f));
      }
      return d[key] === filters[key] || !filters[key];
    });
  });

  const getNumericalInsights = (data) => {
    const totalRecords = data.length;
    const avgIntensity = (data.reduce((sum, item) => sum + item.intensity, 0) / totalRecords).toFixed(2);
    const avgLikelihood = (data.reduce((sum, item) => sum + item.likelihood, 0) / totalRecords).toFixed(2);
    const avgRelevance = (data.reduce((sum, item) => sum + item.relevance, 0) / totalRecords).toFixed(2);

    return { totalRecords, avgIntensity, avgLikelihood, avgRelevance };
  };

  const insights = getNumericalInsights(filteredData);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className={`App ${sidebarVisible ? 'sidebar-visible' : ''}`}>
      <button className="filter-button" onClick={toggleSidebar}>
        {sidebarVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <br/>
        <h2>Filters</h2>
        <Filters setFilters={setFilters} filters={filters} />
      </div>
      <h1 className={sidebarVisible ? 'sidebar-visible' : ''}>Interactive Dashboard</h1>
      <div className={`summary-cards ${sidebarVisible ? 'sidebar-visible' : ''}`}>
        <div className="card">
          <h3>{insights.totalRecords}</h3>
          <p>Total Records</p>
        </div>
        <div className="card">
          <h3>{insights.avgIntensity}</h3>
          <p>Average Intensity</p>
        </div>
        <div className="card">
          <h3>{insights.avgLikelihood}</h3>
          <p>Average Likelihood</p>
        </div>
        <div className="card">
          <h3>{insights.avgRelevance}</h3>
          <p>Average Relevance</p>
        </div>
      </div>
      <div className={`chart-container ${sidebarVisible ? 'sidebar-visible' : ''}`}>
        <ScatterPlotColorScale3D data={filteredData} />
        <SunburstChartSectorTopic data={filteredData} />
        <ScatterMatrix data={filteredData} />
        <ViolinPlot data={filteredData} />
        <PlotlyChart data={filteredData} />
        <Histogram data={filteredData} />
        <SunburstChart data={filteredData} />
        <BubbleChart3D data={filteredData} />
        <Histogram3D data={filteredData} />
        <TreemapChart data={filteredData} />
        <DonutChart data={filteredData} />
        <BubbleChart data={filteredData} />
        <CorrelationHeatmap data={filteredData} />
        <FunnelChart data={filteredData} />
        <GaugeChart data={filteredData} />
        <PolarAreaChart data={filteredData} />
        <SankeyDiagram data={filteredData} />
        <ContourPlot data={filteredData} />
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

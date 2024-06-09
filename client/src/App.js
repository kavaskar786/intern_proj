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
  const [filterOptions, setFilterOptions] = useState({
    countries: [],
    topics: [],
    sectors: [],
    regions: [],
    pest: [],
    sources: [],
    swot: [],
    cities: [],
    end_years: []
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios('https://backend-service-u2h6.onrender.com/api/data');
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      const result = await axios('https://backend-service-u2h6.onrender.com/api/filter-options');
      setFilterOptions(result.data);
    };
    fetchFilterOptions();
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filteredData = data.filter(d => {
    return Object.keys(filters).every(key => {
      if (key === 'end_year') {
        return filters[key] ? d[key] && d[key] <= parseInt(filters[key]) : true;
      }
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
        <h2>Filters</h2>
        <Filters setFilters={setFilters} filters={filters} filterOptions={filterOptions} handleFilterChange={handleFilterChange} />
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
      <div className={`chart-grid ${sidebarVisible ? 'sidebar-visible' : ''}`}>
        <div className='chart'>
          <ScatterPlotColorScale3D data={filteredData} />
          </div>
          <div className='chart'>
          <SunburstChartSectorTopic data={filteredData} />
          </div>
          <div className='chart'>
          <ScatterMatrix data={filteredData} />
          </div>
          <div className='chart'>
          <ViolinPlot data={filteredData} />
          </div>
          <div className='chart'>
          <Histogram data={filteredData} />
          </div>
          <div className='chart'>
          <SunburstChart data={filteredData} />
          </div>
          <div className='chart'>
          <BubbleChart3D data={filteredData} />
          </div>
          <div className='chart'>
          <TreemapChart data={filteredData} />
          </div>
          <div className='chart'>
          <DonutChart data={filteredData} />
          </div>
          <div className='chart'>
          <BubbleChart data={filteredData} />
          </div>
          <div className='chart'>
          <CorrelationHeatmap data={filteredData} />
          </div>
          <div className='chart'>
          <FunnelChart data={filteredData} />
          </div>
          <div className='chart'>
          <GaugeChart data={filteredData} />
          </div>
          <div className='chart'>
          <PolarAreaChart data={filteredData} />
          </div>
          <div className='chart'>
          <SankeyDiagram data={filteredData} />
          </div>
          <div className='chart'>
          <ContourPlot data={filteredData} />
          </div>
          <div className='chart'>
          <PolarScatterPlot data={filteredData} />
          </div>
          <div className='chart'>
          <ParallelCategories data={filteredData} />
          </div>
          <div className='chart'>
          <DotPlot data={filteredData} />
          </div>
          <div className='chart'>
          <DensityHeatmap data={filteredData} />
          </div>
          <div className='chart'>
          <DumbbellPlot data={filteredData} />
          </div>
      </div>
      <div className='credits_2' >Developed by Kavaskar😊</div>
    </div>
  );
};

export default App;

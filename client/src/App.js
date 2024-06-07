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
      const result = await axios('http://localhost:5000/api/data');
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilterOptions = async () => {
      const result = await axios('http://localhost:5000/api/filter-options');
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
        <br/>
        <br/>
        <br/>
        <h2>Filters</h2>
        <Filters setFilters={setFilters} filters={filters} filterOptions={filterOptions} handleFilterChange={handleFilterChange} />
      </div>
      <h1 className={sidebarVisible ? 'sidebar-visible' : ''}>Interactive Dashboard</h1>
      <div className= {`summary-cards ${sidebarVisible ? 'sidebar-visible' : ''}`}>
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
        <div className="chart-wrapper">
          <ScatterPlotColorScale3D data={filteredData} />
          <div className="insight">Insight: The scatter plot shows the relationship between different variables with color scales indicating varying values.</div>
        </div>
        <div className="chart-wrapper">
          <SunburstChartSectorTopic data={filteredData} />
          <div className="insight">Insight: The sunburst chart provides a hierarchical view of sectors and topics.</div>
        </div>
        <div className="chart-wrapper">
          <ScatterMatrix data={filteredData} />
          <div className="insight">Insight: The scatter matrix helps in understanding pairwise relationships among variables.</div>
        </div>
        <div className="chart-wrapper">
          <ViolinPlot data={filteredData} />
          <div className="insight">Insight: The violin plot shows the distribution of data across different categories.</div>
        </div>
        <div className="chart-wrapper">
          <PlotlyChart data={filteredData} />
          <div className="insight">Insight: This chart represents data in a customizable manner using Plotly.</div>
        </div>
        <div className="chart-wrapper">
          <Histogram data={filteredData} />
          <div className="insight">Insight: The histogram displays the frequency distribution of a dataset.</div>
        </div>
        <div className="chart-wrapper">
          <SunburstChart data={filteredData} />
          <div className="insight">Insight: This sunburst chart shows hierarchical data in a radial layout.</div>
        </div>
        <div className="chart-wrapper">
          <BubbleChart3D data={filteredData} />
          <div className="insight">Insight: The 3D bubble chart visualizes data points in three dimensions with varying sizes and colors.</div>
        </div>
        <div className="chart-wrapper">
          <Histogram3D data={filteredData} />
          <div className="insight">Insight: The 3D histogram provides a three-dimensional view of data distribution.</div>
        </div>
        <div className="chart-wrapper">
          <TreemapChart data={filteredData} />
          <div className="insight">Insight: The treemap chart represents hierarchical data using nested rectangles.</div>
        </div>
        <div className="chart-wrapper">
          <DonutChart data={filteredData} />
          <div className="insight">Insight: The donut chart is a variant of the pie chart with a central hole.</div>
        </div>
        <div className="chart-wrapper">
          <BubbleChart data={filteredData} />
          <div className="insight">Insight: This bubble chart visualizes data points with varying sizes and colors.</div>
        </div>
        <div className="chart-wrapper">
          <CorrelationHeatmap data={filteredData} />
          <div className="insight">Insight: The heatmap shows the correlation between different variables.</div>
        </div>
        <div className="chart-wrapper">
          <FunnelChart data={filteredData} />
          <div className="insight">Insight: The funnel chart illustrates stages in a process and their relative sizes.</div>
        </div>
        <div className="chart-wrapper">
          <GaugeChart data={filteredData} />
          <div className="insight">Insight: The gauge chart displays data in a speedometer-like format.</div>
        </div>
        <div className="chart-wrapper">
          <PolarAreaChart data={filteredData} />
          <div className="insight">Insight: The polar area chart visualizes data in a circular format.</div>
        </div>
        <div className="chart-wrapper">
          <SankeyDiagram data={filteredData} />
          <div className="insight">Insight: The Sankey diagram highlights flows and their quantities between different nodes.</div>
        </div>
        <div className="chart-wrapper">
          <ContourPlot data={filteredData} />
          <div className="insight">Insight: The contour plot represents three-dimensional data in two dimensions using contour lines.</div>
        </div>

        <div className="chart-wrapper">
          <MarimekkoChart data={filteredData} />
          <div className="insight">Insight: The Marimekko chart combines features of bar and pie charts to show categorical data.</div>
        </div>
        <div className="chart-wrapper">
          <PolarScatterPlot data={filteredData} />
          <div className="insight">Insight: The polar scatter plot represents data points in a polar coordinate system.</div>
        </div>
        <div className="chart-wrapper">
          <ParallelCategories data={filteredData} />
          <div className="insight">Insight: The parallel categories diagram shows multivariate categorical data.</div>
        </div>
        <div className="chart-wrapper">
          <DotPlot data={filteredData} />
          <div className="insight">Insight: The dot plot visualizes individual data points along a scale.</div>
        </div>
        <div className="chart-wrapper">
          <DensityHeatmap data={filteredData} />
          <div className="insight">Insight: The density heatmap shows the density of data points in a given area.</div>
        </div>
        <div className="chart-wrapper">
          <DumbbellPlot data={filteredData} />
          <div className="insight">Insight: The dumbbell plot compares two data points across different categories.</div>
        </div>
      </div>
    </div>
  );
};

export default App;

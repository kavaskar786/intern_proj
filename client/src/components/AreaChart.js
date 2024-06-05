// src/components/AreaChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const AreaChart = ({ data }) => {
  const intensityByYear = data.reduce((acc, cur) => {
    acc[cur.year] = (acc[cur.year] || 0) + cur.intensity;
    return acc;
  }, {});

  const years = Object.keys(intensityByYear).sort();
  const intensities = years.map(year => intensityByYear[year]);

  return (
    <Plot
      data={[
        {
          x: years,
          y: intensities,
          fill: 'tozeroy',
          type: 'scatter',
          mode: 'lines+markers',
        },
      ]}
      layout={{ title: 'Area Chart: Intensity Over Time' }}
    />
  );
};

export default AreaChart;

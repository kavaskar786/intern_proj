// src/components/WaterfallChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const WaterfallChart = ({ data }) => {
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
          type: 'waterfall',
          x: years,
          y: intensities,
          measure: Array(years.length).fill('relative'),
        },
      ]}
      layout={{ title: 'Waterfall Chart: Changes in Intensity by Year' }}
    />
  );
};

export default WaterfallChart;

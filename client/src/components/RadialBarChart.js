// src/components/RadialBarChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const RadialBarChart = ({ data }) => {
  const regions = [...new Set(data.map(d => d.region))];
  const intensityByRegion = regions.map(region =>
    data.filter(d => d.region === region).reduce((acc, cur) => acc + cur.intensity, 0)
  );

  return (
    <Plot
      data={[
        {
          type: 'pie',
          hole: 0.4,
          theta: intensityByRegion,
          r: regions,
          marker: {
            colorscale: 'Viridis',
          },
        },
      ]}
      layout={{ title: 'Radial Bar Chart: Intensity by Region' }}
    />
  );
};

export default RadialBarChart;

// src/components/DensityHeatmap.js
import React from 'react';
import Plot from 'react-plotly.js';

const DensityHeatmap = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          type: 'histogram2d',
          colorscale: 'Viridis',
        },
      ]}
      layout={{ title: 'Density Heatmap: Intensity and Likelihood Distribution' }}
    />
  );
};

export default DensityHeatmap;

// src/components/ScatterPlot3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlot3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          mode: 'markers',
          marker: {
            size: 12,
            color: data.map(d => d.year),
            colorscale: 'Viridis',
          },
          type: 'scatter3d',
        },
      ]}
      layout={{ title: 'Intensity vs Likelihood vs Relevance' }}
    />
  );
};

export default ScatterPlot3D;

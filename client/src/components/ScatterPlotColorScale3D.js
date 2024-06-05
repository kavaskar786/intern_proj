// src/components/ScatterPlotColorScale3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const ScatterPlotColorScale3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          mode: 'markers',
          marker: {
            size: 5,
            color: data.map(d => d.relevance),
            colorscale: 'Viridis',
            showscale: true,
          },
          type: 'scatter3d',
        },
      ]}
      layout={{ title: '3D Scatter Plot with Color Scale: Intensity, Likelihood, and Relevance' }}
    />
  );
};

export default ScatterPlotColorScale3D;

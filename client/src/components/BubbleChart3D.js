// src/components/BubbleChart3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChart3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          mode: 'markers',
          marker: {
            size: data.map(d => d.relevance * 2),
            color: data.map(d => d.year),
            colorscale: 'Rainbow',
            opacity: 0.8,
          },
          type: 'scatter3d',
        },
      ]}
      layout={{ title: '3D Bubble Chart: Intensity vs Likelihood vs Relevance' }}
    />
  );
};

export default BubbleChart3D;

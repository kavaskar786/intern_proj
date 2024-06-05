// src/components/BubbleChartSizeColor3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChartSizeColor3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          mode: 'markers',
          marker: {
            size: data.map(d => d.relevance),
            color: data.map(d => d.intensity),
            colorscale: 'Earth',
            showscale: true,
          },
          type: 'scatter3d',
        },
      ]}
      layout={{ title: '3D Bubble Chart with Size and Color: Intensity, Likelihood, Relevance' }}
    />
  );
};

export default BubbleChartSizeColor3D;

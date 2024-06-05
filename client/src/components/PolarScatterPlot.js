// src/components/PolarScatterPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const PolarScatterPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'scatterpolar',
          r: data.map(d => d.intensity),
          theta: data.map(d => d.topic),
          mode: 'markers',
          marker: {
            size: data.map(d => d.relevance * 10),
            color: data.map(d => d.relevance),
            colorscale: 'Viridis',
            showscale: true,
          },
        },
      ]}
      layout={{ title: 'Polar Scatter Plot: Intensity and Relevance by Topic' }}
    />
  );
};

export default PolarScatterPlot;

// src/components/ParallelCategories.js
import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChart = ({ data }) => {
  return (
    <Plot
    data={[
      {
        x: data.map(d => d.intensity),
        y: data.map(d => d.likelihood),
        text: data.map(d => d.relevance),
        mode: 'markers',
        marker: { size: data.map(d => d.relevance * 10) },
      },
    ]}
    layout={{
      title: 'Intensity vs Likelihood vs Relevance',
      xaxis: { title: 'Intensity' },
      yaxis: { title: 'Likelihood' },
    }}
  />
  );
};

export default BubbleChart;

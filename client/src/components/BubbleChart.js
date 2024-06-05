// src/components/BubbleChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const BubbleChart = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          text: data.map(d => d.country),
          mode: 'markers',
          marker: {
            size: data.map(d => d.relevance * 10),
          },
        },
      ]}
      layout={{ title: 'Impact of Factors' }}
    />
  );
};

export default BubbleChart;

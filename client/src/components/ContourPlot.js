// src/components/ContourPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const ContourPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          z: data.map(d => d.likelihood),
          x: data.map(d => d.intensity),
          y: data.map(d => d.relevance),
          type: 'contour',
        },
      ]}
      layout={{ title: 'Contour Plot: Likelihood vs. Intensity' }}
    />
  );
};

export default ContourPlot;

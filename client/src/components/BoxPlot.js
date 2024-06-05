// src/components/BoxPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const BoxPlot = ({ data }) => {
  const years = Array.from(new Set(data.map(d => d.year)));

  const traces = years.map(year => ({
    y: data.filter(d => d.year === year).map(d => d.intensity),
    type: 'box',
    name: year.toString(),
  }));

  return (
    <Plot
      data={traces}
      layout={{ title: 'Distribution of Intensity by Year' }}
    />
  );
};

export default BoxPlot;

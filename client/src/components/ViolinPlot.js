    // src/components/ViolinPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const ViolinPlot = ({ data }) => {
  const regions = Array.from(new Set(data.map(d => d.region)));

  const traces = regions.map(region => ({
    y: data.filter(d => d.region === region).map(d => d.likelihood),
    type: 'violin',
    name: region,
    box: { visible: true },
    meanline: { visible: true },
  }));

  return (
    <Plot
      data={traces}
      layout={{ title: 'Likelihood by Region' }}
    />
  );
};

export default ViolinPlot;

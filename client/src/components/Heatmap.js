// src/components/Heatmap.js
import React from 'react';
import Plot from 'react-plotly.js';

const Heatmap = ({ data }) => {
  const xValues = data.map(d => d.intensity);
  const yValues = data.map(d => d.likelihood);

  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: 'heatmap',
          colorscale: 'Viridis',
        },
      ]}
      layout={{ title: 'Intensity vs. Likelihood Heatmap' }}
    />
  );
};

export default Heatmap;

// src/components/Histogram3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const Histogram3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.intensity),
          y: data.map(d => d.likelihood),
          z: data.map(d => d.relevance),
          type: 'histogram3d',
        },
      ]}
      layout={{ title: '3D Histogram: Distribution of Intensity and Likelihood' }}
    />
  );
};

export default Histogram3D;

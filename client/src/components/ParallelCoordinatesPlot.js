// src/components/ParallelCoordinatesPlot.js
import React from 'react';
import Plot from 'react-plotly.js';

const ParallelCoordinatesPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'parcoords',
          dimensions: [
            {
              label: 'Intensity',
              values: data.map(d => d.intensity),
            },
            {
              label: 'Likelihood',
              values: data.map(d => d.likelihood),
            },
            {
              label: 'Relevance',
              values: data.map(d => d.relevance),
            },
            {
              label: 'Year',
              values: data.map(d => d.year),
            },
          ],
        },
      ]}
      layout={{ title: 'Parallel Coordinates Plot: Multiple Dimensions' }}
    />
  );
};

export default ParallelCoordinatesPlot;

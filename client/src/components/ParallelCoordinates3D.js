// src/components/ParallelCoordinates3D.js
import React from 'react';
import Plot from 'react-plotly.js';

const ParallelCoordinates3D = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'parcoords',
          line: {
            color: data.map(d => d.relevance),
            colorscale: 'Viridis',
            showscale: true,
          },
          dimensions: [
            {
              range: [Math.min(...data.map(d => d.intensity)), Math.max(...data.map(d => d.intensity))],
              label: 'Intensity',
              values: data.map(d => d.intensity),
            },
            {
              range: [Math.min(...data.map(d => d.likelihood)), Math.max(...data.map(d => d.likelihood))],
              label: 'Likelihood',
              values: data.map(d => d.likelihood),
            },
            {
              range: [Math.min(...data.map(d => d.relevance)), Math.max(...data.map(d => d.relevance))],
              label: 'Relevance',
              values: data.map(d => d.relevance),
            },
            {
              range: [Math.min(...data.map(d => d.year)), Math.max(...data.map(d => d.year))],
              label: 'Year',
              values: data.map(d => d.year),
            },
          ],
        },
      ]}
      layout={{ title: '3D Parallel Coordinates Plot: Multiple Dimensions Visualization' }}
    />
  );
};

export default ParallelCoordinates3D;

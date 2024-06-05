// src/components/ParallelCategories.js
import React from 'react';
import Plot from 'react-plotly.js';

const ParallelCategories = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'parcats',
          dimensions: [
            {
              label: 'Region',
              values: data.map(d => d.region),
            },
            {
              label: 'Country',
              values: data.map(d => d.country),
            },
            {
              label: 'Topic',
              values: data.map(d => d.topic),
            },
            {
              label: 'Sector',
              values: data.map(d => d.sector),
            },
          ],
          line: {
            color: data.map(d => d.intensity),
            colorscale: 'Viridis',
          },
        },
      ]}
      layout={{ title: 'Parallel Categories Diagram: Analysis of Multiple Categorical Variables' }}
    />
  );
};

export default ParallelCategories;

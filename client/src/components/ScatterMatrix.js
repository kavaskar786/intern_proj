// src/components/ScatterMatrix.js
import React from 'react';
import Plot from 'react-plotly.js';

const ScatterMatrix = ({ data }) => {
  return (
    <Plot
      data={[
        {
          type: 'splom',
          dimensions: [
            { label: 'Intensity', values: data.map(d => d.intensity) },
            { label: 'Likelihood', values: data.map(d => d.likelihood) },
            { label: 'Relevance', values: data.map(d => d.relevance) },
            { label: 'Year', values: data.map(d => d.year) },
          ],
          marker: { color: 'blue' },
        },
      ]}
      layout={{ title: 'Scatter Matrix: Relationships Between Multiple Variables' }}
    />
  );
};

export default ScatterMatrix;

// src/components/CorrelationHeatmap.js
import React from 'react';
import Plot from 'react-plotly.js';

const CorrelationHeatmap = ({ data }) => {
  const variables = ['intensity', 'likelihood', 'relevance', 'year'];
  const matrix = variables.map(x =>
    variables.map(y => {
      const xValues = data.map(d => d[x]);
      const yValues = data.map(d => d[y]);
      const correlation = xValues.reduce((sum, xVal, i) => sum + xVal * yValues[i], 0) / xValues.length;
      return correlation;
    })
  );

  return (
    <Plot
      data={[
        {
          z: matrix,
          x: variables,
          y: variables,
          type: 'heatmap',
          colorscale: 'Viridis',
        },
      ]}
      layout={{ title: 'Heatmap: Correlation Between Variables' }}
    />
  );
};

export default CorrelationHeatmap;

// src/components/Histogram.js
import React from 'react';
import Plot from 'react-plotly.js';

const Histogram = ({ data }) => {
  const relevanceData = data.map(d => d.relevance);

  return (
    <Plot
      data={[
        {
          x: relevanceData,
          type: 'histogram',
        },
      ]}
      layout={{ title: 'Distribution of Relevance' }}
    />
  );
};

export default Histogram;

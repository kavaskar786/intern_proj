// src/components/StepChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const StepChart = ({ data }) => {
  const likelihoodByYear = data.reduce((acc, cur) => {
    acc[cur.year] = (acc[cur.year] || 0) + cur.likelihood;
    return acc;
  }, {});

  const years = Object.keys(likelihoodByYear).sort();
  const likelihoods = years.map(year => likelihoodByYear[year]);

  return (
    <Plot
      data={[
        {
          x: years,
          y: likelihoods,
          type: 'scatter',
          mode: 'lines+markers',
          line: { shape: 'hv' },
        },
      ]}
      layout={{ title: 'Step Chart: Likelihood Trends Over Time' }}
    />
  );
};

export default StepChart;

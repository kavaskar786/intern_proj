import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available to display charts.</div>;
  }

  console.log('Data for Plotly charts:', data);


  return (
      <Plot
      data={[
        {
          x: data.map(d => d.country),
          y: data.map(d => d.intensity),
          type: 'bar',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ title: 'Intensity by Country' }}
    />

     
  );
};

export default PlotlyChart;

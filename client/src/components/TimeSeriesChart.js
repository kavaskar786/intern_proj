// src/components/TimeSeriesChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const TimeSeriesChart = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(d => d.year),
          y: data.map(d => d.intensity),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'blue' },
          name: 'Intensity',
        },
      ]}
      layout={{ title: 'Time Series Chart: Intensity Over Time' }}
    />
  );
};

export default TimeSeriesChart;

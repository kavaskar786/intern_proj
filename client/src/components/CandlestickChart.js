// src/components/CandlestickChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const CandlestickChart = ({ data }) => {
  const years = [...new Set(data.map(d => d.year))];
  const yearData = years.map(year => {
    const yearEntries = data.filter(d => d.year === year);
    return {
      year,
      open: yearEntries[0].intensity,
      high: Math.max(...yearEntries.map(d => d.intensity)),
      low: Math.min(...yearEntries.map(d => d.intensity)),
      close: yearEntries[yearEntries.length - 1].intensity,
    };
  });

  return (
    <Plot
      data={[
        {
          x: yearData.map(d => d.year),
          close: yearData.map(d => d.close),
          decreasing: { line: { color: 'red' } },
          high: yearData.map(d => d.high),
          increasing: { line: { color: 'green' } },
          line: { color: 'rgba(31,119,180,1)' },
          low: yearData.map(d => d.low),
          open: yearData.map(d => d.open),
          type: 'candlestick',
        },
      ]}
      layout={{ title: 'Candlestick Chart: Intensity by Year' }}
    />
  );
};

export default CandlestickChart;

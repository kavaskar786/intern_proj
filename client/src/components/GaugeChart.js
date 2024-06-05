// src/components/GaugeChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const GaugeChart = ({ data }) => {
  const regionIntensity = data.reduce((acc, cur) => {
    if (!acc[cur.region]) acc[cur.region] = { sum: 0, count: 0 };
    acc[cur.region].sum += cur.intensity;
    acc[cur.region].count += 1;
    return acc;
  }, {});

  const regions = Object.keys(regionIntensity);
  const avgIntensity = regions.map(
    region => regionIntensity[region].sum / regionIntensity[region].count
  );

  return (
    <Plot
      data={[
        {
          type: 'indicator',
          mode: 'gauge+number',
          value: avgIntensity.reduce((a, b) => a + b, 0) / regions.length,
          title: { text: 'Average Intensity by Region' },
          gauge: {
            axis: { range: [null, 10] },
            steps: regions.map((region, index) => ({
              range: [index, index + 1],
              color: `hsl(${(index * 360) / regions.length}, 100%, 50%)`,
              name: region,
            })),
          },
        },
      ]}
      layout={{ title: 'Gauge Chart: Average Intensity by Region' }}
    />
  );
};

export default GaugeChart;

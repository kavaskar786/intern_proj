// src/components/BulletChart.js
import React from 'react';
import Plot from 'react-plotly.js';

const BulletChart = ({ data }) => {
  const regions = {};
  data.forEach(d => {
    if (!regions[d.region]) regions[d.region] = { sum: 0, count: 0 };
    regions[d.region].sum += d.intensity;
    regions[d.region].count += 1;
  });

  const avgIntensities = Object.keys(regions).map(region => regions[region].sum / regions[region].count);

  return (
    <Plot
      data={Object.keys(regions).map((region, index) => ({
        type: 'indicator',
        mode: 'gauge+number+delta',
        value: avgIntensities[index],
        title: { text: region },
        delta: { reference: avgIntensities.reduce((a, b) => a + b, 0) / avgIntensities.length },
        gauge: {
          axis: { range: [null, Math.max(...avgIntensities)] },
          bar: { color: 'darkblue' },
          steps: [
            { range: [0, avgIntensities[index] / 2], color: 'lightgray' },
            { range: [avgIntensities[index] / 2, avgIntensities[index]], color: 'gray' },
          ],
        },
      }))}
      layout={{ title: 'Bullet Chart: Comparing Intensities across Regions' }}
    />
  );
};

export default BulletChart;

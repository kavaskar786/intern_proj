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
              bar: { color: '#65D3FD' },
              steps: avgIntensity.map((value, index) => ({
                range: [index * (10 / avgIntensity.length), (index + 1) * (10 / avgIntensity.length)],
                color: '#65D3FD'
              })),
              bordercolor: '#065D7F',
            },
          },
        ]}
        layout={{
          
          autosize: true,
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 40,
            pad: 4,
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default GaugeChart;

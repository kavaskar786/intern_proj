import React from 'react';
import Plot from 'react-plotly.js';

const TreemapChart = ({ data }) => {
  const levels = data.reduce((acc, cur) => {
    if (!acc[cur.region]) acc[cur.region] = {};
    acc[cur.region][cur.country] = (acc[cur.region][cur.country] || 0) + 1;
    return acc;
  }, {});

  const labels = ['Global'];
  const parents = [''];
  const values = [0];

  Object.keys(levels).forEach(region => {
    labels.push(region);
    parents.push('Global');
    values.push(Object.values(levels[region]).reduce((a, b) => a + b, 0));

    Object.keys(levels[region]).forEach(country => {
      labels.push(country);
      parents.push(region);
      values.push(levels[region][country]);
    });
  });

  return (
      <Plot
        data={[
          {
            type: 'treemap',
            labels,
            parents,
            values,
            marker: {
              colors: labels.map((label, index) => index === 0 ? '#65D3FD' : index % 2 === 0 ? '#65D3FD' : '#065D7F'),
            },
            textinfo: 'label+value+percent parent+percent entry',
            outsidetextfont: { size: 20, color: '#065D7F' },
            leaf: { opacity: 0.6 },
            marker: { line: { width: 2 } },
          },
        ]}
        layout={{
          title: 'Treemap: Hierarchical Data by Region and Country',
          autosize: true,
          font: {
            color: '#065D7F',
          },
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

export default TreemapChart;

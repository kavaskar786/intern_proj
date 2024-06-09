import React from 'react';
import Plot from 'react-plotly.js';

const SunburstChartSectorTopic = ({ data }) => {
  const levels = data.reduce((acc, cur) => {
    if (!acc[cur.sector]) acc[cur.sector] = {};
    acc[cur.sector][cur.topic] = (acc[cur.sector][cur.topic] || 0) + 1;
    return acc;
  }, {});

  const labels = ['All'];
  const parents = [''];
  const values = [0];

  Object.keys(levels).forEach(sector => {
    labels.push(sector);
    parents.push('All');
    values.push(Object.values(levels[sector]).reduce((a, b) => a + b, 0));

    Object.keys(levels[sector]).forEach(topic => {
      labels.push(topic);
      parents.push(sector);
      values.push(levels[sector][topic]);
    });
  });

  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            type: 'sunburst',
            labels,
            parents,
            values,
            marker: {
              colors: labels.map((label, index) => index === 0 ? '#65D3FD' : label === 'All' ? '#065D7F' : index % 2 === 0 ? '#65D3FD' : '#065D7F'),
            },
          },
        ]}
        layout={{
          title: 'Sunburst Chart: Hierarchical Data by Sector and Topic',
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
    </div>
  );
};

export default SunburstChartSectorTopic;

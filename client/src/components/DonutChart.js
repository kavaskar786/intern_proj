import React from 'react';
import Plot from 'react-plotly.js';

const DonutChart = ({ data }) => {
  const topicCounts = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + 1;
    return acc;
  }, {});

  return (
      <Plot
        data={[
          {
            labels: Object.keys(topicCounts),
            values: Object.values(topicCounts),
            type: 'pie',
            hole: 0.4,
            marker: {
              colors: ['#c7fdff','#c7fdff','#acf7fa','#89f6fa','#75f5fa','#48ecf7','#2fe8f5','#0febfa','#acf7fa']
            },
          },
        ]}
        layout={{ 
          title: 'DonutChart',
          autosize: true,
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 80,
            pad: 4
          },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default DonutChart;

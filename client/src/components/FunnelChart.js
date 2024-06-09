import React from 'react';
import Plot from 'react-plotly.js';

const FunnelChart = ({ data }) => {
  const topicCounts = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            type: 'funnel',
            y: Object.keys(topicCounts),
            x: Object.values(topicCounts),
            textposition: 'inside',
            textinfo: 'value+percent total',
            marker: {
              color: '#65D3FD',
              line: {
                width: 2,
                color: '#065D7F'
              }
            }
          },
        ]}
        layout={{
          title: 'Funnel Chart: Breakdown by Topic',
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
    </div>
  );
};

export default FunnelChart;

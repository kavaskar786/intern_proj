import React from 'react';
import Plot from 'react-plotly.js';

const PolarAreaChart = ({ data }) => {
  const topicRelevance = data.reduce((acc, cur) => {
    acc[cur.topic] = (acc[cur.topic] || 0) + cur.relevance;
    return acc;
  }, {});

  return (
      <Plot
        data={[
          {
            type: 'barpolar',
            r: Object.values(topicRelevance),
            theta: Object.keys(topicRelevance),
            marker: {
              color: Object.keys(topicRelevance).map((_, i) => `rgba(${101 + (i * 3) % 154}, ${211 - (i * 3) % 154}, 253, 0.8)`),  // Custom color theme
            },
          },
        ]}
        layout={{
          title: 'Polar Area Chart',
          autosize: true,
          polar: {
            radialaxis: {
              visible: true,
              range: [0, Math.max(...Object.values(topicRelevance))]
            },
            bgcolor: '#fff',
          },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 80,
            pad: 4,
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default PolarAreaChart;

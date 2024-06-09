import React from 'react';
import Plot from 'react-plotly.js';

const PieChart = ({ data }) => {
  const topics = [...new Set(data.map(d => d.topic))];
  const topicCounts = topics.map(topic => data.filter(d => d.topic === topic).length);

  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            values: topicCounts,
            labels: topics,
            type: 'pie',
            marker: {
              colors: topics.map((_, i) => `rgba(${101 + (i * 3) % 154}, ${211 - (i * 3) % 154}, 253, 0.8)`),  // Custom color theme
              line: {
                color: '#fff',
                width: 2
              }
            },
          },
        ]}
        layout={{
          title: 'Distribution of Topics',
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

export default PieChart;

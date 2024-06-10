import React from 'react';
import Plot from 'react-plotly.js';

const SunburstChart = ({ data }) => {
  const sectors = Array.from(new Set(data.map(d => d.sector)));
  const topics = Array.from(new Set(data.flatMap(d => d.topics)));

  const chartData = {
    type: "sunburst",
    labels: [...sectors, ...topics],
    parents: [
      ...sectors.map(() => ""), 
      ...data.flatMap(d => d.topics.map(() => d.sector))
    ],
    values: [
      ...sectors.map(sector => data.filter(d => d.sector === sector).length),
      ...topics.map(topic => data.filter(d => d.topics.includes(topic)).length)
    ],
    marker: {
      colors: [...sectors.map(() => '#65D3FD'), ...topics.map(() => '#065D7F')],
    },
  };

  return (
      <Plot
        data={[chartData]}
        layout={{
          title: 'Topics by Sector',
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

export default SunburstChart;

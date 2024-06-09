import React from 'react';
import Plot from 'react-plotly.js';

const MarimekkoChart = ({ data }) => {
  const topics = [...new Set(data.map(d => d.topic))];
  const regions = [...new Set(data.map(d => d.region))];

  const z = topics.map(topic =>
    regions.map(region =>
      data.filter(d => d.topic === topic && d.region === region).length
    )
  );

  return (
    <div className="chart-wrapper">
      <Plot
        data={[
          {
            type: 'meccano',
            x: regions,
            y: topics,
            z: z,
            colorscale: [
              [0, '#65D3FD'],
              [1, '#065D7F']
            ],
            showscale: true,
          },
        ]}
        layout={{
          title: 'Marimekko Chart: Topic Distribution by Region',
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
          xaxis: {
            title: 'Regions',
            tickfont: {
              color: '#065D7F',
            },
          },
          yaxis: {
            title: 'Topics',
            tickfont: {
              color: '#065D7F',
            },
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
};

export default MarimekkoChart;

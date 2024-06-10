import React from 'react';
import Plot from 'react-plotly.js';

const Histogram = ({ data }) => {
  const relevanceData = data.map(d => d.relevance);

  return (
      <Plot
        data={[
          {
            x: relevanceData,
            type: 'histogram',
            marker: {
              color: '#65D3FD',
            },
          },
        ]}
        layout={{
          title: 'Histogram',
          autosize: true,
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          margin: {
            l: 40,
            r: 40,
            b: 40,
            t: 80,
            pad: 4,
          },
          xaxis: {
            title: 'Relevance',
            tickfont: {
              color: '#065D7F',
            },
          },
          yaxis: {
            title: 'Count',
            tickfont: {
              color: '#065D7F',
            },
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default Histogram;

import React from 'react';
import Plot from 'react-plotly.js';

const ViolinPlot = ({ data }) => {
  const regions = Array.from(new Set(data.map(d => d.region)));

  const traces = regions.map(region => ({
    y: data.filter(d => d.region === region).map(d => d.likelihood),
    type: 'violin',
    name: region,
    box: { visible: true },
    meanline: { visible: true },
    line: { color: '#65D3FD' },
    fillcolor: 'rgba(101, 211, 253, 0.6)',
  }));

  return (
    <div className="chart-wrapper">
      <Plot
        data={traces}
        layout={{
          title: 'Likelihood by Region',
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

export default ViolinPlot;

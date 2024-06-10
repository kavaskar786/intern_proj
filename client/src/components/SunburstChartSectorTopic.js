import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const SunburstChartSectorTopic = ({ data }) => {
  const [currentData, setCurrentData] = useState({ labels: ['All'], parents: [''], values: [0] });

  useEffect(() => {
    let timeout;

    const updateChart = (newData) => {
      const levels = newData.reduce((acc, cur) => {
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

      const updateData = (index) => {
        if (index < labels.length) {
          setCurrentData((prevData) => ({
            labels: [...prevData.labels, labels[index]],
            parents: [...prevData.parents, parents[index]],
            values: [...prevData.values, values[index]],
          }));
          timeout = setTimeout(() => updateData(index + 1), 100); // Adjust the delay for smoother effect
        }
      };

      setCurrentData({ labels: ['All'], parents: [''], values: [0] });
      updateData(1); // Start from index 1 to skip the initial 'All' label
    };

    updateChart(data);

    return () => clearTimeout(timeout);
  }, [data]);

  return (
      <Plot
        data={[
          {
            type: 'sunburst',
            labels: currentData.labels,
            parents: currentData.parents,
            values: currentData.values,
            marker: {
              colors: currentData.labels.map((label, index) => index === 0 ? '#65D3FD' : label === 'All' ? '#065D7F' : index % 2 === 0 ? '#65D3FD' : '#065D7F'),
            },
          },
        ]}
        layout={{
          title: 'SunburstChart SectorTopic',
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
            t: 80,
            pad: 4,
          },
        }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
  );
};

export default SunburstChartSectorTopic;

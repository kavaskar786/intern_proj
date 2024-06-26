import React from 'react';
import Plot from 'react-plotly.js';

const SankeyDiagram = ({ data }) => {
  const topicCounts = {};
  const countryCounts = {};
  const links = [];

  data.forEach(d => {
    if (!topicCounts[d.topic]) topicCounts[d.topic] = { count: 0, countries: {} };
    if (!countryCounts[d.country]) countryCounts[d.country] = { count: 0, topics: {} };

    topicCounts[d.topic].count += 1;
    topicCounts[d.topic].countries[d.country] = (topicCounts[d.topic].countries[d.country] || 0) + 1;

    countryCounts[d.country].count += 1;
    countryCounts[d.country].topics[d.topic] = (countryCounts[d.country].topics[d.topic] || 0) + 1;
  });

  Object.keys(topicCounts).forEach(topic => {
    Object.keys(topicCounts[topic].countries).forEach(country => {
      links.push({
        source: topic,
        target: country,
        value: topicCounts[topic].countries[country],
      });
    });
  });

  const nodes = [
    ...Object.keys(topicCounts).map((topic, index) => ({ name: topic, type: 'topic', index })),
    ...Object.keys(countryCounts).map((country, index) => ({ name: country, type: 'country', index })),
  ];

  const sources = links.map(link => nodes.findIndex(node => node.name === link.source));
  const targets = links.map(link => nodes.findIndex(node => node.name === link.target));
  const values = links.map(link => link.value);

  return (
      <Plot
        data={[
          {
            type: 'sankey',
            orientation: 'h',
            node: {
              pad: 15,
              thickness: 20,
              line: {
                color: '#65D3FD',  // Adjusted to fit the theme
                width: 0.5,
              },
              label: nodes.map(node => node.name),
              color: '#65D3FD',  // Adjusted to fit the theme
            },
            link: {
              source: sources,
              target: targets,
              value: values,
              color: 'rgba(101, 211, 253, 0.6)',  // Adjusted to fit the theme
            },
          },
        ]}
        layout={{
          title: 'Sankey Diagram',
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

export default SankeyDiagram;

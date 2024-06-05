import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available to display charts.</div>;
  }

  console.log('Data for Plotly charts:', data);

  const topics = [...new Set(data.map(d => d.topic))];
  const topicCounts = topics.map(topic => data.filter(d => d.topic === topic).length);

  return (
    <div>
      <h2>Plotly.js Charts</h2>
      <Plot
      data={[
        {
          x: data.map(d => d.country),
          y: data.map(d => d.intensity),
          type: 'bar',
          marker: { color: 'blue' },
        },
      ]}
      layout={{ title: 'Intensity by Country' }}
    />

      {/* Pie Chart for Topics */}
      <Plot
        data={[
          {
            values: topicCounts,
            labels: topics,
            type: 'pie',
          },
        ]}
        layout={{
          title: 'Distribution of Topics',
          height: 600,  // Increase the height of the pie chart
        }}
      />

      {/* Bubble Chart for Intensity vs Likelihood vs Relevance */}
      <Plot
        data={[
          {
            x: data.map(d => d.intensity),
            y: data.map(d => d.likelihood),
            text: data.map(d => d.relevance),
            mode: 'markers',
            marker: { size: data.map(d => d.relevance * 10) },
          },
        ]}
        layout={{
          title: 'Intensity vs Likelihood vs Relevance',
          xaxis: { title: 'Intensity' },
          yaxis: { title: 'Likelihood' },
        }}
      />
    </div>
  );
};

export default PlotlyChart;

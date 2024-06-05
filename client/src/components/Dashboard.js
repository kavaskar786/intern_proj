import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Plot from 'react-plotly.js';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Process data for Chart.js
  const chartJsData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Process data for Plotly.js
  const plotlyData = [{
    x: data.map(item => item.year),
    y: data.map(item => item.likelihood),
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'blue' },
    name: 'Likelihood',
  }];

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Chart.js Chart</h2>
        <Line data={chartJsData} />
      </div>
      <div>
        <h2>Plotly.js Chart</h2>
        <Plot
          data={plotlyData}
          layout={{ width: 600, height: 300, title: 'Likelihood Over Years' }}
        />
      </div>
    </div>
  );
};

export default Dashboard;

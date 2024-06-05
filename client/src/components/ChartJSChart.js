import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all components
Chart.register(...registerables);

const ChartJSChart = ({ data }) => {
  const chartRef = useRef(null);
  

  useEffect(() => {
    console.log('Chart data:', data); // Add this line

    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (window.myChart) {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: 'bar', // or 'line', 'pie', etc.
      data: {
        labels: data.map(item => item.year), // Adjust as needed
        datasets: [{
          label: 'Intensity',
          data: data.map(item => item.intensity),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: data.map(item => item.year), // Adjust as needed
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartJSChart;

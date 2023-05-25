import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './web1.css'

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const renderChart = () => {
      const dataPoints = [
        { y: 1, x: '10:30 AM' },
        { y: 3, x: '11:30 AM' },
        { y: 5, x: '12:30 AM' },
        { y: 7, x: '1:30 PM' },
        { y: 9, x: '2:30 PM' },
        { y: 11, x: '3:30 PM' },
      ];

      const ctx = chartRef.current.getContext('2d');

      
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dataPoints.map((point) => point.x),
          datasets: [
            {
              label: 'API Call For Last 6 Hours',
              data: dataPoints.map((point) => point.y),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2, 
              pointRadius: 0,
              fill: false, 
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              title: {
                display: true,
              },
              suggestedMin: 0,
             
            },
            x: {
              title: {
                display: true,
              },
              grid: {
                display: true,
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          },
        },
      });
    };

    if (chartRef.current) {
      renderChart();
    }

  
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas className="chartContainer" ref={chartRef} />
    </div>
  );
};

export default ChartComponent;

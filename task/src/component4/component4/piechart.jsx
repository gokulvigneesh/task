import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './web2.css';

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;

    const renderChart = () => {
      const data = {
        datasets: [
          {
            data: [12, 19, 9],
            backgroundColor: ['red', 'blue', 'grey'],
          },
        ],
      };

      const ctx = chartRef.current.getContext('2d');

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'doughnut', 
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
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

  return <canvas className='con' ref={chartRef} />;
};

export default DonutChart;

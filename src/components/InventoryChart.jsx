// src/components/InventoryChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InventoryChart = ({ inventory }) => {
  // Prepare the data for the chart
  const labels = inventory.map((item) => item.name);
  const data = {
    labels,
    datasets: [
     
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inventory Levels',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default InventoryChart;

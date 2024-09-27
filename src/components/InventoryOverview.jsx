// src/components/InventoryOverview.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';

const InventoryOverview = () => {
  // Dummy data
  const data = {
    labels: ['Item A', 'Item B', 'Item C'],
    datasets: [
      {
        label: 'Stock Level',
        data: [12, 19, 3],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory Overview</h2>
      <Bar data={data} />
    </div>
  );
};

export default InventoryOverview;

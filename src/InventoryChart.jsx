// src/components/InventoryChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const InventoryChart = ({ inventory }) => {
  const data = inventory.map(item => ({
    name: item.name,
    quantity: item.quantity,
  }));

  return (
    <div className="mb-8 p-4 border rounded-lg shadow-lg bg-white">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="quantity" fill="#3E8B96" />
      </BarChart>
    </div>
  );
};

export default InventoryChart;

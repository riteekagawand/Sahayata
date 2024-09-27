// src/components/InventoryTable.jsx
import React from 'react';

const InventoryTable = ({ currentItems }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 border">Item Name</th>
          <th className="py-2 px-4 border">Quantity</th>
          <th className="py-2 px-4 border">Unit</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100">
            <td className="py-2 px-4 border">{item.name}</td>
            <td className="py-2 px-4 border">{item.quantity}</td>
            <td className="py-2 px-4 border">{item.unit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;

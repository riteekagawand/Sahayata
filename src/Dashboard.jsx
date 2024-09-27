// src/Dashboard.jsx
import React, { useState } from 'react';
import InventoryChart from './InventoryChart';
import InventoryTable from './InventoryTable';
import Pagination from './Pagination';

const Dashboard = ({ inventory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Logic for displaying current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Inventory Dashboard</h1>
      <InventoryChart inventory={inventory} />
      <InventoryTable currentItems={currentItems} />
      <Pagination
        totalItems={inventory.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Dashboard;

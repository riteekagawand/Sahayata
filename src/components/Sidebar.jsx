// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-600 p-5 text-white">
      <h2 className="text-2xl font-bold mb-6">Inventory Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/add">Add New Item</Link></li>
          <li><Link to="/manage">Manage Inventory</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

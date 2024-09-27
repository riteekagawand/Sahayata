// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import InventoryOverview from './components/InventoryOverview';
import AddItemForm from './components/AddItemForm';
import ManageInventory from './components/ManageInventory';
import InventoryChart from './components/InventoryChart';

function App() {
  // Sample inventory data
  const [inventory, setInventory] = useState([
    { name: 'Item A', quantity: 20 },
    { name: 'Item B', quantity: 15 },
    { name: 'Item C', quantity: 10 },
  ]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const deleteItem = (index) => {
    const updatedInventory = inventory.filter((_, i) => i !== index);
    setInventory(updatedInventory);
  };

  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <InventoryOverview />
                <InventoryChart inventory={inventory} /> {/* Pass the inventory data to the chart */}
              </>
            }
          />
          <Route path="/add" element={<AddItemForm addItem={addItem} />} />
          <Route path="/manage" element={<ManageInventory inventory={inventory} deleteItem={deleteItem} />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
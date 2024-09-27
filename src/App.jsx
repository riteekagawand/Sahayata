import React, { useState } from "react";
import InventoryForm from "./InventoryForm";
import InventoryList from "./InventoryList";
import Pagination from "./Pagination";
import Dashboard from "./Dashboard";
import InventoryTable from "./InventoryTable";

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust to fit your needs

  const addNewItem = (newItem) => {
    setInventory([...inventory, newItem]);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center mb-8"> Inventory Management</h1>
      <InventoryForm addNewItem={addNewItem} />
      <InventoryList items={currentItems} />
      <Pagination
        totalItems={inventory.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const InventoryForm = ({ addNewItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(newItem);
    setNewItem({ name: "", category: "", quantity: "", unit: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-100 p-6 rounded-md shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Add New Inventory Item</h2>
      <div className="mb-4">
        <label className="block mb-1">Item Name</label>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter item name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Category</label>
        <input
          type="text"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="e.g., Food, Medical Supplies"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Quantity</label>
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter quantity"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Unit</label>
        <select
          value={newItem.unit}
          onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select unit</option>
          <option value="kg">Kilograms</option>
          <option value="liters">Liters</option>
          <option value="tons">Tons</option>
          <option value="packs">Packs</option>
          <option value="pieces">Pieces</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Location</label>
        <input
          type="text"
          value={newItem.location}
          onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Warehouse or storage location"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Item
      </button>
    </form>
  );
};

export default InventoryForm;

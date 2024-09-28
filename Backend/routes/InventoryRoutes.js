import express from 'express';
import {
  addInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
  getAllInventoryItems,
  getInventoryItemById
} from '../Controller/InventoryController'; // Updated file path

const router = express.Router();

// Add inventory item route
router.post('/', addInventoryItem);

// Update inventory item route
router.put('/:id', updateInventoryItem);

// Delete inventory item route
router.delete('/:id', deleteInventoryItem);

// Get all inventory items route
router.get('/', getAllInventoryItems);

// Get inventory item by ID route
router.get('/:id', getInventoryItemById);

export default router;

import Inventory from '../models/Inventory.js';

// Add new inventory item
export const addInventoryItem = async (req, res) => {
  const {
    itemName,
    quantity,
    unit,
    location,
    category,
    condition,
    expiryDate,
    supplierName,
    contactInfo
  } = req.body;

  // Check for required fields
  if (!itemName || !quantity || !unit || !location || !category || !condition || !supplierName || !contactInfo) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    // Create new inventory item
    const newItem = new Inventory({
      itemName,
      quantity,
      unit,
      location,
      category,
      condition,
      expiryDate,
      supplierName,
      contactInfo
    });

    // Save the item to the database
    await newItem.save();

    res.status(201).json({ msg: 'Inventory item added successfully', newItem });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update inventory item
export const updateInventoryItem = async (req, res) => {
  const {
    itemName,
    quantity,
    unit,
    location,
    category,
    condition,
    expiryDate,
    supplierName,
    contactInfo
  } = req.body;

  try {
    // Find inventory item by ID
    let item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Inventory item not found' });
    }

    // Update item fields
    item = await Inventory.findByIdAndUpdate(
      req.params.id,
      { $set: { itemName, quantity, unit, location, category, condition, expiryDate, supplierName, contactInfo } },
      { new: true }
    );

    res.status(200).json({ msg: 'Inventory item updated successfully', item });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete inventory item
export const deleteInventoryItem = async (req, res) => {
  try {
    // Find inventory item by ID
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Inventory item not found' });
    }

    // Remove the item
    await item.remove();

    res.status(200).json({ msg: 'Inventory item deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all inventory items
export const getAllInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get inventory item by ID
export const getInventoryItemById = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Inventory item not found' });
    }
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

import mongoose from 'mongoose';

// Define the inventory schema with relevant fields
const InventorySchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String, // e.g., kg, liters, units
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String, // e.g., food, medical supplies, equipment
    required: true
  },
  condition: {
    type: String, // e.g., new, used, expired
    required: true
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  expiryDate: {
    type: Date, // For items with a shelf life
    required: function() {
      return this.category === 'food' || this.category === 'medical supplies';
    }
  },
  supplierName: {
    type: String, // Supplier or donor name
    required: true
  },
  contactInfo: {
    type: String, // Contact details of the supplier/donor
    required: true
  }
});

// Export the inventory model
const Inventory = mongoose.model('Inventory', InventorySchema);
export default Inventory;

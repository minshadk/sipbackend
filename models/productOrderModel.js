const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },

  orderNumber: {
    type: Number,
    required: [true, "A Product must have a orderNumber"]
  },

  contact: {
    type: String,
    required: [true, "A Product must have a contact"]
  },

  deliveryDetails: {
    type: String,
    trim: true
  },

  status: {
    type: String
  }
});

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

module.exports = ProductOrder;

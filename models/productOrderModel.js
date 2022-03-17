const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },

  // productId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },

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

  // Change to enum
  status: {
    type: String
  }
});

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

module.exports = ProductOrder;

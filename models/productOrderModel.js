const mongoose = require("mongoose");

const productOrderSchema = new mongoose.Schema({
  product: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },

  orderNumber: {
    type: String,
    required: [true, "A Product must have a orderNumber"]
  },

  phoneNumber: {
    type: String,
    required: [true, "A Product must have a phone number"]
  },

  deliveryAddress: {
    type: String,
    trim: true
  },

  // Change to enum
  status: {
    type: String,
    default:"ordered"
  }
});

const ProductOrder = mongoose.model("ProductOrder", productOrderSchema);

module.exports = ProductOrder;

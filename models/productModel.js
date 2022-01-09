const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },

  minOrder: {
    type: Number
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String
    //   required:[true,"A Product must have a image"]
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

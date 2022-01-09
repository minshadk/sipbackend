const Product = require("../models/productModel");

// Creating a product

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);

    const newProduct = await Product.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product: newProduct
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send"
    });
  }
};

const Product = require("../models/productModel");

// Creating a product
exports.createProduct = async (req, res) => {
  console.log("form submited to the backend");
  console.log(req.body);

  const productDetails = {
    ...req.body,
    image: req.file.path
  };

  try {
    const newProduct = await Product.create(productDetails);

    res.status(201).json({
      status: "success",
      data: {
        product: newProduct
      }
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
      err,
    });
  }
};

// Getting all Product
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Getting one product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a Product
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        product
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Deleteing a product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

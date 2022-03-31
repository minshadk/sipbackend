const ProductOrder = require("../models/productOrderModel");

// Generating Orders
exports.generateOrder = async (req, res) => {
  try {
    const newOrder = await ProductOrder.create(req.body);
    
    res.status(201).json({
      status: "success",
      data: {
        order: newOrder
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",err
    });
  }
};

// Getting all Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ProductOrder.find();

    res.status(200).json({
      status: "success",
      results: orders.length,
      data: {
        orders
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Getting one Order
exports.getOrder = async (req, res) => {
  try {
    const order = await ProductOrder.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        order
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a Order
exports.updateOrder = async (req, res) => {
  try {
    const order = await ProductOrder.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        order
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Deleteing a Order
exports.deleteOrder = async (req, res) => {
  try {
    await ProductOrder.findByIdAndDelete(req.params.id);

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
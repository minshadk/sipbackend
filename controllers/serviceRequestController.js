const ServiceRequest = require("../models/serviceRequestModel");

// Generating a request
exports.generateRequest = async (req, res) => {
  try {
    console.log(req.body);

    const newRequest = await ServiceRequest.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        request: newRequest
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send"
    });
  }
};

// Getting all Order
exports.getAllOrder = async (req, res) => {
  try {
    const requests = await ServiceRequest.find();

    res.status(200).json({
      status: "success",
      results: requests.length,
      data: {
        requests
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Getting one Request
exports.getProduct = async (req, res) => {
  try {
    const request = await ServiceRequest.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        request
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a request
exports.updateRequest = async (req, res) => {
  try {
    const request = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        request
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
exports.deleteRequest = async (req, res) => {
  try {
    await ServiceRequest.findByIdAndDelete(req.params.id);

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

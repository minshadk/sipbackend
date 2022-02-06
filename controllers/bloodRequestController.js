const BloodRequest = require("../models/bloodRequestModel");

// Creating  a blood request
exports.generateBloodRequest = async (req, res) => {
  try {
    const newBloodRequest = await BloodRequest.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product: newBloodRequest
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send"
    });
  }
};

// Getting all BloodRequest
exports.getAllBloodRequest = async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.find();

    res.status(200).json({
      status: "success",
      results: bloodRequest.length,
      data: {
        bloodRequest
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Getting one blood request
exports.getBloodRequest = async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        bloodRequest
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a blood request
exports.updateBloodRequest = async (req, res) => {
  try {
    const bloodRequest = await BloodRequest.findByIdAndUpdate(
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
        bloodRequest
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Deleteing a blood request
exports.deleteBloodRequest = async (req, res) => {
  try {
    await BloodRequest.findByIdAndDelete(req.params.id);

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

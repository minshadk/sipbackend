const BloodDonor = require("../models/bloodDonorModel");

// Creating a product
exports.createBloodDonor = async (req, res) => {
  try {
    const newBloodDonor = await BloodDonor.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        product: newBloodDonor
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send"
    });
  }
};

// Getting all BloodDonor
exports.getAllBloodDonors = async (req, res) => {
  try {
    const bloodDonors = await BloodDonor.find();

    res.status(200).json({
      status: "success",
      results: bloodDonors.length,
      data: {
        bloodDonors
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Getting one BloodDonor
exports.getBloodDonor = async (req, res) => {
  try {
    const bloodDonor = await BloodDonor.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        bloodDonor
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

// Updateing a BloodDonor
exports.updateBloodDonor = async (req, res) => {
  try {
    console.log(req.params.id);
    const bloodDonor = await BloodDonor.findByIdAndUpdate(
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
        bloodDonor
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
    //   message: err
      message: "Its an error"
    });
  }
};

// Deleteing a product
exports.deleteBloodDonor = async (req, res) => {
  try {
    await BloodDonor.findByIdAndDelete(req.params.id);

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

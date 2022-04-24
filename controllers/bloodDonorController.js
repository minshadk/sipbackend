const BloodDonor = require("../models/bloodDonorModel");
const BloodRequest = require("../models/bloodRequestModel");

// Creating a product
exports.createBloodDonor = async (req, res) => {
  try {
    const newBloodDonor = await BloodDonor.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        bloodDonor: newBloodDonor,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data send",
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
        bloodDonors,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
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
        bloodDonor,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
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
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        bloodDonor,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      //   message: err
      message: "Its an error",
    });
  }
};

// Deleteing a product
exports.deleteBloodDonor = async (req, res) => {
  try {
    await BloodDonor.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Find  Donare

exports.getDonorByCondition = async (req, res) => {
  console.log("ist working");
  try {
    // const bloodRequest = await BloodRequest.findById(req.params.id);
    const bloodRequest = await BloodRequest.findById(
      "625d9f93d1a66c7c8e17e5b7"
    );

    const coordinates = bloodRequest.location.coordinates;
    const lat = coordinates[0];
    const lng = coordinates[1];

    const distanceInKilometer = 500000;
    const radius = distanceInKilometer / 6378.1;

    // const bloodGroup = bloodRequest.bloodGroup;
    const bloodGroup = "test +";

    // const bloodDonors = await BloodDonor.find({
    //   location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
    // })
    //   .sort("asc")
    //   .limit(5);

    // const a = bloodDonors.filter((donor) => {
    //   donor.bloodGroup === bloodGroup;
    // });

    // const bloodDonors = await BloodDonor.find({
    //   $and: [
    //     { loc: { $geoWithin: { $centerSphere: [[lng, lat], radius] } } },
    //     { bloodGroup: { $eq: bloodGroup } },
    //   ],
    // })
    //   .sort("asc")
    //   .limit(5);
    const bloodDonors = await BloodDonor.find({
      $and: [
        { loc: { $geoWithin: { $centerSphere: [[lng, lat], radius] } } },
        { bloodGroup: { $eq: bloodGroup } }
      ]
    })
      .sort("asc")
      .limit(5);

    // const bloodDonors = await BloodDonor.aggregate([
    //   { $match: { bloodGroup: "test +" } },
    // ]);

    var filteredDonorsByGroup = bloodDonors.filter(function (donor) {
      if (donor.bloodGroup === bloodGroup) {
        return donor;
      }
    });

    console.log(filteredDonorsByGroup);

    // console.log(bloodDonors)

    res.status(200).json({
      status: "success",
      data: {
        filteredDonorsByGroup,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

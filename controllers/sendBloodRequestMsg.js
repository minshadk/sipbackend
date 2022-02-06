const BloodRequest = require("../models/bloodRequestModel");

exports.findingByRadius = async (req, res) => {
  try {
    const lat =  59.9165591;
    const lng = 10.7881978;
    const distanceInKilometer = 10;
    const radius = distanceInKilometer / 6378.1;

    const result = await BloodRequest.find({
        location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } }
    }).sort("-score");

    res.status(200).json({
      status: "success",
      results: result.length,
      data: {
        result
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};


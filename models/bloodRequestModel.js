const mongoose = require("mongoose");

const bloodRequest = new mongoose.Schema({
  bloodGroup: {
    type: String,
    required: [true, "A blood request must have a blood group"]
  },

  patientName: {
      type:String,
  },

  cases: {
      type:String,
  },

  byStanderName: {
      type:String,
  },

  phoneNumber: {
    type: Number,
    required: [true, "A blood request must have a Phone Number"]
  },

  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    },
    // required: [true, "A blood request must have a location"]
  }
});

const BloodRequest = mongoose.model("BloodRequest",bloodRequest);

module.exports = BloodRequest;
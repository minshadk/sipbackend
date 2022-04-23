const mongoose = require("mongoose");

const bloodDonor = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
    // required: true
  },

  name: {
    type: String,
    required: [true, "A Donor must have a Name"]
  },

  bloodGroup: {
    type: String,
    required: [true, "A Donor must have a bloodgroup"]
  },

  // dateOfBirth: {
  //   type: Date,
  //   required: [true, "A Donor must have a Date of Birth"]
  // },

  phoneNumber: {
    type: Number,
    required: [true, "A Donor must have a Phone Number"]
  },

  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
    // required: [true, "A blood request must have a location"]
  },

  radius: {
    type: Number,
    required: [true, "A Donor must have a radius"]
  }
});

const BloodDonor = mongoose.model("BloodDonor", bloodDonor);

module.exports = BloodDonor;

const mongoose = require("mongoose");

const bloodDonor = new mongoose.Schema({
  // Id from userModle
  // name: {
  //     type: String,
  //     required: [true, "A Product must have a name"],
  //     unique: true,
  //     trim: true
  //   },

  bloodGroup: {
    type: String,
    required: [true, "A Donor must have a name"]
  },

  dateOfBirth: {
    type: Date,
    required: [true, "A Donor must have a Date of Birth"]
  },

  phoneNumber: {
    type: Number,
    required: [true, "A Donor must have a Phone Number"]
  },

  // location: {
  //   // May be needed to change type of location
  //   type: String,
  //   required: [true, "A Donor must have a Location"]
  // },
  location: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number]
    }
  },

  radius: {
    type: Number,
    required: [true, "A Donor must have a radius"]
  }
});

const BloodDonor = mongoose.model("BloodDonor", bloodDonor);

module.exports = BloodDonor;

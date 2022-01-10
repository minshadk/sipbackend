const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Service must have a name"],
    unique: true,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String
    //   required:[true,"A Product must have a image"]
  }
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
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

const Event = mongoose.model("event", eventSchema);

module.exports = Event;

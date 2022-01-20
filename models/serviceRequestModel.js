const mongoose = require("mongoose");

const serviceRequestSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },
  
  contact: {
    type: String,
    required: [true, "A Product must have a contact"]
  },

  details: {
    type: String,
    trim: true
  },

  // Change to enum
  status: {
    type: String
  }
});

const ServiceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);

module.exports = ServiceRequest;

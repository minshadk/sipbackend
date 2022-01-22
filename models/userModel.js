const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "A Product must have a name"],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, "A Product must have a email"]
  },
  password: {
    type: String,
    required: [true, "A Product must have a password"]
  },
  userType: {
    type: String,
    required: [true, "A Product must have a user type"]
  },
  subscribed: {
    type: String
  }
});

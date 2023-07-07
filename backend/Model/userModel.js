const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    gender: { type: String },
    contact: { type: String },
    email: { type: String },
    dateOfBirth: { type: Date },
    role: { type: String },
    password: { type: String },
    status: { type: String },
    verify: { type: String },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;

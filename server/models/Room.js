const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: String,
  type: {
    type: String,
    enum: ["single", "twin"],
    required: true,
  },
  occupants: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: String,
    },
  ],
  maxOccupancy: Number,
  isAvailable: {
    type: Boolean,
    default: true,
  },
  // Preference-related traits
  floorLevel: Number,
  hasWindow: Boolean,
  hasAC: Boolean,
  hasBalcony: Boolean,
});

module.exports = mongoose.model("Room", roomSchema);

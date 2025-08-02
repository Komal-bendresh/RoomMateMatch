const mongoose = require("mongoose");

const occupantSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
});

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ["single", "twin"], required: true },
  maxOccupancy: {
    type: Number,
    required: true,
    default: function () {
      return this.type === "single" ? 1 : 2;
    },
  },
  occupants: {
    type: [occupantSchema],
    default: [],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  // Optional: extra room preference features
  hasWindow: { type: Boolean, default: false },
  hasBalcony: { type: Boolean, default: false },
  floorLevel: { type: Number, default: 1 },
});

// Auto-update isAvailable before save
roomSchema.pre("save", function (next) {
  this.isAvailable = this.occupants.length < this.maxOccupancy;
  next();
});

const Room = mongoose.model("Room", roomSchema);
module.exports = Room;

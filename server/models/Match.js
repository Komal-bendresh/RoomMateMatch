const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: String,
  matchName: String,
  score: Number,
  reason: String,
  assignedRoom: {
    roomNumber: String,
    type: String,
  },
});

module.exports = mongoose.model("Match", matchSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },

  preferences: {
    sleepSchedule: { type: String, enum: ['EARLY_BIRD', 'NIGHT_OWL'] },
    cleanliness: { type: String, enum: ['VERY_CLEAN', 'CLEAN', 'RELAXED'] },
    StressManagement: { type: String, enum: ['JOURNALING', 'TALKING', 'MEDITATING', 'OTHER'] },
    guestPolicy: { type: String, enum: ['OFTEN', 'OCCASIONALLY', 'RARELY'] },
    DowntimeStyle: { type: String, enum: ['ACTIVE', 'QUIET'] },
  },

  roomPreferences: {
    window: String,                // "yes", "no", "no preference"
    preferredFloorLevel: String,  // "1", "2", "3", "any"        
    balcony: String               // "yes", "no", "no preference"
  },

  assignedRoom: {
    roomNumber: { type: String },
    type: { type: String, enum: ["single", "twin"] }
  },

  agreements: [
    {
      clause: String,
      createdAt: { type: Date, default: Date.now },
    }
  ],

  // Store ID of matched user (optional)
  matchUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },

  // Store match details directly (safe for UI display)
  matchDetails: {
    name: String,
    score: Number,
    reason: String,
  },

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

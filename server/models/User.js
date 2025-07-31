const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },

  preferences: {
  cleanliness: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  sleepSchedule: { type: String, enum: ['Early Bird', 'Night Owl', 'Flexible'], default: 'Flexible' },
  guestPolicy: { type: String, enum: ['Strict', 'Flexible', 'Open'], default: 'Flexible' },
  foodPreference: { type: String, enum: ['Veg', 'Non-Veg', 'Mixed'], default: 'Mixed' },
  studyHabits: { type: String, enum: ['Quiet', 'Collaborative', 'Flexible'], default: 'Flexible' }
}

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  password: { type: String, required: true },

 preferences: {
   sleepSchedule: {
    type: String,
    enum: ['Early bird', 'Night owl'],
   
  },
  cleanliness: {
    type: String,
    enum: ['High', 'Moderate', 'Low'],
   
  },
 
   StressManagement: {
    type: String,
    enum: ['Journaling', 'Talking', 'Meditating', 'Other'],
    
  },
  guestPolicy: {
    type: String,
    enum: ['Often', 'Occasionally', 'Rarely'],
    
  },
  DowntimeStyle: {
    type: String,
    enum: ['Active', 'Quiet'],
   
  }
 },
roomPreferences: {
  window: String,                // "yes", "no", "no preference"
  preferredFloorLevel: String,  // "1", "2", "3", "any"        
  balcony: String               // "yes", "no", "no preference"
},
assignedRoom: {
  roomNumber: String,
  type: String, // 'single' or 'twin'
  matchName: String, // optional
},
agreements: [
  {
    clause: String,
    createdAt: { type: Date, default: Date.now },
  }
],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

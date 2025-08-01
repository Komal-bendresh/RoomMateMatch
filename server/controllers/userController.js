const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

const savePreferences = async (req, res) => {
  const { cleanliness, sleepSchedule, StressManagement, guestPolicy, DowntimeStyle } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.preferences = { cleanliness, sleepSchedule, StressManagement, guestPolicy, DowntimeStyle };
    await user.save();

    res.status(200).json({ message: 'Preferences saved successfully', preferences: user.preferences });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUserPreferences = async (req, res) => {
  const { id } = req.params;
  const { roomPreferences } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { roomPreferences },
      { new: true }
    );
    res.json({ message: "Preferences updated", user });
  } catch (err) {
    res.status(500).json({ error: "Failed to update preferences" });
  }
};

module.exports = { createUser, getUsers,savePreferences,updateUserPreferences,getUserById};

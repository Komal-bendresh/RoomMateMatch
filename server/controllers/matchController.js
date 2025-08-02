const getMatchFromGPT = require("../utils/gptMatch");
const assignRoom = require("../utils/assignRoom");
const Match = require("../models/Match");
const User = require("../models/User");

exports.matchUser = async (req, res) => {
  const { userId } = req.body;


  try {
    console.log("📥 Received match request for user:", userId);
    const newUser = await User.findById(userId).lean();
    const otherUsers = await User.find({ _id: { $ne: userId } }).lean();

    if (!newUser || otherUsers.length === 0) {
      const fallbackMatch = new Match({
        userId,
        userName: newUser?.name,
        matchName: "No match available",
        score: 0,
        reason: "No other users found",
        assignedRoom: null,
      });
      await fallbackMatch.save();
      return res.json({ message: "No match found", match: fallbackMatch });
    }

    const { matchName, score, reason } = await getMatchFromGPT(newUser, otherUsers);
const roomResult = await assignRoom(userId, newUser.name, matchName, score, reason);
const matchedUser = await User.findOne({ name: matchName });
const matchedUserId = matchedUser ? matchedUser._id : null;

    const newMatch = new Match({
      userId,
      userName: newUser.name,
      matchName,
      score,
      reason,
      assignedRoom: roomResult.assignedRoom,
    });

    await newMatch.save();

    // ✅ Update the user with assignedRoom + match info
await User.findByIdAndUpdate(userId, {
  assignedRoom: roomResult.assignedRoom,
  matchUserId: matchedUserId, // if you have it
  matchDetails: {
    name: matchName,
    score,
    reason,
  }
});

    res.json({ message: "Match + Room assigned", match: newMatch });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Matching failed" });
  }
};


exports.getMatchByUserId = async (req, res) => {
  try {
    const match = await Match.findOne({ user: req.params.userId });

    if (!match) {
      return res.status(404).json({ error: "Match not found" });
    }

    res.status(200).json(match);
  } catch (err) {
    console.error("Error fetching match by user:", err);
    res.status(500).json({ error: "Server error" });
  }
};

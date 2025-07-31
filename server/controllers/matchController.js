const axios = require("axios"); // if calling external Python or GPT API
const getMatchFromGPT = require("../utils/gptMatch"); //
const User = require("../models/User");
const Match = require("../models/Match");

 const matchUser=   async (req, res) => {
  const { userId } = req.body;

  try {
    const newUser = await User.findById(userId).lean();
    if (!newUser) return res.status(404).json({ error: "User not found" });

    const otherUsers = await User.find({ _id: { $ne: userId } }).lean();

    if (otherUsers.length === 0) {
      const newMatch = new Match({
        userId,
        matchName: "No match available yet",
        score: 0,
        reason: "There are no other users in the system to compare with. Try again later.",
      });
      await newMatch.save();
      return res.json({ message: "No match found. Saved default entry.", match: newMatch });
    }

    const { matchName, score, reason } = await getMatchFromGPT(newUser, otherUsers);

    const newMatch = new Match({
      userId,
      matchName,
      score,
      reason,
    });
    await newMatch.save();

    res.json({ message: "Match saved", match: newMatch });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Match process failed" });
  }
};

module.exports={matchUser}
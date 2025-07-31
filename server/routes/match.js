// routes/match.js
const express = require("express");
const router = express.Router();
const Match = require("../models/Match");
const User = require("../models/User");
const axios = require("axios"); // if calling external Python or GPT API
const getMatchFromGPT = require("../utils/gptMatch"); //

router.post("/", async (req, res) => {
  const { userId } = req.body;

  try {
    const newUser = await User.findById(userId).lean();
    if (!newUser) return res.status(404).json({ error: "User not found" });

    const otherUsers = await User.find({ _id: { $ne: userId } }).lean();

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
});
module.exports = router;

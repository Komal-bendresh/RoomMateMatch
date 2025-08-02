// routes/match.js
const express = require("express");
const router = express.Router();
const Match = require("../models/Match");
const User = require("../models/User");
const {matchUser,getMatchByUserId} = require("../controllers/matchController")

router.post("/", matchUser);
router.get("/by-user/:userId", getMatchByUserId);

module.exports = router;

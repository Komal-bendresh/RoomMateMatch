// controllers/playgroundController.js
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const User = require('../models/User'); // Make sure this path is correct

// 🤖 AI Conflict Mediation using Groq/OpenAI
const mediateConflict = async (req, res) => {
  const { conflictDescription } = req.body;

  if (!conflictDescription) {
    return res.status(400).json({ error: 'Please provide the conflict description.' });
  }

  try {
    const prompt = `You are Roommate Harmony AI. A user described the situation as:
"${conflictDescription}"
Your task:
1. Provide a neutral resolution suggestion.
2. Create a short one-line Roommate Agreement clause.
Respond in the following format:
Resolution Suggestion: <text>
Agreement Clause: <text>`;

    const response = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
      model: 'llama3-70b-8192',
      messages: [{ role: 'user', content: prompt }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const aiText = response.data.choices[0].message.content;
    const suggestion = aiText.match(/Resolution Suggestion:\s*(.*)/)?.[1];
    const agreement = aiText.match(/Agreement Clause:\s*(.*)/)?.[1];

    res.json({ suggestion, agreement });
  } catch (error) {
    console.error('Groq API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to mediate conflict using AI.' });
  }
};


// 💾 Save agreement to user profile
const saveAgreement = async (req, res) => {
  const { agreement, userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.agreements) user.agreements = [];
    user.agreements.push({ clause: agreement, createdAt: new Date() });

    await user.save();

    res.status(200).json({ message: 'Agreement saved to user profile!' });
  } catch (err) {
    console.error('Save error:', err);
    res.status(500).json({ error: 'Could not save agreement.' });
  }
};

// 🎮 Return random "This or That" options
const getThisOrThat = async (req, res) => {
  const options = [
    ['Mountains', 'Beach'],
    ['Cats', 'Dogs'],
    ['Coffee', 'Tea'],
    ['Netflix', 'YouTube'],
    ['Books', 'Podcasts'],
    ['Stay in', 'Go out'],
    ['AC', 'Fan'],
    ['Sleep early', 'Wake up late']
  ];

  const random = options[Math.floor(Math.random() * options.length)];
  res.json({ option1: random[0], option2: random[1] });
};

module.exports = {
  mediateConflict,
  saveAgreement,
  getThisOrThat,
};

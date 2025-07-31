// utils/gptMatch.js
require("dotenv").config();
const axios = require("axios");

async function getMatchFromGPT(newUser, otherUsers) {
  const prompt = `
A new user is looking for a compatible roommate. Below is her data:
New User:
${JSON.stringify(newUser, null, 2)}

Compare this user with the list of existing users and return:
- The most compatible user's full name
- A compatibility score out of 100
- A brief reason for the match

Existing Users:
${JSON.stringify(otherUsers, null, 2)}

Respond ONLY in this JSON format:
{
  "matchName": "Full Name",
  "score": number,
  "reason": "short reason"
}
`;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "mixtral-8x7b-32768",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.4,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const content = response.data.choices[0].message.content;

    // Convert response string to JSON
    const matchData = JSON.parse(content);
    return matchData;

  } catch (err) {
    console.error("Error from GPT:", err.response?.data || err.message);
    throw new Error("Failed to get match from GPT");
  }
}

module.exports = getMatchFromGPT;

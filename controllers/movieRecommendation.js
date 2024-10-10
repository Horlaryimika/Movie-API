require("dotenv").config();
const OpenAI = require("openai").OpenAI;
const openai = new OpenAI();
const movieRecommendation = async (req, res) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Write a haiku about recursion in programming.",
      },
    ],
  });

  console.log(completion.choices[0].message);

  res.status(200).json({
    status: "Hello from openai",
  });
};

module.exports = movieRecommendation;

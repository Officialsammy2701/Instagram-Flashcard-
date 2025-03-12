const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const bibleVerses = [
  { verse: "John 3:16", text: "For God so loved the world..." },
  { verse: "Philippians 4:13", text: "I can do all things through Christ..." },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you..." }
];

const dailyQuotes = [
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "With God all things are possible."
];

const affirmations = [
  "I am loved and valued.",
  "I trust in God’s plan for me.",
  "Today is a day full of blessings."
];

function getDailyContent() {
  const seed = new Date().toDateString();
  const randomIndex = (arr) => Math.abs(seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % arr.length;

  return {
    date: new Date().toISOString().split("T")[0],
    day: new Date().toLocaleString("en-US", { weekday: "long" }),
    bible_verse: bibleVerses[randomIndex(bibleVerses)],
    quote: dailyQuotes[randomIndex(dailyQuotes)],
    affirmation: affirmations[randomIndex(affirmations)]
  };
}

app.get("/api/daily-flashcard", (req, res) => {
  res.json(getDailyContent());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

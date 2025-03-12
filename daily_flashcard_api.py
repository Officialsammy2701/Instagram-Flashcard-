# Daily Flashcard API

from flask import Flask, request, jsonify
import random
import datetime

app = Flask(__name__)

# sample data (can be replaced with database later)

bible_verses = [
    {"verse": "John 3:16", "reference": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."},
    {"verse": "Psalm 23:1", "reference": "The Lord is my shepherd, I lack nothing."},
    {"verse": "Philippians 4:13", "reference": "I can do all this through him who gives me strength."},
    {"verse": "Psalm 27:1", "reference": "The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid?"}
]

daily_quotes = [
    {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"quote": "The best preparation for tomorrow is doing your best today.", "author": "H. Jackson Brown Jr."},
    {"quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer"},
    {"quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"}
]

affirmations = [
    "I am enough.",
    "I am worthy of love and respect.",
    "I am capable of achieving my goals.",
    "I am deserving of good things.",
]

# Function to get daily content

def get_daily_content():
    seed = datetime.date.today().toordinal()  # Ensure new content each day
    random.seed(seed)
    return {
        "date": datetime.date.today().strftime("%Y-%m-%d"),
        "day":  datetime.date.today().strftime("%A"),
        "bible_verse": random.choice(bible_verses),
        "daily_quote": random.choice(daily_quotes),
        "affirmation": random.choice(affirmations)
    }

# API route to get daily content
@app.route('/api/daily-flashcard', methods=['GET'])
def daily_flashcard():
    return jsonify(get_daily_content())
if __name__ == '__main__':
    app.run(debug=True)
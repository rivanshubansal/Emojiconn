import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Tears Of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😊": "Smiling with Eyes",
  "🥰": "Smiling with Hearts",
  "🙂": "Slightly Smiling",
  "👿": "Angry",
  "😒": "Unamused Face",
  "😭": "Crying",
  "👋": "Bbyee",
  "👏": "Clapping",
  "😱": "Fear Face",
  "🤩": "Star-Struck",
  "🤗": "Hug",
  "❤️": "Love"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;

    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
      <h4 style={{ padding: "2rem" }}> By Rivanshu Bansal</h4>
    </div>
  );
}

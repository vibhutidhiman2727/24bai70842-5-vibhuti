import { useState } from "react";
import "./styles.css";

function App() {
  const maxLimit = 200;

  const [text, setText] = useState("");

  // Character count
  const charCount = text.length;

  // Word count
  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Remaining characters
  const remaining = maxLimit - charCount;

  return (
    <div className="container">
      <div className="card">
        <h1>Live Character Counter</h1>

        <textarea
          placeholder="Start typing your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Counter Section */}
        <div className="counter-box">
          <div className="counter-item">
            <h3>{charCount}</h3>
            <p>Characters</p>
          </div>

          <div className="counter-item">
            <h3>{wordCount}</h3>
            <p>Words</p>
          </div>

          <div className="counter-item">
            <h3>{remaining}</h3>
            <p>Remaining</p>
          </div>
        </div>

        {charCount > maxLimit && (
          <p className="error">⚠ Character limit exceeded!</p>
        )}

        <button onClick={() => setText("")}>Reset</button>
      </div>
    </div>
  );
}

export default App;

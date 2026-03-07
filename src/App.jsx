import { useState } from "react";
import "./styles.css";

function App() {
  const maxLimit = 200;
  const [text, setText] = useState("");

  const charCount = text.length;

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const remaining = maxLimit - charCount;

  return (
    <div className="container">
      <div className="card">
        <h1>Live Character Counter</h1>

        <textarea
          placeholder="Start typing your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="counter-box">
          <p>Characters: {charCount}</p>
          <p>Words: {wordCount}</p>
          <p>Remaining: {remaining}</p>
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
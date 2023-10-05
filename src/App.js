import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handaleInput = (e) => {
    setInput(e.target.value);
  };
  const handleNext = () => {
    if (input) {
      const lastChar = input.charCodeAt(input.length - 1);
      const nextCharCode = lastChar + 1;
      const nextChar = String.fromCharCode(nextCharCode);
      setOutput((prev) => prev + nextChar);
    }
  };
  const handlePrevious = () => {
    setInput((prev) => prev.slice(0, -1));
  };
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        placeholder="type here"
        onChange={handaleInput}
      />
      <button onClick={handleNext}>next</button>
      <button onClick={handlePrevious}>previous</button>
      <div>
        {input}
        {output}
      </div>
    </div>
  );
}

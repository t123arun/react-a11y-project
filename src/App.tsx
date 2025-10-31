import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result] = useState(null);

  const handleCalculate = () => {};

  return (
    <main
      style={{ padding: "20px", backgroundColor: "#fff", color: "#222" }}
      aria-labelledby="app-title"
    >
      <header>
        <h1 id="app-title">String Calculator</h1>
      </header>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
        alt="A white yarn on white surface"
      />

      <h2 style={{ fontSize: "20px" }}>Enter numbers</h2>

        <label htmlFor="numbers-input">Input Number</label>
        <textarea
          id="numbers-input"
          style={{ margin: "10px 0", color: "#555" }}
          name="numbers-input"
          placeholder="Enter numbers"
          aria-required="true"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          aria-label="Calculate result"
          onClick={handleCalculate}
          style={{
            padding: "10px",
            backgroundColor: "#0078D4",
            color: "#fff",
            border: "none",
          }}
        >
          Calculate
        </button>

      {result !== null && (
        <p aria-live="polite" style={{ color: "green" }}>
          Result: {result}
        </p>
      )}

      <div role="alert" aria-atomic="true">
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </main>
  );
};

export default App;

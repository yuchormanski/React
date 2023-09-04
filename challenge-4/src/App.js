import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <Counter />
    </div>
  );

  function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function handleReset() {
      setStep(1);
      setCount(0);
    }

    return (
      <div>
        <div key={1231}>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span>Step: {step}</span>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <input
            type="text"
            placeholder="0"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((c) => c + step)}>+</button>

          <p>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{date.toDateString()}</span>
          </p>
          {count !== 0 || step !== 1 ? (
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
          ) : null}
        </div>

        {/* {count !== 0 ? (
          <button
            onClick={() => {
              setStep(1);
              setCount(0);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}

export default App;

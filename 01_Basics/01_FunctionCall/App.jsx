import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function callFunc() {
    alert("Function called");
  }

  let pass = (FruitName) => {
    alert(FruitName);
  };
  return (
    <>
      <h1>Event and Function call</h1>
      <button onClick={callFunc}>Normal Function</button>

      {/* Passing arguments through function */}
      <button
        onClick={() => {
          pass("Apple");
        }}
      >
        Arrow Function Call
      </button>
    </>
  );
}

export default App;

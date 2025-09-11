import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [state, setState] = useState("red")
  return (
    <>
      <h1>Digital Clock in React JS</h1>
      <select onChange={(e)=>setState(e.target.value)}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="deeppink">Deeppink</option>
      </select>
      <Clock props={state} />
    </>
  );
}

export default App;

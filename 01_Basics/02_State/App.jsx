import { useState } from "react";

function App() {
  const [state, setState] = useState("VC");

  function change(){
    setState("Akshay")
  }

  return (
    <>
      <h1>State in React</h1>
      <h1>{state}</h1>
      <button onClick={change}>Change Name</button>
    </>
  );
}

export default App;

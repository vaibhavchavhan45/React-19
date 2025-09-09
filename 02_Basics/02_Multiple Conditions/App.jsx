import { useState } from "react";

function App() {
  const [state, setState] = useState(0)
  
  return (
    <div>
      <h1>Multiple condition If-else</h1>
      <button onClick={()=>setState(state+1)}>Counter {state}</button>

      {
        state == 0 ? <h1>Count is 0</h1>
        : state == 2 ? <h1>Count is 2</h1>
        : state == 3 ? <h1>Count is 3</h1>
        : state == 1 ? <h1>Count is 1</h1>
        : <h1>Other Condition</h1>
      }
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [revCount, setRevCount] = useState(100)
  return (
    <>
     <button onClick={() => {setCount(count + 1)}}>Forward Counter : {count}</button>
      <br /><br />
     <button onClick={() => {setRevCount(revCount - 1)}}>Reverse Counter : {revCount}</button>
    </>
  );
}

export default App;
